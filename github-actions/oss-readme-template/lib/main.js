"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const readme_1 = require("./readme");
const inputs_1 = require("./inputs");
const child_process = require("child_process");
function run() {
    try {
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_status', { required: true, trimWhitespace: true }));
        const projectStability = (0, inputs_1.validateProjectStability)(core.getInput('project_stability', { required: true, trimWhitespace: true }));
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
        (0, readme_1.generateReadmeFileFromTemplateFile)({
            templateFile: templateFile,
            outputFile: outputFile,
            projectStatus: projectStatus,
            projectStability: projectStability,
        });
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBeUU7QUFDekUsK0NBQStDO0FBRS9DLFNBQVMsR0FBRztJQUNWLElBQUk7UUFDRixNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxpQ0FBd0IsRUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDLENBQzNFLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFaEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDbEQsUUFBUSxFQUFFLEtBQUs7WUFDZixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUM5QyxRQUFRLEVBQUUsS0FBSztZQUNmLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUM7O3VCQUVTLFlBQVk7dUJBQ1osVUFBVTt1QkFDVixhQUFhO3VCQUNiLGdCQUFnQjtDQUN0QyxDQUFDLENBQUM7UUFDQyxJQUFBLDJDQUFrQyxFQUFDO1lBQ2pDLFlBQVksRUFBRSxZQUFZO1lBQzFCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGdCQUFnQixFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYWN0aW9ucy9jb3JlJztcbmltcG9ydCB7Z2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZX0gZnJvbSAnLi9yZWFkbWUnO1xuaW1wb3J0IHt2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHksIHZhbGlkYXRlUHJvamVjdFN0YXR1c30gZnJvbSAnLi9pbnB1dHMnO1xuaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZnVuY3Rpb24gcnVuKCk6IHZvaWQge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2plY3RTdGF0dXMgPSB2YWxpZGF0ZVByb2plY3RTdGF0dXMoXG4gICAgICBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YXR1cycsIHtyZXF1aXJlZDogdHJ1ZSwgdHJpbVdoaXRlc3BhY2U6IHRydWV9KVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFN0YWJpbGl0eSA9IHZhbGlkYXRlUHJvamVjdFN0YWJpbGl0eShcbiAgICAgIGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhYmlsaXR5Jywge3JlcXVpcmVkOiB0cnVlLCB0cmltV2hpdGVzcGFjZTogdHJ1ZX0pXG4gICAgKTtcblxuICAgIGNvcmUuaW5mbyhgQ1dEIGlzOiAke3Byb2Nlc3MuY3dkKCl9YCk7XG4gICAgY29yZS5pbmZvKGBsczogJHtjaGlsZF9wcm9jZXNzLmV4ZWNTeW5jKCdscyAtYWwnKS50b1N0cmluZygpfWApO1xuXG4gICAgY29uc3QgdGVtcGxhdGVGaWxlID0gY29yZS5nZXRJbnB1dCgndGVtcGxhdGVfZmlsZScsIHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHRyaW1XaGl0ZXNwYWNlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3V0cHV0RmlsZSA9IGNvcmUuZ2V0SW5wdXQoJ291dHB1dF9maWxlJywge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgdHJpbVdoaXRlc3BhY2U6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb3JlLmluZm8oYFxuR2VuZXJhdGluZyBNb21lbnRvIE9TUyBSRUFETUVcbiAgICAgICAgIGlucHV0IGZpbGU6ICR7dGVtcGxhdGVGaWxlfVxuICAgICAgICBvdXRwdXQgZmlsZTogJHtvdXRwdXRGaWxlfVxuICAgICBwcm9qZWN0IHN0YXR1czogJHtwcm9qZWN0U3RhdHVzfVxuICBwcm9qZWN0IHN0YWJpbGl0eTogJHtwcm9qZWN0U3RhYmlsaXR5fVxuYCk7XG4gICAgZ2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZSh7XG4gICAgICB0ZW1wbGF0ZUZpbGU6IHRlbXBsYXRlRmlsZSxcbiAgICAgIG91dHB1dEZpbGU6IG91dHB1dEZpbGUsXG4gICAgICBwcm9qZWN0U3RhdHVzOiBwcm9qZWN0U3RhdHVzLFxuICAgICAgcHJvamVjdFN0YWJpbGl0eTogcHJvamVjdFN0YWJpbGl0eSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgY29yZS5zZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxucnVuKCk7XG4iXX0=