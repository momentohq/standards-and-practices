import {generateReadmeStringFromTemplateString} from '../src/readme';
import {
  ProjectStability,
  ProjectStatus,
  ProjectType,
  SdkProject,
} from '../src/inputs';
import * as fs from 'fs';
import * as path from 'path';

describe('readme generator', () => {
  // shows how the runner will run a javascript action with env / stdout protocol
  it('succeeds on happy path for "Other" project type', () => {
    const templateString = `
{{ ossHeader }}

# Foo

foo

## Foo Sub

foo sub

# Bar

STATIC CONTENT

{{ ossFooter }}
  `;
    const output = generateReadmeStringFromTemplateString({
      templateContents: templateString,
      projectInfo: {
        type: ProjectType.OTHER,
      },
      projectStatus: ProjectStatus.INCUBATING,
      projectStability: ProjectStability.BETA,
    });
    expect(output).toEqual(`
<img src="https://docs.momentohq.com/img/momento-logo-forest.svg" alt="logo" width="400"/>

[![project status](https://momentohq.github.io/standards-and-practices/badges/project-status-incubating.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://momentohq.github.io/standards-and-practices/badges/project-stability-beta.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md)


# Foo

foo

## Foo Sub

foo sub

# Bar

STATIC CONTENT

----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com)!
  `);
  });

  it("throws an error if the template doesn't begin with the ossHeader marker", () => {
    const templateStringWithoutOssHeader = `
# FIRST SECTION
  `;
    expect(() => {
      generateReadmeStringFromTemplateString({
        templateContents: templateStringWithoutOssHeader,
        projectInfo: {type: ProjectType.OTHER},
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      });
    })
      .toThrowError(`README template does not conform to Momento OSS requirements:
{"lineNumber":2,"ruleNames":["must-include-oss-headers"],"ruleDescription":"Template must begin with OSS Header and end with OSS Footer","ruleInformation":"https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator","errorDetail":"Expected template file to begin with {{ ossHeader }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}
{"lineNumber":2,"ruleNames":["must-include-oss-headers"],"ruleDescription":"Template must begin with OSS Header and end with OSS Footer","ruleInformation":"https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator","errorDetail":"Expected template file to end with {{ ossFooter }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}`);
  });

  const validSdkTemplateContents = fs
    .readFileSync(
      path.join(__dirname, 'input-templates', 'valid-sdk.template.md')
    )
    .toString();

  const exampleSdkProjectInfo: SdkProject = {
    type: ProjectType.SDK,
    language: 'WaterLoop',
    devDocsSlug: 'waterloop',
    multipleSdksInRepo: false,
    omitHtmlHeadElement: false,
  };

  it('succeeds for an SDK README that includes all of the expected section headers', () => {
    const expectedOutput_validSdkTemplate = fs
      .readFileSync(
        path.join(__dirname, 'expected-output-templates', 'valid-sdk.md')
      )
      .toString();

    expect(
      generateReadmeStringFromTemplateString({
        templateContents: validSdkTemplateContents,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(expectedOutput_validSdkTemplate);
  });

  it('omits HTML head from an SDK README when requested', () => {
    const projectInfo: SdkProject = {
      type: ProjectType.SDK,
      language: 'WaterLoop',
      devDocsSlug: 'waterloop',
      multipleSdksInRepo: false,
      omitHtmlHeadElement: true,
    };

    const expectedOutput_validSdkTemplate = fs
      .readFileSync(
        path.join(
          __dirname,
          'expected-output-templates',
          'valid-sdk-no-html-head.md'
        )
      )
      .toString();

    expect(
      generateReadmeStringFromTemplateString({
        templateContents: validSdkTemplateContents,
        projectInfo: projectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(expectedOutput_validSdkTemplate);
  });

  it('includes expected text for incubating projects', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: validSdkTemplateContents,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      })
    ).toContain(`:warning: Experimental SDK :warning:

This is an incubating project; it may or may not achieve official supported status, and the APIs are subject to
backward incompatible changes.  For more info, click on the incubating badge above.`);
  });

  it('includes expected text for experimental apis', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: validSdkTemplateContents,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.EXPERIMENTAL,
      })
    ).toContain(`:warning: Experimental SDK :warning:

This is an official Momento SDK, but the API is in an early experimental stage and subject to backward-incompatible
changes.  For more info, click on the experimental badge above.`);
  });

  it('fails for an SDK README that is missing an expected section header', () => {
    expect(() =>
      generateReadmeStringFromTemplateString({
        templateContents: `
  {{ ossHeader }}

  ## Packages

  ### FOO

  {{ ossFooter }}
  `,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toThrowError(/After header 'Packages', missing expected header: 'Usage'/);
  });

  it('succeeds for an SDK README that includes all of the expected section headers, but also includes additional headers', () => {
    const templateContents = fs
      .readFileSync(
        path.join(
          __dirname,
          'input-templates',
          'valid-sdk-with-extra-headers.template.md'
        )
      )
      .toString();

    const expectedOutput_validSdkExtraHeaders = fs
      .readFileSync(
        path.join(
          __dirname,
          'expected-output-templates',
          'valid-sdk-with-extra-headers.md'
        )
      )
      .toString();

    expect(
      generateReadmeStringFromTemplateString({
        templateContents: templateContents,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(expectedOutput_validSdkExtraHeaders);
  });

  it('succeeds for an SDK README where there are multiple SDKs in the same repo', () => {
    const templateContents = fs
      .readFileSync(
        path.join(
          __dirname,
          'input-templates',
          'valid-multiple-sdks.template.md'
        )
      )
      .toString();

    const expectedOutput_validMultipleSdks = fs
      .readFileSync(
        path.join(
          __dirname,
          'expected-output-templates',
          'valid-multiple-sdks.md'
        )
      )
      .toString();

    const exampleSdkProjectInfo: SdkProject = {
      type: ProjectType.SDK,
      language: 'JavaScript',
      devDocsSlug: 'nodejs',
      multipleSdksInRepo: true,
      omitHtmlHeadElement: false,
    };

    expect(
      generateReadmeStringFromTemplateString({
        templateContents: templateContents,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(expectedOutput_validMultipleSdks);
  });

  it('fails for an SDK README that has expected section headers in the wrong order', () => {
    expect(() =>
      generateReadmeStringFromTemplateString({
        templateContents: `
  {{ ossHeader }}

  ## Packages

  Packages

  ## Developing

  Developing

  ## Usage

  Usage

  ## Getting Started and Documentation

  Documentation

  ## Examples

  Example:
  {% include "../examples/usage.ts" %}

  {{ ossFooter }}
  `,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toThrowError(
      /After header 'Examples', missing expected header: 'Developing'/
    );
  });

  it("fails for an SDK README that doesn't include at least one 'include'", () => {
    const exampleSdkProjectInfo: SdkProject = {
      type: ProjectType.SDK,
      language: 'JavaScript',
      devDocsSlug: 'nodejs',
      multipleSdksInRepo: false,
      omitHtmlHeadElement: false,
    };

    const templateStringWithoutInclude = `
{{ ossHeader }}

## Packages

Packages

## Usage

Usage

## Getting Started and Documentation

Documentation

## Examples

Examples

## Developing

Developing

{{ ossFooter }}
`;
    expect(() => {
      generateReadmeStringFromTemplateString({
        templateContents: templateStringWithoutInclude,
        projectInfo: exampleSdkProjectInfo,
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      });
    }).toThrowError(
      /No 'include' found: SDK templates must contain at least one {% include %} statement to inject example code/
    );
  });
});
