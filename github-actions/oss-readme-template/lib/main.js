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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FBeUU7QUFFekUsU0FBUyxHQUFHO0lBQ1YsSUFBSTtRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUEsOEJBQXFCLEVBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUN4RSxDQUFDO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLGlDQUF3QixFQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDM0UsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQ2xELFFBQVEsRUFBRSxLQUFLO1lBQ2YsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDOUMsUUFBUSxFQUFFLEtBQUs7WUFDZixjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDOzt1QkFFUyxZQUFZO3VCQUNaLFVBQVU7dUJBQ1YsYUFBYTt1QkFDYixnQkFBZ0I7Q0FDdEMsQ0FBQyxDQUFDO1FBQ0MsSUFBQSwyQ0FBa0MsRUFBQztZQUNqQyxZQUFZLEVBQUUsWUFBWTtZQUMxQixVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsYUFBYTtZQUM1QixnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksS0FBSyxZQUFZLEtBQUs7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQge2dlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGV9IGZyb20gJy4vcmVhZG1lJztcbmltcG9ydCB7dmFsaWRhdGVQcm9qZWN0U3RhYmlsaXR5LCB2YWxpZGF0ZVByb2plY3RTdGF0dXN9IGZyb20gJy4vaW5wdXRzJztcblxuZnVuY3Rpb24gcnVuKCk6IHZvaWQge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2plY3RTdGF0dXMgPSB2YWxpZGF0ZVByb2plY3RTdGF0dXMoXG4gICAgICBjb3JlLmdldElucHV0KCdwcm9qZWN0X3N0YXR1cycsIHtyZXF1aXJlZDogdHJ1ZSwgdHJpbVdoaXRlc3BhY2U6IHRydWV9KVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFN0YWJpbGl0eSA9IHZhbGlkYXRlUHJvamVjdFN0YWJpbGl0eShcbiAgICAgIGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhYmlsaXR5Jywge3JlcXVpcmVkOiB0cnVlLCB0cmltV2hpdGVzcGFjZTogdHJ1ZX0pXG4gICAgKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlRmlsZSA9IGNvcmUuZ2V0SW5wdXQoJ3RlbXBsYXRlX2ZpbGUnLCB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICB0cmltV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG91dHB1dEZpbGUgPSBjb3JlLmdldElucHV0KCdvdXRwdXRfZmlsZScsIHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHRyaW1XaGl0ZXNwYWNlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29yZS5pbmZvKGBcbkdlbmVyYXRpbmcgTW9tZW50byBPU1MgUkVBRE1FXG4gICAgICAgICBpbnB1dCBmaWxlOiAke3RlbXBsYXRlRmlsZX1cbiAgICAgICAgb3V0cHV0IGZpbGU6ICR7b3V0cHV0RmlsZX1cbiAgICAgcHJvamVjdCBzdGF0dXM6ICR7cHJvamVjdFN0YXR1c31cbiAgcHJvamVjdCBzdGFiaWxpdHk6ICR7cHJvamVjdFN0YWJpbGl0eX1cbmApO1xuICAgIGdlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGUoe1xuICAgICAgdGVtcGxhdGVGaWxlOiB0ZW1wbGF0ZUZpbGUsXG4gICAgICBvdXRwdXRGaWxlOiBvdXRwdXRGaWxlLFxuICAgICAgcHJvamVjdFN0YXR1czogcHJvamVjdFN0YXR1cyxcbiAgICAgIHByb2plY3RTdGFiaWxpdHk6IHByb2plY3RTdGFiaWxpdHksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvcmUuc2V0RmFpbGVkKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbnJ1bigpO1xuIl19