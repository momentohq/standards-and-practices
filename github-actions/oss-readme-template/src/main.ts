import * as core from '@actions/core';
import {generateReadmeFileFromTemplateFile} from './readme';
import {
  OtherProject,
  ProjectInfo,
  ProjectType,
  SdkProject,
  validateProjectStability,
  validateProjectStatus,
  validateProjectType,
} from './inputs';

function run(): void {
  try {
    const projectType = validateProjectType(
      core.getInput('project_type', {required: true, trimWhitespace: true})
    );

    const projectInfo = getProjectInfo(projectType);

    const projectStatus = validateProjectStatus(
      core.getInput('project_status', {required: true, trimWhitespace: true})
    );
    const projectStability = validateProjectStability(
      core.getInput('project_stability', {required: true, trimWhitespace: true})
    );

    const templateFile = core.getInput('template_file', {
      required: false,
      trimWhitespace: true,
    });

    const outputFile = core.getInput('output_file', {
      required: false,
      trimWhitespace: true,
    });

    core.info(`
Generating Momento OSS README
         input file: ${templateFile}
        output file: ${outputFile}
       project info: ${JSON.stringify(projectInfo)}
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
    generateReadmeFileFromTemplateFile({
      templateFile: templateFile,
      outputFile: outputFile,
      projectInfo: projectInfo,
      projectStatus: projectStatus,
      projectStability: projectStability,
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

function getProjectInfo(projectType: ProjectType): ProjectInfo {
  if (projectType === ProjectType.SDK) {
    const sdkLanguage = core.getInput('sdk_language', {
      required: true,
      trimWhitespace: true,
    });
    const devDocsSlug = core.getInput('dev_docs_slug', {
      required: true,
      trimWhitespace: true,
    });
    const multipleSdks =
      core
        .getInput('multiple_sdks', {
          required: false,
          trimWhitespace: true,
        })
        .toLowerCase() === 'true';
    const omitHtmlHead =
      core
        .getInput('omit_html_head', {
          required: false,
          trimWhitespace: true,
        })
        .toLowerCase() === 'true';
    const projectInfo: SdkProject = {
      type: ProjectType.SDK,
      language: sdkLanguage,
      devDocsSlug: devDocsSlug,
      multipleSdksInRepo: multipleSdks,
      omitHtmlHeadElement: omitHtmlHead,
    };
    return projectInfo;
  }

  const projectInfo: OtherProject = {
    type: ProjectType.OTHER,
  };
  return projectInfo;
}

run();
