"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const readme_1 = require("./readme");
const inputs_1 = require("./inputs");
function run() {
    try {
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_status', { required: true, trimWhitespace: true }));
        const projectStability = (0, inputs_1.validateProjectStability)(core.getInput('project_stability', { required: true, trimWhitespace: true }));
        core.info(`
Generating Momento OSS README
         input file: README.md.template
        output file: README.md
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
        (0, readme_1.generateReadmeFileFromTemplateFile)({
            templateFile: 'README.md.template',
            outputFile: 'README.md',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBeUU7QUFFekUsU0FBUyxHQUFHO0lBQ1YsSUFBSTtRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUEsOEJBQXFCLEVBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUN4RSxDQUFDO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLGlDQUF3QixFQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDM0UsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7dUJBSVMsYUFBYTt1QkFDYixnQkFBZ0I7Q0FDdEMsQ0FBQyxDQUFDO1FBQ0MsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGdCQUFnQixFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYWN0aW9ucy9jb3JlJztcbmltcG9ydCB7Z2VuZXJhdGVSZWFkbWVGaWxlRnJvbVRlbXBsYXRlRmlsZX0gZnJvbSAnLi9yZWFkbWUnO1xuaW1wb3J0IHt2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHksIHZhbGlkYXRlUHJvamVjdFN0YXR1c30gZnJvbSAnLi9pbnB1dHMnO1xuXG5mdW5jdGlvbiBydW4oKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvamVjdFN0YXR1cyA9IHZhbGlkYXRlUHJvamVjdFN0YXR1cyhcbiAgICAgIGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhdHVzJywge3JlcXVpcmVkOiB0cnVlLCB0cmltV2hpdGVzcGFjZTogdHJ1ZX0pXG4gICAgKTtcbiAgICBjb25zdCBwcm9qZWN0U3RhYmlsaXR5ID0gdmFsaWRhdGVQcm9qZWN0U3RhYmlsaXR5KFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF9zdGFiaWxpdHknLCB7cmVxdWlyZWQ6IHRydWUsIHRyaW1XaGl0ZXNwYWNlOiB0cnVlfSlcbiAgICApO1xuICAgIGNvcmUuaW5mbyhgXG5HZW5lcmF0aW5nIE1vbWVudG8gT1NTIFJFQURNRVxuICAgICAgICAgaW5wdXQgZmlsZTogUkVBRE1FLm1kLnRlbXBsYXRlXG4gICAgICAgIG91dHB1dCBmaWxlOiBSRUFETUUubWRcbiAgICAgcHJvamVjdCBzdGF0dXM6ICR7cHJvamVjdFN0YXR1c31cbiAgcHJvamVjdCBzdGFiaWxpdHk6ICR7cHJvamVjdFN0YWJpbGl0eX1cbmApO1xuICAgIGdlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGUoe1xuICAgICAgdGVtcGxhdGVGaWxlOiAnUkVBRE1FLm1kLnRlbXBsYXRlJyxcbiAgICAgIG91dHB1dEZpbGU6ICdSRUFETUUubWQnLFxuICAgICAgcHJvamVjdFN0YXR1czogcHJvamVjdFN0YXR1cyxcbiAgICAgIHByb2plY3RTdGFiaWxpdHk6IHByb2plY3RTdGFiaWxpdHksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvcmUuc2V0RmFpbGVkKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbnJ1bigpO1xuIl19