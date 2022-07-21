"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const readme_1 = require("./readme");
const inputs_1 = require("./inputs");
function run() {
    try {
        const projectStatus = (0, inputs_1.validateProjectStatus)(core.getInput('project_status', { required: true, trimWhitespace: true }));
        const projectStability = (0, inputs_1.validateProjectStability)(core.getInput('project_stability', { required: true, trimWhitespace: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBeUU7QUFHekUsU0FBUyxHQUFHO0lBQ1YsSUFBSTtRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUEsOEJBQXFCLEVBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUN4RSxDQUFDO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLGlDQUF3QixFQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDM0UsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQ2xELFFBQVEsRUFBRSxLQUFLO1lBQ2YsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDOUMsUUFBUSxFQUFFLEtBQUs7WUFDZixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDOzt1QkFFUyxZQUFZO3VCQUNaLFVBQVU7dUJBQ1YsYUFBYTt1QkFDYixnQkFBZ0I7Q0FDdEMsQ0FBQyxDQUFDO1FBQ0MsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsWUFBWTtZQUMxQixVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsYUFBYTtZQUM1QixnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksS0FBSyxZQUFZLEtBQUs7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQge2dlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGV9IGZyb20gJy4vcmVhZG1lJztcbmltcG9ydCB7dmFsaWRhdGVQcm9qZWN0U3RhYmlsaXR5LCB2YWxpZGF0ZVByb2plY3RTdGF0dXN9IGZyb20gJy4vaW5wdXRzJztcbmltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmZ1bmN0aW9uIHJ1bigpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9qZWN0U3RhdHVzID0gdmFsaWRhdGVQcm9qZWN0U3RhdHVzKFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF9zdGF0dXMnLCB7cmVxdWlyZWQ6IHRydWUsIHRyaW1XaGl0ZXNwYWNlOiB0cnVlfSlcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RTdGFiaWxpdHkgPSB2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHkoXG4gICAgICBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YWJpbGl0eScsIHtyZXF1aXJlZDogdHJ1ZSwgdHJpbVdoaXRlc3BhY2U6IHRydWV9KVxuICAgICk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZUZpbGUgPSBjb3JlLmdldElucHV0KCd0ZW1wbGF0ZV9maWxlJywge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgdHJpbVdoaXRlc3BhY2U6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBvdXRwdXRGaWxlID0gY29yZS5nZXRJbnB1dCgnb3V0cHV0X2ZpbGUnLCB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICB0cmltV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvcmUuaW5mbyhgXG5HZW5lcmF0aW5nIE1vbWVudG8gT1NTIFJFQURNRVxuICAgICAgICAgaW5wdXQgZmlsZTogJHt0ZW1wbGF0ZUZpbGV9XG4gICAgICAgIG91dHB1dCBmaWxlOiAke291dHB1dEZpbGV9XG4gICAgIHByb2plY3Qgc3RhdHVzOiAke3Byb2plY3RTdGF0dXN9XG4gIHByb2plY3Qgc3RhYmlsaXR5OiAke3Byb2plY3RTdGFiaWxpdHl9XG5gKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogdGVtcGxhdGVGaWxlLFxuICAgICAgb3V0cHV0RmlsZTogb3V0cHV0RmlsZSxcbiAgICAgIHByb2plY3RTdGF0dXM6IHByb2plY3RTdGF0dXMsXG4gICAgICBwcm9qZWN0U3RhYmlsaXR5OiBwcm9qZWN0U3RhYmlsaXR5LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBjb3JlLnNldEZhaWxlZChlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5ydW4oKTtcbiJdfQ==