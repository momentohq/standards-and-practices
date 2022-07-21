import * as core from '@actions/core';
import {generateReadmeFileFromTemplateFile} from './readme';
import {validateProjectStability, validateProjectStatus} from './inputs';
import * as child_process from 'child_process';

function run(): void {
  try {
    const projectStatus = validateProjectStatus(
      core.getInput('project_status', {required: true, trimWhitespace: true})
    );
    const projectStability = validateProjectStability(
      core.getInput('project_stability', {required: true, trimWhitespace: true})
    );

    core.info(`CWD is: ${process.cwd()}`);
    core.info(`ls: ${child_process.execSync('ls -al').toString()}`);

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
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
    generateReadmeFileFromTemplateFile({
      templateFile: templateFile,
      outputFile: outputFile,
      projectStatus: projectStatus,
      projectStability: projectStability,
    });
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
