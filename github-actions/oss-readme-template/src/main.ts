import * as core from '@actions/core';
import {generateReadmeFileFromTemplateFile} from './readme';
import {validateProjectStability, validateProjectStatus} from './inputs';

function run(): void {
  try {
    const projectStatus = validateProjectStatus(
      core.getInput('project_status', {required: true, trimWhitespace: true})
    );
    const projectStability = validateProjectStability(
      core.getInput('project_stability', {required: true, trimWhitespace: true})
    );
    core.info(`
Generating Momento OSS README
         input file: README.md.template
        output file: README.md
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
    generateReadmeFileFromTemplateFile({
      templateFile: 'README.md.template',
      outputFile: 'README.md',
      projectStatus: projectStatus,
      projectStability: projectStability,
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
