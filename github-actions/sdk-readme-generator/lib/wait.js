"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
// export async function wait(milliseconds: number): Promise<string> {
function wait(milliseconds) {
    return new Promise(resolve => {
        if (isNaN(milliseconds)) {
            throw new Error('milliseconds not a number');
        }
        setTimeout(() => resolve('done!'), milliseconds);
    });
}
exports.wait = wait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy93YWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFzRTtBQUN0RSxTQUFnQixJQUFJLENBQUMsWUFBb0I7SUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzQixJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVJELG9CQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXQobWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXQobWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGlzTmFOKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlsbGlzZWNvbmRzIG5vdCBhIG51bWJlcicpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgnZG9uZSEnKSwgbWlsbGlzZWNvbmRzKTtcbiAgfSk7XG59XG4iXX0=