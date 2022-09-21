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

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectInfo: ProjectInfo;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
  usageExamplePath: string;
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
    usageExamplePath: options.usageExamplePath,
  });
  fs.writeFileSync(options.outputFile, outputContents);
}

interface ReadmeStringGeneratorOptions {
  templateContents: string;
  projectInfo: ProjectInfo;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
  usageExamplePath: string;
}

interface HeaderTemplateContext {
  githubOrgName: string;
  projectStatus: string;
  projectStability: string;
}

//TODO: we could move these templates to files if it ends up feeling easier to maintain that way.

const OSS_README_HEADER_TEMPLATE = `<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-status-{{ projectStatus }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-stability-{{ projectStability }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md) 
`;

interface ReadmeTemplateContext {
  ossHeader: string;
  ossFooter: string;
  ossUsageExamplePath: string;
}

const OSS_SDK_HEADER_TEMPLATE = `
# Momento {{ sdkLanguage }} Client Library

{{ stabilityNotes }}
{{ sdkLanguage }} client SDK for Momento Serverless Cache: a fast, simple, pay-as-you-go caching solution without
any of the operational overhead required by traditional caching solutions!

`;

interface SdkHeaderTemplateContext {
  sdkLanguage: string;
  stabilityNotes: string;
}

const OSS_SDK_USAGE_EXAMPLE_PATH_TEMPLATE = `Check out usage example [here]({{ usageExamplePath }})`;

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
  let ossUsageExamplePath = '';

  if (options.projectInfo.type === ProjectType.SDK) {
    const sdkProject = options.projectInfo as SdkProject;
    const sdkHeaderTemplate = OSS_SDK_HEADER_TEMPLATE;

    const stabilityNotes = getSdkStabilityNotes(
      options.projectStatus,
      options.projectStability
    );

    const sdkHeaderContext: SdkHeaderTemplateContext = {
      sdkLanguage: sdkProject.language,
      stabilityNotes: stabilityNotes,
    };
    ossHeader += nunjucks.renderString(sdkHeaderTemplate, sdkHeaderContext);

    const sdkUsageExamplePathTemplate = OSS_SDK_USAGE_EXAMPLE_PATH_TEMPLATE;
    const usageExamplePathContext = {
      usageExamplePath: options.usageExamplePath,
    };
    ossUsageExamplePath = nunjucks.renderString(
      sdkUsageExamplePathTemplate,
      usageExamplePathContext
    );
  }

  const ossFooterTemplate = OSS_FOOTER_TEMPLATE;
  const ossFooterContext: OssFooterTemplateContext = {};
  const ossFooter = nunjucks.renderString(ossFooterTemplate, ossFooterContext);

  const templateContext: ReadmeTemplateContext = {
    ossHeader: ossHeader,
    ossFooter: ossFooter,
    ossUsageExamplePath: ossUsageExamplePath,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}

function additionalRulesForProjectType(
  projectType: ProjectType
): Array<markdownlint.Rule> {
  if (projectType === ProjectType.SDK) {
    return [verifySdkSectionHeaders];
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
    case ProjectStability.ALPHA:
      return `
:warning: Alpha SDK :warning:

This is an official Momento SDK, but the API is in an alpha stage and may be subject to backward-incompatible
changes.  For more info, click on the alpha badge above.

`;
    case ProjectStability.BETA:
      return `
:warning: Beta SDK :warning:

This is an official Momento SDK, but the API is in a beta stage.  For more info, click on the beta badge above.

`;
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
