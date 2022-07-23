import * as nunjucks from 'nunjucks';
import * as fs from 'fs';
import * as markdownlint from 'markdownlint';
import {Options as MarkdownLintOptions} from 'markdownlint';
import {ProjectStability, ProjectStatus} from './inputs';
import {mustBeginWithOssHeader} from './markdownlint-rules/rule-must-begin-with-oss-header';

export interface ReadmeFileGeneratorOptions {
  templateFile: string;
  outputFile: string;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

export function generateReadmeFileFromTemplateFile(
  options: ReadmeFileGeneratorOptions
): void {
  const templateContents = fs.readFileSync(options.templateFile).toString();
  const outputContents = generateReadmeStringFromTemplateString({
    templateContents: templateContents,
    projectStatus: options.projectStatus,
    projectStability: options.projectStability,
  });
  fs.writeFileSync(options.outputFile, outputContents);
}

interface ReadmeStringGeneratorOptions {
  templateContents: string;
  projectStatus: ProjectStatus;
  projectStability: ProjectStability;
}

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
}

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
    },
    customRules: [
      // This rule enforces that the template must begin with an {{ ossHeader }} tag so that we can insert a consistent
      // header.
      mustBeginWithOssHeader,
      // TODO: add more rules, e.g. to enforce that h1's exist in a consistent order for SDKs
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
  const ossHeader = nunjucks.renderString(ossHeaderTemplate, headerContext);

  const templateContext: ReadmeTemplateContext = {
    ossHeader: ossHeader,
  };
  return nunjucks.renderString(options.templateContents, templateContext);
}
