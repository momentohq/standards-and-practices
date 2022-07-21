import {generateReadmeStringFromTemplateString} from '../src/readme';
import {ProjectStability, ProjectStatus} from '../src/inputs';

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
`;
    const output = generateReadmeStringFromTemplateString({
      templateContents: templateString,
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
`);
  });

  it("throws an error if the template doesn't begin with the ossHeader marker", () => {
    const templateStringWithoutOssHeader = `
# FIRST SECTION
`;
    expect(() => {
      generateReadmeStringFromTemplateString({
        templateContents: templateStringWithoutOssHeader,
        projectStatus: ProjectStatus.INCUBATING,
        projectStability: ProjectStability.EXPERIMENTAL,
      });
    })
      .toThrowError(`README template does not conform to Momento OSS requirements:
{"lineNumber":2,"ruleNames":["must-begin-with-oss-header"],"ruleDescription":"Template must begin with OSS Header","ruleInformation":"https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator","errorDetail":"Expected template file to begin with {{ ossHeader }}, on a line by itself.","errorContext":null,"errorRange":null,"fixInfo":null}`);
  });
});
