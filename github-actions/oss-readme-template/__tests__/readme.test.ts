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
  it('succeeds on happy path', () => {
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
<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

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
{"lineNumber":2,"ruleNames":["must-include-oss-headers"],"ruleDescription":"Template must begin with OSS Header and end with OSS Footer","ruleInformation":"https://github.com/momentohq/standards-and-practices/tree/main/github-actions/oss-readme-template","errorDetail":"Expected template file to begin with {{ ossHeader }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}
{"lineNumber":2,"ruleNames":["must-include-oss-headers"],"ruleDescription":"Template must begin with OSS Header and end with OSS Footer","ruleInformation":"https://github.com/momentohq/standards-and-practices/tree/main/github-actions/oss-readme-template","errorDetail":"Expected template file to end with {{ ossFooter }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}`);
  });

  const VALID_TEMPLATE_CONTENTS = fs
    .readFileSync(path.join(__dirname, 'workflows', 'valid-sdk-template.md'))
    .toString();

  const EXAMPLE_SDK_PROJECT_INFO: SdkProject = {
    type: ProjectType.SDK,
    language: 'WaterLoop',
    usageExamplePath: path.join(__dirname, 'examples', 'usage.ts'),
  };

  it('succeeds for an SDK README that includes all of the expected section headers', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: VALID_TEMPLATE_CONTENTS,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(`<head>
  <meta name="Momento WaterLoop Client Library Documentation" content="WaterLoop client software development kit for Momento Serverless Cache">
</head>
<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://momentohq.github.io/standards-and-practices/badges/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://momentohq.github.io/standards-and-practices/badges/project-stability-stable.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md) 

# Momento WaterLoop Client Library


WaterLoop client SDK for Momento Serverless Cache: a fast, simple, pay-as-you-go caching solution without
any of the operational overhead required by traditional caching solutions!



## Getting Started :running:

### Requirements

My Awesome Requirements

### Examples

My awesome examples!

### Installation

Run these awesome commands:

\`\`\`bash
foo
bar
baz
\`\`\`

### Usage

Checkout our [examples](./examples/README.md) directory for complete examples of how to use the SDK.

Here is a quickstart you can use in your own project:

\`\`\`typescript
console.log('Hello world!');

\`\`\`

### Error Handling

### Tuning

----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com)!
`);
  });

  it('includes expected text for incubating projects', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: VALID_TEMPLATE_CONTENTS,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
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
        templateContents: VALID_TEMPLATE_CONTENTS,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.EXPERIMENTAL,
      })
    ).toContain(`:warning: Experimental SDK :warning:

This is an official Momento SDK, but the API is in an early experimental stage and subject to backward-incompatible
changes.  For more info, click on the experimental badge above.`);
  });

  it('includes expected text for alpha apis', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: VALID_TEMPLATE_CONTENTS,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.ALPHA,
      })
    ).toContain(`:warning: Alpha SDK :warning:

This is an official Momento SDK, but the API is in an alpha stage and may be subject to backward-incompatible
changes.  For more info, click on the alpha badge above.`);
  });

  it('includes expected text for beta apis', () => {
    expect(
      generateReadmeStringFromTemplateString({
        templateContents: VALID_TEMPLATE_CONTENTS,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.BETA,
      })
    ).toContain(`:warning: Beta SDK :warning:

This is an official Momento SDK, but the API is in a beta stage.  For more info, click on the beta badge above.`);
  });

  it('fails for an SDK README that is missing an expected section header', () => {
    expect(() =>
      generateReadmeStringFromTemplateString({
        templateContents: `
{{ ossHeader }}

## Getting Started :running:

### FOO

{{ ossFooter }}
`,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toThrowError(
      /After header 'Getting Started :running:', missing expected header: 'Requirements'/
    );
  });

  it('succeeds for an SDK README that includes all of the expected section headers, but also includes additional headers', () => {
    const templateContents = fs
      .readFileSync(
        path.join(
          __dirname,
          'workflows',
          'valid-sdk-template-with-extra-headers.md'
        )
      )
      .toString();

    expect(
      generateReadmeStringFromTemplateString({
        templateContents: templateContents,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toEqual(`<head>
  <meta name="Momento WaterLoop Client Library Documentation" content="WaterLoop client software development kit for Momento Serverless Cache">
</head>
<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://momentohq.github.io/standards-and-practices/badges/project-status-official.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://momentohq.github.io/standards-and-practices/badges/project-stability-stable.svg)](https://github.com/momentohq/standards-and-practices/blob/main/docs/momento-on-github.md) 

# Momento WaterLoop Client Library


WaterLoop client SDK for Momento Serverless Cache: a fast, simple, pay-as-you-go caching solution without
any of the operational overhead required by traditional caching solutions!



## Getting Started :running:

### Requirements

My Awesome Requirements

### Examples

My awesome examples!

### Momento Response Types

This is an extra section that is not present in all SDKs!

### Installation

Run these awesome commands:

\`\`\`bash
foo
bar
baz
\`\`\`

### Usage

Checkout our [examples](./examples/README.md) directory for complete examples of how to use the SDK.

Here is a quickstart you can use in your own project:

\`\`\`typescript
console.log('Hello world!');

\`\`\`

### Error Handling

### Tuning

----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com)!
`);
  });

  it('fails for an SDK README that has expected section headers in the wrong order', () => {
    expect(() =>
      generateReadmeStringFromTemplateString({
        templateContents: `
{{ ossHeader }}

## Getting Started :running:

### Requirements

My Awesome Requirements

### Examples

Examples

### Usage

My Awesome Hello World Code

### Installation

My Awesome Examples

### Error Handling

### Tuning

{{ ossFooter }}
`,
        projectInfo: EXAMPLE_SDK_PROJECT_INFO,
        projectStatus: ProjectStatus.OFFICIAL,
        projectStability: ProjectStability.STABLE,
      })
    ).toThrowError(
      /After header 'Installation', missing expected header: 'Usage'/
    );
  });
});
