import * as nunjucks from 'nunjucks';
import * as fs from 'fs';
import * as markdownlint from 'markdownlint';
import {Options as MarkdownLintOptions} from 'markdownlint';
import {
  ProjectInfo,
  ProjectStability,
  ProjectStatus,
  ProjectType,
  SdkProject,
} from './inputs';
import {mustIncludeOssHeaders} from './markdownlint-rules/must-include-oss-headers';
import {verifySdkSectionHeaders} from './markdownlint-rules/verify-sdk-section-headers';
import {verifySdkHasExampleInclude} from './markdownlint-rules/verify-sdk-has-example-include';

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectInfo: ProjectInfo;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

export function generateReadmeFileFromTemplateFile(
  options: ReadmeFileGeneratorOptions
): void {
  const templateContents = fs.readFileSync(options.templateFile).toString();
  const outputContents = generateReadmeStringFromTemplateString({
    templateContents: templateContents,
    projectInfo: options.projectInfo,
    projectStatus: options.projectStatus,
    projectStability: options.projectStability,
  });
  fs.writeFileSync(options.outputFile, outputContents);
}

interface ReadmeStringGeneratorOptions {
  templateContents: string;
  projectInfo: ProjectInfo;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

//TODO: we could move these templates to files if it ends up feeling easier to maintain that way.
interface SdkPreHeaderTemplateContext {
  sdkLanguage: string;
}

const OSS_SDK_README_PREHEADER_TEMPLATE = `<head>
  <meta name="Momento {{ sdkLanguage }} Client Library Documentation" content="{{ sdkLanguage }} client software development kit for Momento Cache">
</head>
`;

interface HeaderTemplateContext {
  githubOrgName: string;
  projectStatus: string;
  projectStability: string;
}

const OSS_README_HEADER_TEMPLATE = `<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-status-{{ projectStatus }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-stability-{{ projectStability }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md)
`;

interface ReadmeTemplateContext {
  ossHeader: string;
  ossFooter: string;
}

const OSS_SDK_HEADER_TEMPLATE = `
# Momento {{ sdkLanguage }} Client Librar{{ singularPluralLibrarySuffix }}
{{ stabilityNotes }}
Momento Cache is a fast, simple, pay-as-you-go caching solution without any of the operational overhead
required by traditional caching solutions.  This repo contains the source code for the Momento {{ sdkLanguage }} client librar{{ singularPluralLibrarySuffix }}.

To get started with Momento you will need a Momento Auth Token. You can get one from the [Momento Console](https://console.gomomento.com).

* Website: [https://www.gomomento.com/](https://www.gomomento.com/)
* Momento Documentation: [https://docs.momentohq.com/](https://docs.momentohq.com/)
* Getting Started: [https://docs.momentohq.com/getting-started](https://docs.momentohq.com/getting-started)
* {{ sdkLanguage }} SDK Documentation: [https://docs.momentohq.com/develop/sdks/{{ sdkDevDocsSlug }}](https://docs.momentohq.com/develop/sdks/{{ sdkDevDocsSlug }})
* Discuss: [Momento Discord](https://discord.gg/3HkAKjUZGq)
`.trimEnd();

interface SdkHeaderTemplateContext {
  sdkLanguage: string;
  sdkDevDocsSlug: string;
  stabilityNotes: string;
  singularPluralLibrarySuffix: string;
}

const OSS_FOOTER_TEMPLATE = `
----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com)!
`.trim();

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OssFooterTemplateContext {}

export function generateReadmeStringFromTemplateString(
  options: ReadmeStringGeneratorOptions
): string {
  // First we validate that the README template conforms to our rules
  const markdownLintOptions: MarkdownLintOptions = {
    config: {
      default: true,
      'no-trailing-spaces': false,
      'first-line-heading': false,
      'line-length': false,
      'no-trailing-punctuation': false,
      'no-inline-html': false,
    },
    customRules: [
      // This rule enforces that the template must begin with an {{ ossHeader }} tag so that we can insert a consistent
      // header.
      mustIncludeOssHeaders,
      ...additionalRulesForProjectType(options.projectInfo.type),
    ],
    strings: {README_template: options.templateContents},
  };
  const lintResults: markdownlint.LintResults =
    markdownlint.sync(markdownLintOptions);
  const lintErrors: Array<markdownlint.LintError> =
    lintResults['README_template'];
  if (lintErrors.length > 0) {
    throw new Error(
      `README template does not conform to Momento OSS requirements:\n${lintErrors
        .map(le => JSON.stringify(le))
        .join('\n')}`
    );
  }

  nunjucks.configure({autoescape: false});

  const ossHeaderTemplate = OSS_README_HEADER_TEMPLATE;
  const headerContext: HeaderTemplateContext = {
    githubOrgName: 'momentohq',
    projectStatus: options.projectStatus.valueOf(),
    projectStability: options.projectStability.valueOf(),
  };
  let ossHeader = nunjucks.renderString(ossHeaderTemplate, headerContext);

  if (options.projectInfo.type === ProjectType.SDK) {
    const sdkProject = options.projectInfo as SdkProject;

    // Enrich ossHeader with head element for SEO. We exclude this from some
    // SDKs because it doesn't render properly on their package manager splash
    // pages.
    if (!sdkProject.omitHtmlHeadElement) {
      const sdkPreheaderContext: SdkPreHeaderTemplateContext = {
        sdkLanguage: sdkProject.language,
      };
      const ossHeaderSdk = nunjucks.renderString(
        OSS_SDK_README_PREHEADER_TEMPLATE,
        sdkPreheaderContext
      );
      ossHeader = ossHeaderSdk + ossHeader;
    }

    // SDK header
    const sdkHeaderTemplate = OSS_SDK_HEADER_TEMPLATE;

    const stabilityNotes = getSdkStabilityNotes(
      options.projectStatus,
      options.projectStability
    );

    const sdkHeaderContext: SdkHeaderTemplateContext = {
      sdkLanguage: sdkProject.language,
      sdkDevDocsSlug: sdkProject.devDocsSlug,
      stabilityNotes: stabilityNotes,
      singularPluralLibrarySuffix: sdkProject.multipleSdksInRepo ? 'ies' : 'y',
    };
    ossHeader += nunjucks.renderString(sdkHeaderTemplate, sdkHeaderContext);
  }

  const ossFooterTemplate = OSS_FOOTER_TEMPLATE;
  const ossFooterContext: OssFooterTemplateContext = {};
  const ossFooter = nunjucks.renderString(ossFooterTemplate, ossFooterContext);

  const templateContext: ReadmeTemplateContext = {
    ossHeader: ossHeader,
    ossFooter: ossFooter,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}

function additionalRulesForProjectType(
  projectType: ProjectType
): Array<markdownlint.Rule> {
  if (projectType === ProjectType.SDK) {
    return [verifySdkSectionHeaders, verifySdkHasExampleInclude];
  } else if (projectType === ProjectType.OTHER) {
    return [];
  } else {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unsupported project type: ${projectType}`);
  }
}

function getSdkStabilityNotes(
  status: ProjectStatus,
  stability: ProjectStability
): string {
  switch (status) {
    case ProjectStatus.OFFICIAL:
      return getOfficialSdkStabilityNotes(stability);
    case ProjectStatus.INCUBATING:
      return getIncubatingSdkStabilityNotes();
    default:
      throw new Error(`Unrecognized project status: ${JSON.stringify(status)}`);
  }
}

function getOfficialSdkStabilityNotes(stability: ProjectStability): string {
  switch (stability) {
    case ProjectStability.EXPERIMENTAL:
      return `
:warning: Experimental SDK :warning:

This is an official Momento SDK, but the API is in an early experimental stage and subject to backward-incompatible
changes.  For more info, click on the experimental badge above.

`;
    // We have decided that we don't want to present any special text to users to draw attention to backward-incompatible
    // changes for alpha or beta SDKs.
    case ProjectStability.ALPHA:
      return '';
    case ProjectStability.BETA:
      return '';
    case ProjectStability.STABLE:
      return '';
    default:
      throw new Error(
        `Unrecognized project stability: ${JSON.stringify(stability)}`
      );
  }
}

function getIncubatingSdkStabilityNotes(): string {
  return `
:warning: Experimental SDK :warning:

This is an incubating project; it may or may not achieve official supported status, and the APIs are subject to
backward incompatible changes.  For more info, click on the incubating badge above.

`;
}
