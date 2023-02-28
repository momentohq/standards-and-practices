require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8309:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayEquals = void 0;
function arrayEquals(a, b) {
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]));
}
exports.arrayEquals = arrayEquals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29sbGVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsV0FBVyxDQUFJLENBQVcsRUFBRSxDQUFXO0lBQ3JELE9BQU8sQ0FDTCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNO1FBQ3JCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFDLENBQUM7QUFDSixDQUFDO0FBUEQsa0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHM8VD4oYTogQXJyYXk8VD4sIGI6IEFycmF5PFQ+KSB7XG4gIHJldHVybiAoXG4gICAgQXJyYXkuaXNBcnJheShhKSAmJlxuICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKVxuICApO1xufVxuIl19

/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enumFromValue = void 0;
function enumFromValue(enumType, value) {
    const enumName = Object.keys(enumType).find(k => enumType[k] === value);
    if (!enumName) {
        throw new Error(`No enum value '${value}' found in enum; values: ${JSON.stringify(Object.values(enumType))}`);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return enumType[enumName];
}
exports.enumFromValue = enumFromValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsYUFBYSxDQUMzQixRQUFXLEVBQ1gsS0FBYTtJQUViLE1BQU0sUUFBUSxHQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFvQixDQUFDLElBQUksQ0FDN0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUMzQixDQUFDO0lBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLE1BQU0sSUFBSSxLQUFLLENBQ2Isa0JBQWtCLEtBQUssNEJBQTRCLElBQUksQ0FBQyxTQUFTLENBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQ3hCLEVBQUUsQ0FDSixDQUFDO0tBQ0g7SUFFRCw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFsQkQsc0NBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVudW1Gcm9tVmFsdWU8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxuICBlbnVtVHlwZTogVCxcbiAgdmFsdWU6IHN0cmluZ1xuKTogVCB7XG4gIGNvbnN0IGVudW1OYW1lID0gKE9iamVjdC5rZXlzKGVudW1UeXBlKSBhcyBBcnJheTxrZXlvZiBUPikuZmluZChcbiAgICBrID0+IGVudW1UeXBlW2tdID09PSB2YWx1ZVxuICApO1xuICBpZiAoIWVudW1OYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYE5vIGVudW0gdmFsdWUgJyR7dmFsdWV9JyBmb3VuZCBpbiBlbnVtOyB2YWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZW51bVR5cGUpXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBlbnVtVHlwZVtlbnVtTmFtZV07XG59XG4iXX0=

/***/ }),

/***/ 6180:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateProjectStability = exports.validateProjectStatus = exports.validateProjectType = exports.ProjectStability = exports.ProjectStatus = exports.ProjectType = void 0;
const enums_1 = __nccwpck_require__(9275);
var ProjectType;
(function (ProjectType) {
    ProjectType["SDK"] = "sdk";
    ProjectType["OTHER"] = "other";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["OFFICIAL"] = "official";
    ProjectStatus["INCUBATING"] = "incubating";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var ProjectStability;
(function (ProjectStability) {
    ProjectStability["EXPERIMENTAL"] = "experimental";
    ProjectStability["ALPHA"] = "alpha";
    ProjectStability["BETA"] = "beta";
    ProjectStability["STABLE"] = "stable";
})(ProjectStability = exports.ProjectStability || (exports.ProjectStability = {}));
function validateProjectType(projectType) {
    return (0, enums_1.enumFromValue)(ProjectType, projectType);
}
exports.validateProjectType = validateProjectType;
function validateProjectStatus(status) {
    return (0, enums_1.enumFromValue)(ProjectStatus, status);
}
exports.validateProjectStatus = validateProjectStatus;
function validateProjectStability(stability) {
    return (0, enums_1.enumFromValue)(ProjectStability, stability);
}
exports.validateProjectStability = validateProjectStability;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2lucHV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFFdEMsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLDBCQUFXLENBQUE7SUFDWCw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWdCRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsMENBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxnQkFLWDtBQUxELFdBQVksZ0JBQWdCO0lBQzFCLGlEQUE2QixDQUFBO0lBQzdCLG1DQUFlLENBQUE7SUFDZixpQ0FBYSxDQUFBO0lBQ2IscUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSzNCO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsV0FBbUI7SUFDckQsT0FBTyxJQUFBLHFCQUFhLEVBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBMkIsQ0FBQztBQUMzRSxDQUFDO0FBRkQsa0RBRUM7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxNQUFjO0lBQ2xELE9BQU8sSUFBQSxxQkFBYSxFQUFDLGFBQWEsRUFBRSxNQUFNLENBQTZCLENBQUM7QUFDMUUsQ0FBQztBQUZELHNEQUVDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQUMsU0FBaUI7SUFDeEQsT0FBTyxJQUFBLHFCQUFhLEVBQ2xCLGdCQUFnQixFQUNoQixTQUFTLENBQ3FCLENBQUM7QUFDbkMsQ0FBQztBQUxELDREQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbnVtRnJvbVZhbHVlfSBmcm9tICcuL2VudW1zJztcblxuZXhwb3J0IGVudW0gUHJvamVjdFR5cGUge1xuICBTREsgPSAnc2RrJyxcbiAgT1RIRVIgPSAnb3RoZXInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RJbmZvIHtcbiAgdHlwZTogUHJvamVjdFR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2RrUHJvamVjdCBleHRlbmRzIFByb2plY3RJbmZvIHtcbiAgdHlwZTogUHJvamVjdFR5cGUuU0RLO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICB1c2FnZUV4YW1wbGVQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3RoZXJQcm9qZWN0IGV4dGVuZHMgUHJvamVjdEluZm8ge1xuICB0eXBlOiBQcm9qZWN0VHlwZS5PVEhFUjtcbn1cblxuZXhwb3J0IGVudW0gUHJvamVjdFN0YXR1cyB7XG4gIE9GRklDSUFMID0gJ29mZmljaWFsJyxcbiAgSU5DVUJBVElORyA9ICdpbmN1YmF0aW5nJyxcbn1cblxuZXhwb3J0IGVudW0gUHJvamVjdFN0YWJpbGl0eSB7XG4gIEVYUEVSSU1FTlRBTCA9ICdleHBlcmltZW50YWwnLFxuICBBTFBIQSA9ICdhbHBoYScsXG4gIEJFVEEgPSAnYmV0YScsXG4gIFNUQUJMRSA9ICdzdGFibGUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9qZWN0VHlwZShwcm9qZWN0VHlwZTogc3RyaW5nKTogUHJvamVjdFR5cGUge1xuICByZXR1cm4gZW51bUZyb21WYWx1ZShQcm9qZWN0VHlwZSwgcHJvamVjdFR5cGUpIGFzIHVua25vd24gYXMgUHJvamVjdFR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb2plY3RTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBQcm9qZWN0U3RhdHVzIHtcbiAgcmV0dXJuIGVudW1Gcm9tVmFsdWUoUHJvamVjdFN0YXR1cywgc3RhdHVzKSBhcyB1bmtub3duIGFzIFByb2plY3RTdGF0dXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHkoc3RhYmlsaXR5OiBzdHJpbmcpOiBQcm9qZWN0U3RhYmlsaXR5IHtcbiAgcmV0dXJuIGVudW1Gcm9tVmFsdWUoXG4gICAgUHJvamVjdFN0YWJpbGl0eSxcbiAgICBzdGFiaWxpdHlcbiAgKSBhcyB1bmtub3duIGFzIFByb2plY3RTdGFiaWxpdHk7XG59XG4iXX0=

/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mustIncludeOssHeaders = void 0;
const collections_1 = __nccwpck_require__(8309);
const ossHeaderTag = 'ossHeader';
const ossFooterTag = 'ossFooter';
/**
 * This rule enforces that a Momento OSS README template must begin with our OSS header, via
 * a variable tag: {{ ossHeader }}, and end with or OSS footer, {{ ossFooter }}
 */
exports.mustIncludeOssHeaders = {
    names: ['must-include-oss-headers'],
    description: 'Template must begin with OSS Header and end with OSS Footer',
    tags: ['momento-oss'],
    information: new URL('https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'),
    function: (params, onError) => {
        const firstThreeTokens = params.tokens.slice(0, 3);
        verifyTokens(firstThreeTokens, ossHeaderTag, onError, 'Expected template file to begin with', firstThreeTokens[0].lineNumber);
        const lastThreeTokens = params.tokens.slice(-3);
        verifyTokens(lastThreeTokens, ossFooterTag, onError, 'Expected template file to end with', lastThreeTokens[0].lineNumber);
    },
};
function verifyTokens(tokens, expectedTag, onError, errorMessagePrefix, lineNumber) {
    if (tokens.length !== 3) {
        onError({
            lineNumber: lineNumber,
            detail: 'Template is possibly empty?',
        });
        return;
    }
    const tokenTypes = tokens.map(t => t.type);
    if (!(0, collections_1.arrayEquals)(['paragraph_open', 'inline', 'paragraph_close'], tokenTypes)) {
        console.error(`Found token types: ${JSON.stringify(tokenTypes)}`);
        onError({
            lineNumber: tokens[0].lineNumber,
            detail: `${errorMessagePrefix} {{ ${expectedTag} }}, on a line by itself.`,
        });
        return;
    }
    const inlineToken = tokens[1];
    if (inlineToken.content !== `{{ ${expectedTag} }}`) {
        console.error(`Template line: '${inlineToken.content}'`);
        onError({
            lineNumber: tokens[0].lineNumber,
            detail: `${errorMessagePrefix} {{ ${expectedTag} }}, on a line by itself.`,
        });
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1pbmNsdWRlLW9zcy1oZWFkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcmtkb3dubGludC1ydWxlcy9tdXN0LWluY2x1ZGUtb3NzLWhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0RBQTJDO0FBRzNDLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUNqQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakM7OztHQUdHO0FBQ1UsUUFBQSxxQkFBcUIsR0FBc0I7SUFDdEQsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsV0FBVyxFQUFFLDZEQUE2RDtJQUMxRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDckIsV0FBVyxFQUFFLElBQUksR0FBRyxDQUNsQiwwRkFBMEYsQ0FDM0Y7SUFDRCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDNUIsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsWUFBWSxDQUNWLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osT0FBTyxFQUNQLHNDQUFzQyxFQUN0QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQy9CLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELFlBQVksQ0FDVixlQUFlLEVBQ2YsWUFBWSxFQUNaLE9BQU8sRUFDUCxvQ0FBb0MsRUFDcEMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDO0FBRUYsU0FBUyxZQUFZLENBQ25CLE1BQThCLEVBQzlCLFdBQW1CLEVBQ25CLE9BQW9CLEVBQ3BCLGtCQUEwQixFQUMxQixVQUFrQjtJQUVsQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQztZQUNOLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLE1BQU0sRUFBRSw2QkFBNkI7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTztLQUNSO0lBQ0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxJQUNFLENBQUMsSUFBQSx5QkFBVyxFQUFDLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQ3pFO1FBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDO1lBQ04sVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ2hDLE1BQU0sRUFBRSxHQUFHLGtCQUFrQixPQUFPLFdBQVcsMkJBQTJCO1NBQzNFLENBQUMsQ0FBQztRQUNILE9BQU87S0FDUjtJQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssTUFBTSxXQUFXLEtBQUssRUFBRTtRQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUM7WUFDTixVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDaEMsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLE9BQU8sV0FBVywyQkFBMkI7U0FDM0UsQ0FBQyxDQUFDO1FBQ0gsT0FBTztLQUNSO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1hcmtkb3dubGludCBmcm9tICdtYXJrZG93bmxpbnQnO1xuaW1wb3J0IHthcnJheUVxdWFsc30gZnJvbSAnLi4vY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtNYXJrZG93bkl0VG9rZW4sIFJ1bGVPbkVycm9yfSBmcm9tICdtYXJrZG93bmxpbnQnO1xuXG5jb25zdCBvc3NIZWFkZXJUYWcgPSAnb3NzSGVhZGVyJztcbmNvbnN0IG9zc0Zvb3RlclRhZyA9ICdvc3NGb290ZXInO1xuXG4vKipcbiAqIFRoaXMgcnVsZSBlbmZvcmNlcyB0aGF0IGEgTW9tZW50byBPU1MgUkVBRE1FIHRlbXBsYXRlIG11c3QgYmVnaW4gd2l0aCBvdXIgT1NTIGhlYWRlciwgdmlhXG4gKiBhIHZhcmlhYmxlIHRhZzoge3sgb3NzSGVhZGVyIH19LCBhbmQgZW5kIHdpdGggb3IgT1NTIGZvb3Rlciwge3sgb3NzRm9vdGVyIH19XG4gKi9cbmV4cG9ydCBjb25zdCBtdXN0SW5jbHVkZU9zc0hlYWRlcnM6IG1hcmtkb3dubGludC5SdWxlID0ge1xuICBuYW1lczogWydtdXN0LWluY2x1ZGUtb3NzLWhlYWRlcnMnXSxcbiAgZGVzY3JpcHRpb246ICdUZW1wbGF0ZSBtdXN0IGJlZ2luIHdpdGggT1NTIEhlYWRlciBhbmQgZW5kIHdpdGggT1NTIEZvb3RlcicsXG4gIHRhZ3M6IFsnbW9tZW50by1vc3MnXSxcbiAgaW5mb3JtYXRpb246IG5ldyBVUkwoXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnRvaHEvc3RhbmRhcmRzLWFuZC1wcmFjdGljZXMvZ2l0aHViLWFjdGlvbnMvb3NzLXJlYWRtZS1nZW5lcmF0b3InXG4gICksXG4gIGZ1bmN0aW9uOiAocGFyYW1zLCBvbkVycm9yKSA9PiB7XG4gICAgY29uc3QgZmlyc3RUaHJlZVRva2VucyA9IHBhcmFtcy50b2tlbnMuc2xpY2UoMCwgMyk7XG4gICAgdmVyaWZ5VG9rZW5zKFxuICAgICAgZmlyc3RUaHJlZVRva2VucyxcbiAgICAgIG9zc0hlYWRlclRhZyxcbiAgICAgIG9uRXJyb3IsXG4gICAgICAnRXhwZWN0ZWQgdGVtcGxhdGUgZmlsZSB0byBiZWdpbiB3aXRoJyxcbiAgICAgIGZpcnN0VGhyZWVUb2tlbnNbMF0ubGluZU51bWJlclxuICAgICk7XG5cbiAgICBjb25zdCBsYXN0VGhyZWVUb2tlbnMgPSBwYXJhbXMudG9rZW5zLnNsaWNlKC0zKTtcbiAgICB2ZXJpZnlUb2tlbnMoXG4gICAgICBsYXN0VGhyZWVUb2tlbnMsXG4gICAgICBvc3NGb290ZXJUYWcsXG4gICAgICBvbkVycm9yLFxuICAgICAgJ0V4cGVjdGVkIHRlbXBsYXRlIGZpbGUgdG8gZW5kIHdpdGgnLFxuICAgICAgbGFzdFRocmVlVG9rZW5zWzBdLmxpbmVOdW1iZXJcbiAgICApO1xuICB9LFxufTtcblxuZnVuY3Rpb24gdmVyaWZ5VG9rZW5zKFxuICB0b2tlbnM6IEFycmF5PE1hcmtkb3duSXRUb2tlbj4sXG4gIGV4cGVjdGVkVGFnOiBzdHJpbmcsXG4gIG9uRXJyb3I6IFJ1bGVPbkVycm9yLFxuICBlcnJvck1lc3NhZ2VQcmVmaXg6IHN0cmluZyxcbiAgbGluZU51bWJlcjogbnVtYmVyXG4pOiB2b2lkIHtcbiAgaWYgKHRva2Vucy5sZW5ndGggIT09IDMpIHtcbiAgICBvbkVycm9yKHtcbiAgICAgIGxpbmVOdW1iZXI6IGxpbmVOdW1iZXIsXG4gICAgICBkZXRhaWw6ICdUZW1wbGF0ZSBpcyBwb3NzaWJseSBlbXB0eT8nLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0b2tlblR5cGVzID0gdG9rZW5zLm1hcCh0ID0+IHQudHlwZSk7XG5cbiAgaWYgKFxuICAgICFhcnJheUVxdWFscyhbJ3BhcmFncmFwaF9vcGVuJywgJ2lubGluZScsICdwYXJhZ3JhcGhfY2xvc2UnXSwgdG9rZW5UeXBlcylcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihgRm91bmQgdG9rZW4gdHlwZXM6ICR7SlNPTi5zdHJpbmdpZnkodG9rZW5UeXBlcyl9YCk7XG4gICAgb25FcnJvcih7XG4gICAgICBsaW5lTnVtYmVyOiB0b2tlbnNbMF0ubGluZU51bWJlcixcbiAgICAgIGRldGFpbDogYCR7ZXJyb3JNZXNzYWdlUHJlZml4fSB7eyAke2V4cGVjdGVkVGFnfSB9fSwgb24gYSBsaW5lIGJ5IGl0c2VsZi5gLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGlubGluZVRva2VuID0gdG9rZW5zWzFdO1xuICBpZiAoaW5saW5lVG9rZW4uY29udGVudCAhPT0gYHt7ICR7ZXhwZWN0ZWRUYWd9IH19YCkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFRlbXBsYXRlIGxpbmU6ICcke2lubGluZVRva2VuLmNvbnRlbnR9J2ApO1xuICAgIG9uRXJyb3Ioe1xuICAgICAgbGluZU51bWJlcjogdG9rZW5zWzBdLmxpbmVOdW1iZXIsXG4gICAgICBkZXRhaWw6IGAke2Vycm9yTWVzc2FnZVByZWZpeH0ge3sgJHtleHBlY3RlZFRhZ30gfX0sIG9uIGEgbGluZSBieSBpdHNlbGYuYCxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 7447:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.verifySdkSectionHeaders = void 0;
exports.verifySdkSectionHeaders = {
    names: ['expected-sdk-section-headers'],
    description: 'SDK must have required section headers',
    tags: ['momento-oss'],
    information: new URL('https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'),
    function: (params, onError) => {
        const headers = [];
        let insideHeaderOpenTag = false;
        let headerOpenLineNumber = 1;
        let currentContent = undefined;
        for (const token of params.tokens) {
            if (!insideHeaderOpenTag) {
                if (token.type === 'heading_open') {
                    insideHeaderOpenTag = true;
                    headerOpenLineNumber = token.lineNumber;
                    continue;
                }
            }
            else {
                if (token.type === 'heading_close') {
                    if (currentContent !== undefined) {
                        headers.push({
                            lineNumber: headerOpenLineNumber,
                            tag: token.tag,
                            content: currentContent,
                        });
                        currentContent = undefined;
                        insideHeaderOpenTag = false;
                    }
                }
                else if (token.type === 'inline') {
                    currentContent = token.content;
                }
            }
        }
        if (headers.length === 0) {
            onError({
                lineNumber: 1,
                detail: 'No section headers found!',
            });
        }
        const expectedRemainingHeaders = [
            {
                tag: 'h2',
                content: 'Getting Started :running:',
            },
            {
                tag: 'h3',
                content: 'Requirements',
            },
            {
                tag: 'h3',
                content: 'Examples',
            },
            {
                tag: 'h3',
                content: 'Installation',
            },
            {
                tag: 'h3',
                content: 'Usage',
            },
            {
                tag: 'h3',
                content: 'Error Handling',
            },
            {
                tag: 'h3',
                content: 'Tuning',
            },
        ];
        let lastSuccessfulMatch = '';
        for (const expectedHeader of expectedRemainingHeaders) {
            let nextActualHeader = headers.shift();
            console.info(`Checking for expected header: '${expectedHeader.content}'`);
            console.info(`Next actual header: '${JSON.stringify(nextActualHeader)}'`);
            while (nextActualHeader !== undefined) {
                if (expectedHeader.content !== nextActualHeader.content) {
                    console.info(`Found extra, non-required header: '${nextActualHeader.content}'.  Ignoring.`);
                    nextActualHeader = headers.shift();
                    continue;
                }
                if (expectedHeader.tag !== nextActualHeader.tag) {
                    onError({
                        lineNumber: nextActualHeader.lineNumber,
                        detail: `Expected to find next header with tag '${expectedHeader.tag}', found '${nextActualHeader.tag}'`,
                    });
                }
                // this is the success case, the header matched.
                lastSuccessfulMatch = nextActualHeader.content;
                break;
            }
            if (nextActualHeader === undefined) {
                const message = lastSuccessfulMatch === ''
                    ? 'Missing expected header'
                    : `After header '${lastSuccessfulMatch}', missing expected header`;
                onError({
                    lineNumber: headerOpenLineNumber,
                    detail: `${message}: '${expectedHeader.content}'`,
                });
            }
        }
        return;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LXNkay1zZWN0aW9uLWhlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFya2Rvd25saW50LXJ1bGVzL3ZlcmlmeS1zZGstc2VjdGlvbi1oZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVdhLFFBQUEsdUJBQXVCLEdBQXNCO0lBQ3hELEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO0lBQ3ZDLFdBQVcsRUFBRSx3Q0FBd0M7SUFDckQsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3JCLFdBQVcsRUFBRSxJQUFJLEdBQUcsQ0FDbEIsMEZBQTBGLENBQzNGO0lBQ0QsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzVCLE1BQU0sT0FBTyxHQUFnQyxFQUFFLENBQUM7UUFDaEQsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxjQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUNuRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO29CQUNqQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7b0JBQzNCLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQ3hDLFNBQVM7aUJBQ1Y7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssZUFBZSxFQUFFO29CQUNsQyxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7d0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQ1gsVUFBVSxFQUFFLG9CQUFvQjs0QkFDaEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHOzRCQUNkLE9BQU8sRUFBRSxjQUFjO3lCQUN4QixDQUFDLENBQUM7d0JBQ0gsY0FBYyxHQUFHLFNBQVMsQ0FBQzt3QkFDM0IsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO3FCQUM3QjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNsQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDaEM7YUFDRjtTQUNGO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPLENBQUM7Z0JBQ04sVUFBVSxFQUFFLENBQUM7Z0JBQ2IsTUFBTSxFQUFFLDJCQUEyQjthQUNwQyxDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sd0JBQXdCLEdBQWtCO1lBQzlDO2dCQUNFLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSwyQkFBMkI7YUFDckM7WUFDRDtnQkFDRSxHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsY0FBYzthQUN4QjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsT0FBTyxFQUFFLGNBQWM7YUFDeEI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsT0FBTzthQUNqQjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsUUFBUTthQUNsQjtTQUNGLENBQUM7UUFFRixJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sY0FBYyxJQUFJLHdCQUF3QixFQUFFO1lBQ3JELElBQUksZ0JBQWdCLEdBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQTBCLENBQUM7WUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsY0FBYyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDMUUsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRSxPQUFPLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxjQUFjLENBQUMsT0FBTyxLQUFLLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDdkQsT0FBTyxDQUFDLElBQUksQ0FDVixzQ0FBc0MsZ0JBQWdCLENBQUMsT0FBTyxlQUFlLENBQzlFLENBQUM7b0JBQ0YsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBMEIsQ0FBQztvQkFDM0QsU0FBUztpQkFDVjtnQkFFRCxJQUFJLGNBQWMsQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxFQUFFO29CQUMvQyxPQUFPLENBQUM7d0JBQ04sVUFBVSxFQUFFLGdCQUFnQixDQUFDLFVBQVU7d0JBQ3ZDLE1BQU0sRUFBRSwwQ0FBMEMsY0FBYyxDQUFDLEdBQUcsYUFBYSxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUc7cUJBQ3pHLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxnREFBZ0Q7Z0JBQ2hELG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztnQkFDL0MsTUFBTTthQUNQO1lBRUQsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLE1BQU0sT0FBTyxHQUNYLG1CQUFtQixLQUFLLEVBQUU7b0JBQ3hCLENBQUMsQ0FBQyx5QkFBeUI7b0JBQzNCLENBQUMsQ0FBQyxpQkFBaUIsbUJBQW1CLDRCQUE0QixDQUFDO2dCQUN2RSxPQUFPLENBQUM7b0JBQ04sVUFBVSxFQUFFLG9CQUFvQjtvQkFDaEMsTUFBTSxFQUFFLEdBQUcsT0FBTyxNQUFNLGNBQWMsQ0FBQyxPQUFPLEdBQUc7aUJBQ2xELENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxPQUFPO0lBQ1QsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtYXJrZG93bmxpbnQgZnJvbSAnbWFya2Rvd25saW50JztcblxuaW50ZXJmYWNlIEhlYWRlciB7XG4gIHRhZzogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIZWFkZXJXaXRoTGluZU51bWJlciBleHRlbmRzIEhlYWRlciB7XG4gIGxpbmVOdW1iZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHZlcmlmeVNka1NlY3Rpb25IZWFkZXJzOiBtYXJrZG93bmxpbnQuUnVsZSA9IHtcbiAgbmFtZXM6IFsnZXhwZWN0ZWQtc2RrLXNlY3Rpb24taGVhZGVycyddLFxuICBkZXNjcmlwdGlvbjogJ1NESyBtdXN0IGhhdmUgcmVxdWlyZWQgc2VjdGlvbiBoZWFkZXJzJyxcbiAgdGFnczogWydtb21lbnRvLW9zcyddLFxuICBpbmZvcm1hdGlvbjogbmV3IFVSTChcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL21vbWVudG9ocS9zdGFuZGFyZHMtYW5kLXByYWN0aWNlcy9naXRodWItYWN0aW9ucy9vc3MtcmVhZG1lLWdlbmVyYXRvcidcbiAgKSxcbiAgZnVuY3Rpb246IChwYXJhbXMsIG9uRXJyb3IpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzOiBBcnJheTxIZWFkZXJXaXRoTGluZU51bWJlcj4gPSBbXTtcbiAgICBsZXQgaW5zaWRlSGVhZGVyT3BlblRhZyA9IGZhbHNlO1xuICAgIGxldCBoZWFkZXJPcGVuTGluZU51bWJlciA9IDE7XG4gICAgbGV0IGN1cnJlbnRDb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiBwYXJhbXMudG9rZW5zKSB7XG4gICAgICBpZiAoIWluc2lkZUhlYWRlck9wZW5UYWcpIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdoZWFkaW5nX29wZW4nKSB7XG4gICAgICAgICAgaW5zaWRlSGVhZGVyT3BlblRhZyA9IHRydWU7XG4gICAgICAgICAgaGVhZGVyT3BlbkxpbmVOdW1iZXIgPSB0b2tlbi5saW5lTnVtYmVyO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2hlYWRpbmdfY2xvc2UnKSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaCh7XG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IGhlYWRlck9wZW5MaW5lTnVtYmVyLFxuICAgICAgICAgICAgICB0YWc6IHRva2VuLnRhZyxcbiAgICAgICAgICAgICAgY29udGVudDogY3VycmVudENvbnRlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaW5zaWRlSGVhZGVyT3BlblRhZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGN1cnJlbnRDb250ZW50ID0gdG9rZW4uY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgb25FcnJvcih7XG4gICAgICAgIGxpbmVOdW1iZXI6IDEsXG4gICAgICAgIGRldGFpbDogJ05vIHNlY3Rpb24gaGVhZGVycyBmb3VuZCEnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwZWN0ZWRSZW1haW5pbmdIZWFkZXJzOiBBcnJheTxIZWFkZXI+ID0gW1xuICAgICAge1xuICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgIGNvbnRlbnQ6ICdHZXR0aW5nIFN0YXJ0ZWQgOnJ1bm5pbmc6JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRhZzogJ2gzJyxcbiAgICAgICAgY29udGVudDogJ1JlcXVpcmVtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0YWc6ICdoMycsXG4gICAgICAgIGNvbnRlbnQ6ICdFeGFtcGxlcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0YWc6ICdoMycsXG4gICAgICAgIGNvbnRlbnQ6ICdJbnN0YWxsYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICBjb250ZW50OiAnVXNhZ2UnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICBjb250ZW50OiAnRXJyb3IgSGFuZGxpbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICBjb250ZW50OiAnVHVuaW5nJyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCBsYXN0U3VjY2Vzc2Z1bE1hdGNoID0gJyc7XG4gICAgZm9yIChjb25zdCBleHBlY3RlZEhlYWRlciBvZiBleHBlY3RlZFJlbWFpbmluZ0hlYWRlcnMpIHtcbiAgICAgIGxldCBuZXh0QWN0dWFsSGVhZGVyOiBIZWFkZXJXaXRoTGluZU51bWJlciA9XG4gICAgICAgIGhlYWRlcnMuc2hpZnQoKSBhcyBIZWFkZXJXaXRoTGluZU51bWJlcjtcbiAgICAgIGNvbnNvbGUuaW5mbyhgQ2hlY2tpbmcgZm9yIGV4cGVjdGVkIGhlYWRlcjogJyR7ZXhwZWN0ZWRIZWFkZXIuY29udGVudH0nYCk7XG4gICAgICBjb25zb2xlLmluZm8oYE5leHQgYWN0dWFsIGhlYWRlcjogJyR7SlNPTi5zdHJpbmdpZnkobmV4dEFjdHVhbEhlYWRlcil9J2ApO1xuICAgICAgd2hpbGUgKG5leHRBY3R1YWxIZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZXhwZWN0ZWRIZWFkZXIuY29udGVudCAhPT0gbmV4dEFjdHVhbEhlYWRlci5jb250ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZvdW5kIGV4dHJhLCBub24tcmVxdWlyZWQgaGVhZGVyOiAnJHtuZXh0QWN0dWFsSGVhZGVyLmNvbnRlbnR9Jy4gIElnbm9yaW5nLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG5leHRBY3R1YWxIZWFkZXIgPSBoZWFkZXJzLnNoaWZ0KCkgYXMgSGVhZGVyV2l0aExpbmVOdW1iZXI7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwZWN0ZWRIZWFkZXIudGFnICE9PSBuZXh0QWN0dWFsSGVhZGVyLnRhZykge1xuICAgICAgICAgIG9uRXJyb3Ioe1xuICAgICAgICAgICAgbGluZU51bWJlcjogbmV4dEFjdHVhbEhlYWRlci5saW5lTnVtYmVyLFxuICAgICAgICAgICAgZGV0YWlsOiBgRXhwZWN0ZWQgdG8gZmluZCBuZXh0IGhlYWRlciB3aXRoIHRhZyAnJHtleHBlY3RlZEhlYWRlci50YWd9JywgZm91bmQgJyR7bmV4dEFjdHVhbEhlYWRlci50YWd9J2AsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIGlzIHRoZSBzdWNjZXNzIGNhc2UsIHRoZSBoZWFkZXIgbWF0Y2hlZC5cbiAgICAgICAgbGFzdFN1Y2Nlc3NmdWxNYXRjaCA9IG5leHRBY3R1YWxIZWFkZXIuY29udGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0QWN0dWFsSGVhZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgbGFzdFN1Y2Nlc3NmdWxNYXRjaCA9PT0gJydcbiAgICAgICAgICAgID8gJ01pc3NpbmcgZXhwZWN0ZWQgaGVhZGVyJ1xuICAgICAgICAgICAgOiBgQWZ0ZXIgaGVhZGVyICcke2xhc3RTdWNjZXNzZnVsTWF0Y2h9JywgbWlzc2luZyBleHBlY3RlZCBoZWFkZXJgO1xuICAgICAgICBvbkVycm9yKHtcbiAgICAgICAgICBsaW5lTnVtYmVyOiBoZWFkZXJPcGVuTGluZU51bWJlcixcbiAgICAgICAgICBkZXRhaWw6IGAke21lc3NhZ2V9OiAnJHtleHBlY3RlZEhlYWRlci5jb250ZW50fSdgLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0sXG59O1xuIl19

/***/ }),

/***/ 1435:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateReadmeStringFromTemplateString = exports.generateReadmeFileFromTemplateFile = void 0;
const nunjucks = __nccwpck_require__(7006);
const fs = __nccwpck_require__(5747);
const markdownlint = __nccwpck_require__(3611);
const inputs_1 = __nccwpck_require__(6180);
const must_include_oss_headers_1 = __nccwpck_require__(6696);
const verify_sdk_section_headers_1 = __nccwpck_require__(7447);
function generateReadmeFileFromTemplateFile(options) {
    const templateContents = fs.readFileSync(options.templateFile).toString();
    const outputContents = generateReadmeStringFromTemplateString({
        templateContents: templateContents,
        projectInfo: options.projectInfo,
        projectStatus: options.projectStatus,
        projectStability: options.projectStability,
    });
    fs.writeFileSync(options.outputFile, outputContents);
}
exports.generateReadmeFileFromTemplateFile = generateReadmeFileFromTemplateFile;
const OSS_SDK_README_PREHEADER_TEMPLATE = `<head>
  <meta name="Momento {{ sdkLanguage }} Client Library Documentation" content="{{ sdkLanguage }} client software development kit for Momento Serverless Cache">
</head>
`;
const OSS_README_HEADER_TEMPLATE = `<img src="https://docs.momentohq.com/img/logo.svg" alt="logo" width="400"/>

[![project status](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-status-{{ projectStatus }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md)
[![project stability](https://{{ githubOrgName }}.github.io/standards-and-practices/badges/project-stability-{{ projectStability }}.svg)](https://github.com/{{ githubOrgName }}/standards-and-practices/blob/main/docs/momento-on-github.md) 
`;
const OSS_SDK_HEADER_TEMPLATE = `
# Momento {{ sdkLanguage }} Client Library

{{ stabilityNotes }}
{{ sdkLanguage }} client SDK for Momento Serverless Cache: a fast, simple, pay-as-you-go caching solution without
any of the operational overhead required by traditional caching solutions!

`;
const OSS_FOOTER_TEMPLATE = `
----------------------------------------------------------------------------------------
For more info, visit our website at [https://gomomento.com](https://gomomento.com)!
`.trim();
function generateReadmeStringFromTemplateString(options) {
    // First we validate that the README template conforms to our rules
    const markdownLintOptions = {
        config: {
            default: true,
            'no-trailing-spaces': false,
            'first-line-heading': false,
            'line-length': false,
            'no-trailing-punctuation': false,
        },
        customRules: [
            // This rule enforces that the template must begin with an {{ ossHeader }} tag so that we can insert a consistent
            // header.
            must_include_oss_headers_1.mustIncludeOssHeaders,
            ...additionalRulesForProjectType(options.projectInfo.type),
        ],
        strings: { README_template: options.templateContents },
    };
    const lintResults = markdownlint.sync(markdownLintOptions);
    const lintErrors = lintResults['README_template'];
    if (lintErrors.length > 0) {
        throw new Error(`README template does not conform to Momento OSS requirements:\n${lintErrors
            .map(le => JSON.stringify(le))
            .join('\n')}`);
    }
    nunjucks.configure({ autoescape: false });
    const ossHeaderTemplate = OSS_README_HEADER_TEMPLATE;
    const headerContext = {
        githubOrgName: 'momentohq',
        projectStatus: options.projectStatus.valueOf(),
        projectStability: options.projectStability.valueOf(),
    };
    let ossHeader = nunjucks.renderString(ossHeaderTemplate, headerContext);
    let usageExampleCode = '';
    if (options.projectInfo.type === inputs_1.ProjectType.SDK) {
        const sdkProject = options.projectInfo;
        // Enrich ossHeader with head element
        // We exclude python since PyPI does not render the head
        // element properly inside a markdown file.
        if (sdkProject.language.toLowerCase() !== 'python') {
            const sdkPreheaderContext = {
                sdkLanguage: sdkProject.language,
            };
            const ossHeaderSdk = nunjucks.renderString(OSS_SDK_README_PREHEADER_TEMPLATE, sdkPreheaderContext);
            ossHeader = ossHeaderSdk + ossHeader;
        }
        // SDK header
        const sdkHeaderTemplate = OSS_SDK_HEADER_TEMPLATE;
        const stabilityNotes = getSdkStabilityNotes(options.projectStatus, options.projectStability);
        const sdkHeaderContext = {
            sdkLanguage: sdkProject.language,
            stabilityNotes: stabilityNotes,
        };
        ossHeader += nunjucks.renderString(sdkHeaderTemplate, sdkHeaderContext);
        const usageExamplePath = sdkProject.usageExamplePath;
        usageExampleCode = fs.readFileSync(usageExamplePath).toString();
    }
    const ossFooterTemplate = OSS_FOOTER_TEMPLATE;
    const ossFooterContext = {};
    const ossFooter = nunjucks.renderString(ossFooterTemplate, ossFooterContext);
    const templateContext = {
        ossHeader: ossHeader,
        ossFooter: ossFooter,
        usageExampleCode: usageExampleCode,
    };
    return nunjucks.renderString(options.templateContents, templateContext);
}
exports.generateReadmeStringFromTemplateString = generateReadmeStringFromTemplateString;
function additionalRulesForProjectType(projectType) {
    if (projectType === inputs_1.ProjectType.SDK) {
        return [verify_sdk_section_headers_1.verifySdkSectionHeaders];
    }
    else if (projectType === inputs_1.ProjectType.OTHER) {
        return [];
    }
    else {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unsupported project type: ${projectType}`);
    }
}
function getSdkStabilityNotes(status, stability) {
    switch (status) {
        case inputs_1.ProjectStatus.OFFICIAL:
            return getOfficialSdkStabilityNotes(stability);
        case inputs_1.ProjectStatus.INCUBATING:
            return getIncubatingSdkStabilityNotes();
        default:
            throw new Error(`Unrecognized project status: ${JSON.stringify(status)}`);
    }
}
function getOfficialSdkStabilityNotes(stability) {
    switch (stability) {
        case inputs_1.ProjectStability.EXPERIMENTAL:
            return `
:warning: Experimental SDK :warning:

This is an official Momento SDK, but the API is in an early experimental stage and subject to backward-incompatible
changes.  For more info, click on the experimental badge above.

`;
        // We have decided that we don't want to present any special text to users to draw attention to backward-incompatible
        // changes for alpha or beta SDKs.
        case inputs_1.ProjectStability.ALPHA:
            return '';
        case inputs_1.ProjectStability.BETA:
            return '';
        case inputs_1.ProjectStability.STABLE:
            return '';
        default:
            throw new Error(`Unrecognized project stability: ${JSON.stringify(stability)}`);
    }
}
function getIncubatingSdkStabilityNotes() {
    return `
:warning: Experimental SDK :warning:

This is an incubating project; it may or may not achieve official supported status, and the APIs are subject to
backward incompatible changes.  For more info, click on the incubating badge above.

`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlYWRtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMseUJBQXlCO0FBQ3pCLDZDQUE2QztBQUU3QyxxQ0FNa0I7QUFDbEIsNEZBQW9GO0FBQ3BGLGdHQUF3RjtBQVV4RixTQUFnQixrQ0FBa0MsQ0FDaEQsT0FBbUM7SUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRSxNQUFNLGNBQWMsR0FBRyxzQ0FBc0MsQ0FBQztRQUM1RCxnQkFBZ0IsRUFBRSxnQkFBZ0I7UUFDbEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ2hDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTtRQUNwQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCO0tBQzNDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBWEQsZ0ZBV0M7QUFjRCxNQUFNLGlDQUFpQyxHQUFHOzs7Q0FHekMsQ0FBQztBQVFGLE1BQU0sMEJBQTBCLEdBQUc7Ozs7Q0FJbEMsQ0FBQztBQVFGLE1BQU0sdUJBQXVCLEdBQUc7Ozs7Ozs7Q0FPL0IsQ0FBQztBQU9GLE1BQU0sbUJBQW1CLEdBQUc7OztDQUczQixDQUFDLElBQUksRUFBRSxDQUFDO0FBS1QsU0FBZ0Isc0NBQXNDLENBQ3BELE9BQXFDO0lBRXJDLG1FQUFtRTtJQUNuRSxNQUFNLG1CQUFtQixHQUF3QjtRQUMvQyxNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsSUFBSTtZQUNiLG9CQUFvQixFQUFFLEtBQUs7WUFDM0Isb0JBQW9CLEVBQUUsS0FBSztZQUMzQixhQUFhLEVBQUUsS0FBSztZQUNwQix5QkFBeUIsRUFBRSxLQUFLO1NBQ2pDO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsaUhBQWlIO1lBQ2pILFVBQVU7WUFDVixnREFBcUI7WUFDckIsR0FBRyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUMzRDtRQUNELE9BQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUM7S0FDckQsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUNmLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN6QyxNQUFNLFVBQVUsR0FDZCxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2Isa0VBQWtFLFVBQVU7YUFDekUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDaEIsQ0FBQztLQUNIO0lBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRXhDLE1BQU0saUJBQWlCLEdBQUcsMEJBQTBCLENBQUM7SUFDckQsTUFBTSxhQUFhLEdBQTBCO1FBQzNDLGFBQWEsRUFBRSxXQUFXO1FBQzFCLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtRQUM5QyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0tBQ3JELENBQUM7SUFDRixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hFLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRTFCLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssb0JBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDaEQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQXlCLENBQUM7UUFFckQscUNBQXFDO1FBQ3JDLHdEQUF3RDtRQUN4RCwyQ0FBMkM7UUFDM0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNsRCxNQUFNLG1CQUFtQixHQUFnQztnQkFDdkQsV0FBVyxFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ2pDLENBQUM7WUFDRixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUN4QyxpQ0FBaUMsRUFDakMsbUJBQW1CLENBQ3BCLENBQUM7WUFDRixTQUFTLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUN0QztRQUVELGFBQWE7UUFDYixNQUFNLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDO1FBRWxELE1BQU0sY0FBYyxHQUFHLG9CQUFvQixDQUN6QyxPQUFPLENBQUMsYUFBYSxFQUNyQixPQUFPLENBQUMsZ0JBQWdCLENBQ3pCLENBQUM7UUFFRixNQUFNLGdCQUFnQixHQUE2QjtZQUNqRCxXQUFXLEVBQUUsVUFBVSxDQUFDLFFBQVE7WUFDaEMsY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQztRQUNGLFNBQVMsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFeEUsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pFO0lBRUQsTUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztJQUM5QyxNQUFNLGdCQUFnQixHQUE2QixFQUFFLENBQUM7SUFDdEQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sZUFBZSxHQUEwQjtRQUM3QyxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsU0FBUztRQUNwQixnQkFBZ0IsRUFBRSxnQkFBZ0I7S0FDbkMsQ0FBQztJQUNGLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQXhGRCx3RkF3RkM7QUFFRCxTQUFTLDZCQUE2QixDQUNwQyxXQUF3QjtJQUV4QixJQUFJLFdBQVcsS0FBSyxvQkFBVyxDQUFDLEdBQUcsRUFBRTtRQUNuQyxPQUFPLENBQUMsb0RBQXVCLENBQUMsQ0FBQztLQUNsQztTQUFNLElBQUksV0FBVyxLQUFLLG9CQUFXLENBQUMsS0FBSyxFQUFFO1FBQzVDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7U0FBTTtRQUNMLDRFQUE0RTtRQUM1RSxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0FBQ0gsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQzNCLE1BQXFCLEVBQ3JCLFNBQTJCO0lBRTNCLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxzQkFBYSxDQUFDLFFBQVE7WUFDekIsT0FBTyw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxLQUFLLHNCQUFhLENBQUMsVUFBVTtZQUMzQixPQUFPLDhCQUE4QixFQUFFLENBQUM7UUFDMUM7WUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM3RTtBQUNILENBQUM7QUFFRCxTQUFTLDRCQUE0QixDQUFDLFNBQTJCO0lBQy9ELFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUsseUJBQWdCLENBQUMsWUFBWTtZQUNoQyxPQUFPOzs7Ozs7Q0FNWixDQUFDO1FBQ0UscUhBQXFIO1FBQ3JILGtDQUFrQztRQUNsQyxLQUFLLHlCQUFnQixDQUFDLEtBQUs7WUFDekIsT0FBTyxFQUFFLENBQUM7UUFDWixLQUFLLHlCQUFnQixDQUFDLElBQUk7WUFDeEIsT0FBTyxFQUFFLENBQUM7UUFDWixLQUFLLHlCQUFnQixDQUFDLE1BQU07WUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDWjtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUNBQW1DLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDL0QsQ0FBQztLQUNMO0FBQ0gsQ0FBQztBQUVELFNBQVMsOEJBQThCO0lBQ3JDLE9BQU87Ozs7OztDQU1SLENBQUM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbnVuanVja3MgZnJvbSAnbnVuanVja3MnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgbWFya2Rvd25saW50IGZyb20gJ21hcmtkb3dubGludCc7XG5pbXBvcnQge09wdGlvbnMgYXMgTWFya2Rvd25MaW50T3B0aW9uc30gZnJvbSAnbWFya2Rvd25saW50JztcbmltcG9ydCB7XG4gIFByb2plY3RJbmZvLFxuICBQcm9qZWN0U3RhYmlsaXR5LFxuICBQcm9qZWN0U3RhdHVzLFxuICBQcm9qZWN0VHlwZSxcbiAgU2RrUHJvamVjdCxcbn0gZnJvbSAnLi9pbnB1dHMnO1xuaW1wb3J0IHttdXN0SW5jbHVkZU9zc0hlYWRlcnN9IGZyb20gJy4vbWFya2Rvd25saW50LXJ1bGVzL211c3QtaW5jbHVkZS1vc3MtaGVhZGVycyc7XG5pbXBvcnQge3ZlcmlmeVNka1NlY3Rpb25IZWFkZXJzfSBmcm9tICcuL21hcmtkb3dubGludC1ydWxlcy92ZXJpZnktc2RrLXNlY3Rpb24taGVhZGVycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZG1lRmlsZUdlbmVyYXRvck9wdGlvbnMge1xuICB0ZW1wbGF0ZUZpbGU6IHN0cmluZztcbiAgb3V0cHV0RmlsZTogc3RyaW5nO1xuICBwcm9qZWN0SW5mbzogUHJvamVjdEluZm87XG4gIHByb2plY3RTdGF0dXM6IFByb2plY3RTdGF0dXM7XG4gIHByb2plY3RTdGFiaWxpdHk6IFByb2plY3RTdGFiaWxpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKFxuICBvcHRpb25zOiBSZWFkbWVGaWxlR2VuZXJhdG9yT3B0aW9uc1xuKTogdm9pZCB7XG4gIGNvbnN0IHRlbXBsYXRlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMob3B0aW9ucy50ZW1wbGF0ZUZpbGUpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG91dHB1dENvbnRlbnRzID0gZ2VuZXJhdGVSZWFkbWVTdHJpbmdGcm9tVGVtcGxhdGVTdHJpbmcoe1xuICAgIHRlbXBsYXRlQ29udGVudHM6IHRlbXBsYXRlQ29udGVudHMsXG4gICAgcHJvamVjdEluZm86IG9wdGlvbnMucHJvamVjdEluZm8sXG4gICAgcHJvamVjdFN0YXR1czogb3B0aW9ucy5wcm9qZWN0U3RhdHVzLFxuICAgIHByb2plY3RTdGFiaWxpdHk6IG9wdGlvbnMucHJvamVjdFN0YWJpbGl0eSxcbiAgfSk7XG4gIGZzLndyaXRlRmlsZVN5bmMob3B0aW9ucy5vdXRwdXRGaWxlLCBvdXRwdXRDb250ZW50cyk7XG59XG5cbmludGVyZmFjZSBSZWFkbWVTdHJpbmdHZW5lcmF0b3JPcHRpb25zIHtcbiAgdGVtcGxhdGVDb250ZW50czogc3RyaW5nO1xuICBwcm9qZWN0SW5mbzogUHJvamVjdEluZm87XG4gIHByb2plY3RTdGF0dXM6IFByb2plY3RTdGF0dXM7XG4gIHByb2plY3RTdGFiaWxpdHk6IFByb2plY3RTdGFiaWxpdHk7XG59XG5cbi8vVE9ETzogd2UgY291bGQgbW92ZSB0aGVzZSB0ZW1wbGF0ZXMgdG8gZmlsZXMgaWYgaXQgZW5kcyB1cCBmZWVsaW5nIGVhc2llciB0byBtYWludGFpbiB0aGF0IHdheS5cbmludGVyZmFjZSBTZGtQcmVIZWFkZXJUZW1wbGF0ZUNvbnRleHQge1xuICBzZGtMYW5ndWFnZTogc3RyaW5nO1xufVxuXG5jb25zdCBPU1NfU0RLX1JFQURNRV9QUkVIRUFERVJfVEVNUExBVEUgPSBgPGhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJNb21lbnRvIHt7IHNka0xhbmd1YWdlIH19IENsaWVudCBMaWJyYXJ5IERvY3VtZW50YXRpb25cIiBjb250ZW50PVwie3sgc2RrTGFuZ3VhZ2UgfX0gY2xpZW50IHNvZnR3YXJlIGRldmVsb3BtZW50IGtpdCBmb3IgTW9tZW50byBTZXJ2ZXJsZXNzIENhY2hlXCI+XG48L2hlYWQ+XG5gO1xuXG5pbnRlcmZhY2UgSGVhZGVyVGVtcGxhdGVDb250ZXh0IHtcbiAgZ2l0aHViT3JnTmFtZTogc3RyaW5nO1xuICBwcm9qZWN0U3RhdHVzOiBzdHJpbmc7XG4gIHByb2plY3RTdGFiaWxpdHk6IHN0cmluZztcbn1cblxuY29uc3QgT1NTX1JFQURNRV9IRUFERVJfVEVNUExBVEUgPSBgPGltZyBzcmM9XCJodHRwczovL2RvY3MubW9tZW50b2hxLmNvbS9pbWcvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9XCI0MDBcIi8+XG5cblshW3Byb2plY3Qgc3RhdHVzXShodHRwczovL3t7IGdpdGh1Yk9yZ05hbWUgfX0uZ2l0aHViLmlvL3N0YW5kYXJkcy1hbmQtcHJhY3RpY2VzL2JhZGdlcy9wcm9qZWN0LXN0YXR1cy17eyBwcm9qZWN0U3RhdHVzIH19LnN2ZyldKGh0dHBzOi8vZ2l0aHViLmNvbS97eyBnaXRodWJPcmdOYW1lIH19L3N0YW5kYXJkcy1hbmQtcHJhY3RpY2VzL2Jsb2IvbWFpbi9kb2NzL21vbWVudG8tb24tZ2l0aHViLm1kKVxuWyFbcHJvamVjdCBzdGFiaWxpdHldKGh0dHBzOi8ve3sgZ2l0aHViT3JnTmFtZSB9fS5naXRodWIuaW8vc3RhbmRhcmRzLWFuZC1wcmFjdGljZXMvYmFkZ2VzL3Byb2plY3Qtc3RhYmlsaXR5LXt7IHByb2plY3RTdGFiaWxpdHkgfX0uc3ZnKV0oaHR0cHM6Ly9naXRodWIuY29tL3t7IGdpdGh1Yk9yZ05hbWUgfX0vc3RhbmRhcmRzLWFuZC1wcmFjdGljZXMvYmxvYi9tYWluL2RvY3MvbW9tZW50by1vbi1naXRodWIubWQpIFxuYDtcblxuaW50ZXJmYWNlIFJlYWRtZVRlbXBsYXRlQ29udGV4dCB7XG4gIG9zc0hlYWRlcjogc3RyaW5nO1xuICBvc3NGb290ZXI6IHN0cmluZztcbiAgdXNhZ2VFeGFtcGxlQ29kZTogc3RyaW5nO1xufVxuXG5jb25zdCBPU1NfU0RLX0hFQURFUl9URU1QTEFURSA9IGBcbiMgTW9tZW50byB7eyBzZGtMYW5ndWFnZSB9fSBDbGllbnQgTGlicmFyeVxuXG57eyBzdGFiaWxpdHlOb3RlcyB9fVxue3sgc2RrTGFuZ3VhZ2UgfX0gY2xpZW50IFNESyBmb3IgTW9tZW50byBTZXJ2ZXJsZXNzIENhY2hlOiBhIGZhc3QsIHNpbXBsZSwgcGF5LWFzLXlvdS1nbyBjYWNoaW5nIHNvbHV0aW9uIHdpdGhvdXRcbmFueSBvZiB0aGUgb3BlcmF0aW9uYWwgb3ZlcmhlYWQgcmVxdWlyZWQgYnkgdHJhZGl0aW9uYWwgY2FjaGluZyBzb2x1dGlvbnMhXG5cbmA7XG5cbmludGVyZmFjZSBTZGtIZWFkZXJUZW1wbGF0ZUNvbnRleHQge1xuICBzZGtMYW5ndWFnZTogc3RyaW5nO1xuICBzdGFiaWxpdHlOb3Rlczogc3RyaW5nO1xufVxuXG5jb25zdCBPU1NfRk9PVEVSX1RFTVBMQVRFID0gYFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuRm9yIG1vcmUgaW5mbywgdmlzaXQgb3VyIHdlYnNpdGUgYXQgW2h0dHBzOi8vZ29tb21lbnRvLmNvbV0oaHR0cHM6Ly9nb21vbWVudG8uY29tKSFcbmAudHJpbSgpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZVxuaW50ZXJmYWNlIE9zc0Zvb3RlclRlbXBsYXRlQ29udGV4dCB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZWFkbWVTdHJpbmdGcm9tVGVtcGxhdGVTdHJpbmcoXG4gIG9wdGlvbnM6IFJlYWRtZVN0cmluZ0dlbmVyYXRvck9wdGlvbnNcbik6IHN0cmluZyB7XG4gIC8vIEZpcnN0IHdlIHZhbGlkYXRlIHRoYXQgdGhlIFJFQURNRSB0ZW1wbGF0ZSBjb25mb3JtcyB0byBvdXIgcnVsZXNcbiAgY29uc3QgbWFya2Rvd25MaW50T3B0aW9uczogTWFya2Rvd25MaW50T3B0aW9ucyA9IHtcbiAgICBjb25maWc6IHtcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAnbm8tdHJhaWxpbmctc3BhY2VzJzogZmFsc2UsXG4gICAgICAnZmlyc3QtbGluZS1oZWFkaW5nJzogZmFsc2UsXG4gICAgICAnbGluZS1sZW5ndGgnOiBmYWxzZSxcbiAgICAgICduby10cmFpbGluZy1wdW5jdHVhdGlvbic6IGZhbHNlLFxuICAgIH0sXG4gICAgY3VzdG9tUnVsZXM6IFtcbiAgICAgIC8vIFRoaXMgcnVsZSBlbmZvcmNlcyB0aGF0IHRoZSB0ZW1wbGF0ZSBtdXN0IGJlZ2luIHdpdGggYW4ge3sgb3NzSGVhZGVyIH19IHRhZyBzbyB0aGF0IHdlIGNhbiBpbnNlcnQgYSBjb25zaXN0ZW50XG4gICAgICAvLyBoZWFkZXIuXG4gICAgICBtdXN0SW5jbHVkZU9zc0hlYWRlcnMsXG4gICAgICAuLi5hZGRpdGlvbmFsUnVsZXNGb3JQcm9qZWN0VHlwZShvcHRpb25zLnByb2plY3RJbmZvLnR5cGUpLFxuICAgIF0sXG4gICAgc3RyaW5nczoge1JFQURNRV90ZW1wbGF0ZTogb3B0aW9ucy50ZW1wbGF0ZUNvbnRlbnRzfSxcbiAgfTtcbiAgY29uc3QgbGludFJlc3VsdHM6IG1hcmtkb3dubGludC5MaW50UmVzdWx0cyA9XG4gICAgbWFya2Rvd25saW50LnN5bmMobWFya2Rvd25MaW50T3B0aW9ucyk7XG4gIGNvbnN0IGxpbnRFcnJvcnM6IEFycmF5PG1hcmtkb3dubGludC5MaW50RXJyb3I+ID1cbiAgICBsaW50UmVzdWx0c1snUkVBRE1FX3RlbXBsYXRlJ107XG4gIGlmIChsaW50RXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgUkVBRE1FIHRlbXBsYXRlIGRvZXMgbm90IGNvbmZvcm0gdG8gTW9tZW50byBPU1MgcmVxdWlyZW1lbnRzOlxcbiR7bGludEVycm9yc1xuICAgICAgICAubWFwKGxlID0+IEpTT04uc3RyaW5naWZ5KGxlKSlcbiAgICAgICAgLmpvaW4oJ1xcbicpfWBcbiAgICApO1xuICB9XG5cbiAgbnVuanVja3MuY29uZmlndXJlKHthdXRvZXNjYXBlOiBmYWxzZX0pO1xuXG4gIGNvbnN0IG9zc0hlYWRlclRlbXBsYXRlID0gT1NTX1JFQURNRV9IRUFERVJfVEVNUExBVEU7XG4gIGNvbnN0IGhlYWRlckNvbnRleHQ6IEhlYWRlclRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICBnaXRodWJPcmdOYW1lOiAnbW9tZW50b2hxJyxcbiAgICBwcm9qZWN0U3RhdHVzOiBvcHRpb25zLnByb2plY3RTdGF0dXMudmFsdWVPZigpLFxuICAgIHByb2plY3RTdGFiaWxpdHk6IG9wdGlvbnMucHJvamVjdFN0YWJpbGl0eS52YWx1ZU9mKCksXG4gIH07XG4gIGxldCBvc3NIZWFkZXIgPSBudW5qdWNrcy5yZW5kZXJTdHJpbmcob3NzSGVhZGVyVGVtcGxhdGUsIGhlYWRlckNvbnRleHQpO1xuICBsZXQgdXNhZ2VFeGFtcGxlQ29kZSA9ICcnO1xuXG4gIGlmIChvcHRpb25zLnByb2plY3RJbmZvLnR5cGUgPT09IFByb2plY3RUeXBlLlNESykge1xuICAgIGNvbnN0IHNka1Byb2plY3QgPSBvcHRpb25zLnByb2plY3RJbmZvIGFzIFNka1Byb2plY3Q7XG5cbiAgICAvLyBFbnJpY2ggb3NzSGVhZGVyIHdpdGggaGVhZCBlbGVtZW50XG4gICAgLy8gV2UgZXhjbHVkZSBweXRob24gc2luY2UgUHlQSSBkb2VzIG5vdCByZW5kZXIgdGhlIGhlYWRcbiAgICAvLyBlbGVtZW50IHByb3Blcmx5IGluc2lkZSBhIG1hcmtkb3duIGZpbGUuXG4gICAgaWYgKHNka1Byb2plY3QubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSAhPT0gJ3B5dGhvbicpIHtcbiAgICAgIGNvbnN0IHNka1ByZWhlYWRlckNvbnRleHQ6IFNka1ByZUhlYWRlclRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICAgICAgc2RrTGFuZ3VhZ2U6IHNka1Byb2plY3QubGFuZ3VhZ2UsXG4gICAgICB9O1xuICAgICAgY29uc3Qgb3NzSGVhZGVyU2RrID0gbnVuanVja3MucmVuZGVyU3RyaW5nKFxuICAgICAgICBPU1NfU0RLX1JFQURNRV9QUkVIRUFERVJfVEVNUExBVEUsXG4gICAgICAgIHNka1ByZWhlYWRlckNvbnRleHRcbiAgICAgICk7XG4gICAgICBvc3NIZWFkZXIgPSBvc3NIZWFkZXJTZGsgKyBvc3NIZWFkZXI7XG4gICAgfVxuXG4gICAgLy8gU0RLIGhlYWRlclxuICAgIGNvbnN0IHNka0hlYWRlclRlbXBsYXRlID0gT1NTX1NES19IRUFERVJfVEVNUExBVEU7XG5cbiAgICBjb25zdCBzdGFiaWxpdHlOb3RlcyA9IGdldFNka1N0YWJpbGl0eU5vdGVzKFxuICAgICAgb3B0aW9ucy5wcm9qZWN0U3RhdHVzLFxuICAgICAgb3B0aW9ucy5wcm9qZWN0U3RhYmlsaXR5XG4gICAgKTtcblxuICAgIGNvbnN0IHNka0hlYWRlckNvbnRleHQ6IFNka0hlYWRlclRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICAgIHNka0xhbmd1YWdlOiBzZGtQcm9qZWN0Lmxhbmd1YWdlLFxuICAgICAgc3RhYmlsaXR5Tm90ZXM6IHN0YWJpbGl0eU5vdGVzLFxuICAgIH07XG4gICAgb3NzSGVhZGVyICs9IG51bmp1Y2tzLnJlbmRlclN0cmluZyhzZGtIZWFkZXJUZW1wbGF0ZSwgc2RrSGVhZGVyQ29udGV4dCk7XG5cbiAgICBjb25zdCB1c2FnZUV4YW1wbGVQYXRoID0gc2RrUHJvamVjdC51c2FnZUV4YW1wbGVQYXRoO1xuICAgIHVzYWdlRXhhbXBsZUNvZGUgPSBmcy5yZWFkRmlsZVN5bmModXNhZ2VFeGFtcGxlUGF0aCkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGNvbnN0IG9zc0Zvb3RlclRlbXBsYXRlID0gT1NTX0ZPT1RFUl9URU1QTEFURTtcbiAgY29uc3Qgb3NzRm9vdGVyQ29udGV4dDogT3NzRm9vdGVyVGVtcGxhdGVDb250ZXh0ID0ge307XG4gIGNvbnN0IG9zc0Zvb3RlciA9IG51bmp1Y2tzLnJlbmRlclN0cmluZyhvc3NGb290ZXJUZW1wbGF0ZSwgb3NzRm9vdGVyQ29udGV4dCk7XG5cbiAgY29uc3QgdGVtcGxhdGVDb250ZXh0OiBSZWFkbWVUZW1wbGF0ZUNvbnRleHQgPSB7XG4gICAgb3NzSGVhZGVyOiBvc3NIZWFkZXIsXG4gICAgb3NzRm9vdGVyOiBvc3NGb290ZXIsXG4gICAgdXNhZ2VFeGFtcGxlQ29kZTogdXNhZ2VFeGFtcGxlQ29kZSxcbiAgfTtcbiAgcmV0dXJuIG51bmp1Y2tzLnJlbmRlclN0cmluZyhvcHRpb25zLnRlbXBsYXRlQ29udGVudHMsIHRlbXBsYXRlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZGl0aW9uYWxSdWxlc0ZvclByb2plY3RUeXBlKFxuICBwcm9qZWN0VHlwZTogUHJvamVjdFR5cGVcbik6IEFycmF5PG1hcmtkb3dubGludC5SdWxlPiB7XG4gIGlmIChwcm9qZWN0VHlwZSA9PT0gUHJvamVjdFR5cGUuU0RLKSB7XG4gICAgcmV0dXJuIFt2ZXJpZnlTZGtTZWN0aW9uSGVhZGVyc107XG4gIH0gZWxzZSBpZiAocHJvamVjdFR5cGUgPT09IFByb2plY3RUeXBlLk9USEVSKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb2plY3QgdHlwZTogJHtwcm9qZWN0VHlwZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZGtTdGFiaWxpdHlOb3RlcyhcbiAgc3RhdHVzOiBQcm9qZWN0U3RhdHVzLFxuICBzdGFiaWxpdHk6IFByb2plY3RTdGFiaWxpdHlcbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSBQcm9qZWN0U3RhdHVzLk9GRklDSUFMOlxuICAgICAgcmV0dXJuIGdldE9mZmljaWFsU2RrU3RhYmlsaXR5Tm90ZXMoc3RhYmlsaXR5KTtcbiAgICBjYXNlIFByb2plY3RTdGF0dXMuSU5DVUJBVElORzpcbiAgICAgIHJldHVybiBnZXRJbmN1YmF0aW5nU2RrU3RhYmlsaXR5Tm90ZXMoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgcHJvamVjdCBzdGF0dXM6ICR7SlNPTi5zdHJpbmdpZnkoc3RhdHVzKX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPZmZpY2lhbFNka1N0YWJpbGl0eU5vdGVzKHN0YWJpbGl0eTogUHJvamVjdFN0YWJpbGl0eSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoc3RhYmlsaXR5KSB7XG4gICAgY2FzZSBQcm9qZWN0U3RhYmlsaXR5LkVYUEVSSU1FTlRBTDpcbiAgICAgIHJldHVybiBgXG46d2FybmluZzogRXhwZXJpbWVudGFsIFNESyA6d2FybmluZzpcblxuVGhpcyBpcyBhbiBvZmZpY2lhbCBNb21lbnRvIFNESywgYnV0IHRoZSBBUEkgaXMgaW4gYW4gZWFybHkgZXhwZXJpbWVudGFsIHN0YWdlIGFuZCBzdWJqZWN0IHRvIGJhY2t3YXJkLWluY29tcGF0aWJsZVxuY2hhbmdlcy4gIEZvciBtb3JlIGluZm8sIGNsaWNrIG9uIHRoZSBleHBlcmltZW50YWwgYmFkZ2UgYWJvdmUuXG5cbmA7XG4gICAgLy8gV2UgaGF2ZSBkZWNpZGVkIHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBwcmVzZW50IGFueSBzcGVjaWFsIHRleHQgdG8gdXNlcnMgdG8gZHJhdyBhdHRlbnRpb24gdG8gYmFja3dhcmQtaW5jb21wYXRpYmxlXG4gICAgLy8gY2hhbmdlcyBmb3IgYWxwaGEgb3IgYmV0YSBTREtzLlxuICAgIGNhc2UgUHJvamVjdFN0YWJpbGl0eS5BTFBIQTpcbiAgICAgIHJldHVybiAnJztcbiAgICBjYXNlIFByb2plY3RTdGFiaWxpdHkuQkVUQTpcbiAgICAgIHJldHVybiAnJztcbiAgICBjYXNlIFByb2plY3RTdGFiaWxpdHkuU1RBQkxFOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbnJlY29nbml6ZWQgcHJvamVjdCBzdGFiaWxpdHk6ICR7SlNPTi5zdHJpbmdpZnkoc3RhYmlsaXR5KX1gXG4gICAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluY3ViYXRpbmdTZGtTdGFiaWxpdHlOb3RlcygpOiBzdHJpbmcge1xuICByZXR1cm4gYFxuOndhcm5pbmc6IEV4cGVyaW1lbnRhbCBTREsgOndhcm5pbmc6XG5cblRoaXMgaXMgYW4gaW5jdWJhdGluZyBwcm9qZWN0OyBpdCBtYXkgb3IgbWF5IG5vdCBhY2hpZXZlIG9mZmljaWFsIHN1cHBvcnRlZCBzdGF0dXMsIGFuZCB0aGUgQVBJcyBhcmUgc3ViamVjdCB0b1xuYmFja3dhcmQgaW5jb21wYXRpYmxlIGNoYW5nZXMuICBGb3IgbW9yZSBpbmZvLCBjbGljayBvbiB0aGUgaW5jdWJhdGluZyBiYWRnZSBhYm92ZS5cblxuYDtcbn1cbiJdfQ==

/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
const oidc_utils_1 = __nccwpck_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(6255);
const auth_1 = __nccwpck_require__(5526);
const core_1 = __nccwpck_require__(2186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(5622));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2087);
const fs_1 = __nccwpck_require__(5747);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8605));
const https = __importStar(__nccwpck_require__(7211));
const pm = __importStar(__nccwpck_require__(9835));
const tunnel = __importStar(__nccwpck_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 3980:
/***/ (function(module) {

// MIT license (by Elan Shanker).
(function(globals) {
  'use strict';

  var executeSync = function(){
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'function'){
      args[0].apply(null, args.splice(1));
    }
  };

  var executeAsync = function(fn){
    if (typeof setImmediate === 'function') {
      setImmediate(fn);
    } else if (typeof process !== 'undefined' && process.nextTick) {
      process.nextTick(fn);
    } else {
      setTimeout(fn, 0);
    }
  };

  var makeIterator = function (tasks) {
    var makeCallback = function (index) {
      var fn = function () {
        if (tasks.length) {
          tasks[index].apply(null, arguments);
        }
        return fn.next();
      };
      fn.next = function () {
        return (index < tasks.length - 1) ? makeCallback(index + 1): null;
      };
      return fn;
    };
    return makeCallback(0);
  };
  
  var _isArray = Array.isArray || function(maybeArray){
    return Object.prototype.toString.call(maybeArray) === '[object Array]';
  };

  var waterfall = function (tasks, callback, forceAsync) {
    var nextTick = forceAsync ? executeAsync : executeSync;
    callback = callback || function () {};
    if (!_isArray(tasks)) {
      var err = new Error('First argument to waterfall must be an array of functions');
      return callback(err);
    }
    if (!tasks.length) {
      return callback();
    }
    var wrapIterator = function (iterator) {
      return function (err) {
        if (err) {
          callback.apply(null, arguments);
          callback = function () {};
        } else {
          var args = Array.prototype.slice.call(arguments, 1);
          var next = iterator.next();
          if (next) {
            args.push(wrapIterator(next));
          } else {
            args.push(callback);
          }
          nextTick(function () {
            iterator.apply(null, args);
          });
        }
      };
    };
    wrapIterator(makeIterator(tasks))();
  };

  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return waterfall;
    }); // RequireJS
  } else if ( true && module.exports) {
    module.exports = waterfall; // CommonJS
  } else {
    globals.waterfall = waterfall; // <script>
  }
})(this);


/***/ }),

/***/ 7943:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var rawAsap = __nccwpck_require__(3691);
var freeTasks = [];

/**
 * Calls a task as soon as possible after returning, in its own event, with
 * priority over IO events. An exception thrown in a task can be handled by
 * `process.on("uncaughtException") or `domain.on("error")`, but will otherwise
 * crash the process. If the error is handled, all subsequent tasks will
 * resume.
 *
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawTask.domain = process.domain;
    rawAsap(rawTask);
}

function RawTask() {
    this.task = null;
    this.domain = null;
}

RawTask.prototype.call = function () {
    if (this.domain) {
        this.domain.enter();
    }
    var threw = true;
    try {
        this.task.call();
        threw = false;
        // If the task throws an exception (presumably) Node.js restores the
        // domain stack for the next event.
        if (this.domain) {
            this.domain.exit();
        }
    } finally {
        // We use try/finally and a threw flag to avoid messing up stack traces
        // when we catch and release errors.
        if (threw) {
            // In Node.js, uncaught exceptions are considered fatal errors.
            // Re-throw them to interrupt flushing!
            // Ensure that flushing continues if an uncaught exception is
            // suppressed listening process.on("uncaughtException") or
            // domain.on("error").
            rawAsap.requestFlush();
        }
        // If the task threw an error, we do not want to exit the domain here.
        // Exiting the domain would prevent the domain from catching the error.
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
    }
};



/***/ }),

/***/ 3691:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var domain; // The domain module is executed on demand
var hasSetImmediate = typeof setImmediate === "function";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including network IO events in Node.js.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Avoids a function call
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory excaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

rawAsap.requestFlush = requestFlush;
function requestFlush() {
    // Ensure flushing is not bound to any domain.
    // It is not sufficient to exit the domain, because domains exist on a stack.
    // To execute code outside of any domain, the following dance is necessary.
    var parentDomain = process.domain;
    if (parentDomain) {
        if (!domain) {
            // Lazy execute the domain module.
            // Only employed if the user elects to use domains.
            domain = __nccwpck_require__(5229);
        }
        domain.active = process.domain = null;
    }

    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
    // cannot handle recursion.
    // `requestFlush` will only be called recursively from `asap.js`, to resume
    // flushing after an error is thrown into a domain.
    // Conveniently, `setImmediate` was introduced in the same version
    // `process.nextTick` started throwing recursion errors.
    if (flushing && hasSetImmediate) {
        setImmediate(flush);
    } else {
        process.nextTick(flush);
    }

    if (parentDomain) {
        domain.active = process.domain = parentDomain;
    }
}


/***/ }),

/***/ 6786:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __nccwpck_require__(4971)(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test     = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
  self.re.schema_at_start = RegExp('^' + self.re.schema_search.source, 'i');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/
LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) return null;

  var m = this.re.schema_at_start.exec(text);
  if (!m) return null;

  var len = this.testSchemaAt(text, m[2], m[0].length);
  if (!len) return null;

  this.__schema__     = m[2];
  this.__index__      = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;

  return createMatch(this, 0);
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),

/***/ 4971:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



module.exports = function (opts) {
  var re = {};
  opts = opts || {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __nccwpck_require__(703).source;
  re.src_Cc  = __nccwpck_require__(4338).source;
  re.src_Z   = __nccwpck_require__(8810).source;
  re.src_P   = __nccwpck_require__(8019).source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')' +
    '(?!' + (opts['---'] ? '-(?!--)|' : '-|') + '_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-])|' +  // allow `I'm_king` if no pair found
          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
                                     // github has ... in commit range links,
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // - params separator
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]|$)|' +
          (opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          ',(?!' + re.src_ZCc + '|$)|' +       // allow `,,,` in paths
          ';(?!' + re.src_ZCc + '|$)|' +       // allow `;` if not followed by space-like char
          '\\!+(?!' + re.src_ZCc + '|[!]|$)|' +  // allow `!!!` in paths, but not at the end
          '\\?(?!' + re.src_ZCc + '|[?]|$)' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),

/***/ 8561:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



module.exports = __nccwpck_require__(4949);


/***/ }),

/***/ 9220:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// HTML5 entities map: { name -> utf16string }
//


/*eslint quotes:0*/
module.exports = __nccwpck_require__(4007);


/***/ }),

/***/ 9035:
/***/ ((module) => {

"use strict";
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks




module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];


/***/ }),

/***/ 6537:
/***/ ((module) => {

"use strict";
// Regexps to match html elements



var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?][\\s\\S]*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

module.exports.n = HTML_TAG_RE;
module.exports.q = HTML_OPEN_CLOSE_TAG_RE;


/***/ }),

/***/ 506:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
// Utilities
//



function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}


var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

var entities = __nccwpck_require__(9220);

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}

/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) { return escaped; }
    return replaceEntityPattern(match, entity);
  });
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}

// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09: // \t
    case 0x0A: // \n
    case 0x0B: // \v
    case 0x0C: // \f
    case 0x0D: // \r
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var UNICODE_PUNCT_RE = __nccwpck_require__(8019);

// Currently without astral characters support.
function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

// Hepler to unify [reference labels].
//
function normalizeReference(str) {
  // Trim and collapse whitespace
  //
  str = str.trim().replace(/\s+/g, ' ');

  // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
  // fixed in v12 (couldn't find any details).
  //
  // So treat this one as a special case
  // (remove this when node v10 is no longer supported).
  //
  if ('ẞ'.toLowerCase() === 'Ṿ') {
    str = str.replace(/ẞ/g, 'ß');
  }

  // .toLowerCase().toUpperCase() should get rid of all differences
  // between letter variants.
  //
  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
  // uppercased versions).
  //
  // Here's an example showing how it happens. Lets take greek letter omega:
  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
  //
  // Unicode entries:
  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
  //
  // Case-insensitive comparison should treat all of them as equivalent.
  //
  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
  // and .toUpperCase() doesn't change ϴ (already uppercase).
  //
  // Applying first lower then upper case normalizes any character:
  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
  //
  // Note: this is equivalent to unicode case folding; unicode normalization
  // is a different step that is not required here.
  //
  // Final result should be uppercased, because it's later stored in an object
  // (this avoid a conflict with Object.prototype members,
  // most notably, `__proto__`)
  //
  return str.toLowerCase().toUpperCase();
}

////////////////////////////////////////////////////////////////////////////////

// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib                 = {};
exports.lib.mdurl = __nccwpck_require__(114);
exports.lib.ucmicro = __nccwpck_require__(5649);

exports.assign              = assign;
exports.isString            = isString;
exports.has                 = has;
exports.unescapeMd          = unescapeMd;
exports.unescapeAll         = unescapeAll;
exports.isValidEntityCode   = isValidEntityCode;
exports.fromCodePoint       = fromCodePoint;
// exports.replaceEntities     = replaceEntities;
exports.escapeHtml          = escapeHtml;
exports.arrayReplaceAt      = arrayReplaceAt;
exports.isSpace             = isSpace;
exports.isWhiteSpace        = isWhiteSpace;
exports.isMdAsciiPunct      = isMdAsciiPunct;
exports.isPunctChar         = isPunctChar;
exports.escapeRE            = escapeRE;
exports.normalizeReference  = normalizeReference;


/***/ }),

/***/ 3380:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
// Just a shortcut for bulk export



exports.parseLinkLabel = __nccwpck_require__(7945);
exports.parseLinkDestination = __nccwpck_require__(9914);
exports.parseLinkTitle = __nccwpck_require__(3085);


/***/ }),

/***/ 9914:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Parse link destination
//



var unescapeAll = __nccwpck_require__(506).unescapeAll;


module.exports = function parseLinkDestination(str, pos, max) {
  var code, level,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return result; }
      if (code === 0x3C /* < */) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 0x20) { break; }
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 32) { return result; }
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};


/***/ }),

/***/ 7945:
/***/ ((module) => {

"use strict";
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//


module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};


/***/ }),

/***/ 3085:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Parse link title
//



var unescapeAll = __nccwpck_require__(506).unescapeAll;


module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};


/***/ }),

/***/ 4949:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Main parser class




var utils        = __nccwpck_require__(506);
var helpers      = __nccwpck_require__(3380);
var Renderer     = __nccwpck_require__(3041);
var ParserCore   = __nccwpck_require__(4004);
var ParserBlock  = __nccwpck_require__(8007);
var ParserInline = __nccwpck_require__(6031);
var LinkifyIt    = __nccwpck_require__(6786);
var mdurl        = __nccwpck_require__(114);
var punycode     = __nccwpck_require__(4213);


var config = {
  default: __nccwpck_require__(1007),
  zero: __nccwpck_require__(6719),
  commonmark: __nccwpck_require__(3084)
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;


/***/ }),

/***/ 8007:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/



var Ruler           = __nccwpck_require__(2093);


var _rules = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      __nccwpck_require__(7722),      [ 'paragraph', 'reference' ] ],
  [ 'code',       __nccwpck_require__(7693) ],
  [ 'fence',      __nccwpck_require__(7749),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', __nccwpck_require__(6888), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         __nccwpck_require__(3514),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       __nccwpck_require__(2050),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  __nccwpck_require__(2235) ],
  [ 'html_block', __nccwpck_require__(5732), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'heading',    __nccwpck_require__(2702),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   __nccwpck_require__(3551) ],
  [ 'paragraph',  __nccwpck_require__(9450) ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = __nccwpck_require__(9497);


module.exports = ParserBlock;


/***/ }),

/***/ 4004:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/



var Ruler  = __nccwpck_require__(2093);


var _rules = [
  [ 'normalize',      __nccwpck_require__(2764)      ],
  [ 'block',          __nccwpck_require__(31)          ],
  [ 'inline',         __nccwpck_require__(1951)         ],
  [ 'linkify',        __nccwpck_require__(5462)        ],
  [ 'replacements',   __nccwpck_require__(8373)   ],
  [ 'smartquotes',    __nccwpck_require__(2178)    ],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  [ 'text_join',      __nccwpck_require__(7502)      ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = __nccwpck_require__(9052);


module.exports = Core;


/***/ }),

/***/ 6031:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/



var Ruler           = __nccwpck_require__(2093);


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            __nccwpck_require__(1117) ],
  [ 'linkify',         __nccwpck_require__(1783) ],
  [ 'newline',         __nccwpck_require__(8774) ],
  [ 'escape',          __nccwpck_require__(1836) ],
  [ 'backticks',       __nccwpck_require__(8520) ],
  [ 'strikethrough',   __nccwpck_require__(3015)/* .tokenize */ .w ],
  [ 'emphasis',        __nccwpck_require__(1677)/* .tokenize */ .w ],
  [ 'link',            __nccwpck_require__(8798) ],
  [ 'image',           __nccwpck_require__(9998) ],
  [ 'autolink',        __nccwpck_require__(3939) ],
  [ 'html_inline',     __nccwpck_require__(7753) ],
  [ 'entity',          __nccwpck_require__(973) ]
];

// `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//
var _rules2 = [
  [ 'balance_pairs',   __nccwpck_require__(9418) ],
  [ 'strikethrough',   __nccwpck_require__(3015)/* .postProcess */ .g ],
  [ 'emphasis',        __nccwpck_require__(1677)/* .postProcess */ .g ],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  [ 'fragments_join',  __nccwpck_require__(3807) ]
];


/**
 * new ParserInline()
 **/
function ParserInline() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) { break; }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) { break; }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline.prototype.State = __nccwpck_require__(1247);


module.exports = ParserInline;


/***/ }),

/***/ 3084:
/***/ ((module) => {

"use strict";
// Commonmark default options




module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'fragments_join'
      ]
    }
  }
};


/***/ }),

/***/ 1007:
/***/ ((module) => {

"use strict";
// markdown-it default options




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};


/***/ }),

/***/ 6719:
/***/ ((module) => {

"use strict";
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'fragments_join'
      ]
    }
  }
};


/***/ }),

/***/ 3041:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/



var assign          = __nccwpck_require__(506).assign;
var unescapeAll     = __nccwpck_require__(506).unescapeAll;
var escapeHtml      = __nccwpck_require__(506).escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(tokens[idx].content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted, i, arr, tmpAttrs, tmpToken;

  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join('');
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === 'softbreak') {
      result += '\n';
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;


/***/ }),

/***/ 2093:
/***/ ((module) => {

"use strict";
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/



/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;


/***/ }),

/***/ 6888:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Block quotes



var isSpace = __nccwpck_require__(506).isSpace;


module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      isOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // set offset past spaces and ">"
  initial = offset = state.sCount[startLine] + 1;

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20 /* space */) {
    // ' >   test '
    //     ^ -- position start of line here:
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
    spaceAfterMarker = true;

    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      // '  >\t  test '
      //       ^ -- position start of line here (tab has width===1)
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      // ' >\t  test '
      //    ^ -- position start of line here + shift bsCount slightly
      //         to make extra space appear
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  while (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (isSpace(ch)) {
      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }

    pos++;
  }

  oldBSCount = [ state.bsCount[startLine] ];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

  lastLineEmpty = pos >= max;

  oldSCount = [ state.sCount[startLine] ];
  state.sCount[startLine] = offset - initial;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    isOutdented = state.sCount[nextLine] < state.blkIndent;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
      // This line is inside the blockquote.

      // set offset past spaces and ">"
      initial = offset = state.sCount[nextLine] + 1;

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};


/***/ }),

/***/ 7693:
/***/ ((module) => {

"use strict";
// Code block (4 spaces padded)




module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ 7749:
/***/ ((module) => {

"use strict";
// fences (``` lang, ~~~ lang)




module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (marker === 0x60 /* ` */) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ 2702:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// heading (#, ##, ...)



var isSpace = __nccwpck_require__(506).isSpace;


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};


/***/ }),

/***/ 3514:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Horizontal rule



var isSpace = __nccwpck_require__(506).isSpace;


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};


/***/ }),

/***/ 5732:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// HTML block




var block_names = __nccwpck_require__(9035);
var HTML_OPEN_CLOSE_TAG_RE = __nccwpck_require__(6537)/* .HTML_OPEN_CLOSE_TAG_RE */ .q;

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


module.exports = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};


/***/ }),

/***/ 3551:
/***/ ((module) => {

"use strict";
// lheading (---, ===)




module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ 2050:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Lists



var isSpace = __nccwpck_require__(506).isSpace;


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      nextLine,
      offset,
      oldListIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // Special case:
  //  - item 1
  //   - item 2
  //    - item 3
  //     - item 4
  //      - this one is a paragraph continuation
  if (state.listIndent >= 0 &&
      state.sCount[startLine] - state.listIndent >= 4 &&
      state.sCount[startLine] < state.blkIndent) {
    return false;
  }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.sCount[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
  }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ startLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ startLine, 0 ];
    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    }

    // change current state, then restore it after parser subcall
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine];

    //  - example list
    // ^ listIndent position will be here
    //   ^ blkIndent position will be here
    //
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;

    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;

    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};


/***/ }),

/***/ 9450:
/***/ ((module) => {

"use strict";
// Paragraph




module.exports = function paragraph(state, startLine/*, endLine*/) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph'),
      endLine = state.lineMax;

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ 2235:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var normalizeReference   = __nccwpck_require__(506).normalizeReference;
var isSpace              = __nccwpck_require__(506).isSpace;


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};


/***/ }),

/***/ 9497:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Parser state class



var Token = __nccwpck_require__(8622);
var isSpace = __nccwpck_require__(506).isSpace;


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent (for example, if we are
                       // inside a list, it would be positioned after list marker)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;

  if (nesting < 0) this.level--; // closing tag
  token.level = this.level;
  if (nesting > 0) this.level++; // opening tag

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token;


module.exports = StateBlock;


/***/ }),

/***/ 7722:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// GFM table, https://github.github.com/gfm/#tables-extension-



var isSpace = __nccwpck_require__(506).isSpace;


function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  return state.src.slice(pos, max);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      isEscaped = false,
      lastPos = 0,
      current = '';

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x7c/* | */) {
      if (!isEscaped) {
        // pipe separating cells, '|'
        result.push(current + str.substring(lastPos, pos));
        current = '';
        lastPos = pos + 1;
      } else {
        // escaped pipe, '\|'
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }

    isEscaped = (ch === 0x5c/* \ */);
    pos++;

    ch = str.charCodeAt(pos);
  }

  result.push(current + str.substring(lastPos));

  return result;
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines, oldParentType, terminate,
      terminatorRules, firstCh, secondCh;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

  if (pos >= state.eMarks[nextLine]) { return false; }

  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace(secondCh)) {
    return false;
  }

  // if first character is '-', then second character must not be a space
  // (due to parsing ambiguity with list)
  if (firstCh === 0x2D/* - */ && isSpace(secondCh)) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === '') columns.shift();
  if (columns.length && columns[columns.length - 1] === '') columns.pop();

  // header row will define an amount of columns in the entire table,
  // and align row should be exactly the same (the rest of the rows can differ)
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) { return false; }

  if (silent) { return true; }

  oldParentType = state.parentType;
  state.parentType = 'table';

  // use 'blockquote' lists for termination because it's
  // the most similar to tables
  terminatorRules = state.md.block.ruler.getRules('blockquote');

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) { break; }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    if (nextLine === startLine + 2) {
      token     = state.push('tbody_open', 'tbody', 1);
      token.map = tbodyLines = [ startLine + 2, 0 ];
    }

    token     = state.push('tr_open', 'tr', 1);
    token.map = [ nextLine, nextLine + 1 ];

    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }

  if (tbodyLines) {
    token = state.push('tbody_close', 'tbody', -1);
    tbodyLines[1] = nextLine;
  }

  token = state.push('table_close', 'table', -1);
  tableLines[1] = nextLine;

  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};


/***/ }),

/***/ 31:
/***/ ((module) => {

"use strict";



module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};


/***/ }),

/***/ 1951:
/***/ ((module) => {

"use strict";


module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};


/***/ }),

/***/ 5462:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//



var arrayReplaceAt = __nccwpck_require__(506).arrayReplaceAt;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        // forbid escape sequence at the start of the string,
        // this avoids http\://example.com/ from being linkified as
        // http:<a href="//example.com/">//example.com/</a>
        if (links.length > 0 &&
            links[0].index === 0 &&
            i > 0 &&
            tokens[i - 1].type === 'text_special') {
          links = links.slice(1);
        }

        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};


/***/ }),

/***/ 2764:
/***/ ((module) => {

"use strict";
// Normalize input string




// https://spec.commonmark.org/0.29/#line-ending
var NEWLINES_RE  = /\r\n?|\n/g;
var NULL_RE      = /\0/g;


module.exports = function normalize(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};


/***/ }),

/***/ 8373:
/***/ ((module) => {

"use strict";
// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//


// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
          .replace(/\+-/g, '±')
          // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
          // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
          // en-dash
          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};


/***/ }),

/***/ 2178:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Convert straight quotation marks to typographic ones
//



var isWhiteSpace   = __nccwpck_require__(506).isWhiteSpace;
var isPunctChar    = __nccwpck_require__(506).isPunctChar;
var isMdAsciiPunct = __nccwpck_require__(506).isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};


/***/ }),

/***/ 9052:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Core state object
//


var Token = __nccwpck_require__(8622);


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token;


module.exports = StateCore;


/***/ }),

/***/ 7502:
/***/ ((module) => {

"use strict";
// Join raw text tokens with the rest of the text
//
// This is set as a separate rule to provide an opportunity for plugins
// to run text replacements after text join, but before escape join.
//
// For example, `\:)` shouldn't be replaced with an emoji.
//



module.exports = function text_join(state) {
  var j, l, tokens, curr, max, last,
      blockTokens = state.tokens;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') continue;

    tokens = blockTokens[j].children;
    max = tokens.length;

    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text_special') {
        tokens[curr].type = 'text';
      }
    }

    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text' &&
          curr + 1 < max &&
          tokens[curr + 1].type === 'text') {

        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) { tokens[last] = tokens[curr]; }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  }
};


/***/ }),

/***/ 3939:
/***/ ((module) => {

"use strict";
// Process autolinks '<protocol:...>'




/*eslint max-len:0*/
var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


module.exports = function autolink(state, silent) {
  var url, fullUrl, token, ch, start, max,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  start = state.pos;
  max = state.posMax;

  for (;;) {
    if (++pos >= max) return false;

    ch = state.src.charCodeAt(pos);

    if (ch === 0x3C /* < */) return false;
    if (ch === 0x3E /* > */) break;
  }

  url = state.src.slice(start + 1, pos);

  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  return false;
};


/***/ }),

/***/ 8520:
/***/ ((module) => {

"use strict";
// Parse backticks




module.exports = function backtick(state, silent) {
  var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  // scan marker length
  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);
  openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }

  matchStart = matchEnd = pos;

  // Nothing found in the cache, scan until the end of the line (or until marker is found)
  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    // scan marker length
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        token     = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1');
      }
      state.pos = matchEnd;
      return true;
    }

    // Some different length found, put it in cache as upper limit of where closer can be found
    state.backticks[closerLength] = matchStart;
  }

  // Scanned through the end, didn't find anything
  state.backticksScanned = true;

  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};


/***/ }),

/***/ 9418:
/***/ ((module) => {

"use strict";
// For each opening emphasis-like marker find a matching closing one
//



function processDelimiters(state, delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
      isOddMatch, lastJump,
      openersBottom = {},
      max = delimiters.length;

  if (!max) return;

  // headerIdx is the first delimiter of the current (where closer is) delimiter run
  var headerIdx = 0;
  var lastTokenIdx = -2; // needs any value lower than -1
  var jumps = [];

  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];

    jumps.push(0);

    // markers belong to same delimiter run if:
    //  - they have adjacent tokens
    //  - AND markers are the same
    //
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }

    lastTokenIdx = closer.token;

    // Length is only used for emphasis-specific "rule of 3",
    // if it's not defined (in strikethrough or 3rd party plugins),
    // we can default it to 0 to disable those checks.
    //
    closer.length = closer.length || 0;

    if (!closer.close) continue;

    // Previously calculated lower bounds (previous fails)
    // for each marker, each delimiter length modulo 3,
    // and for whether this closer can be an opener;
    // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
    }

    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];

    openerIdx = headerIdx - jumps[headerIdx] - 1;

    newMinOpenerIdx = openerIdx;

    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];

      if (opener.marker !== closer.marker) continue;

      if (opener.open && opener.end < 0) {

        isOddMatch = false;

        // from spec:
        //
        // If one of the delimiters can both open and close emphasis, then the
        // sum of the lengths of the delimiter runs containing the opening and
        // closing delimiters must not be a multiple of 3 unless both lengths
        // are multiples of 3.
        //
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }

        if (!isOddMatch) {
          // If previous delimiter cannot be an opener, we can safely skip
          // the entire sequence in future checks. This is required to make
          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
          //
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
            jumps[openerIdx - 1] + 1 :
            0;

          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;

          closer.open  = false;
          opener.end   = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          // treat next token as start of run,
          // it optimizes skips in **<...>**a**<...>** pathological case
          lastTokenIdx = -2;
          break;
        }
      }
    }

    if (newMinOpenerIdx !== -1) {
      // If match for this delimiter run failed, we want to set lower bound for
      // future lookups. This is required to make sure algorithm has linear
      // complexity.
      //
      // See details here:
      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
      //
      openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
    }
  }
}


module.exports = function link_pairs(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  processDelimiters(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ 1677:
/***/ ((module) => {

"use strict";
// Process *this* and _that_
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.w = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      max = delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               // check that first two markers match and adjacent
               delimiters[i - 1].marker === startDelim.marker &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               // check that last two markers are adjacent (we can safely assume they match)
               delimiters[startDelim.end + 1].token === endDelim.token + 1;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.g = function emphasis(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ 973:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Process html entity - &#123;, &#xAF;, &quot;, ...



var entities          = __nccwpck_require__(9220);
var has               = __nccwpck_require__(506).has;
var isValidEntityCode = __nccwpck_require__(506).isValidEntityCode;
var fromCodePoint     = __nccwpck_require__(506).fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) return false;

  if (pos + 1 >= max) return false;

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x23 /* # */) {
    match = state.src.slice(pos).match(DIGITAL_RE);
    if (match) {
      if (!silent) {
        code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);

        token         = state.push('text_special', '', 0);
        token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        token.markup  = match[0];
        token.info    = 'entity';
      }
      state.pos += match[0].length;
      return true;
    }
  } else {
    match = state.src.slice(pos).match(NAMED_RE);
    if (match) {
      if (has(entities, match[1])) {
        if (!silent) {
          token         = state.push('text_special', '', 0);
          token.content = entities[match[1]];
          token.markup  = match[0];
          token.info    = 'entity';
        }
        state.pos += match[0].length;
        return true;
      }
    }
  }

  return false;
};


/***/ }),

/***/ 1836:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Process escaped chars and hardbreaks



var isSpace = __nccwpck_require__(506).isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) return false;
  pos++;

  // '\' at the end of the inline block
  if (pos >= max) return false;

  ch1 = state.src.charCodeAt(pos);

  if (ch1 === 0x0A) {
    if (!silent) {
      state.push('hardbreak', 'br', 0);
    }

    pos++;
    // skip leading whitespaces from next line
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace(ch1)) break;
      pos++;
    }

    state.pos = pos;
    return true;
  }

  escapedStr = state.src[pos];

  if (ch1 >= 0xD800 && ch1 <= 0xDBFF && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);

    if (ch2 >= 0xDC00 && ch2 <= 0xDFFF) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }

  origStr = '\\' + escapedStr;

  if (!silent) {
    token = state.push('text_special', '', 0);

    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }

    token.markup = origStr;
    token.info   = 'escape';
  }

  state.pos = pos + 1;
  return true;
};


/***/ }),

/***/ 3807:
/***/ ((module) => {

"use strict";
// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//



module.exports = function fragments_join(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level--; // closing tag
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0) level++; // opening tag

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};


/***/ }),

/***/ 7753:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Process html tags




var HTML_TAG_RE = __nccwpck_require__(6537)/* .HTML_TAG_RE */ .n;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = state.src.slice(pos, pos + match[0].length);

    if (isLinkOpen(token.content))  state.linkLevel++;
    if (isLinkClose(token.content)) state.linkLevel--;
  }
  state.pos += match[0].length;
  return true;
};


/***/ }),

/***/ 9998:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Process ![image](<src> "title")



var normalizeReference   = __nccwpck_require__(506).normalizeReference;
var isSpace              = __nccwpck_require__(506).isSpace;


module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ 8798:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Process [link](<to> "stuff")



var normalizeReference   = __nccwpck_require__(506).normalizeReference;
var isSpace              = __nccwpck_require__(506).isSpace;


module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      token,
      href = '',
      title = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 0x0A) { break; }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ 1783:
/***/ ((module) => {

"use strict";
// Process links like https://example.org/




// RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;


module.exports = function linkify(state, silent) {
  var pos, max, match, proto, link, url, fullUrl, token;

  if (!state.md.options.linkify) return false;
  if (state.linkLevel > 0) return false;

  pos = state.pos;
  max = state.posMax;

  if (pos + 3 > max) return false;
  if (state.src.charCodeAt(pos) !== 0x3A/* : */) return false;
  if (state.src.charCodeAt(pos + 1) !== 0x2F/* / */) return false;
  if (state.src.charCodeAt(pos + 2) !== 0x2F/* / */) return false;

  match = state.pending.match(SCHEME_RE);
  if (!match) return false;

  proto = match[1];

  link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link) return false;

  url = link.url;

  // disallow '*' at the end of the link (conflicts with emphasis)
  url = url.replace(/\*+$/, '');

  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl)) return false;

  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);

    token         = state.push('link_open', 'a', 1);
    token.attrs   = [ [ 'href', fullUrl ] ];
    token.markup  = 'linkify';
    token.info    = 'auto';

    token         = state.push('text', '', 0);
    token.content = state.md.normalizeLinkText(url);

    token         = state.push('link_close', 'a', -1);
    token.markup  = 'linkify';
    token.info    = 'auto';
  }

  state.pos += url.length - proto.length;
  return true;
};


/***/ }),

/***/ 8774:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Proceess '\n'



var isSpace = __nccwpck_require__(506).isSpace;


module.exports = function newline(state, silent) {
  var pmax, max, ws, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Find whitespaces tail of pending chars.
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) ws--;

        state.pending = state.pending.slice(0, ws);
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};


/***/ }),

/***/ 1247:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Inline parser state




var Token          = __nccwpck_require__(8622);
var isWhiteSpace   = __nccwpck_require__(506).isWhiteSpace;
var isPunctChar    = __nccwpck_require__(506).isPunctChar;
var isMdAsciiPunct = __nccwpck_require__(506).isMdAsciiPunct;


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  // Stores { start: end } pairs. Useful for backtrack
  // optimization of pairs parse (emphasis, strikes).
  this.cache = {};

  // List of emphasis-like delimiters for current tag
  this.delimiters = [];

  // Stack of delimiter lists for upper level tags
  this._prev_delimiters = [];

  // backtick length => last seen position
  this.backticks = {};
  this.backticksScanned = false;

  // Counter used to disable inline linkify-it execution
  // inside <a> and markdown links
  this.linkLevel = 0;
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);
  var token_meta = null;

  if (nesting < 0) {
    // closing tag
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }

  token.level = this.level;

  if (nesting > 0) {
    // opening tag
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


module.exports = StateInline;


/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
// ~~strike through~~
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.w = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      length: 0,     // disable "rule of 3" length checks meant for emphasis
      token:  state.tokens.length - 1,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      max = delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.g = function strikethrough(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ 1117:
/***/ ((module) => {

"use strict";
// Skip text characters for text token, place those to pending buffer
// and increment current pos




// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/


/***/ }),

/***/ 8622:
/***/ ((module) => {

"use strict";
// Token class




/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   * - The string value of the item marker for ordered-list "list_item_open" tokens
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


module.exports = Token;


/***/ }),

/***/ 2935:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



// Regular expression for matching common newline characters
// See NEWLINES_RE in markdown-it/lib/rules_core/normalize.js
const newLineRe = /\r\n?|\n/g;
module.exports.newLineRe = newLineRe;

// Regular expression for matching common front matter (YAML and TOML)
module.exports.frontMatterRe =
  // eslint-disable-next-line max-len
  /((^---\s*$[^]*?^---\s*$)|(^\+\+\+\s*$[^]*?^(\+\+\+|\.\.\.)\s*$)|(^\{\s*$[^]*?^\}\s*$))(\r\n|\r|\n|$)/m;

// Regular expression for matching the start of inline disable/enable comments
const inlineCommentStartRe =
  // eslint-disable-next-line max-len
  /(<!--\s*markdownlint-(disable|enable|capture|restore|disable-file|enable-file|disable-line|disable-next-line|configure-file))(?:\s|-->)/ig;
module.exports.inlineCommentStartRe = inlineCommentStartRe;

// Regular expression for matching HTML elements
const htmlElementRe = /<(([A-Za-z][A-Za-z0-9-]*)(?:\s[^`>]*)?)\/?>/g;
module.exports.htmlElementRe = htmlElementRe;

// Regular expressions for range matching
module.exports.bareUrlRe = /(?:http|ftp)s?:\/\/[^\s\]"']*(?:\/|[^\s\]"'\W])/ig;
module.exports.listItemMarkerRe = /^([\s>]*)(?:[*+-]|\d+[.)])\s+/;
module.exports.orderedListItemMarkerRe = /^[\s>]*0*(\d+)[.)]/;

// Regular expression for all instances of emphasis markers
const emphasisMarkersRe = /[_*]/g;

// Regular expression for reference links (full and collapsed but not shortcut)
const referenceLinkRe =
  /!?\\?\[((?:\[[^\]\0]*]|[^\]\0])*)](?:(?:\[([^\]\0]*)\])|[^(]|$)/g;

// Regular expression for link reference definitions
const linkReferenceDefinitionRe = /^ {0,3}\[([^\]]*[^\\])]:/;
module.exports.linkReferenceDefinitionRe = linkReferenceDefinitionRe;

// All punctuation characters (normal and full-width)
const allPunctuation = ".,;:!?。，；：！？";
module.exports.allPunctuation = allPunctuation;

// All punctuation characters without question mark (normal and full-width)
module.exports.allPunctuationNoQuestion = allPunctuation.replace(/[?？]/gu, "");

// Returns true iff the input is a number
module.exports.isNumber = function isNumber(obj) {
  return typeof obj === "number";
};

// Returns true iff the input is a string
module.exports.isString = function isString(obj) {
  return typeof obj === "string";
};

// Returns true iff the input string is empty
module.exports.isEmptyString = function isEmptyString(str) {
  return str.length === 0;
};

// Returns true iff the input is an object
module.exports.isObject = function isObject(obj) {
  return (obj !== null) && (typeof obj === "object") && !Array.isArray(obj);
};

/**
 * Returns true iff the input line is blank (contains nothing, whitespace, or
 * comments (unclosed start/end comments allowed)).
 *
 * @param {string} line Input line.
 * @returns {boolean} True iff line is blank.
 */
function isBlankLine(line) {
  const startComment = "<!--";
  const endComment = "-->";
  const removeComments = (s) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const start = s.indexOf(startComment);
      const end = s.indexOf(endComment);
      if ((end !== -1) && ((start === -1) || (end < start))) {
        // Unmatched end comment is first
        s = s.slice(end + endComment.length);
      } else if ((start !== -1) && (end !== -1)) {
        // Start comment is before end comment
        s = s.slice(0, start) + s.slice(end + endComment.length);
      } else if ((start !== -1) && (end === -1)) {
        // Unmatched start comment is last
        s = s.slice(0, start);
      } else {
        // No more comments to remove
        return s;
      }
    }
  };
  return (
    !line ||
    !line.trim() ||
    !removeComments(line).replace(/>/g, "").trim()
  );
}
module.exports.isBlankLine = isBlankLine;

/**
 * Compare function for Array.prototype.sort for ascending order of numbers.
 *
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number} Positive value if a>b, negative value if b<a, 0 otherwise.
 */
module.exports.numericSortAscending = function numericSortAscending(a, b) {
  return a - b;
};

// Returns true iff the sorted array contains the specified element
module.exports.includesSorted = function includesSorted(array, element) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    // eslint-disable-next-line no-bitwise
    const mid = (left + right) >> 1;
    if (array[mid] < element) {
      left = mid + 1;
    } else if (array[mid] > element) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

// Replaces the content of properly-formatted CommonMark comments with "."
// This preserves the line/column information for the rest of the document
// https://spec.commonmark.org/0.29/#html-blocks
// https://spec.commonmark.org/0.29/#html-comment
const htmlCommentBegin = "<!--";
const htmlCommentEnd = "-->";
module.exports.clearHtmlCommentText = function clearHtmlCommentText(text) {
  let i = 0;
  while ((i = text.indexOf(htmlCommentBegin, i)) !== -1) {
    const j = text.indexOf(htmlCommentEnd, i + 2);
    if (j === -1) {
      // Un-terminated comments are treated as text
      break;
    }
    // If the comment has content...
    if (j > i + htmlCommentBegin.length) {
      let k = i - 1;
      while (text[k] === " ") {
        k--;
      }
      // If comment is not within an indented code block...
      if (k >= i - 4) {
        const content = text.slice(i + htmlCommentBegin.length, j);
        const isBlock = (k < 0) || (text[k] === "\n");
        const isValid = isBlock ||
          (!content.startsWith(">") && !content.startsWith("->") &&
           !content.endsWith("-") && !content.includes("--"));
        // If a valid block/inline comment...
        if (isValid) {
          text =
            text.slice(0, i + htmlCommentBegin.length) +
            content.replace(/[^\r\n]/g, ".") +
            text.slice(j);
        }
      }
    }
    i = j + htmlCommentEnd.length;
  }
  return text;
};

// Escapes a string for use in a RegExp
module.exports.escapeForRegExp = function escapeForRegExp(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

// Un-escapes Markdown content (simple algorithm; not a parser)
const escapedMarkdownRe = /\\./g;
module.exports.unescapeMarkdown =
  function unescapeMarkdown(markdown, replacement) {
    return markdown.replace(escapedMarkdownRe, (match) => {
      const char = match[1];
      if ("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".includes(char)) {
        return replacement || char;
      }
      return match;
    });
  };

/**
 * Return the string representation of a fence markup character.
 *
 * @param {string} markup Fence string.
 * @returns {string} String representation.
 */
module.exports.fencedCodeBlockStyleFor =
  function fencedCodeBlockStyleFor(markup) {
    switch (markup[0]) {
      case "~":
        return "tilde";
      default:
        return "backtick";
    }
  };

/**
 * Return the string representation of a emphasis or strong markup character.
 *
 * @param {string} markup Emphasis or strong string.
 * @returns {string} String representation.
 */
module.exports.emphasisOrStrongStyleFor =
  function emphasisOrStrongStyleFor(markup) {
    switch (markup[0]) {
      case "*":
        return "asterisk";
      default:
        return "underscore";
    }
  };

/**
 * Return the number of characters of indent for a token.
 *
 * @param {Object} token MarkdownItToken instance.
 * @returns {number} Characters of indent.
 */
function indentFor(token) {
  const line = token.line.replace(/^[\s>]*(> |>)/, "");
  return line.length - line.trimStart().length;
}
module.exports.indentFor = indentFor;

// Returns the heading style for a heading token
module.exports.headingStyleFor = function headingStyleFor(token) {
  if ((token.map[1] - token.map[0]) === 1) {
    if (/[^\\]#\s*$/.test(token.line)) {
      return "atx_closed";
    }
    return "atx";
  }
  return "setext";
};

/**
 * Return the string representation of an unordered list marker.
 *
 * @param {Object} token MarkdownItToken instance.
 * @returns {string} String representation.
 */
module.exports.unorderedListStyleFor = function unorderedListStyleFor(token) {
  switch (token.markup) {
    case "-":
      return "dash";
    case "+":
      return "plus";
    // case "*":
    default:
      return "asterisk";
  }
};

/**
 * Calls the provided function for each matching token.
 *
 * @param {Object} params RuleParams instance.
 * @param {string} type Token type identifier.
 * @param {Function} handler Callback function.
 * @returns {void}
 */
function filterTokens(params, type, handler) {
  for (const token of params.tokens) {
    if (token.type === type) {
      handler(token);
    }
  }
}
module.exports.filterTokens = filterTokens;

/**
 * Returns whether a token is a math block (created by markdown-it-texmath).
 *
 * @param {Object} token MarkdownItToken instance.
 * @returns {boolean} True iff token is a math block.
 */
function isMathBlock(token) {
  return (
    ((token.tag === "$$") || (token.tag === "math")) &&
    token.type.startsWith("math_block") &&
    !token.type.endsWith("_end")
  );
}
module.exports.isMathBlock = isMathBlock;

// Get line metadata array
module.exports.getLineMetadata = function getLineMetadata(params) {
  const lineMetadata = params.lines.map(
    (line, index) => [ line, index, false, 0, false, false, false, false ]
  );
  filterTokens(params, "fence", (token) => {
    lineMetadata[token.map[0]][3] = 1;
    lineMetadata[token.map[1] - 1][3] = -1;
    for (let i = token.map[0] + 1; i < token.map[1] - 1; i++) {
      lineMetadata[i][2] = true;
    }
  });
  filterTokens(params, "code_block", (token) => {
    for (let i = token.map[0]; i < token.map[1]; i++) {
      lineMetadata[i][2] = true;
    }
  });
  filterTokens(params, "table_open", (token) => {
    for (let i = token.map[0]; i < token.map[1]; i++) {
      lineMetadata[i][4] = true;
    }
  });
  filterTokens(params, "list_item_open", (token) => {
    let count = 1;
    for (let i = token.map[0]; i < token.map[1]; i++) {
      lineMetadata[i][5] = count;
      count++;
    }
  });
  filterTokens(params, "hr", (token) => {
    lineMetadata[token.map[0]][6] = true;
  });
  for (const token of params.tokens.filter(isMathBlock)) {
    for (let i = token.map[0]; i < token.map[1]; i++) {
      lineMetadata[i][7] = true;
    }
  }
  return lineMetadata;
};

/**
 * Calls the provided function for each line.
 *
 * @param {Object} lineMetadata Line metadata object.
 * @param {Function} handler Function taking (line, lineIndex, inCode, onFence,
 * inTable, inItem, inBreak, inMath).
 * @returns {void}
 */
function forEachLine(lineMetadata, handler) {
  for (const metadata of lineMetadata) {
    handler(...metadata);
  }
}
module.exports.forEachLine = forEachLine;

// Returns (nested) lists as a flat array (in order)
module.exports.flattenLists = function flattenLists(tokens) {
  const flattenedLists = [];
  const stack = [];
  let current = null;
  let nesting = 0;
  const nestingStack = [];
  let lastWithMap = { "map": [ 0, 1 ] };
  for (const token of tokens) {
    if ((token.type === "bullet_list_open") ||
        (token.type === "ordered_list_open")) {
      // Save current context and start a new one
      stack.push(current);
      current = {
        "unordered": (token.type === "bullet_list_open"),
        "parentsUnordered": !current ||
          (current.unordered && current.parentsUnordered),
        "open": token,
        "indent": indentFor(token),
        "parentIndent": (current && current.indent) || 0,
        "items": [],
        "nesting": nesting,
        "lastLineIndex": -1,
        "insert": flattenedLists.length
      };
      nesting++;
    } else if ((token.type === "bullet_list_close") ||
               (token.type === "ordered_list_close")) {
      // Finalize current context and restore previous
      current.lastLineIndex = lastWithMap.map[1];
      flattenedLists.splice(current.insert, 0, current);
      delete current.insert;
      current = stack.pop();
      nesting--;
    } else if (token.type === "list_item_open") {
      // Add list item
      current.items.push(token);
    } else if (token.type === "blockquote_open") {
      nestingStack.push(nesting);
      nesting = 0;
    } else if (token.type === "blockquote_close") {
      nesting = nestingStack.pop() || 0;
    }
    if (token.map) {
      // Track last token with map
      lastWithMap = token;
    }
  }
  return flattenedLists;
};

// Calls the provided function for each specified inline child token
module.exports.forEachInlineChild =
function forEachInlineChild(params, type, handler) {
  filterTokens(params, "inline", function forToken(token) {
    for (const child of token.children) {
      if (child.type === type) {
        handler(child, token);
      }
    }
  });
};

// Calls the provided function for each heading's content
module.exports.forEachHeading = function forEachHeading(params, handler) {
  let heading = null;
  for (const token of params.tokens) {
    if (token.type === "heading_open") {
      heading = token;
    } else if (token.type === "heading_close") {
      heading = null;
    } else if ((token.type === "inline") && heading) {
      handler(heading, token.content, token);
    }
  }
};

/**
 * Calls the provided function for each inline code span's content.
 *
 * @param {string} input Markdown content.
 * @param {Function} handler Callback function taking (code, lineIndex,
 * columnIndex, ticks).
 * @returns {void}
 */
function forEachInlineCodeSpan(input, handler) {
  const backtickRe = /`+/g;
  let match = null;
  const backticksLengthAndIndex = [];
  while ((match = backtickRe.exec(input)) !== null) {
    backticksLengthAndIndex.push([ match[0].length, match.index ]);
  }
  const newLinesIndex = [];
  while ((match = newLineRe.exec(input)) !== null) {
    newLinesIndex.push(match.index);
  }
  let lineIndex = 0;
  let lineStartIndex = 0;
  let k = 0;
  for (let i = 0; i < backticksLengthAndIndex.length - 1; i++) {
    const [ startLength, startIndex ] = backticksLengthAndIndex[i];
    if ((startIndex === 0) || (input[startIndex - 1] !== "\\")) {
      for (let j = i + 1; j < backticksLengthAndIndex.length; j++) {
        const [ endLength, endIndex ] = backticksLengthAndIndex[j];
        if (startLength === endLength) {
          for (; k < newLinesIndex.length; k++) {
            const newLineIndex = newLinesIndex[k];
            if (startIndex < newLineIndex) {
              break;
            }
            lineIndex++;
            lineStartIndex = newLineIndex + 1;
          }
          const columnIndex = startIndex - lineStartIndex + startLength;
          handler(
            input.slice(startIndex + startLength, endIndex),
            lineIndex,
            columnIndex,
            startLength
          );
          i = j;
          break;
        }
      }
    }
  }
}
module.exports.forEachInlineCodeSpan = forEachInlineCodeSpan;

/**
 * Adds ellipsis to the left/right/middle of the specified text.
 *
 * @param {string} text Text to ellipsify.
 * @param {boolean} [start] True iff the start of the text is important.
 * @param {boolean} [end] True iff the end of the text is important.
 * @returns {string} Ellipsified text.
 */
function ellipsify(text, start, end) {
  if (text.length <= 30) {
    // Nothing to do
  } else if (start && end) {
    text = text.slice(0, 15) + "..." + text.slice(-15);
  } else if (end) {
    text = "..." + text.slice(-30);
  } else {
    text = text.slice(0, 30) + "...";
  }
  return text;
}
module.exports.ellipsify = ellipsify;

/**
 * Adds a generic error object via the onError callback.
 *
 * @param {Object} onError RuleOnError instance.
 * @param {number} lineNumber Line number.
 * @param {string} [detail] Error details.
 * @param {string} [context] Error context.
 * @param {number[]} [range] Column and length of error.
 * @param {Object} [fixInfo] RuleOnErrorFixInfo instance.
 * @returns {void}
 */
function addError(onError, lineNumber, detail, context, range, fixInfo) {
  onError({
    lineNumber,
    detail,
    context,
    range,
    fixInfo
  });
}
module.exports.addError = addError;

// Adds an error object with details conditionally via the onError callback
module.exports.addErrorDetailIf = function addErrorDetailIf(
  onError, lineNumber, expected, actual, detail, context, range, fixInfo) {
  if (expected !== actual) {
    addError(
      onError,
      lineNumber,
      "Expected: " + expected + "; Actual: " + actual +
        (detail ? "; " + detail : ""),
      context,
      range,
      fixInfo);
  }
};

// Adds an error object with context via the onError callback
module.exports.addErrorContext = function addErrorContext(
  onError, lineNumber, context, left, right, range, fixInfo) {
  context = ellipsify(context, left, right);
  addError(onError, lineNumber, undefined, context, range, fixInfo);
};

/**
 * Returns an array of code block and span content ranges.
 *
 * @param {Object} params RuleParams instance.
 * @param {Object} lineMetadata Line metadata object.
 * @returns {number[][]} Array of ranges (lineIndex, columnIndex, length).
 */
module.exports.codeBlockAndSpanRanges = (params, lineMetadata) => {
  const exclusions = [];
  // Add code block ranges (excludes fences)
  forEachLine(lineMetadata, (line, lineIndex, inCode, onFence) => {
    if (inCode && !onFence) {
      exclusions.push([ lineIndex, 0, line.length ]);
    }
  });
  // Add code span ranges (excludes ticks)
  filterTokens(params, "inline", (token) => {
    if (token.children.some((child) => child.type === "code_inline")) {
      const tokenLines = params.lines.slice(token.map[0], token.map[1]);
      forEachInlineCodeSpan(
        tokenLines.join("\n"),
        (code, lineIndex, columnIndex) => {
          const codeLines = code.split(newLineRe);
          for (const [ i, line ] of codeLines.entries()) {
            exclusions.push([
              token.lineNumber - 1 + lineIndex + i,
              i ? 0 : columnIndex,
              line.length
            ]);
          }
        }
      );
    }
  });
  return exclusions;
};

/**
 * Returns an array of HTML element ranges.
 *
 * @param {Object} params RuleParams instance.
 * @param {Object} lineMetadata Line metadata object.
 * @returns {number[][]} Array of ranges (lineIndex, columnIndex, length).
 */
module.exports.htmlElementRanges = (params, lineMetadata) => {
  const exclusions = [];
  forEachLine(lineMetadata, (line, lineIndex, inCode) => {
    let match = null;
    // eslint-disable-next-line no-unmodified-loop-condition
    while (!inCode && ((match = htmlElementRe.exec(line)) !== null)) {
      exclusions.push([ lineIndex, match.index, match[0].length ]);
    }
  });
  return exclusions;
};

/**
 * Determines whether the specified range is within another range.
 *
 * @param {number[][]} ranges Array of ranges (line, index, length).
 * @param {number} lineIndex Line index to check.
 * @param {number} index Index to check.
 * @param {number} length Length to check.
 * @returns {boolean} True iff the specified range is within.
 */
const withinAnyRange = (ranges, lineIndex, index, length) => (
  !ranges.every((span) => (
    (lineIndex !== span[0]) ||
    (index < span[1]) ||
    (index + length > span[1] + span[2])
  ))
);
module.exports.withinAnyRange = withinAnyRange;

// Returns a range object for a line by applying a RegExp
module.exports.rangeFromRegExp = function rangeFromRegExp(line, regexp) {
  let range = null;
  const match = line.match(regexp);
  if (match) {
    const column = match.index + 1;
    const length = match[0].length;
    range = [ column, length ];
  }
  return range;
};

// Determines if the front matter includes a title
module.exports.frontMatterHasTitle =
  function frontMatterHasTitle(frontMatterLines, frontMatterTitlePattern) {
    const ignoreFrontMatter =
      (frontMatterTitlePattern !== undefined) && !frontMatterTitlePattern;
    const frontMatterTitleRe =
      new RegExp(
        String(frontMatterTitlePattern || "^\\s*\"?title\"?\\s*[:=]"),
        "i"
      );
    return !ignoreFrontMatter &&
      frontMatterLines.some((line) => frontMatterTitleRe.test(line));
  };

/**
 * Calls the provided function for each link.
 *
 * @param {string} line Line of Markdown input.
 * @param {Function} handler Function taking (index, link, text, destination).
 * @returns {void}
 */
function forEachLink(line, handler) {
  // Helper to find matching close symbol for link text/destination
  const findClosingSymbol = (index) => {
    const begin = line[index];
    const end = (begin === "[") ? "]" : ")";
    let nesting = 0;
    let escaping = false;
    let pointy = false;
    for (let i = index + 1; i < line.length; i++) {
      const current = line[i];
      if (current === "\\") {
        escaping = !escaping;
      } else if (!escaping && (current === begin)) {
        nesting++;
      } else if (!escaping && (current === end)) {
        if (nesting > 0) {
          nesting--;
        } else if (!pointy) {
          // Return index after matching close symbol
          return i + 1;
        }
      } else if ((i === index + 1) && (begin === "(") && (current === "<")) {
        pointy = true;
      } else if (!escaping && pointy && current === ">") {
        pointy = false;
        nesting = 0;
      } else {
        escaping = false;
      }
    }
    // No match found
    return -1;
  };
  // Scan line for unescaped "[" character
  let escaping = false;
  for (let i = 0; i < line.length; i++) {
    const current = line[i];
    if (current === "\\") {
      escaping = !escaping;
    } else if (!escaping && (current === "[")) {
      // Scan for matching close "]" of link text
      const textEnd = findClosingSymbol(i);
      if (textEnd !== -1) {
        if ((line[textEnd] === "(") || (line[textEnd] === "[")) {
          // Scan for matching close ")" or "]" of link destination
          const destEnd = findClosingSymbol(textEnd);
          if (destEnd !== -1) {
            // Call handler with link text and destination
            const link = line.slice(i, destEnd);
            const text = line.slice(i, textEnd);
            const dest = line.slice(textEnd, destEnd);
            handler(i, link, text, dest);
            i = destEnd;
          }
        }
        if (i < textEnd) {
          // Call handler with link text only
          const text = line.slice(i, textEnd);
          handler(i, text, text);
          i = textEnd;
        }
      }
    } else {
      escaping = false;
    }
  }
}
module.exports.forEachLink = forEachLink;

/**
 * Returns a list of emphasis markers in code spans and links.
 *
 * @param {Object} params RuleParams instance.
 * @returns {number[][]} List of markers.
 */
function emphasisMarkersInContent(params) {
  const { lines } = params;
  const byLine = new Array(lines.length);
  // Search links
  for (const [ tokenLineIndex, tokenLine ] of lines.entries()) {
    const inLine = [];
    forEachLink(tokenLine, (index, match) => {
      let markerMatch = null;
      while ((markerMatch = emphasisMarkersRe.exec(match))) {
        inLine.push(index + markerMatch.index);
      }
    });
    byLine[tokenLineIndex] = inLine;
  }
  // Search code spans
  filterTokens(params, "inline", (token) => {
    const { children, lineNumber, map } = token;
    if (children.some((child) => child.type === "code_inline")) {
      const tokenLines = lines.slice(map[0], map[1]);
      forEachInlineCodeSpan(
        tokenLines.join("\n"),
        (code, lineIndex, column, tickCount) => {
          const codeLines = code.split(newLineRe);
          for (const [ codeLineIndex, codeLine ] of codeLines.entries()) {
            const byLineIndex = lineNumber - 1 + lineIndex + codeLineIndex;
            const inLine = byLine[byLineIndex];
            const codeLineOffset = codeLineIndex ? 0 : column - 1 + tickCount;
            let match = null;
            while ((match = emphasisMarkersRe.exec(codeLine))) {
              inLine.push(codeLineOffset + match.index);
            }
            byLine[byLineIndex] = inLine;
          }
        }
      );
    }
  });
  return byLine;
}
module.exports.emphasisMarkersInContent = emphasisMarkersInContent;

/**
 * Returns an object with information about reference links and images.
 *
 * @param {Object} lineMetadata Line metadata object.
 * @returns {Object} Reference link/image data.
 */
function getReferenceLinkImageData(lineMetadata) {
  // Initialize return values
  const references = new Map();
  const shortcuts = new Set();
  const definitions = new Map();
  const duplicateDefinitions = [];
  // Define helper functions
  const normalizeLabel = (s) => s.toLowerCase().trim().replace(/\s+/g, " ");
  const exclusions = [];
  const excluded = (match) => withinAnyRange(
    exclusions, 0, match.index, match[0].length
  );
  // Convert input to single-line so multi-line links/images are easier
  const lineOffsets = [];
  let currentOffset = 0;
  const contentLines = [];
  forEachLine(lineMetadata, (line, lineIndex, inCode) => {
    lineOffsets[lineIndex] = currentOffset;
    if (!inCode) {
      if (line.trim().length === 0) {
        // Allow RegExp to detect the end of a block
        line = "\0";
      }
      contentLines.push(line);
      currentOffset += line.length + 1;
    }
  });
  lineOffsets.push(currentOffset);
  const contentLine = contentLines.join(" ");
  // Determine single-line exclusions for inline code spans
  forEachInlineCodeSpan(contentLine, (code, lineIndex, columnIndex) => {
    exclusions.push([ 0, columnIndex, code.length ]);
  });
  // Identify all link/image reference definitions
  forEachLine(lineMetadata, (line, lineIndex, inCode) => {
    if (!inCode) {
      const linkReferenceDefinitionMatch = linkReferenceDefinitionRe.exec(line);
      if (linkReferenceDefinitionMatch) {
        const label = normalizeLabel(linkReferenceDefinitionMatch[1]);
        if (definitions.has(label)) {
          duplicateDefinitions.push([ label, lineIndex ]);
        } else {
          definitions.set(label, lineIndex);
        }
        exclusions.push([ 0, lineOffsets[lineIndex], line.length ]);
      }
    }
  });
  // Identify all link and image references
  let lineIndex = 0;
  const pendingContents = [
    {
      "content": contentLine,
      "contentLineIndex": 0,
      "contentIndex": 0,
      "topLevel": true
    }
  ];
  let pendingContent = null;
  while ((pendingContent = pendingContents.shift())) {
    const { content, contentLineIndex, contentIndex, topLevel } =
      pendingContent;
    let referenceLinkMatch = null;
    while ((referenceLinkMatch = referenceLinkRe.exec(content)) !== null) {
      const [ matchString, matchText, matchLabel ] = referenceLinkMatch;
      if (
        !matchString.startsWith("\\") &&
        !matchString.startsWith("!\\") &&
        !matchText.endsWith("\\") &&
        !(matchLabel || "").endsWith("\\") &&
        (topLevel || matchString.startsWith("!")) &&
        !excluded(referenceLinkMatch)
      ) {
        const shortcutLink = (matchLabel === undefined);
        const collapsedLink =
          (!shortcutLink && (matchLabel.length === 0));
        const label = normalizeLabel(
          (shortcutLink || collapsedLink) ? matchText : matchLabel
        );
        if (label.length > 0) {
          if (shortcutLink) {
            // Track, but don't validate due to ambiguity: "text [text] text"
            shortcuts.add(label);
          } else {
            const referenceindex = referenceLinkMatch.index;
            if (topLevel) {
              // Calculate line index
              while (lineOffsets[lineIndex + 1] <= referenceindex) {
                lineIndex++;
              }
            } else {
              // Use provided line index
              lineIndex = contentLineIndex;
            }
            const referenceIndex = referenceindex +
              (topLevel ? -lineOffsets[lineIndex] : contentIndex);
            // Track reference and location
            const referenceData = references.get(label) || [];
            referenceData.push([
              lineIndex,
              referenceIndex,
              matchString.length
            ]);
            references.set(label, referenceData);
            // Check for images embedded in top-level link text
            if (!matchString.startsWith("!")) {
              pendingContents.push(
                {
                  "content": matchText,
                  "contentLineIndex": lineIndex,
                  "contentIndex": referenceIndex + 1,
                  "topLevel": false
                }
              );
            }
          }
        }
      }
    }
  }
  return {
    references,
    shortcuts,
    definitions,
    duplicateDefinitions
  };
}
module.exports.getReferenceLinkImageData = getReferenceLinkImageData;

/**
 * Gets the most common line ending, falling back to the platform default.
 *
 * @param {string} input Markdown content to analyze.
 * @param {Object} [os] Node.js "os" module.
 * @returns {string} Preferred line ending.
 */
function getPreferredLineEnding(input, os) {
  let cr = 0;
  let lf = 0;
  let crlf = 0;
  const endings = input.match(newLineRe) || [];
  for (const ending of endings) {
    // eslint-disable-next-line default-case
    switch (ending) {
      case "\r":
        cr++;
        break;
      case "\n":
        lf++;
        break;
      case "\r\n":
        crlf++;
        break;
    }
  }
  let preferredLineEnding = null;
  if (!cr && !lf && !crlf) {
    preferredLineEnding = (os && os.EOL) || "\n";
  } else if ((lf >= crlf) && (lf >= cr)) {
    preferredLineEnding = "\n";
  } else if (crlf >= cr) {
    preferredLineEnding = "\r\n";
  } else {
    preferredLineEnding = "\r";
  }
  return preferredLineEnding;
}
module.exports.getPreferredLineEnding = getPreferredLineEnding;

/**
 * Normalizes the fields of a RuleOnErrorFixInfo instance.
 *
 * @param {Object} fixInfo RuleOnErrorFixInfo instance.
 * @param {number} [lineNumber] Line number.
 * @returns {Object} Normalized RuleOnErrorFixInfo instance.
 */
function normalizeFixInfo(fixInfo, lineNumber) {
  return {
    "lineNumber": fixInfo.lineNumber || lineNumber,
    "editColumn": fixInfo.editColumn || 1,
    "deleteCount": fixInfo.deleteCount || 0,
    "insertText": fixInfo.insertText || ""
  };
}

/**
 * Fixes the specified error on a line of Markdown content.
 *
 * @param {string} line Line of Markdown content.
 * @param {Object} fixInfo RuleOnErrorFixInfo instance.
 * @param {string} [lineEnding] Line ending to use.
 * @returns {string | null} Fixed content.
 */
function applyFix(line, fixInfo, lineEnding) {
  const { editColumn, deleteCount, insertText } = normalizeFixInfo(fixInfo);
  const editIndex = editColumn - 1;
  return (deleteCount === -1) ?
    null :
    line.slice(0, editIndex) +
    insertText.replace(/\n/g, lineEnding || "\n") +
    line.slice(editIndex + deleteCount);
}
module.exports.applyFix = applyFix;

/**
 * Applies as many fixes as possible to Markdown content.
 *
 * @param {string} input Lines of Markdown content.
 * @param {Object[]} errors RuleOnErrorInfo instances.
 * @returns {string} Corrected content.
 */
function applyFixes(input, errors) {
  const lineEnding = getPreferredLineEnding(input, __nccwpck_require__(2087));
  const lines = input.split(newLineRe);
  // Normalize fixInfo objects
  let fixInfos = errors
    .filter((error) => error.fixInfo)
    .map((error) => normalizeFixInfo(error.fixInfo, error.lineNumber));
  // Sort bottom-to-top, line-deletes last, right-to-left, long-to-short
  fixInfos.sort((a, b) => {
    const aDeletingLine = (a.deleteCount === -1);
    const bDeletingLine = (b.deleteCount === -1);
    return (
      (b.lineNumber - a.lineNumber) ||
      (aDeletingLine ? 1 : (bDeletingLine ? -1 : 0)) ||
      (b.editColumn - a.editColumn) ||
      (b.insertText.length - a.insertText.length)
    );
  });
  // Remove duplicate entries (needed for following collapse step)
  let lastFixInfo = {};
  fixInfos = fixInfos.filter((fixInfo) => {
    const unique = (
      (fixInfo.lineNumber !== lastFixInfo.lineNumber) ||
      (fixInfo.editColumn !== lastFixInfo.editColumn) ||
      (fixInfo.deleteCount !== lastFixInfo.deleteCount) ||
      (fixInfo.insertText !== lastFixInfo.insertText)
    );
    lastFixInfo = fixInfo;
    return unique;
  });
  // Collapse insert/no-delete and no-insert/delete for same line/column
  lastFixInfo = {
    "lineNumber": -1
  };
  for (const fixInfo of fixInfos) {
    if (
      (fixInfo.lineNumber === lastFixInfo.lineNumber) &&
      (fixInfo.editColumn === lastFixInfo.editColumn) &&
      !fixInfo.insertText &&
      (fixInfo.deleteCount > 0) &&
      lastFixInfo.insertText &&
      !lastFixInfo.deleteCount) {
      fixInfo.insertText = lastFixInfo.insertText;
      lastFixInfo.lineNumber = 0;
    }
    lastFixInfo = fixInfo;
  }
  fixInfos = fixInfos.filter((fixInfo) => fixInfo.lineNumber);
  // Apply all (remaining/updated) fixes
  let lastLineIndex = -1;
  let lastEditIndex = -1;
  for (const fixInfo of fixInfos) {
    const { lineNumber, editColumn, deleteCount } = fixInfo;
    const lineIndex = lineNumber - 1;
    const editIndex = editColumn - 1;
    if (
      (lineIndex !== lastLineIndex) ||
      (deleteCount === -1) ||
      ((editIndex + deleteCount) <=
        (lastEditIndex - ((deleteCount > 0) ? 0 : 1)))
    ) {
      // @ts-ignore
      lines[lineIndex] = applyFix(lines[lineIndex], fixInfo, lineEnding);
    }
    lastLineIndex = lineIndex;
    lastEditIndex = editIndex;
  }
  // Return corrected input
  return lines.filter((line) => line !== null).join(lineEnding);
}
module.exports.applyFixes = applyFixes;

/**
 * Gets the range and fixInfo values for reporting an error if the expected
 * text is found on the specified line.
 *
 * @param {string[]} lines Lines of Markdown content.
 * @param {number} lineIndex Line index to check.
 * @param {string} search Text to search for.
 * @param {string} replace Text to replace with.
 * @param {number} [instance] Instance on the line (1-based).
 * @returns {Object} Range and fixInfo wrapper.
 */
module.exports.getRangeAndFixInfoIfFound =
  (lines, lineIndex, search, replace, instance = 1) => {
    let range = null;
    let fixInfo = null;
    let searchIndex = -1;
    while (instance > 0) {
      searchIndex = lines[lineIndex].indexOf(search, searchIndex + 1);
      instance--;
    }
    if (searchIndex !== -1) {
      const column = searchIndex + 1;
      const length = search.length;
      range = [ column, length ];
      fixInfo = {
        "editColumn": column,
        "deleteCount": length,
        "insertText": replace
      };
    }
    return {
      range,
      fixInfo
    };
  };

/**
 * Gets the next (subsequent) child token if it is of the expected type.
 *
 * @param {Object} parentToken Parent token.
 * @param {Object} childToken Child token basis.
 * @param {string} nextType Token type of next token.
 * @param {string} nextNextType Token type of next-next token.
 * @returns {Object} Next token.
 */
function getNextChildToken(parentToken, childToken, nextType, nextNextType) {
  const { children } = parentToken;
  const index = children.indexOf(childToken);
  if (
    (index !== -1) &&
    (children.length > index + 2) &&
    (children[index + 1].type === nextType) &&
    (children[index + 2].type === nextNextType)
  ) {
    return children[index + 1];
  }
  return null;
}
module.exports.getNextChildToken = getNextChildToken;

/**
 * Expands a path with a tilde to an absolute path.
 *
 * @param {string} file Path that may begin with a tilde.
 * @param {Object} os Node.js "os" module.
 * @returns {string} Absolute path (or original path).
 */
function expandTildePath(file, os) {
  const homedir = os && os.homedir();
  return homedir ? file.replace(/^~($|\/|\\)/, `${homedir}$1`) : file;
}
module.exports.expandTildePath = expandTildePath;


/***/ }),

/***/ 3266:
/***/ ((module) => {

"use strict";
// @ts-check



const map = new Map();

module.exports.set = (keyValuePairs) => {
  for (const [ key, value ] of Object.entries(keyValuePairs)) {
    map.set(key, value);
  }
};
module.exports.clear = () => map.clear();

module.exports.codeBlockAndSpanRanges =
  () => map.get("codeBlockAndSpanRanges");
module.exports.flattenedLists =
  () => map.get("flattenedLists");
module.exports.htmlElementRanges =
  () => map.get("htmlElementRanges");
module.exports.lineMetadata =
  () => map.get("lineMetadata");
module.exports.referenceLinkImageData =
  () => map.get("referenceLinkImageData");


/***/ }),

/***/ 5039:
/***/ ((module) => {

"use strict";
// @ts-check



module.exports.deprecatedRuleNames = [ "MD002", "MD006" ];
module.exports.homepage = "https://github.com/DavidAnson/markdownlint";
module.exports.version = "0.26.0";


/***/ }),

/***/ 3611:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const path = __nccwpck_require__(5622);
const { promisify } = __nccwpck_require__(1669);
const markdownIt = __nccwpck_require__(8561);
const { deprecatedRuleNames } = __nccwpck_require__(5039);
const rules = __nccwpck_require__(7494);
const helpers = __nccwpck_require__(2935);
const cache = __nccwpck_require__(3266);

// @ts-ignore
// eslint-disable-next-line camelcase, max-len, no-inline-comments, no-undef
const dynamicRequire = (typeof require === "undefined") ? require : /* c8 ignore next */ eval("require");
// Capture native require implementation for dynamic loading of modules

/**
 * Validate the list of rules for structure and reuse.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @returns {Error | null} Error message if validation fails.
 */
function validateRuleList(ruleList, synchronous) {
  let result = null;
  if (ruleList.length === rules.length) {
    // No need to validate if only using built-in rules
    return result;
  }
  const allIds = {};
  for (const [ index, rule ] of ruleList.entries()) {
    const customIndex = index - rules.length;
    // eslint-disable-next-line no-inner-declarations, jsdoc/require-jsdoc
    function newError(property) {
      return new Error(
        "Property '" + property + "' of custom rule at index " +
        customIndex + " is incorrect.");
    }
    for (const property of [ "names", "tags" ]) {
      const value = rule[property];
      if (!result &&
        (!value || !Array.isArray(value) || (value.length === 0) ||
         !value.every(helpers.isString) || value.some(helpers.isEmptyString))) {
        result = newError(property);
      }
    }
    for (const propertyInfo of [
      [ "description", "string" ],
      [ "function", "function" ]
    ]) {
      const property = propertyInfo[0];
      const value = rule[property];
      if (!result && (!value || (typeof value !== propertyInfo[1]))) {
        result = newError(property);
      }
    }
    if (
      !result &&
      rule.information &&
      (Object.getPrototypeOf(rule.information) !== URL.prototype)
    ) {
      result = newError("information");
    }
    if (
      !result &&
      (rule.asynchronous !== undefined) &&
      (typeof rule.asynchronous !== "boolean")
    ) {
      result = newError("asynchronous");
    }
    if (!result && rule.asynchronous && synchronous) {
      result = new Error(
        "Custom rule " + rule.names.join("/") + " at index " + customIndex +
        " is asynchronous and can not be used in a synchronous context."
      );
    }
    if (!result) {
      for (const name of rule.names) {
        const nameUpper = name.toUpperCase();
        if (!result && (allIds[nameUpper] !== undefined)) {
          result = new Error("Name '" + name + "' of custom rule at index " +
            customIndex + " is already used as a name or tag.");
        }
        allIds[nameUpper] = true;
      }
      for (const tag of rule.tags) {
        const tagUpper = tag.toUpperCase();
        if (!result && allIds[tagUpper]) {
          result = new Error("Tag '" + tag + "' of custom rule at index " +
            customIndex + " is already used as a name.");
        }
        allIds[tagUpper] = false;
      }
    }
  }
  return result;
}

/**
 * Creates a LintResults instance with toString for pretty display.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {LintResults} New LintResults instance.
 */
function newResults(ruleList) {
  const lintResults = {};
  // eslint-disable-next-line jsdoc/require-jsdoc
  function toString(useAlias) {
    let ruleNameToRule = null;
    const results = [];
    const keys = Object.keys(lintResults);
    keys.sort();
    for (const file of keys) {
      const fileResults = lintResults[file];
      if (Array.isArray(fileResults)) {
        for (const result of fileResults) {
          const ruleMoniker = result.ruleNames ?
            result.ruleNames.join("/") :
            (result.ruleName + "/" + result.ruleAlias);
          results.push(
            file + ": " +
            result.lineNumber + ": " +
            ruleMoniker + " " +
            result.ruleDescription +
            (result.errorDetail ?
              " [" + result.errorDetail + "]" :
              "") +
            (result.errorContext ?
              " [Context: \"" + result.errorContext + "\"]" :
              ""));
        }
      } else {
        if (!ruleNameToRule) {
          ruleNameToRule = {};
          for (const rule of ruleList) {
            const ruleName = rule.names[0].toUpperCase();
            ruleNameToRule[ruleName] = rule;
          }
        }
        for (const [ ruleName, ruleResults ] of Object.entries(fileResults)) {
          const rule = ruleNameToRule[ruleName.toUpperCase()];
          for (const lineNumber of ruleResults) {
            // @ts-ignore
            const nameIndex = Math.min(useAlias ? 1 : 0, rule.names.length - 1);
            const result =
              file + ": " +
              lineNumber + ": " +
              // @ts-ignore
              rule.names[nameIndex] + " " +
              // @ts-ignore
              rule.description;
            results.push(result);
          }
        }
      }
    }
    return results.join("\n");
  }
  Object.defineProperty(lintResults, "toString", { "value": toString });
  // @ts-ignore
  return lintResults;
}

/**
 * Remove front matter (if present at beginning of content).
 *
 * @param {string} content Markdown content.
 * @param {RegExp} frontMatter Regular expression to match front matter.
 * @returns {Object} Trimmed content and front matter lines.
 */
function removeFrontMatter(content, frontMatter) {
  let frontMatterLines = [];
  if (frontMatter) {
    const frontMatterMatch = content.match(frontMatter);
    if (frontMatterMatch && !frontMatterMatch.index) {
      const contentMatched = frontMatterMatch[0];
      content = content.slice(contentMatched.length);
      frontMatterLines = contentMatched.split(helpers.newLineRe);
      if ((frontMatterLines.length > 0) &&
          (frontMatterLines[frontMatterLines.length - 1] === "")) {
        frontMatterLines.length--;
      }
    }
  }
  return {
    "content": content,
    "frontMatterLines": frontMatterLines
  };
}

/**
 * Freeze all freeze-able members of a token and its children.
 *
 * @param {MarkdownItToken} token A markdown-it token.
 * @returns {void}
 */
function freezeToken(token) {
  if (token.attrs) {
    for (const attr of token.attrs) {
      Object.freeze(attr);
    }
    Object.freeze(token.attrs);
  }
  if (token.children) {
    for (const child of token.children) {
      freezeToken(child);
    }
    Object.freeze(token.children);
  }
  if (token.map) {
    Object.freeze(token.map);
  }
  Object.freeze(token);
}

/**
 * Annotate tokens with line/lineNumber and freeze them.
 *
 * @param {MarkdownItToken[]} tokens Array of markdown-it tokens.
 * @param {string[]} lines Lines of Markdown content.
 * @returns {void}
 */
function annotateAndFreezeTokens(tokens, lines) {
  let trMap = null;
  for (const token of tokens) {
    // Provide missing maps for table content
    if (token.type === "tr_open") {
      trMap = token.map;
    } else if (token.type === "tr_close") {
      trMap = null;
    }
    if (!token.map && trMap) {
      token.map = [ ...trMap ];
    }
    // Adjust maps for math blocks
    if (helpers.isMathBlock(token) && token.map[1]) {
      // markdown-it-texmath plugin does not account for math_block_end
      token.map[1]++;
    }
    // Update token metadata
    if (token.map) {
      token.line = lines[token.map[0]];
      token.lineNumber = token.map[0] + 1;
      // Trim bottom of token to exclude whitespace lines
      while (token.map[1] && !((lines[token.map[1] - 1] || "").trim())) {
        token.map[1]--;
      }
    }
    // Annotate children with lineNumber
    if (token.children) {
      const codeSpanExtraLines = [];
      if (token.children.some((child) => child.type === "code_inline")) {
        helpers.forEachInlineCodeSpan(token.content, (code) => {
          codeSpanExtraLines.push(code.split(helpers.newLineRe).length - 1);
        });
      }
      let lineNumber = token.lineNumber;
      for (const child of token.children) {
        child.lineNumber = lineNumber;
        child.line = lines[lineNumber - 1];
        if ((child.type === "softbreak") || (child.type === "hardbreak")) {
          lineNumber++;
        } else if (child.type === "code_inline") {
          lineNumber += codeSpanExtraLines.shift();
        }
      }
    }
    freezeToken(token);
  }
  Object.freeze(tokens);
}

/**
 * Map rule names/tags to canonical rule name.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {Object.<string, string[]>} Map of alias to rule name.
 */
function mapAliasToRuleNames(ruleList) {
  const aliasToRuleNames = {};
  // const tagToRuleNames = {};
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    // The following is useful for updating README.md:
    // console.log(
    //   "* **[" + ruleName + "](doc/Rules.md#" + ruleName.toLowerCase() +
    //    ")** *" + rule.names.slice(1).join("/") + "* - " + rule.description);
    for (const name of rule.names) {
      const nameUpper = name.toUpperCase();
      aliasToRuleNames[nameUpper] = [ ruleName ];
    }
    for (const tag of rule.tags) {
      const tagUpper = tag.toUpperCase();
      const ruleNames = aliasToRuleNames[tagUpper] || [];
      ruleNames.push(ruleName);
      aliasToRuleNames[tagUpper] = ruleNames;
      // tagToRuleNames[tag] = ruleName;
    }
  }
  // The following is useful for updating README.md:
  // Object.keys(tagToRuleNames).sort().forEach(function forTag(tag) {
  //   console.log("* **" + tag + "** - " +
  //     aliasToRuleNames[tag.toUpperCase()].join(", "));
  // });
  // @ts-ignore
  return aliasToRuleNames;
}

/**
 * Apply (and normalize) configuration object.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Configuration} config Configuration object.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule
 * names.
 * @returns {Configuration} Effective configuration.
 */
function getEffectiveConfig(ruleList, config, aliasToRuleNames) {
  const defaultKey = Object.keys(config).filter(
    (key) => key.toUpperCase() === "DEFAULT"
  );
  const ruleDefault = (defaultKey.length === 0) || !!config[defaultKey[0]];
  const effectiveConfig = {};
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    effectiveConfig[ruleName] = ruleDefault;
  }
  for (const ruleName of deprecatedRuleNames) {
    effectiveConfig[ruleName] = false;
  }
  for (const key of Object.keys(config)) {
    let value = config[key];
    if (value) {
      if (!(value instanceof Object)) {
        value = {};
      }
    } else {
      value = false;
    }
    const keyUpper = key.toUpperCase();
    for (const ruleName of (aliasToRuleNames[keyUpper] || [])) {
      effectiveConfig[ruleName] = value;
    }
  }
  return effectiveConfig;
}

/**
 * Parse the content of a configuration file.
 *
 * @param {string} name Name of the configuration file.
 * @param {string} content Configuration content.
 * @param {ConfigurationParser[] | null} [parsers] Parsing function(s).
 * @returns {Object} Configuration object and error message.
 */
function parseConfiguration(name, content, parsers) {
  let config = null;
  let message = "";
  const errors = [];
  let index = 0;
  // Try each parser
  (parsers || [ JSON.parse ]).every((parser) => {
    try {
      config = parser(content);
    } catch (error) {
      errors.push(`Parser ${index++}: ${error.message}`);
    }
    return !config;
  });
  // Message if unable to parse
  if (!config) {
    errors.unshift(`Unable to parse '${name}'`);
    message = errors.join("; ");
  }
  return {
    config,
    message
  };
}

/**
 * Create a mapping of enabled rules per line.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {string[]} lines List of content lines.
 * @param {string[]} frontMatterLines List of front matter lines.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | null} configParsers Configuration parsers.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule
 * names.
 * @returns {Object} Effective configuration and enabled rules per line number.
 */
function getEnabledRulesPerLineNumber(
  ruleList,
  lines,
  frontMatterLines,
  noInlineConfig,
  config,
  configParsers,
  aliasToRuleNames) {
  // Shared variables
  let enabledRules = {};
  let capturedRules = {};
  const allRuleNames = [];
  const enabledRulesPerLineNumber = new Array(1 + frontMatterLines.length);
  // Helper functions
  // eslint-disable-next-line jsdoc/require-jsdoc
  function handleInlineConfig(input, forEachMatch, forEachLine) {
    for (const [ lineIndex, line ] of input.entries()) {
      if (!noInlineConfig) {
        let match = null;
        while ((match = helpers.inlineCommentStartRe.exec(line))) {
          const action = match[2].toUpperCase();
          const startIndex = match.index + match[1].length;
          const endIndex = line.indexOf("-->", startIndex);
          if (endIndex === -1) {
            break;
          }
          const parameter = line.slice(startIndex, endIndex);
          forEachMatch(action, parameter, lineIndex + 1);
        }
      }
      if (forEachLine) {
        forEachLine();
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function configureFile(action, parameter) {
    if (action === "CONFIGURE-FILE") {
      const { "config": parsed } = parseConfiguration(
        "CONFIGURE-FILE", parameter, configParsers
      );
      if (parsed) {
        config = {
          ...config,
          ...parsed
        };
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function applyEnableDisable(action, parameter, state) {
    state = { ...state };
    const enabled = (action.startsWith("ENABLE"));
    const trimmed = parameter && parameter.trim();
    const items = trimmed ? trimmed.toUpperCase().split(/\s+/) : allRuleNames;
    for (const nameUpper of items) {
      for (const ruleName of (aliasToRuleNames[nameUpper] || [])) {
        state[ruleName] = enabled;
      }
    }
    return state;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function enableDisableFile(action, parameter) {
    if ((action === "ENABLE-FILE") || (action === "DISABLE-FILE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function captureRestoreEnableDisable(action, parameter) {
    if (action === "CAPTURE") {
      capturedRules = enabledRules;
    } else if (action === "RESTORE") {
      enabledRules = capturedRules;
    } else if ((action === "ENABLE") || (action === "DISABLE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function updateLineState() {
    enabledRulesPerLineNumber.push(enabledRules);
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function disableLineNextLine(action, parameter, lineNumber) {
    const disableLine = (action === "DISABLE-LINE");
    const disableNextLine = (action === "DISABLE-NEXT-LINE");
    if (disableLine || disableNextLine) {
      const nextLineNumber =
        frontMatterLines.length + lineNumber + (disableNextLine ? 1 : 0);
      enabledRulesPerLineNumber[nextLineNumber] =
        applyEnableDisable(
          action,
          parameter,
          enabledRulesPerLineNumber[nextLineNumber] || {}
        );
    }
  }
  // Handle inline comments
  handleInlineConfig([ lines.join("\n") ], configureFile);
  const effectiveConfig = getEffectiveConfig(
    ruleList, config, aliasToRuleNames);
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    allRuleNames.push(ruleName);
    enabledRules[ruleName] = !!effectiveConfig[ruleName];
  }
  capturedRules = enabledRules;
  handleInlineConfig(lines, enableDisableFile);
  handleInlineConfig(lines, captureRestoreEnableDisable, updateLineState);
  handleInlineConfig(lines, disableLineNextLine);
  // Return results
  return {
    effectiveConfig,
    enabledRulesPerLineNumber
  };
}

/**
 * Lints a string containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {string} name Identifier for the content.
 * @param {string} content Markdown content.
 * @param {Object} md Instance of markdown-it.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | null} configParsers Configuration parsers.
 * @param {RegExp} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {number} resultVersion Version of the LintResults object to return.
 * @param {Function} callback Callback (err, result) function.
 * @returns {void}
 */
function lintContent(
  ruleList,
  name,
  content,
  md,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  resultVersion,
  callback) {
  // Remove UTF-8 byte order marker (if present)
  content = content.replace(/^\uFEFF/, "");
  // Remove front matter
  const removeFrontMatterResult = removeFrontMatter(content, frontMatter);
  const { frontMatterLines } = removeFrontMatterResult;
  content = removeFrontMatterResult.content;
  // Get enabled rules per line (with HTML comments present)
  const { effectiveConfig, enabledRulesPerLineNumber } =
    getEnabledRulesPerLineNumber(
      ruleList,
      content.split(helpers.newLineRe),
      frontMatterLines,
      noInlineConfig,
      config,
      configParsers,
      mapAliasToRuleNames(ruleList)
    );
  // Hide the content of HTML comments from rules, etc.
  content = helpers.clearHtmlCommentText(content);
  // Parse content into tokens and lines
  const tokens = md.parse(content, {});
  const lines = content.split(helpers.newLineRe);
  annotateAndFreezeTokens(tokens, lines);
  // Create (frozen) parameters for rules
  const paramsBase = {
    name,
    tokens,
    "lines": Object.freeze(lines),
    "frontMatterLines": Object.freeze(frontMatterLines)
  };
  const lineMetadata =
    helpers.getLineMetadata(paramsBase);
  const codeBlockAndSpanRanges =
    helpers.codeBlockAndSpanRanges(paramsBase, lineMetadata);
  const flattenedLists =
    helpers.flattenLists(paramsBase.tokens);
  const htmlElementRanges =
    helpers.htmlElementRanges(paramsBase, lineMetadata);
  const referenceLinkImageData =
    helpers.getReferenceLinkImageData(lineMetadata);
  cache.set({
    codeBlockAndSpanRanges,
    flattenedLists,
    htmlElementRanges,
    lineMetadata,
    referenceLinkImageData
  });
  // Function to run for each rule
  let results = [];
  // eslint-disable-next-line jsdoc/require-jsdoc
  function forRule(rule) {
    // Configure rule
    const ruleName = rule.names[0].toUpperCase();
    const params = {
      ...paramsBase,
      "config": effectiveConfig[ruleName]
    };
    // eslint-disable-next-line jsdoc/require-jsdoc
    function throwError(property) {
      throw new Error(
        "Property '" + property + "' of onError parameter is incorrect.");
    }
    // eslint-disable-next-line jsdoc/require-jsdoc
    function onError(errorInfo) {
      if (!errorInfo ||
        !helpers.isNumber(errorInfo.lineNumber) ||
        (errorInfo.lineNumber < 1) ||
        (errorInfo.lineNumber > lines.length)) {
        throwError("lineNumber");
      }
      const lineNumber = errorInfo.lineNumber + frontMatterLines.length;
      if (!enabledRulesPerLineNumber[lineNumber][ruleName]) {
        return;
      }
      if (errorInfo.detail &&
        !helpers.isString(errorInfo.detail)) {
        throwError("detail");
      }
      if (errorInfo.context &&
        !helpers.isString(errorInfo.context)) {
        throwError("context");
      }
      if (errorInfo.range &&
        (!Array.isArray(errorInfo.range) ||
          (errorInfo.range.length !== 2) ||
          !helpers.isNumber(errorInfo.range[0]) ||
          (errorInfo.range[0] < 1) ||
          !helpers.isNumber(errorInfo.range[1]) ||
          (errorInfo.range[1] < 1) ||
          ((errorInfo.range[0] + errorInfo.range[1] - 1) >
          lines[errorInfo.lineNumber - 1].length))) {
        throwError("range");
      }
      const fixInfo = errorInfo.fixInfo;
      const cleanFixInfo = {};
      if (fixInfo) {
        if (!helpers.isObject(fixInfo)) {
          throwError("fixInfo");
        }
        if (fixInfo.lineNumber !== undefined) {
          if ((!helpers.isNumber(fixInfo.lineNumber) ||
            (fixInfo.lineNumber < 1) ||
            (fixInfo.lineNumber > lines.length))) {
            throwError("fixInfo.lineNumber");
          }
          cleanFixInfo.lineNumber =
            fixInfo.lineNumber + frontMatterLines.length;
        }
        const effectiveLineNumber = fixInfo.lineNumber || errorInfo.lineNumber;
        if (fixInfo.editColumn !== undefined) {
          if ((!helpers.isNumber(fixInfo.editColumn) ||
            (fixInfo.editColumn < 1) ||
            (fixInfo.editColumn >
              lines[effectiveLineNumber - 1].length + 1))) {
            throwError("fixInfo.editColumn");
          }
          cleanFixInfo.editColumn = fixInfo.editColumn;
        }
        if (fixInfo.deleteCount !== undefined) {
          if ((!helpers.isNumber(fixInfo.deleteCount) ||
            (fixInfo.deleteCount < -1) ||
            (fixInfo.deleteCount >
              lines[effectiveLineNumber - 1].length))) {
            throwError("fixInfo.deleteCount");
          }
          cleanFixInfo.deleteCount = fixInfo.deleteCount;
        }
        if (fixInfo.insertText !== undefined) {
          if (!helpers.isString(fixInfo.insertText)) {
            throwError("fixInfo.insertText");
          }
          cleanFixInfo.insertText = fixInfo.insertText;
        }
      }
      results.push({
        lineNumber,
        "ruleName": rule.names[0],
        "ruleNames": rule.names,
        "ruleDescription": rule.description,
        "ruleInformation": rule.information ? rule.information.href : null,
        "errorDetail": errorInfo.detail || null,
        "errorContext": errorInfo.context || null,
        "errorRange": errorInfo.range ? [ ...errorInfo.range ] : null,
        "fixInfo": fixInfo ? cleanFixInfo : null
      });
    }
    // Call (possibly external) rule function to report errors
    const catchCallsOnError = (error) => onError({
      "lineNumber": 1,
      "detail": `This rule threw an exception: ${error.message || error}`
    });
    const invokeRuleFunction = () => rule.function(params, onError);
    if (rule.asynchronous) {
      // Asynchronous rule, ensure it returns a Promise
      const ruleFunctionPromise =
        Promise.resolve().then(invokeRuleFunction);
      return handleRuleFailures ?
        ruleFunctionPromise.catch(catchCallsOnError) :
        ruleFunctionPromise;
    }
    // Synchronous rule
    try {
      invokeRuleFunction();
    } catch (error) {
      if (handleRuleFailures) {
        catchCallsOnError(error);
      } else {
        throw error;
      }
    }
    return null;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function formatResults() {
    // Sort results by rule name by line number
    results.sort((a, b) => (
      a.ruleName.localeCompare(b.ruleName) ||
      a.lineNumber - b.lineNumber
    ));
    if (resultVersion < 3) {
      // Remove fixInfo and multiple errors for the same rule and line number
      const noPrevious = {
        "ruleName": null,
        "lineNumber": -1
      };
      results = results.filter((error, index, array) => {
        delete error.fixInfo;
        const previous = array[index - 1] || noPrevious;
        return (
          (error.ruleName !== previous.ruleName) ||
          (error.lineNumber !== previous.lineNumber)
        );
      });
    }
    if (resultVersion === 0) {
      // Return a dictionary of rule->[line numbers]
      const dictionary = {};
      for (const error of results) {
        const ruleLines = dictionary[error.ruleName] || [];
        ruleLines.push(error.lineNumber);
        dictionary[error.ruleName] = ruleLines;
      }
      // @ts-ignore
      results = dictionary;
    } else if (resultVersion === 1) {
      // Use ruleAlias instead of ruleNames
      for (const error of results) {
        error.ruleAlias = error.ruleNames[1] || error.ruleName;
        delete error.ruleNames;
      }
    } else {
      // resultVersion 2 or 3: Remove unwanted ruleName
      for (const error of results) {
        delete error.ruleName;
      }
    }
    return results;
  }
  // Run all rules
  const ruleListAsync = ruleList.filter((rule) => rule.asynchronous);
  const ruleListSync = ruleList.filter((rule) => !rule.asynchronous);
  const ruleListAsyncFirst = [
    ...ruleListAsync,
    ...ruleListSync
  ];
  const callbackSuccess = () => callback(null, formatResults());
  const callbackError =
    (error) => callback(error instanceof Error ? error : new Error(error));
  try {
    const ruleResults = ruleListAsyncFirst.map(forRule);
    if (ruleListAsync.length > 0) {
      Promise.all(ruleResults.slice(0, ruleListAsync.length))
        .then(callbackSuccess)
        .catch(callbackError);
    } else {
      callbackSuccess();
    }
  } catch (error) {
    callbackError(error);
  } finally {
    cache.clear();
  }
}

/**
 * Lints a file containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {string} file Path of file to lint.
 * @param {Object} md Instance of markdown-it.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | null} configParsers Configuration parsers.
 * @param {RegExp} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {number} resultVersion Version of the LintResults object to return.
 * @param {Object} fs File system implementation.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {Function} callback Callback (err, result) function.
 * @returns {void}
 */
function lintFile(
  ruleList,
  file,
  md,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  resultVersion,
  fs,
  synchronous,
  callback) {
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintContentWrapper(err, content) {
    if (err) {
      return callback(err);
    }
    return lintContent(
      ruleList,
      file,
      content,
      md,
      config,
      configParsers,
      frontMatter,
      handleRuleFailures,
      noInlineConfig,
      resultVersion,
      callback
    );
  }
  // Make a/synchronous call to read file
  if (synchronous) {
    lintContentWrapper(null, fs.readFileSync(file, "utf8"));
  } else {
    fs.readFile(file, "utf8", lintContentWrapper);
  }
}

/**
 * Lint files and strings specified in the Options object.
 *
 * @param {Options} options Options object.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {Function} callback Callback (err, result) function.
 * @returns {void}
 */
function lintInput(options, synchronous, callback) {
  // Normalize inputs
  options = options || {};
  callback = callback || function noop() {};
  // eslint-disable-next-line unicorn/prefer-spread
  const ruleList = rules.concat(options.customRules || []);
  const ruleErr = validateRuleList(ruleList, synchronous);
  if (ruleErr) {
    callback(ruleErr);
    return;
  }
  let files = [];
  if (Array.isArray(options.files)) {
    files = [ ...options.files ];
  } else if (options.files) {
    files = [ String(options.files) ];
  }
  const strings = options.strings || {};
  const stringsKeys = Object.keys(strings);
  const config = options.config || { "default": true };
  const configParsers = options.configParsers || null;
  const frontMatter = (options.frontMatter === undefined) ?
    helpers.frontMatterRe : options.frontMatter;
  const handleRuleFailures = !!options.handleRuleFailures;
  const noInlineConfig = !!options.noInlineConfig;
  const resultVersion = (options.resultVersion === undefined) ?
    3 : options.resultVersion;
  const md = markdownIt({ "html": true });
  const markdownItPlugins = options.markdownItPlugins || [];
  for (const plugin of markdownItPlugins) {
    // @ts-ignore
    md.use(...plugin);
  }
  const fs = options.fs || __nccwpck_require__(5747);
  const results = newResults(ruleList);
  let done = false;
  let concurrency = 0;
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintWorker() {
    let currentItem = null;
    // eslint-disable-next-line jsdoc/require-jsdoc
    function lintWorkerCallback(err, result) {
      concurrency--;
      if (err) {
        done = true;
        return callback(err);
      }
      results[currentItem] = result;
      if (!synchronous) {
        lintWorker();
      }
      return null;
    }
    if (done) {
      // Abort for error or nothing left to do
    } else if (files.length > 0) {
      // Lint next file
      concurrency++;
      currentItem = files.shift();
      lintFile(
        ruleList,
        currentItem,
        md,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        resultVersion,
        fs,
        synchronous,
        lintWorkerCallback
      );
    } else if ((currentItem = stringsKeys.shift())) {
      // Lint next string
      concurrency++;
      lintContent(
        ruleList,
        currentItem,
        strings[currentItem] || "",
        md,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        resultVersion,
        lintWorkerCallback
      );
    } else if (concurrency === 0) {
      // Finish
      done = true;
      return callback(null, results);
    }
    return null;
  }
  if (synchronous) {
    while (!done) {
      lintWorker();
    }
  } else {
    // Testing on a Raspberry Pi 4 Model B with an artificial 5ms file access
    // delay suggests that a concurrency factor of 8 can eliminate the impact
    // of that delay (i.e., total time is the same as with no delay).
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
  }
}

/**
 * Lint specified Markdown files.
 *
 * @param {Options} options Configuration options.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function markdownlint(options, callback) {
  return lintInput(options, false, callback);
}

const markdownlintPromisify = promisify && promisify(markdownlint);

/**
 * Lint specified Markdown files.
 *
 * @param {Options} options Configuration options.
 * @returns {Promise<LintResults>} Results object.
 */
function markdownlintPromise(options) {
  // @ts-ignore
  return markdownlintPromisify(options);
}

/**
 * Lint specified Markdown files synchronously.
 *
 * @param {Options} options Configuration options.
 * @returns {LintResults} Results object.
 */
function markdownlintSync(options) {
  let results = {};
  lintInput(options, true, function callback(error, res) {
    if (error) {
      throw error;
    }
    results = res;
  });
  // @ts-ignore
  return results;
}

/**
 * Resolve referenced "extends" path in a configuration file
 * using path.resolve() with require.resolve() as a fallback.
 *
 * @param {string} configFile Configuration file name.
 * @param {string} referenceId Referenced identifier to resolve.
 * @param {Object} fs File system implementation.
 * @param {ResolveConfigExtendsCallback} callback Callback (err, result)
 * function.
 * @returns {void}
 */
function resolveConfigExtends(configFile, referenceId, fs, callback) {
  const configFileDirname = path.dirname(configFile);
  const resolvedExtendsFile = path.resolve(configFileDirname, referenceId);
  fs.access(resolvedExtendsFile, (err) => {
    if (err) {
      // Not a file, try require.resolve
      try {
        return callback(null, dynamicRequire.resolve(
          referenceId,
          { "paths": [ configFileDirname ] }
        ));
      } catch {
        // Unable to resolve, use resolvedExtendsFile
      }
    }
    return callback(null, resolvedExtendsFile);
  });
}

/**
 * Resolve referenced "extends" path in a configuration file
 * using path.resolve() with require.resolve() as a fallback.
 *
 * @param {string} configFile Configuration file name.
 * @param {string} referenceId Referenced identifier to resolve.
 * @param {Object} fs File system implementation.
 * @returns {string} Resolved path to file.
 */
function resolveConfigExtendsSync(configFile, referenceId, fs) {
  const configFileDirname = path.dirname(configFile);
  const resolvedExtendsFile = path.resolve(configFileDirname, referenceId);
  try {
    fs.accessSync(resolvedExtendsFile);
    return resolvedExtendsFile;
  } catch {
    // Not a file, try require.resolve
  }
  try {
    return dynamicRequire.resolve(
      referenceId,
      { "paths": [ configFileDirname ] }
    );
  } catch {
    // Unable to resolve, return resolvedExtendsFile
  }
  return resolvedExtendsFile;
}

/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[] | ReadConfigCallback} parsers Parsing
 * function(s).
 * @param {Object} [fs] File system implementation.
 * @param {ReadConfigCallback} [callback] Callback (err, result) function.
 * @returns {void}
 */
function readConfig(file, parsers, fs, callback) {
  if (!callback) {
    if (fs) {
      callback = fs;
      fs = null;
    } else {
      // @ts-ignore
      callback = parsers;
      // @ts-ignore
      parsers = null;
    }
  }
  if (!fs) {
    fs = __nccwpck_require__(5747);
  }
  // Read file
  const os = __nccwpck_require__(2087);
  file = helpers.expandTildePath(file, os);
  fs.readFile(file, "utf8", (err, content) => {
    if (err) {
      // @ts-ignore
      return callback(err);
    }
    // Try to parse file
    // @ts-ignore
    const { config, message } = parseConfiguration(file, content, parsers);
    if (!config) {
      // @ts-ignore
      return callback(new Error(message));
    }
    // Extend configuration
    const configExtends = config.extends;
    if (configExtends) {
      delete config.extends;
      return resolveConfigExtends(
        file,
        helpers.expandTildePath(configExtends, os),
        fs,
        (_, resolvedExtends) => readConfig(
          // @ts-ignore
          resolvedExtends,
          parsers,
          fs,
          (errr, extendsConfig) => {
            if (errr) {
              // @ts-ignore
              return callback(errr);
            }
            // @ts-ignore
            return callback(null, {
              ...extendsConfig,
              ...config
            });
          }
        )
      );
    }
    // @ts-ignore
    return callback(null, config);
  });
}

const readConfigPromisify = promisify && promisify(readConfig);

/**
 * Read specified configuration file.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {Object} [fs] File system implementation.
 * @returns {Promise<Configuration>} Configuration object.
 */
function readConfigPromise(file, parsers, fs) {
  // @ts-ignore
  return readConfigPromisify(file, parsers, fs);
}

/**
 * Read specified configuration file synchronously.
 *
 * @param {string} file Configuration file name.
 * @param {ConfigurationParser[]} [parsers] Parsing function(s).
 * @param {Object} [fs] File system implementation.
 * @returns {Configuration} Configuration object.
 * @throws An Error if processing fails.
 */
function readConfigSync(file, parsers, fs) {
  if (!fs) {
    fs = __nccwpck_require__(5747);
  }
  // Read file
  const os = __nccwpck_require__(2087);
  file = helpers.expandTildePath(file, os);
  const content = fs.readFileSync(file, "utf8");
  // Try to parse file
  const { config, message } = parseConfiguration(file, content, parsers);
  if (!config) {
    throw new Error(message);
  }
  // Extend configuration
  const configExtends = config.extends;
  if (configExtends) {
    delete config.extends;
    const resolvedExtends = resolveConfigExtendsSync(
      file,
      helpers.expandTildePath(configExtends, os),
      fs
    );
    return {
      ...readConfigSync(resolvedExtends, parsers, fs),
      ...config
    };
  }
  return config;
}

/**
 * Gets the (semantic) version of the library.
 *
 * @returns {string} SemVer string.
 */
function getVersion() {
  return __nccwpck_require__(5039).version;
}

// Export a/synchronous/Promise APIs
markdownlint.sync = markdownlintSync;
markdownlint.readConfig = readConfig;
markdownlint.readConfigSync = readConfigSync;
markdownlint.getVersion = getVersion;
markdownlint.promises = {
  "markdownlint": markdownlintPromise,
  "readConfig": readConfigPromise
};
module.exports = markdownlint;

// Type declarations

/**
 * Function to implement rule logic.
 *
 * @callback RuleFunction
 * @param {RuleParams} params Rule parameters.
 * @param {RuleOnError} onError Error-reporting callback.
 * @returns {void}
 */

/**
 * Rule parameters.
 *
 * @typedef {Object} RuleParams
 * @property {string} name File/string name.
 * @property {MarkdownItToken[]} tokens Token objects from markdown-it.
 * @property {string[]} lines File/string lines.
 * @property {string[]} frontMatterLines Front matter lines.
 * @property {RuleConfiguration} config Rule configuration.
 */

/**
 * Markdown-It token.
 *
 * @typedef {Object} MarkdownItToken
 * @property {string[][]} attrs HTML attributes.
 * @property {boolean} block Block-level token.
 * @property {MarkdownItToken[]} children Child nodes.
 * @property {string} content Tag contents.
 * @property {boolean} hidden Ignore element.
 * @property {string} info Fence info.
 * @property {number} level Nesting level.
 * @property {number[]} map Beginning/ending line numbers.
 * @property {string} markup Markup text.
 * @property {Object} meta Arbitrary data.
 * @property {number} nesting Level change.
 * @property {string} tag HTML tag name.
 * @property {string} type Token type.
 * @property {number} lineNumber Line number (1-based).
 * @property {string} line Line content.
 */

/**
 * Error-reporting callback.
 *
 * @callback RuleOnError
 * @param {RuleOnErrorInfo} onErrorInfo Error information.
 * @returns {void}
 */

/**
 * Fix information for RuleOnError callback.
 *
 * @typedef {Object} RuleOnErrorInfo
 * @property {number} lineNumber Line number (1-based).
 * @property {string} [detail] Detail about the error.
 * @property {string} [context] Context for the error.
 * @property {number[]} [range] Column number (1-based) and length.
 * @property {RuleOnErrorFixInfo} [fixInfo] Fix information.
 */

/**
 * Fix information for RuleOnErrorInfo.
 *
 * @typedef {Object} RuleOnErrorFixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * Rule definition.
 *
 * @typedef {Object} Rule
 * @property {string[]} names Rule name(s).
 * @property {string} description Rule description.
 * @property {URL} [information] Link to more information.
 * @property {string[]} tags Rule tag(s).
 * @property {boolean} [asynchronous] True if asynchronous.
 * @property {RuleFunction} function Rule implementation.
 */

/**
 * Configuration options.
 *
 * @typedef {Object} Options
 * @property {Configuration} [config] Configuration object.
 * @property {ConfigurationParser[]} [configParsers] Configuration parsers.
 * @property {Rule[] | Rule} [customRules] Custom rules.
 * @property {string[] | string} [files] Files to lint.
 * @property {RegExp} [frontMatter] Front matter pattern.
 * @property {Object} [fs] File system implementation.
 * @property {boolean} [handleRuleFailures] True to catch exceptions.
 * @property {Plugin[]} [markdownItPlugins] Additional plugins.
 * @property {boolean} [noInlineConfig] True to ignore HTML directives.
 * @property {number} [resultVersion] Results object version.
 * @property {Object.<string, string>} [strings] Strings to lint.
 */

/**
 * A markdown-it plugin.
 *
 * @typedef {Array} Plugin
 */

/**
 * Function to pretty-print lint results.
 *
 * @callback ToStringCallback
 * @param {boolean} [ruleAliases] True to use rule aliases.
 * @returns {string}
 */

/**
 * Lint results (for resultVersion 3).
 *
 * @typedef {Object.<string, LintError[]>} LintResults
 * @property {ToStringCallback} toString String representation.
 */

/**
 * Lint error.
 *
 * @typedef {Object} LintError
 * @property {number} lineNumber Line number (1-based).
 * @property {string[]} ruleNames Rule name(s).
 * @property {string} ruleDescription Rule description.
 * @property {string} ruleInformation Link to more information.
 * @property {string} errorDetail Detail about the error.
 * @property {string} errorContext Context for the error.
 * @property {number[]} errorRange Column number (1-based) and length.
 * @property {FixInfo} [fixInfo] Fix information.
 */

/**
 * Fix information.
 *
 * @typedef {Object} FixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * Called with the result of the lint function.
 *
 * @callback LintCallback
 * @param {Error | null} err Error object or null.
 * @param {LintResults} [results] Lint results.
 * @returns {void}
 */

/**
 * Configuration object for linting rules. For a detailed schema, see
 * {@link ../schema/markdownlint-config-schema.json}.
 *
 * @typedef {Object.<string, RuleConfiguration>} Configuration
 */

/**
 * Rule configuration object.
 *
 * @typedef {boolean | Object} RuleConfiguration Rule configuration.
 */

/**
 * Parses a configuration string and returns a configuration object.
 *
 * @callback ConfigurationParser
 * @param {string} text Configuration string.
 * @returns {Configuration}
 */

/**
 * Called with the result of the readConfig function.
 *
 * @callback ReadConfigCallback
 * @param {Error | null} err Error object or null.
 * @param {Configuration} [config] Configuration object.
 * @returns {void}
 */

/**
 * Called with the result of the resolveConfigExtends function.
 *
 * @callback ResolveConfigExtendsCallback
 * @param {Error | null} err Error object or null.
 * @param {string} [path] Resolved path to file.
 * @returns {void}
 */


/***/ }),

/***/ 3516:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, filterTokens } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD001", "heading-increment", "header-increment" ],
  "description": "Heading levels should only increment by one level at a time",
  "tags": [ "headings", "headers" ],
  "function": function MD001(params, onError) {
    let prevLevel = 0;
    filterTokens(params, "heading_open", function forToken(token) {
      const level = Number.parseInt(token.tag.slice(1), 10);
      if (prevLevel && (level > prevLevel)) {
        addErrorDetailIf(onError, token.lineNumber,
          "h" + (prevLevel + 1), "h" + level);
      }
      prevLevel = level;
    });
  }
};


/***/ }),

/***/ 7706:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD002", "first-heading-h1", "first-header-h1" ],
  "description": "First heading should be a top-level heading",
  "tags": [ "headings", "headers" ],
  "function": function MD002(params, onError) {
    const level = Number(params.config.level || 1);
    const tag = "h" + level;
    params.tokens.every(function forToken(token) {
      if (token.type === "heading_open") {
        addErrorDetailIf(onError, token.lineNumber, tag, token.tag);
        return false;
      }
      return true;
    });
  }
};


/***/ }),

/***/ 2898:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, filterTokens, headingStyleFor } =
  __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD003", "heading-style", "header-style" ],
  "description": "Heading style",
  "tags": [ "headings", "headers" ],
  "function": function MD003(params, onError) {
    let style = String(params.config.style || "consistent");
    filterTokens(params, "heading_open", function forToken(token) {
      const styleForToken = headingStyleFor(token);
      if (style === "consistent") {
        style = styleForToken;
      }
      if (styleForToken !== style) {
        const h12 = /h[12]/.test(token.tag);
        const setextWithAtx =
          (style === "setext_with_atx") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx")));
        const setextWithAtxClosed =
          (style === "setext_with_atx_closed") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx_closed")));
        if (!setextWithAtx && !setextWithAtxClosed) {
          let expected = style;
          if (style === "setext_with_atx") {
            expected = h12 ? "setext" : "atx";
          } else if (style === "setext_with_atx_closed") {
            expected = h12 ? "setext" : "atx_closed";
          }
          addErrorDetailIf(onError, token.lineNumber,
            expected, styleForToken);
        }
      }
    });
  }
};


/***/ }),

/***/ 3469:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, listItemMarkerRe, unorderedListStyleFor } =
  __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

const expectedStyleToMarker = {
  "dash": "-",
  "plus": "+",
  "asterisk": "*"
};
const differentItemStyle = {
  "dash": "plus",
  "plus": "asterisk",
  "asterisk": "dash"
};
const validStyles = Object.keys(expectedStyleToMarker);

module.exports = {
  "names": [ "MD004", "ul-style" ],
  "description": "Unordered list style",
  "tags": [ "bullet", "ul" ],
  "function": function MD004(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    const nestingStyles = [];
    for (const list of flattenedLists()) {
      if (list.unordered) {
        if (expectedStyle === "consistent") {
          expectedStyle = unorderedListStyleFor(list.items[0]);
        }
        for (const item of list.items) {
          const itemStyle = unorderedListStyleFor(item);
          if (style === "sublist") {
            const nesting = list.nesting;
            if (!nestingStyles[nesting]) {
              nestingStyles[nesting] =
                (itemStyle === nestingStyles[nesting - 1]) ?
                  differentItemStyle[itemStyle] :
                  itemStyle;
            }
            expectedStyle = nestingStyles[nesting];
          }
          if (!validStyles.includes(expectedStyle)) {
            expectedStyle = validStyles[0];
          }
          let range = null;
          let fixInfo = null;
          const match = item.line.match(listItemMarkerRe);
          if (match) {
            const column = match.index + 1;
            const length = match[0].length;
            range = [ column, length ];
            fixInfo = {
              "editColumn": match[1].length + 1,
              "deleteCount": 1,
              "insertText": expectedStyleToMarker[expectedStyle]
            };
          }
          addErrorDetailIf(
            onError,
            item.lineNumber,
            expectedStyle,
            itemStyle,
            null,
            null,
            range,
            fixInfo
          );
        }
      }
    }
  }
};


/***/ }),

/***/ 1842:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, addErrorDetailIf, indentFor, listItemMarkerRe,
  orderedListItemMarkerRe, rangeFromRegExp } = __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD005", "list-indent" ],
  "description": "Inconsistent indentation for list items at the same level",
  "tags": [ "bullet", "ul", "indentation" ],
  "function": function MD005(params, onError) {
    for (const list of flattenedLists()) {
      const expectedIndent = list.indent;
      let expectedEnd = 0;
      let actualEnd = -1;
      let endMatching = false;
      for (const item of list.items) {
        const { line, lineNumber } = item;
        const actualIndent = indentFor(item);
        let match = null;
        if (list.unordered) {
          addErrorDetailIf(
            onError,
            lineNumber,
            expectedIndent,
            actualIndent,
            null,
            null,
            rangeFromRegExp(line, listItemMarkerRe)
            // No fixInfo; MD007 handles this scenario better
          );
        } else if ((match = orderedListItemMarkerRe.exec(line))) {
          actualEnd = match[0].length;
          expectedEnd = expectedEnd || actualEnd;
          const markerLength = match[1].length + 1;
          if ((expectedIndent !== actualIndent) || endMatching) {
            if (expectedEnd === actualEnd) {
              endMatching = true;
            } else {
              const detail = endMatching ?
                `Expected: (${expectedEnd}); Actual: (${actualEnd})` :
                `Expected: ${expectedIndent}; Actual: ${actualIndent}`;
              const expected = endMatching ?
                expectedEnd - markerLength :
                expectedIndent;
              const actual = endMatching ?
                actualEnd - markerLength :
                actualIndent;
              addError(
                onError,
                lineNumber,
                detail,
                null,
                rangeFromRegExp(line, listItemMarkerRe),
                {
                  "editColumn": Math.min(actual, expected) + 1,
                  "deleteCount": Math.max(actual - expected, 0),
                  "insertText": "".padEnd(Math.max(expected - actual, 0))
                }
              );
            }
          }
        }
      }
    }
  }
};


/***/ }),

/***/ 2246:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, listItemMarkerRe, rangeFromRegExp } =
  __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD006", "ul-start-left" ],
  "description":
    "Consider starting bulleted lists at the beginning of the line",
  "tags": [ "bullet", "ul", "indentation" ],
  "function": function MD006(params, onError) {
    for (const list of flattenedLists()) {
      if (list.unordered && !list.nesting && (list.indent !== 0)) {
        for (const item of list.items) {
          const { lineNumber, line } = item;
          addErrorDetailIf(
            onError,
            lineNumber,
            0,
            list.indent,
            null,
            null,
            rangeFromRegExp(line, listItemMarkerRe),
            {
              "deleteCount": line.length - line.trimStart().length
            });
        }
      }
    }
  }
};


/***/ }),

/***/ 1316:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, indentFor, listItemMarkerRe } =
  __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD007", "ul-indent" ],
  "description": "Unordered list indentation",
  "tags": [ "bullet", "ul", "indentation" ],
  "function": function MD007(params, onError) {
    const indent = Number(params.config.indent || 2);
    const startIndented = !!params.config.start_indented;
    const startIndent = Number(params.config.start_indent || indent);
    for (const list of flattenedLists()) {
      if (list.unordered && list.parentsUnordered) {
        for (const item of list.items) {
          const { lineNumber, line } = item;
          const expectedIndent =
            (startIndented ? startIndent : 0) +
            (list.nesting * indent);
          const actualIndent = indentFor(item);
          let range = null;
          let editColumn = 1;
          const match = line.match(listItemMarkerRe);
          if (match) {
            range = [ 1, match[0].length ];
            editColumn += match[1].length - actualIndent;
          }
          addErrorDetailIf(
            onError,
            lineNumber,
            expectedIndent,
            actualIndent,
            null,
            null,
            range,
            {
              editColumn,
              "deleteCount": actualIndent,
              "insertText": "".padEnd(expectedIndent)
            });
        }
      }
    }
  }
};


/***/ }),

/***/ 9798:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, filterTokens, forEachLine, includesSorted,
  numericSortAscending } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD009", "no-trailing-spaces" ],
  "description": "Trailing spaces",
  "tags": [ "whitespace" ],
  "function": function MD009(params, onError) {
    let brSpaces = params.config.br_spaces;
    brSpaces = Number((brSpaces === undefined) ? 2 : brSpaces);
    const listItemEmptyLines = !!params.config.list_item_empty_lines;
    const strict = !!params.config.strict;
    const listItemLineNumbers = [];
    if (listItemEmptyLines) {
      filterTokens(params, "list_item_open", (token) => {
        for (let i = token.map[0]; i < token.map[1]; i++) {
          listItemLineNumbers.push(i + 1);
        }
      });
      listItemLineNumbers.sort(numericSortAscending);
    }
    const paragraphLineNumbers = [];
    const codeInlineLineNumbers = [];
    if (strict) {
      filterTokens(params, "paragraph_open", (token) => {
        for (let i = token.map[0]; i < token.map[1] - 1; i++) {
          paragraphLineNumbers.push(i + 1);
        }
      });
      const addLineNumberRange = (start, end) => {
        for (let i = start; i < end; i++) {
          codeInlineLineNumbers.push(i);
        }
      };
      filterTokens(params, "inline", (token) => {
        let start = 0;
        for (const child of token.children) {
          if (start > 0) {
            addLineNumberRange(start, child.lineNumber);
            start = 0;
          }
          if (child.type === "code_inline") {
            start = child.lineNumber;
          }
        }
        if (start > 0) {
          addLineNumberRange(start, token.map[1]);
        }
      });
    }
    const expected = (brSpaces < 2) ? 0 : brSpaces;
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      const lineNumber = lineIndex + 1;
      const trailingSpaces = line.length - line.trimEnd().length;
      if (
        trailingSpaces &&
        !inCode &&
        !includesSorted(listItemLineNumbers, lineNumber) &&
        (
          (expected !== trailingSpaces) ||
          (strict &&
            (!includesSorted(paragraphLineNumbers, lineNumber) ||
             includesSorted(codeInlineLineNumbers, lineNumber)))
        )
      ) {
        const column = line.length - trailingSpaces + 1;
        addError(
          onError,
          lineNumber,
          "Expected: " + (expected === 0 ? "" : "0 or ") +
            expected + "; Actual: " + trailingSpaces,
          undefined,
          [ column, trailingSpaces ],
          {
            "editColumn": column,
            "deleteCount": trailingSpaces
          });
      }
    });
  }
};


/***/ }),

/***/ 9059:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, filterTokens, forEachLine, withinAnyRange } =
  __nccwpck_require__(2935);
const { codeBlockAndSpanRanges, lineMetadata } = __nccwpck_require__(3266);

const tabRe = /\t+/g;

module.exports = {
  "names": [ "MD010", "no-hard-tabs" ],
  "description": "Hard tabs",
  "tags": [ "whitespace", "hard_tab" ],
  "function": function MD010(params, onError) {
    const codeBlocks = params.config.code_blocks;
    const includeCode = (codeBlocks === undefined) ? true : !!codeBlocks;
    const ignoreCodeLanguages = new Set(
      (params.config.ignore_code_languages || [])
        .map((language) => language.toLowerCase())
    );
    const spacesPerTab = params.config.spaces_per_tab;
    const spaceMultiplier = (spacesPerTab === undefined) ?
      1 :
      Math.max(0, Number(spacesPerTab));
    const exclusions = includeCode ? [] : codeBlockAndSpanRanges();
    filterTokens(params, "fence", (token) => {
      const language = token.info.trim().toLowerCase();
      if (ignoreCodeLanguages.has(language)) {
        for (let i = token.map[0] + 1; i < token.map[1] - 1; i++) {
          exclusions.push([ i, 0, params.lines[i].length ]);
        }
      }
    });
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      if (includeCode || !inCode) {
        let match = null;
        while ((match = tabRe.exec(line)) !== null) {
          const { index } = match;
          const column = index + 1;
          const length = match[0].length;
          if (!withinAnyRange(exclusions, lineIndex, index, length)) {
            addError(
              onError,
              lineIndex + 1,
              "Column: " + column,
              null,
              [ column, length ],
              {
                "editColumn": column,
                "deleteCount": length,
                "insertText": "".padEnd(length * spaceMultiplier)
              }
            );
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 1813:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, forEachLine, withinAnyRange } = __nccwpck_require__(2935);
const { codeBlockAndSpanRanges, lineMetadata } = __nccwpck_require__(3266);

const reversedLinkRe =
  /(^|[^\\])\(([^)]+)\)\[([^\]^][^\]]*)](?!\()/g;

module.exports = {
  "names": [ "MD011", "no-reversed-links" ],
  "description": "Reversed link syntax",
  "tags": [ "links" ],
  "function": function MD011(params, onError) {
    const exclusions = codeBlockAndSpanRanges();
    forEachLine(lineMetadata(), (line, lineIndex, inCode, onFence) => {
      if (!inCode && !onFence) {
        let match = null;
        while ((match = reversedLinkRe.exec(line)) !== null) {
          const [ reversedLink, preChar, linkText, linkDestination ] = match;
          const index = match.index + preChar.length;
          const length = match[0].length - preChar.length;
          if (
            !linkText.endsWith("\\") &&
            !linkDestination.endsWith("\\") &&
            !withinAnyRange(exclusions, lineIndex, index, length)
          ) {
            addError(
              onError,
              lineIndex + 1,
              reversedLink.slice(preChar.length),
              null,
              [ index + 1, length ],
              {
                "editColumn": index + 1,
                "deleteCount": length,
                "insertText": `[${linkText}](${linkDestination})`
              }
            );
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 3347:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, forEachLine } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD012", "no-multiple-blanks" ],
  "description": "Multiple consecutive blank lines",
  "tags": [ "whitespace", "blank_lines" ],
  "function": function MD012(params, onError) {
    const maximum = Number(params.config.maximum || 1);
    let count = 0;
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      count = (inCode || (line.trim().length > 0)) ? 0 : count + 1;
      if (maximum < count) {
        addErrorDetailIf(
          onError,
          lineIndex + 1,
          maximum,
          count,
          null,
          null,
          null,
          {
            "deleteCount": -1
          });
      }
    });
  }
};


/***/ }),

/***/ 9811:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, filterTokens, forEachHeading, forEachLine,
  includesSorted, linkReferenceDefinitionRe } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

const longLineRePrefix = "^.{";
const longLineRePostfixRelaxed = "}.*\\s.*$";
const longLineRePostfixStrict = "}.+$";
const linkOrImageOnlyLineRe = /^[es]*(lT?L|I)[ES]*$/;
const sternModeRe = /^([#>\s]*\s)?\S*$/;
const tokenTypeMap = {
  "em_open": "e",
  "em_close": "E",
  "image": "I",
  "link_open": "l",
  "link_close": "L",
  "strong_open": "s",
  "strong_close": "S",
  "text": "T"
};

module.exports = {
  "names": [ "MD013", "line-length" ],
  "description": "Line length",
  "tags": [ "line_length" ],
  "function": function MD013(params, onError) {
    const lineLength = Number(params.config.line_length || 80);
    const headingLineLength =
      Number(params.config.heading_line_length || lineLength);
    const codeLineLength =
      Number(params.config.code_block_line_length || lineLength);
    const strict = !!params.config.strict;
    const stern = !!params.config.stern;
    const longLineRePostfix =
      (strict || stern) ? longLineRePostfixStrict : longLineRePostfixRelaxed;
    const longLineRe =
      new RegExp(longLineRePrefix + lineLength + longLineRePostfix);
    const longHeadingLineRe =
      new RegExp(longLineRePrefix + headingLineLength + longLineRePostfix);
    const longCodeLineRe =
      new RegExp(longLineRePrefix + codeLineLength + longLineRePostfix);
    const codeBlocks = params.config.code_blocks;
    const includeCodeBlocks = (codeBlocks === undefined) ? true : !!codeBlocks;
    const tables = params.config.tables;
    const includeTables = (tables === undefined) ? true : !!tables;
    let headings = params.config.headings;
    if (headings === undefined) {
      headings = params.config.headers;
    }
    const includeHeadings = (headings === undefined) ? true : !!headings;
    const headingLineNumbers = [];
    forEachHeading(params, (heading) => {
      headingLineNumbers.push(heading.lineNumber);
    });
    const linkOnlyLineNumbers = [];
    filterTokens(params, "inline", (token) => {
      let childTokenTypes = "";
      for (const child of token.children) {
        if (child.type !== "text" || child.content !== "") {
          childTokenTypes += tokenTypeMap[child.type] || "x";
        }
      }
      if (linkOrImageOnlyLineRe.test(childTokenTypes)) {
        linkOnlyLineNumbers.push(token.lineNumber);
      }
    });
    forEachLine(lineMetadata(), (line, lineIndex, inCode, onFence, inTable) => {
      const lineNumber = lineIndex + 1;
      const isHeading = includesSorted(headingLineNumbers, lineNumber);
      const length = inCode ?
        codeLineLength :
        (isHeading ? headingLineLength : lineLength);
      const lengthRe = inCode ?
        longCodeLineRe :
        (isHeading ? longHeadingLineRe : longLineRe);
      if ((includeCodeBlocks || !inCode) &&
          (includeTables || !inTable) &&
          (includeHeadings || !isHeading) &&
          (strict ||
           (!(stern && sternModeRe.test(line)) &&
            !includesSorted(linkOnlyLineNumbers, lineNumber) &&
            !linkReferenceDefinitionRe.test(line))) &&
          lengthRe.test(line)) {
        addErrorDetailIf(
          onError,
          lineNumber,
          length,
          line.length,
          null,
          null,
          [ length + 1, line.length - length ]);
      }
    });
  }
};


/***/ }),

/***/ 1004:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens } = __nccwpck_require__(2935);

const dollarCommandRe = /^(\s*)(\$\s+)/;

module.exports = {
  "names": [ "MD014", "commands-show-output" ],
  "description": "Dollar signs used before commands without showing output",
  "tags": [ "code" ],
  "function": function MD014(params, onError) {
    for (const type of [ "code_block", "fence" ]) {
      filterTokens(params, type, (token) => {
        const margin = (token.type === "fence") ? 1 : 0;
        const dollarInstances = [];
        let allDollars = true;
        for (let i = token.map[0] + margin; i < token.map[1] - margin; i++) {
          const line = params.lines[i];
          const lineTrim = line.trim();
          if (lineTrim) {
            const match = dollarCommandRe.exec(line);
            if (match) {
              const column = match[1].length + 1;
              const length = match[2].length;
              dollarInstances.push([ i, lineTrim, column, length ]);
            } else {
              allDollars = false;
            }
          }
        }
        if (allDollars) {
          for (const instance of dollarInstances) {
            const [ i, lineTrim, column, length ] = instance;
            addErrorContext(
              onError,
              i + 1,
              lineTrim,
              null,
              null,
              [ column, length ],
              {
                "editColumn": column,
                "deleteCount": length
              }
            );
          }
        }
      });
    }
  }
};


/***/ }),

/***/ 2450:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, forEachLine } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD018", "no-missing-space-atx" ],
  "description": "No space after hash on atx style heading",
  "tags": [ "headings", "headers", "atx", "spaces" ],
  "function": function MD018(params, onError) {
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      if (!inCode &&
        /^#+[^# \t]/.test(line) &&
        !/#\s*$/.test(line) &&
        !line.startsWith("#️⃣")) {
        const hashCount = /^#+/.exec(line)[0].length;
        addErrorContext(
          onError,
          lineIndex + 1,
          line.trim(),
          null,
          null,
          [ 1, hashCount + 1 ],
          {
            "editColumn": hashCount + 1,
            "insertText": " "
          }
        );
      }
    });
  }
};


/***/ }),

/***/ 1803:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens, headingStyleFor } =
  __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD019", "no-multiple-space-atx" ],
  "description": "Multiple spaces after hash on atx style heading",
  "tags": [ "headings", "headers", "atx", "spaces" ],
  "function": function MD019(params, onError) {
    filterTokens(params, "heading_open", (token) => {
      if (headingStyleFor(token) === "atx") {
        const { line, lineNumber } = token;
        const match = /^(#+)([ \t]{2,})(?:\S)/.exec(line);
        if (match) {
          const [
            ,
            { "length": hashLength },
            { "length": spacesLength }
          ] = match;
          addErrorContext(
            onError,
            lineNumber,
            line.trim(),
            null,
            null,
            [ 1, hashLength + spacesLength + 1 ],
            {
              "editColumn": hashLength + 1,
              "deleteCount": spacesLength - 1
            }
          );
        }
      }
    });
  }
};


/***/ }),

/***/ 9799:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, forEachLine } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD020", "no-missing-space-closed-atx" ],
  "description": "No space inside hashes on closed atx style heading",
  "tags": [ "headings", "headers", "atx_closed", "spaces" ],
  "function": function MD020(params, onError) {
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      if (!inCode) {
        const match =
          /^(#+)([ \t]*)([^#]*?[^#\\])([ \t]*)((?:\\#)?)(#+)(\s*)$/.exec(line);
        if (match) {
          const [
            ,
            leftHash,
            { "length": leftSpaceLength },
            content,
            { "length": rightSpaceLength },
            rightEscape,
            rightHash,
            { "length": trailSpaceLength }
          ] = match;
          const leftHashLength = leftHash.length;
          const rightHashLength = rightHash.length;
          const left = !leftSpaceLength;
          const right = !rightSpaceLength || rightEscape;
          const rightEscapeReplacement = rightEscape ? `${rightEscape} ` : "";
          if (left || right) {
            const range = left ?
              [
                1,
                leftHashLength + 1
              ] :
              [
                line.length - trailSpaceLength - rightHashLength,
                rightHashLength + 1
              ];
            addErrorContext(
              onError,
              lineIndex + 1,
              line.trim(),
              left,
              right,
              range,
              {
                "editColumn": 1,
                "deleteCount": line.length,
                "insertText":
                  `${leftHash} ${content} ${rightEscapeReplacement}${rightHash}`
              }
            );
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 385:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens, headingStyleFor } =
  __nccwpck_require__(2935);

const closedAtxRe = /^(#+)([ \t]+)([^ \t]|[^ \t].*[^ \t])([ \t]+)(#+)(\s*)$/;

module.exports = {
  "names": [ "MD021", "no-multiple-space-closed-atx" ],
  "description": "Multiple spaces inside hashes on closed atx style heading",
  "tags": [ "headings", "headers", "atx_closed", "spaces" ],
  "function": function MD021(params, onError) {
    filterTokens(params, "heading_open", (token) => {
      if (headingStyleFor(token) === "atx_closed") {
        const { line, lineNumber } = token;
        const match = closedAtxRe.exec(line);
        if (match) {
          const [
            ,
            leftHash,
            { "length": leftSpaceLength },
            content,
            { "length": rightSpaceLength },
            rightHash,
            { "length": trailSpaceLength }
          ] = match;
          const left = leftSpaceLength > 1;
          const right = rightSpaceLength > 1;
          if (left || right) {
            const length = line.length;
            const leftHashLength = leftHash.length;
            const rightHashLength = rightHash.length;
            const range = left ?
              [
                1,
                leftHashLength + leftSpaceLength + 1
              ] :
              [
                length - trailSpaceLength - rightHashLength - rightSpaceLength,
                rightSpaceLength + rightHashLength + 1
              ];
            addErrorContext(
              onError,
              lineNumber,
              line.trim(),
              left,
              right,
              range,
              {
                "editColumn": 1,
                "deleteCount": length,
                "insertText": `${leftHash} ${content} ${rightHash}`
              }
            );
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 6836:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, filterTokens, isBlankLine } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD022", "blanks-around-headings", "blanks-around-headers" ],
  "description": "Headings should be surrounded by blank lines",
  "tags": [ "headings", "headers", "blank_lines" ],
  "function": function MD022(params, onError) {
    let linesAbove = params.config.lines_above;
    linesAbove = Number((linesAbove === undefined) ? 1 : linesAbove);
    let linesBelow = params.config.lines_below;
    linesBelow = Number((linesBelow === undefined) ? 1 : linesBelow);
    const { lines } = params;
    filterTokens(params, "heading_open", (token) => {
      const [ topIndex, nextIndex ] = token.map;
      let actualAbove = 0;
      for (let i = 0; i < linesAbove; i++) {
        if (isBlankLine(lines[topIndex - i - 1])) {
          actualAbove++;
        }
      }
      addErrorDetailIf(
        onError,
        topIndex + 1,
        linesAbove,
        actualAbove,
        "Above",
        lines[topIndex].trim(),
        null,
        {
          "insertText": "".padEnd(linesAbove - actualAbove, "\n")
        });
      let actualBelow = 0;
      for (let i = 0; i < linesBelow; i++) {
        if (isBlankLine(lines[nextIndex + i])) {
          actualBelow++;
        }
      }
      addErrorDetailIf(
        onError,
        topIndex + 1,
        linesBelow,
        actualBelow,
        "Below",
        lines[topIndex].trim(),
        null,
        {
          "lineNumber": nextIndex + 1,
          "insertText": "".padEnd(linesBelow - actualBelow, "\n")
        });
    });
  }
};


/***/ }),

/***/ 6313:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens } = __nccwpck_require__(2935);

const spaceBeforeHeadingRe = /^((?:\s+)|(?:[>\s]+\s\s))[^>\s]/;

module.exports = {
  "names": [ "MD023", "heading-start-left", "header-start-left" ],
  "description": "Headings must start at the beginning of the line",
  "tags": [ "headings", "headers", "spaces" ],
  "function": function MD023(params, onError) {
    filterTokens(params, "heading_open", function forToken(token) {
      const { lineNumber, line } = token;
      const match = line.match(spaceBeforeHeadingRe);
      if (match) {
        const [ prefixAndFirstChar, prefix ] = match;
        let deleteCount = prefix.length;
        const prefixLengthNoSpace = prefix.trimEnd().length;
        if (prefixLengthNoSpace) {
          deleteCount -= prefixLengthNoSpace - 1;
        }
        addErrorContext(
          onError,
          lineNumber,
          line,
          null,
          null,
          [ 1, prefixAndFirstChar.length ],
          {
            "editColumn": prefixLengthNoSpace + 1,
            "deleteCount": deleteCount
          });
      }
    });
  }
};


/***/ }),

/***/ 2822:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, forEachHeading } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD024", "no-duplicate-heading", "no-duplicate-header" ],
  "description": "Multiple headings with the same content",
  "tags": [ "headings", "headers" ],
  "function": function MD024(params, onError) {
    const siblingsOnly = !!params.config.siblings_only ||
      !!params.config.allow_different_nesting || false;
    const knownContents = [ null, [] ];
    let lastLevel = 1;
    let knownContent = knownContents[lastLevel];
    forEachHeading(params, (heading, content) => {
      if (siblingsOnly) {
        const newLevel = heading.tag.slice(1);
        while (lastLevel < newLevel) {
          lastLevel++;
          knownContents[lastLevel] = [];
        }
        while (lastLevel > newLevel) {
          knownContents[lastLevel] = [];
          lastLevel--;
        }
        knownContent = knownContents[newLevel];
      }
      if (knownContent.includes(content)) {
        addErrorContext(onError, heading.lineNumber,
          heading.line.trim());
      } else {
        knownContent.push(content);
      }
    });
  }
};


/***/ }),

/***/ 2785:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens, frontMatterHasTitle } =
  __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD025", "single-title", "single-h1" ],
  "description": "Multiple top-level headings in the same document",
  "tags": [ "headings", "headers" ],
  "function": function MD025(params, onError) {
    const level = Number(params.config.level || 1);
    const tag = "h" + level;
    const foundFrontMatterTitle =
      frontMatterHasTitle(
        params.frontMatterLines,
        params.config.front_matter_title
      );
    let hasTopLevelHeading = false;
    filterTokens(params, "heading_open", function forToken(token) {
      if (token.tag === tag) {
        if (hasTopLevelHeading || foundFrontMatterTitle) {
          addErrorContext(onError, token.lineNumber,
            token.line.trim());
        } else if (token.lineNumber === 1) {
          hasTopLevelHeading = true;
        }
      }
    });
  }
};


/***/ }),

/***/ 3782:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, allPunctuationNoQuestion, escapeForRegExp, forEachHeading } =
  __nccwpck_require__(2935);

const endOfLineHtmlEntityRe = /&#?[0-9a-zA-Z]+;$/;

module.exports = {
  "names": [ "MD026", "no-trailing-punctuation" ],
  "description": "Trailing punctuation in heading",
  "tags": [ "headings", "headers" ],
  "function": function MD026(params, onError) {
    let punctuation = params.config.punctuation;
    punctuation = String(
      (punctuation === undefined) ? allPunctuationNoQuestion : punctuation
    );
    const trailingPunctuationRe =
      new RegExp("\\s*[" + escapeForRegExp(punctuation) + "]+$");
    forEachHeading(params, (heading) => {
      const { line, lineNumber } = heading;
      const trimmedLine = line.replace(/([^\s#])[\s#]+$/, "$1");
      const match = trailingPunctuationRe.exec(trimmedLine);
      if (match && !endOfLineHtmlEntityRe.test(trimmedLine)) {
        const fullMatch = match[0];
        const column = match.index + 1;
        const length = fullMatch.length;
        addError(
          onError,
          lineNumber,
          `Punctuation: '${fullMatch}'`,
          null,
          [ column, length ],
          {
            "editColumn": column,
            "deleteCount": length
          }
        );
      }
    });
  }
};


/***/ }),

/***/ 2923:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, newLineRe } = __nccwpck_require__(2935);

const spaceAfterBlockQuoteRe = /^((?:\s*>)+)(\s{2,})\S/;

module.exports = {
  "names": [ "MD027", "no-multiple-space-blockquote" ],
  "description": "Multiple spaces after blockquote symbol",
  "tags": [ "blockquote", "whitespace", "indentation" ],
  "function": function MD027(params, onError) {
    let blockquoteNesting = 0;
    let listItemNesting = 0;
    for (const token of params.tokens) {
      const { content, lineNumber, type } = token;
      if (type === "blockquote_open") {
        blockquoteNesting++;
      } else if (type === "blockquote_close") {
        blockquoteNesting--;
      } else if (type === "list_item_open") {
        listItemNesting++;
      } else if (type === "list_item_close") {
        listItemNesting--;
      } else if ((type === "inline") && blockquoteNesting) {
        const lineCount = content.split(newLineRe).length;
        for (let i = 0; i < lineCount; i++) {
          const line = params.lines[lineNumber + i - 1];
          const match = line.match(spaceAfterBlockQuoteRe);
          if (match) {
            const [
              fullMatch,
              { "length": blockquoteLength },
              { "length": spaceLength }
            ] = match;
            if (!listItemNesting || (fullMatch[fullMatch.length - 1] === ">")) {
              addErrorContext(
                onError,
                lineNumber + i,
                line,
                null,
                null,
                [ 1, fullMatch.length ],
                {
                  "editColumn": blockquoteLength + 1,
                  "deleteCount": spaceLength - 1
                }
              );
            }
          }
        }
      }
    }
  }
};


/***/ }),

/***/ 333:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD028", "no-blanks-blockquote" ],
  "description": "Blank line inside blockquote",
  "tags": [ "blockquote", "whitespace" ],
  "function": function MD028(params, onError) {
    let prevToken = {};
    let prevLineNumber = null;
    for (const token of params.tokens) {
      if ((token.type === "blockquote_open") &&
          (prevToken.type === "blockquote_close")) {
        for (
          let lineNumber = prevLineNumber;
          lineNumber < token.lineNumber;
          lineNumber++) {
          addError(onError, lineNumber);
        }
      }
      prevToken = token;
      if (token.type === "blockquote_open") {
        prevLineNumber = token.map[1] + 1;
      }
    }
  }
};


/***/ }),

/***/ 8278:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, listItemMarkerRe, orderedListItemMarkerRe,
  rangeFromRegExp } = __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

const listStyleExamples = {
  "one": "1/1/1",
  "ordered": "1/2/3",
  "zero": "0/0/0"
};

module.exports = {
  "names": [ "MD029", "ol-prefix" ],
  "description": "Ordered list item prefix",
  "tags": [ "ol" ],
  "function": function MD029(params, onError) {
    const style = String(params.config.style || "one_or_ordered");
    const filteredLists = flattenedLists().filter((list) => !list.unordered);
    for (const list of filteredLists) {
      const { items } = list;
      let current = 1;
      let incrementing = false;
      // Check for incrementing number pattern 1/2/3 or 0/1/2
      if (items.length >= 2) {
        const first = orderedListItemMarkerRe.exec(items[0].line);
        const second = orderedListItemMarkerRe.exec(items[1].line);
        if (first && second) {
          const [ , firstNumber ] = first;
          const [ , secondNumber ] = second;
          if ((secondNumber !== "1") || (firstNumber === "0")) {
            incrementing = true;
            if (firstNumber === "0") {
              current = 0;
            }
          }
        }
      }
      // Determine effective style
      let listStyle = style;
      if (listStyle === "one_or_ordered") {
        listStyle = incrementing ? "ordered" : "one";
      }
      // Force expected value for 0/0/0 and 1/1/1 patterns
      if (listStyle === "zero") {
        current = 0;
      } else if (listStyle === "one") {
        current = 1;
      }
      // Validate each list item marker
      for (const item of items) {
        const match = orderedListItemMarkerRe.exec(item.line);
        if (match) {
          addErrorDetailIf(onError, item.lineNumber,
            String(current), match[1],
            "Style: " + listStyleExamples[listStyle], null,
            rangeFromRegExp(item.line, listItemMarkerRe));
          if (listStyle === "ordered") {
            current++;
          }
        }
      }
    }
  }
};


/***/ }),

/***/ 4156:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf } = __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD030", "list-marker-space" ],
  "description": "Spaces after list markers",
  "tags": [ "ol", "ul", "whitespace" ],
  "function": function MD030(params, onError) {
    const ulSingle = Number(params.config.ul_single || 1);
    const olSingle = Number(params.config.ol_single || 1);
    const ulMulti = Number(params.config.ul_multi || 1);
    const olMulti = Number(params.config.ol_multi || 1);
    for (const list of flattenedLists()) {
      const lineCount = list.lastLineIndex - list.open.map[0];
      const allSingle = lineCount === list.items.length;
      const expectedSpaces = list.unordered ?
        (allSingle ? ulSingle : ulMulti) :
        (allSingle ? olSingle : olMulti);
      for (const item of list.items) {
        const { line, lineNumber } = item;
        const match = /^[\s>]*\S+(\s*)/.exec(line);
        const [ { "length": matchLength }, { "length": actualSpaces } ] = match;
        if (matchLength < line.length) {
          let fixInfo = null;
          if (expectedSpaces !== actualSpaces) {
            fixInfo = {
              "editColumn": matchLength - actualSpaces + 1,
              "deleteCount": actualSpaces,
              "insertText": "".padEnd(expectedSpaces)
            };
          }
          addErrorDetailIf(
            onError,
            lineNumber,
            expectedSpaces,
            actualSpaces,
            null,
            null,
            [ 1, matchLength ],
            fixInfo
          );
        }
      }
    }
  }
};


/***/ }),

/***/ 8578:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, forEachLine, isBlankLine } = __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

const codeFencePrefixRe = /^(.*?)[`~]/;

module.exports = {
  "names": [ "MD031", "blanks-around-fences" ],
  "description": "Fenced code blocks should be surrounded by blank lines",
  "tags": [ "code", "blank_lines" ],
  "function": function MD031(params, onError) {
    const listItems = params.config.list_items;
    const includeListItems = (listItems === undefined) ? true : !!listItems;
    const { lines } = params;
    forEachLine(lineMetadata(), (line, i, inCode, onFence, inTable, inItem) => {
      const onTopFence = (onFence > 0);
      const onBottomFence = (onFence < 0);
      if ((includeListItems || !inItem) &&
          ((onTopFence && !isBlankLine(lines[i - 1])) ||
           (onBottomFence && !isBlankLine(lines[i + 1])))) {
        const [ , prefix ] = line.match(codeFencePrefixRe) || [];
        const fixInfo = (prefix === undefined) ? null : {
          "lineNumber": i + (onTopFence ? 1 : 2),
          "insertText": `${prefix.replace(/[^>]/g, " ").trim()}\n`
        };
        addErrorContext(
          onError,
          i + 1,
          lines[i].trim(),
          null,
          null,
          null,
          fixInfo);
      }
    });
  }
};


/***/ }),

/***/ 995:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, isBlankLine } = __nccwpck_require__(2935);
const { flattenedLists } = __nccwpck_require__(3266);

const quotePrefixRe = /^[>\s]*/;

module.exports = {
  "names": [ "MD032", "blanks-around-lists" ],
  "description": "Lists should be surrounded by blank lines",
  "tags": [ "bullet", "ul", "ol", "blank_lines" ],
  "function": function MD032(params, onError) {
    const { lines } = params;
    const filteredLists = flattenedLists().filter((list) => !list.nesting);
    for (const list of filteredLists) {
      const firstIndex = list.open.map[0];
      if (!isBlankLine(lines[firstIndex - 1])) {
        const line = lines[firstIndex];
        const quotePrefix = line.match(quotePrefixRe)[0].trimEnd();
        addErrorContext(
          onError,
          firstIndex + 1,
          line.trim(),
          null,
          null,
          null,
          {
            "insertText": `${quotePrefix}\n`
          });
      }
      const lastIndex = list.lastLineIndex - 1;
      if (!isBlankLine(lines[lastIndex + 1])) {
        const line = lines[lastIndex];
        const quotePrefix = line.match(quotePrefixRe)[0].trimEnd();
        addErrorContext(
          onError,
          lastIndex + 1,
          line.trim(),
          null,
          null,
          null,
          {
            "lineNumber": lastIndex + 2,
            "insertText": `${quotePrefix}\n`
          });
      }
    }
  }
};


/***/ }),

/***/ 4167:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const {
  addError, forEachLine, htmlElementRe, withinAnyRange, unescapeMarkdown
} = __nccwpck_require__(2935);
const { codeBlockAndSpanRanges, lineMetadata } = __nccwpck_require__(3266);

const linkDestinationRe = /]\(\s*$/;
// See https://spec.commonmark.org/0.29/#autolinks
const emailAddressRe =
  // eslint-disable-next-line max-len
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = {
  "names": [ "MD033", "no-inline-html" ],
  "description": "Inline HTML",
  "tags": [ "html" ],
  "function": function MD033(params, onError) {
    let allowedElements = params.config.allowed_elements;
    allowedElements = Array.isArray(allowedElements) ? allowedElements : [];
    allowedElements = allowedElements.map((element) => element.toLowerCase());
    const exclusions = codeBlockAndSpanRanges();
    forEachLine(lineMetadata(), (line, lineIndex, inCode) => {
      let match = null;
      // eslint-disable-next-line no-unmodified-loop-condition
      while (!inCode && ((match = htmlElementRe.exec(line)) !== null)) {
        const [ tag, content, element ] = match;
        if (
          !allowedElements.includes(element.toLowerCase()) &&
          !tag.endsWith("\\>") &&
          !emailAddressRe.test(content) &&
          !withinAnyRange(exclusions, lineIndex, match.index, match[0].length)
        ) {
          const prefix = line.substring(0, match.index);
          if (!linkDestinationRe.test(prefix)) {
            const unescaped = unescapeMarkdown(prefix + "<", "_");
            if (!unescaped.endsWith("_")) {
              addError(onError, lineIndex + 1, "Element: " + element,
                null, [ match.index + 1, tag.length ]);
            }
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 4222:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, bareUrlRe, filterTokens } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD034", "no-bare-urls" ],
  "description": "Bare URL used",
  "tags": [ "links", "url" ],
  "function": function MD034(params, onError) {
    filterTokens(params, "inline", (token) => {
      let inLink = false;
      for (const child of token.children) {
        const { content, line, lineNumber, type } = child;
        let match = null;
        if (type === "link_open") {
          inLink = true;
        } else if (type === "link_close") {
          inLink = false;
        } else if ((type === "text") && !inLink) {
          while ((match = bareUrlRe.exec(content)) !== null) {
            const [ bareUrl ] = match;
            const matchIndex = match.index;
            const bareUrlLength = bareUrl.length;
            // Allow "[https://example.com]" to avoid conflicts with
            // MD011/no-reversed-links; allow quoting as another way
            // of deliberately including a bare URL
            const leftChar = content[matchIndex - 1];
            const rightChar = content[matchIndex + bareUrlLength];
            if (
              !((leftChar === "[") && (rightChar === "]")) &&
              !((leftChar === "\"") && (rightChar === "\"")) &&
              !((leftChar === "'") && (rightChar === "'"))
            ) {
              const index = line.indexOf(content);
              const range = (index === -1) ? null : [
                index + matchIndex + 1,
                bareUrlLength
              ];
              const fixInfo = range ? {
                "editColumn": range[0],
                "deleteCount": range[1],
                "insertText": `<${bareUrl}>`
              } : null;
              addErrorContext(
                onError,
                lineNumber,
                bareUrl,
                null,
                null,
                range,
                fixInfo
              );
            }
          }
        }
      }
    });
  }
};


/***/ }),

/***/ 2936:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, filterTokens } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD035", "hr-style" ],
  "description": "Horizontal rule style",
  "tags": [ "hr" ],
  "function": function MD035(params, onError) {
    let style = String(params.config.style || "consistent").trim();
    filterTokens(params, "hr", (token) => {
      const { line, lineNumber } = token;
      let { markup } = token;
      const match = line.match(/[_*\-\s\t]+$/);
      if (match) {
        markup = match[0].trim();
      }
      if (style === "consistent") {
        style = markup;
      }
      addErrorDetailIf(onError, lineNumber, style, markup);
    });
  }
};


/***/ }),

/***/ 6626:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, allPunctuation } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD036", "no-emphasis-as-heading", "no-emphasis-as-header" ],
  "description": "Emphasis used instead of a heading",
  "tags": [ "headings", "headers", "emphasis" ],
  "function": function MD036(params, onError) {
    let punctuation = params.config.punctuation;
    punctuation =
      String((punctuation === undefined) ? allPunctuation : punctuation);
    const re = new RegExp("[" + punctuation + "]$");
    // eslint-disable-next-line jsdoc/require-jsdoc
    function base(token) {
      if (token.type === "paragraph_open") {
        return function inParagraph(t) {
          // Always paragraph_open/inline/paragraph_close,
          const children = t.children.filter(function notEmptyText(child) {
            return (child.type !== "text") || (child.content !== "");
          });
          if ((children.length === 3) &&
              ((children[0].type === "strong_open") ||
                (children[0].type === "em_open")) &&
              (children[1].type === "text") &&
              !re.test(children[1].content)) {
            addErrorContext(onError, t.lineNumber,
              children[1].content);
          }
          return base;
        };
      } else if (token.type === "blockquote_open") {
        return function inBlockquote(t) {
          if (t.type !== "blockquote_close") {
            return inBlockquote;
          }
          return base;
        };
      } else if (token.type === "list_item_open") {
        return function inListItem(t) {
          if (t.type !== "list_item_close") {
            return inListItem;
          }
          return base;
        };
      }
      return base;
    }
    let state = base;
    for (const token of params.tokens) {
      state = state(token);
    }
  }
};


/***/ }),

/***/ 1706:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, emphasisMarkersInContent, forEachLine, isBlankLine } =
  __nccwpck_require__(2935);
const { lineMetadata } = __nccwpck_require__(3266);

const emphasisRe = /(^|[^\\]|\\\\)(?:(\*\*?\*?)|(__?_?))/g;
const embeddedUnderscoreRe = /([A-Za-z0-9])_([A-Za-z0-9])/g;
const asteriskListItemMarkerRe = /^([\s>]*)\*(\s+)/;
const leftSpaceRe = /^\s+/;
const rightSpaceRe = /\s+$/;
const tablePipeRe = /\|/;

module.exports = {
  "names": [ "MD037", "no-space-in-emphasis" ],
  "description": "Spaces inside emphasis markers",
  "tags": [ "whitespace", "emphasis" ],
  "function": function MD037(params, onError) {
    // eslint-disable-next-line init-declarations
    let effectiveEmphasisLength, emphasisIndex, emphasisKind, emphasisLength,
      pendingError = null;
    // eslint-disable-next-line jsdoc/require-jsdoc
    function resetRunTracking() {
      emphasisIndex = -1;
      emphasisLength = 0;
      emphasisKind = "";
      effectiveEmphasisLength = 0;
      pendingError = null;
    }
    // eslint-disable-next-line jsdoc/require-jsdoc
    function handleRunEnd(
      line, lineIndex, contextLength, match, matchIndex, inTable
    ) {
      // Close current run
      let content = line.substring(emphasisIndex, matchIndex);
      if (!emphasisLength) {
        content = content.trimStart();
      }
      if (!match) {
        content = content.trimEnd();
      }
      const leftSpace = leftSpaceRe.test(content);
      const rightSpace = rightSpaceRe.test(content);
      if (
        (leftSpace || rightSpace) &&
        (!inTable || !tablePipeRe.test(content))
      ) {
        // Report the violation
        const contextStart = emphasisIndex - emphasisLength;
        const contextEnd = matchIndex + contextLength;
        const context = line.substring(contextStart, contextEnd);
        const column = contextStart + 1;
        const length = contextEnd - contextStart;
        const leftMarker = line.substring(contextStart, emphasisIndex);
        const rightMarker = match ? (match[2] || match[3]) : "";
        const fixedText = `${leftMarker}${content.trim()}${rightMarker}`;
        return [
          onError,
          lineIndex + 1,
          context,
          leftSpace,
          rightSpace,
          [ column, length ],
          {
            "editColumn": column,
            "deleteCount": length,
            "insertText": fixedText
          }
        ];
      }
      return null;
    }
    // Initialize
    const ignoreMarkersByLine = emphasisMarkersInContent(params);
    resetRunTracking();
    forEachLine(
      lineMetadata(),
      (line, lineIndex, inCode, onFence, inTable, inItem, onBreak, inMath) => {
        const onItemStart = (inItem === 1);
        if (
          inCode ||
          onFence ||
          inTable ||
          onBreak ||
          onItemStart ||
          isBlankLine(line)
        ) {
          // Emphasis resets when leaving a block
          resetRunTracking();
        }
        if (
          inCode ||
          onFence ||
          onBreak ||
          inMath
        ) {
          // Emphasis has no meaning here
          return;
        }
        let patchedLine = line.replace(embeddedUnderscoreRe, "$1 $2");
        if (onItemStart) {
          // Trim overlapping '*' list item marker
          patchedLine = patchedLine.replace(asteriskListItemMarkerRe, "$1 $2");
        }
        let match = null;
        // Match all emphasis-looking runs in the line...
        while ((match = emphasisRe.exec(patchedLine))) {
          const ignoreMarkersForLine = ignoreMarkersByLine[lineIndex];
          const matchIndex = match.index + match[1].length;
          if (ignoreMarkersForLine.includes(matchIndex)) {
            // Ignore emphasis markers inside code spans and links
            continue;
          }
          const matchLength = match[0].length - match[1].length;
          const matchKind = (match[2] || match[3])[0];
          if (emphasisIndex === -1) {
            // New run
            emphasisIndex = matchIndex + matchLength;
            emphasisLength = matchLength;
            emphasisKind = matchKind;
            effectiveEmphasisLength = matchLength;
          } else if (matchKind === emphasisKind) {
            // Matching emphasis markers
            if (matchLength === effectiveEmphasisLength) {
              // Ending an existing run, report any pending error
              if (pendingError) {
                // @ts-ignore
                addErrorContext(...pendingError);
                pendingError = null;
              }
              const error = handleRunEnd(
                line,
                lineIndex,
                effectiveEmphasisLength,
                match,
                matchIndex,
                inTable
              );
              if (error) {
                // @ts-ignore
                addErrorContext(...error);
              }
              // Reset
              resetRunTracking();
            } else if (matchLength === 3) {
              // Swap internal run length (1->2 or 2->1)
              effectiveEmphasisLength = matchLength - effectiveEmphasisLength;
            } else if (effectiveEmphasisLength === 3) {
              // Downgrade internal run (3->1 or 3->2)
              effectiveEmphasisLength -= matchLength;
            } else {
              // Upgrade to internal run (1->3 or 2->3)
              effectiveEmphasisLength += matchLength;
            }
            // Back up one character so RegExp has a chance to match the
            // next marker (ex: "**star**_underscore_")
            if (emphasisRe.lastIndex > 1) {
              emphasisRe.lastIndex--;
            }
          } else if (emphasisRe.lastIndex > 1) {
            // Back up one character so RegExp has a chance to match the
            // mis-matched marker (ex: "*text_*")
            emphasisRe.lastIndex--;
          }
        }
        if (emphasisIndex !== -1) {
          pendingError = pendingError ||
            handleRunEnd(line, lineIndex, 0, null, line.length, inTable);
          // Adjust for pending run on new line
          emphasisIndex = 0;
          emphasisLength = 0;
        }
      }
    );
  }
};


/***/ }),

/***/ 94:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens, forEachInlineCodeSpan, newLineRe } =
  __nccwpck_require__(2935);

const leftSpaceRe = /^\s([^`]|$)/;
const rightSpaceRe = /[^`]\s$/;

const spaceInsideCodeInline = (token) => (
  (token.type === "code_inline") &&
  (leftSpaceRe.test(token.content) || rightSpaceRe.test(token.content))
);

module.exports = {
  "names": [ "MD038", "no-space-in-code" ],
  "description": "Spaces inside code span elements",
  "tags": [ "whitespace", "code" ],
  "function": function MD038(params, onError) {
    filterTokens(params, "inline", (token) => {
      if (token.children.some(spaceInsideCodeInline)) {
        const tokenLines = params.lines.slice(token.map[0], token.map[1]);
        forEachInlineCodeSpan(
          tokenLines.join("\n"),
          (code, lineIndex, columnIndex, tickCount) => {
            let rangeIndex = columnIndex - tickCount;
            let rangeLength = code.length + (2 * tickCount);
            let rangeLineOffset = 0;
            let fixIndex = columnIndex;
            let fixLength = code.length;
            const codeLines = code.split(newLineRe);
            const left = leftSpaceRe.test(code);
            const right = !left && rightSpaceRe.test(code);
            if (right && (codeLines.length > 1)) {
              rangeIndex = 0;
              rangeLineOffset = codeLines.length - 1;
              fixIndex = 0;
            }
            if (left || right) {
              const codeLinesRange = codeLines[rangeLineOffset];
              if (codeLines.length > 1) {
                rangeLength = codeLinesRange.length + tickCount;
                fixLength = codeLinesRange.length;
              }
              const context = tokenLines[lineIndex + rangeLineOffset]
                .substring(rangeIndex, rangeIndex + rangeLength);
              const codeLinesRangeTrim = codeLinesRange.trim();
              const fixText =
                (codeLinesRangeTrim.startsWith("`") ? " " : "") +
                codeLinesRangeTrim +
                (codeLinesRangeTrim.endsWith("`") ? " " : "");
              addErrorContext(
                onError,
                token.lineNumber + lineIndex + rangeLineOffset,
                context,
                left,
                right,
                [ rangeIndex + 1, rangeLength ],
                {
                  "editColumn": fixIndex + 1,
                  "deleteCount": fixLength,
                  "insertText": fixText
                }
              );
            }
          });
      }
    });
  }
};


/***/ }),

/***/ 443:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens } = __nccwpck_require__(2935);

const spaceInLinkRe =
  /\[(?:\s+(?:[^\]]*?)\s*|(?:[^\]]*?)\s+)](?=((?:\([^)]*\))|(?:\[[^\]]*\])))/;

module.exports = {
  "names": [ "MD039", "no-space-in-links" ],
  "description": "Spaces inside link text",
  "tags": [ "whitespace", "links" ],
  "function": function MD039(params, onError) {
    filterTokens(params, "inline", (token) => {
      const { children } = token;
      let { lineNumber } = token;
      let inLink = false;
      let linkText = "";
      let lineIndex = 0;
      for (const child of children) {
        const { content, markup, type } = child;
        if (type === "link_open") {
          inLink = true;
          linkText = "";
        } else if (type === "link_close") {
          inLink = false;
          const left = linkText.trimStart().length !== linkText.length;
          const right = linkText.trimEnd().length !== linkText.length;
          if (left || right) {
            const line = params.lines[lineNumber - 1];
            let range = null;
            let fixInfo = null;
            const match = line.slice(lineIndex).match(spaceInLinkRe);
            if (match) {
              const column = match.index + lineIndex + 1;
              const length = match[0].length;
              range = [ column, length ];
              fixInfo = {
                "editColumn": column + 1,
                "deleteCount": length - 2,
                "insertText": linkText.trim()
              };
              lineIndex = column + length - 1;
            }
            addErrorContext(
              onError,
              lineNumber,
              `[${linkText}]`,
              left,
              right,
              range,
              fixInfo
            );
          }
        } else if ((type === "softbreak") || (type === "hardbreak")) {
          lineNumber++;
          lineIndex = 0;
        } else if (inLink) {
          linkText += type.endsWith("_inline") ?
            `${markup}${content}${markup}` :
            (content || markup);
        }
      }
    });
  }
};


/***/ }),

/***/ 1025:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, filterTokens } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD040", "fenced-code-language" ],
  "description": "Fenced code blocks should have a language specified",
  "tags": [ "code", "language" ],
  "function": function MD040(params, onError) {
    filterTokens(params, "fence", function forToken(token) {
      if (!token.info.trim()) {
        addErrorContext(onError, token.lineNumber, token.line);
      }
    });
  }
};


/***/ }),

/***/ 5864:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, frontMatterHasTitle } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD041", "first-line-heading", "first-line-h1" ],
  "description": "First line in a file should be a top-level heading",
  "tags": [ "headings", "headers" ],
  "function": function MD041(params, onError) {
    const level = Number(params.config.level || 1);
    const tag = "h" + level;
    const foundFrontMatterTitle =
      frontMatterHasTitle(
        params.frontMatterLines,
        params.config.front_matter_title
      );
    if (!foundFrontMatterTitle) {
      const htmlHeadingRe = new RegExp(`^<h${level}[ />]`, "i");
      params.tokens.every((token) => {
        let isError = false;
        if (token.type === "html_block") {
          if (token.content.startsWith("<!--")) {
            // Ignore leading HTML comments
            return true;
          } else if (!htmlHeadingRe.test(token.content)) {
            // Something other than an HTML heading
            isError = true;
          }
        } else if ((token.type !== "heading_open") || (token.tag !== tag)) {
          // Something other than a Markdown heading
          isError = true;
        }
        if (isError) {
          addErrorContext(onError, token.lineNumber, token.line);
        }
        return false;
      });
    }
  }
};


/***/ }),

/***/ 4966:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, escapeForRegExp, filterTokens } =
  __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD042", "no-empty-links" ],
  "description": "No empty links",
  "tags": [ "links" ],
  "function": function MD042(params, onError) {
    filterTokens(params, "inline", function forToken(token) {
      let inLink = false;
      let linkText = "";
      let emptyLink = false;
      for (const child of token.children) {
        if (child.type === "link_open") {
          inLink = true;
          linkText = "";
          for (const attr of child.attrs) {
            if (attr[0] === "href" && (!attr[1] || (attr[1] === "#"))) {
              emptyLink = true;
            }
          }
        } else if (child.type === "link_close") {
          inLink = false;
          if (emptyLink) {
            let context = `[${linkText}]`;
            let range = null;
            const match = child.line.match(
              new RegExp(`${escapeForRegExp(context)}\\((?:|#|<>)\\)`)
            );
            if (match) {
              context = match[0];
              range = [ match.index + 1, match[0].length ];
            }
            addErrorContext(
              onError, child.lineNumber, context, null, null, range
            );
            emptyLink = false;
          }
        } else if (inLink) {
          linkText += child.content;
        }
      }
    });
  }
};


/***/ }),

/***/ 8652:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorContext, addErrorDetailIf, forEachHeading } =
  __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD043", "required-headings", "required-headers" ],
  "description": "Required heading structure",
  "tags": [ "headings", "headers" ],
  "function": function MD043(params, onError) {
    const requiredHeadings = params.config.headings || params.config.headers;
    if (Array.isArray(requiredHeadings)) {
      const levels = {};
      for (const level of [ 1, 2, 3, 4, 5, 6 ]) {
        levels["h" + level] = "######".substr(-level);
      }
      let i = 0;
      let matchAny = false;
      let hasError = false;
      let anyHeadings = false;
      const getExpected = () => requiredHeadings[i++] || "[None]";
      forEachHeading(params, (heading, content) => {
        if (!hasError) {
          anyHeadings = true;
          const actual = levels[heading.tag] + " " + content;
          const expected = getExpected();
          if (expected === "*") {
            const nextExpected = getExpected();
            if (nextExpected.toLowerCase() !== actual.toLowerCase()) {
              matchAny = true;
              i--;
            }
          } else if (expected === "+") {
            matchAny = true;
          } else if (expected.toLowerCase() === actual.toLowerCase()) {
            matchAny = false;
          } else if (matchAny) {
            i--;
          } else {
            addErrorDetailIf(onError, heading.lineNumber,
              expected, actual);
            hasError = true;
          }
        }
      });
      const extraHeadings = requiredHeadings.length - i;
      if (
        !hasError &&
        ((extraHeadings > 1) ||
          ((extraHeadings === 1) && (requiredHeadings[i] !== "*"))) &&
        (anyHeadings || !requiredHeadings.every((heading) => heading === "*"))
      ) {
        addErrorContext(onError, params.lines.length,
          requiredHeadings[i]);
      }
    }
  }
};


/***/ }),

/***/ 3502:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, bareUrlRe, escapeForRegExp, forEachLine,
  forEachLink, withinAnyRange, linkReferenceDefinitionRe } =
  __nccwpck_require__(2935);
const { codeBlockAndSpanRanges, htmlElementRanges, lineMetadata } =
  __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD044", "proper-names" ],
  "description": "Proper names should have the correct capitalization",
  "tags": [ "spelling" ],
  "function": function MD044(params, onError) {
    let names = params.config.names;
    names = Array.isArray(names) ? names : [];
    names.sort((a, b) => (b.length - a.length) || a.localeCompare(b));
    const codeBlocks = params.config.code_blocks;
    const includeCodeBlocks =
      (codeBlocks === undefined) ? true : !!codeBlocks;
    const htmlElements = params.config.html_elements;
    const includeHtmlElements =
      (htmlElements === undefined) ? true : !!htmlElements;
    const exclusions = [];
    forEachLine(lineMetadata(), (line, lineIndex) => {
      if (linkReferenceDefinitionRe.test(line)) {
        exclusions.push([ lineIndex, 0, line.length ]);
      } else {
        let match = null;
        while ((match = bareUrlRe.exec(line)) !== null) {
          exclusions.push([ lineIndex, match.index, match[0].length ]);
        }
        forEachLink(line, (index, _, text, destination) => {
          if (destination) {
            exclusions.push(
              [ lineIndex, index + text.length, destination.length ]
            );
          }
        });
      }
    });
    if (!includeCodeBlocks) {
      exclusions.push(...codeBlockAndSpanRanges());
    }
    if (!includeHtmlElements) {
      exclusions.push(...htmlElementRanges());
    }
    for (const name of names) {
      const escapedName = escapeForRegExp(name);
      const startNamePattern = /^\W/.test(name) ? "" : "\\b_*";
      const endNamePattern = /\W$/.test(name) ? "" : "_*\\b";
      const namePattern =
        `(${startNamePattern})(${escapedName})${endNamePattern}`;
      const nameRe = new RegExp(namePattern, "gi");
      forEachLine(lineMetadata(), (line, lineIndex, inCode, onFence) => {
        if (includeCodeBlocks || (!inCode && !onFence)) {
          let match = null;
          while ((match = nameRe.exec(line)) !== null) {
            const [ , leftMatch, nameMatch ] = match;
            const index = match.index + leftMatch.length;
            const length = nameMatch.length;
            if (
              !withinAnyRange(exclusions, lineIndex, index, length) &&
              !names.includes(nameMatch)
            ) {
              addErrorDetailIf(
                onError,
                lineIndex + 1,
                name,
                nameMatch,
                null,
                null,
                [ index + 1, length ],
                {
                  "editColumn": index + 1,
                  "deleteCount": length,
                  "insertText": name
                }
              );
            }
            exclusions.push([ lineIndex, index, length ]);
          }
        }
      });
    }
  }
};


/***/ }),

/***/ 2490:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, forEachInlineChild } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD045", "no-alt-text" ],
  "description": "Images should have alternate text (alt text)",
  "tags": [ "accessibility", "images" ],
  "function": function MD045(params, onError) {
    forEachInlineChild(params, "image", function forToken(token) {
      if (token.content === "") {
        addError(onError, token.lineNumber);
      }
    });
  }
};


/***/ }),

/***/ 4378:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf } = __nccwpck_require__(2935);

const tokenTypeToStyle = {
  "fence": "fenced",
  "code_block": "indented"
};

module.exports = {
  "names": [ "MD046", "code-block-style" ],
  "description": "Code block style",
  "tags": [ "code" ],
  "function": function MD046(params, onError) {
    let expectedStyle = String(params.config.style || "consistent");
    const codeBlocksAndFences = params.tokens.filter(
      (token) => (token.type === "code_block") || (token.type === "fence")
    );
    for (const token of codeBlocksAndFences) {
      const { lineNumber, type } = token;
      if (expectedStyle === "consistent") {
        expectedStyle = tokenTypeToStyle[type];
      }
      addErrorDetailIf(
        onError,
        lineNumber,
        expectedStyle,
        tokenTypeToStyle[type]);
    }
  }
};


/***/ }),

/***/ 9346:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, isBlankLine } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD047", "single-trailing-newline" ],
  "description": "Files should end with a single newline character",
  "tags": [ "blank_lines" ],
  "function": function MD047(params, onError) {
    const lastLineNumber = params.lines.length;
    const lastLine = params.lines[lastLineNumber - 1];
    if (!isBlankLine(lastLine)) {
      addError(
        onError,
        lastLineNumber,
        null,
        null,
        [ lastLine.length, 1 ],
        {
          "insertText": "\n",
          "editColumn": lastLine.length + 1
        }
      );
    }
  }
};


/***/ }),

/***/ 2299:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addErrorDetailIf, fencedCodeBlockStyleFor } = __nccwpck_require__(2935);

module.exports = {
  "names": [ "MD048", "code-fence-style" ],
  "description": "Code fence style",
  "tags": [ "code" ],
  "function": function MD048(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    const fenceTokens = params.tokens.filter((token) => token.type === "fence");
    for (const fenceToken of fenceTokens) {
      const { lineNumber, markup } = fenceToken;
      if (expectedStyle === "consistent") {
        expectedStyle = fencedCodeBlockStyleFor(markup);
      }
      addErrorDetailIf(
        onError,
        lineNumber,
        expectedStyle,
        fencedCodeBlockStyleFor(markup)
      );
    }
  }
};


/***/ }),

/***/ 146:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, emphasisOrStrongStyleFor, forEachInlineChild,
  getNextChildToken, getRangeAndFixInfoIfFound } = __nccwpck_require__(2935);

const impl = (params, onError, tagPrefix, asterisk, underline, style) => {
  let lastLineNumber = -1;
  const instances = new Map();
  forEachInlineChild(params, `${tagPrefix}_open`, (token, parent) => {
    const { lineNumber, markup } = token;
    const markupStyle = emphasisOrStrongStyleFor(markup);
    if (style === "consistent") {
      style = markupStyle;
    }
    if (style !== markupStyle) {
      let rangeAndFixInfo = {};
      const contentToken = getNextChildToken(
        parent, token, "text", `${tagPrefix}_close`
      );
      if (contentToken) {
        const { content } = contentToken;
        const actual = `${markup}${content}${markup}`;
        const expectedMarkup =
          (style === "asterisk") ? asterisk : underline;
        const expected = `${expectedMarkup}${content}${expectedMarkup}`;
        if (lastLineNumber !== lineNumber) {
          lastLineNumber = lineNumber;
          instances.clear();
        }
        const instance = (instances.get(expected) || 0) + 1;
        instances.set(expected, instance);
        rangeAndFixInfo = getRangeAndFixInfoIfFound(
          params.lines,
          lineNumber - 1,
          actual,
          expected,
          instance
        );
      }
      addError(
        onError,
        lineNumber,
        `Expected: ${style}; Actual: ${markupStyle}`,
        null,
        rangeAndFixInfo.range,
        rangeAndFixInfo.fixInfo
      );
    }
  });
};

module.exports = [
  {
    "names": [ "MD049", "emphasis-style" ],
    "description": "Emphasis style should be consistent",
    "tags": [ "emphasis" ],
    "function": function MD049(params, onError) {
      const style = String(params.config.style || "consistent");
      return impl(params, onError, "em", "*", "_", style);
    }
  },
  {
    "names": [ "MD050", "strong-style" ],
    "description": "Strong style should be consistent",
    "tags": [ "emphasis" ],
    "function": function MD050(params, onError) {
      const style = String(params.config.style || "consistent");
      return impl(params, onError, "strong", "**", "__", style);
    }
  }
];


/***/ }),

/***/ 6712:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, escapeForRegExp, filterTokens, forEachInlineChild,
  forEachHeading, htmlElementRe } = __nccwpck_require__(2935);

// Regular expression for identifying HTML anchor names
const identifierRe = /(?:id|name)\s*=\s*['"]?([^'"\s>]+)/iu;

/**
 * Converts a Markdown heading into an HTML fragment according to the rules
 * used by GitHub.
 *
 * @param {Object} inline Inline token for heading.
 * @returns {string} Fragment string for heading.
 */
function convertHeadingToHTMLFragment(inline) {
  const inlineText = inline.children.map((token) => token.content).join("");
  return "#" + encodeURIComponent(
    inlineText
      .toLowerCase()
      // RegExp source with Ruby's \p{Word} expanded into its General Categories
      // eslint-disable-next-line max-len
      // https://github.com/gjtorikian/html-pipeline/blob/main/lib/html/pipeline/toc_filter.rb
      // https://ruby-doc.org/core-3.0.2/Regexp.html
      .replace(
        /[^\p{Letter}\p{Mark}\p{Number}\p{Connector_Punctuation}\- ]/gu,
        ""
      )
      .replace(/ /gu, "-")
  );
}

module.exports = {
  "names": [ "MD051", "link-fragments" ],
  "description": "Link fragments should be valid",
  "tags": [ "links" ],
  "function": function MD051(params, onError) {
    const fragments = new Map();
    // Process headings
    forEachHeading(params, (heading, content, inline) => {
      const fragment = convertHeadingToHTMLFragment(inline);
      const count = fragments.get(fragment) || 0;
      if (count) {
        fragments.set(`${fragment}-${count}`, 0);
      }
      fragments.set(fragment, count + 1);
    });
    // Process HTML anchors
    const processHtmlToken = (token) => {
      let match = null;
      while ((match = htmlElementRe.exec(token.content)) !== null) {
        const [ tag, , element ] = match;
        if (element.toLowerCase() === "a") {
          const idMatch = identifierRe.exec(tag);
          if (idMatch) {
            fragments.set(`#${idMatch[1]}`, 0);
          }
        }
      }
    };
    filterTokens(params, "html_block", processHtmlToken);
    forEachInlineChild(params, "html_inline", processHtmlToken);
    // Process link fragments
    forEachInlineChild(params, "link_open", (token) => {
      const { attrs, lineNumber, line } = token;
      const href = attrs.find((attr) => attr[0] === "href");
      const id = href && href[1];
      if (id && (id.length > 1) && (id[0] === "#") && !fragments.has(id)) {
        let context = id;
        let range = null;
        const match = line.match(
          new RegExp(`\\[.*?\\]\\(${escapeForRegExp(context)}\\)`)
        );
        if (match) {
          context = match[0];
          range = [ match.index + 1, match[0].length ];
        }
        addError(onError, lineNumber, null, context, range);
      }
    });
  }
};


/***/ }),

/***/ 475:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError } = __nccwpck_require__(2935);
const { referenceLinkImageData } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD052", "reference-links-images" ],
  "description":
    "Reference links and images should use a label that is defined",
  "tags": [ "images", "links" ],
  "function": function MD052(params, onError) {
    const { lines } = params;
    const { references, definitions } = referenceLinkImageData();
    // Look for links/images that use an undefined link reference
    for (const reference of references.entries()) {
      const [ label, datas ] = reference;
      if (!definitions.has(label)) {
        for (const data of datas) {
          const [ lineIndex, index, length ] = data;
          // Context will be incomplete if reporting for a multi-line link
          const context = lines[lineIndex].slice(index, index + length);
          addError(
            onError,
            lineIndex + 1,
            `Missing link or image reference definition: "${label}"`,
            context,
            [ index + 1, context.length ]
          );
        }
      }
    }
  }
};


/***/ }),

/***/ 7774:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { addError, ellipsify, linkReferenceDefinitionRe } =
  __nccwpck_require__(2935);
const { referenceLinkImageData } = __nccwpck_require__(3266);

module.exports = {
  "names": [ "MD053", "link-image-reference-definitions" ],
  "description": "Link and image reference definitions should be needed",
  "tags": [ "images", "links" ],
  "function": function MD053(params, onError) {
    const { lines } = params;
    const { references, shortcuts, definitions, duplicateDefinitions } =
      referenceLinkImageData();
    const singleLineDefinition = (line) => (
      line.replace(linkReferenceDefinitionRe, "").trim().length > 0
    );
    const deleteFixInfo = {
      "deleteCount": -1
    };
    // Look for unused link references (unreferenced by any link/image)
    for (const definition of definitions.entries()) {
      const [ label, lineIndex ] = definition;
      if (!references.has(label) && !shortcuts.has(label)) {
        const line = lines[lineIndex];
        addError(
          onError,
          lineIndex + 1,
          `Unused link or image reference definition: "${label}"`,
          ellipsify(line),
          [ 1, line.length ],
          singleLineDefinition(line) ? deleteFixInfo : 0
        );
      }
    }
    // Look for duplicate link references (defined more than once)
    for (const duplicateDefinition of duplicateDefinitions) {
      const [ label, lineIndex ] = duplicateDefinition;
      const line = lines[lineIndex];
      addError(
        onError,
        lineIndex + 1,
        `Duplicate link or image reference definition: "${label}"`,
        ellipsify(line),
        [ 1, line.length ],
        singleLineDefinition(line) ? deleteFixInfo : 0
      );
    }
  }
};


/***/ }),

/***/ 7494:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// @ts-check



const { homepage, version } = __nccwpck_require__(5039);

const rules = [
  __nccwpck_require__(3516),
  __nccwpck_require__(7706),
  __nccwpck_require__(2898),
  __nccwpck_require__(3469),
  __nccwpck_require__(1842),
  __nccwpck_require__(2246),
  __nccwpck_require__(1316),
  __nccwpck_require__(9798),
  __nccwpck_require__(9059),
  __nccwpck_require__(1813),
  __nccwpck_require__(3347),
  __nccwpck_require__(9811),
  __nccwpck_require__(1004),
  __nccwpck_require__(2450),
  __nccwpck_require__(1803),
  __nccwpck_require__(9799),
  __nccwpck_require__(385),
  __nccwpck_require__(6836),
  __nccwpck_require__(6313),
  __nccwpck_require__(2822),
  __nccwpck_require__(2785),
  __nccwpck_require__(3782),
  __nccwpck_require__(2923),
  __nccwpck_require__(333),
  __nccwpck_require__(8278),
  __nccwpck_require__(4156),
  __nccwpck_require__(8578),
  __nccwpck_require__(995),
  __nccwpck_require__(4167),
  __nccwpck_require__(4222),
  __nccwpck_require__(2936),
  __nccwpck_require__(6626),
  __nccwpck_require__(1706),
  __nccwpck_require__(94),
  __nccwpck_require__(443),
  __nccwpck_require__(1025),
  __nccwpck_require__(5864),
  __nccwpck_require__(4966),
  __nccwpck_require__(8652),
  __nccwpck_require__(3502),
  __nccwpck_require__(2490),
  __nccwpck_require__(4378),
  __nccwpck_require__(9346),
  __nccwpck_require__(2299),
  ...__nccwpck_require__(146),
  __nccwpck_require__(6712),
  __nccwpck_require__(475),
  __nccwpck_require__(7774)
];
for (const rule of rules) {
  const name = rule.names[0].toLowerCase();
  // eslint-disable-next-line dot-notation
  rule["information"] =
    new URL(`${homepage}/blob/v${version}/doc/Rules.md#${name}`);
}
module.exports = rules;


/***/ }),

/***/ 6023:
/***/ ((module) => {

"use strict";




/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode.defaultChars   = ';/?:@&=+$,#';
decode.componentChars = '';


module.exports = decode;


/***/ }),

/***/ 6756:
/***/ ((module) => {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ 8612:
/***/ ((module) => {

"use strict";




module.exports = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};


/***/ }),

/***/ 114:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



module.exports.encode = __nccwpck_require__(6756);
module.exports.decode = __nccwpck_require__(6023);
module.exports.format = __nccwpck_require__(8612);
module.exports.parse = __nccwpck_require__(8062);


/***/ }),

/***/ 8062:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

module.exports = urlParse;


/***/ }),

/***/ 7006:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var lib = __nccwpck_require__(4127);

var _require = __nccwpck_require__(4428),
    Environment = _require.Environment,
    Template = _require.Template;

var Loader = __nccwpck_require__(6981);

var loaders = __nccwpck_require__(4395);

var precompile = __nccwpck_require__(7513);

var compiler = __nccwpck_require__(4548);

var parser = __nccwpck_require__(6614);

var lexer = __nccwpck_require__(3158);

var runtime = __nccwpck_require__(1998);

var nodes = __nccwpck_require__(429);

var installJinjaCompat = __nccwpck_require__(6976); // A single instance of an environment, since this is so commonly used


var e;

function configure(templatesPath, opts) {
  opts = opts || {};

  if (lib.isObject(templatesPath)) {
    opts = templatesPath;
    templatesPath = null;
  }

  var TemplateLoader;

  if (loaders.FileSystemLoader) {
    TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
      watch: opts.watch,
      noCache: opts.noCache
    });
  } else if (loaders.WebLoader) {
    TemplateLoader = new loaders.WebLoader(templatesPath, {
      useCache: opts.web && opts.web.useCache,
      async: opts.web && opts.web.async
    });
  }

  e = new Environment(TemplateLoader, opts);

  if (opts && opts.express) {
    e.express(opts.express);
  }

  return e;
}

module.exports = {
  Environment: Environment,
  Template: Template,
  Loader: Loader,
  FileSystemLoader: loaders.FileSystemLoader,
  NodeResolveLoader: loaders.NodeResolveLoader,
  PrecompiledLoader: loaders.PrecompiledLoader,
  WebLoader: loaders.WebLoader,
  compiler: compiler,
  parser: parser,
  lexer: lexer,
  runtime: runtime,
  lib: lib,
  nodes: nodes,
  installJinjaCompat: installJinjaCompat,
  configure: configure,
  reset: function reset() {
    e = undefined;
  },
  compile: function compile(src, env, path, eagerCompile) {
    if (!e) {
      configure();
    }

    return new Template(src, env, path, eagerCompile);
  },
  render: function render(name, ctx, cb) {
    if (!e) {
      configure();
    }

    return e.render(name, ctx, cb);
  },
  renderString: function renderString(src, ctx, cb) {
    if (!e) {
      configure();
    }

    return e.renderString(src, ctx, cb);
  },
  precompile: precompile ? precompile.precompile : undefined,
  precompileString: precompile ? precompile.precompileString : undefined
};

/***/ }),

/***/ 4548:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parser = __nccwpck_require__(6614);

var transformer = __nccwpck_require__(3773);

var nodes = __nccwpck_require__(429);

var _require = __nccwpck_require__(4127),
    TemplateError = _require.TemplateError;

var _require2 = __nccwpck_require__(1998),
    Frame = _require2.Frame;

var _require3 = __nccwpck_require__(7007),
    Obj = _require3.Obj; // These are all the same for now, but shouldn't be passed straight
// through


var compareOps = {
  '==': '==',
  '===': '===',
  '!=': '!=',
  '!==': '!==',
  '<': '<',
  '>': '>',
  '<=': '<=',
  '>=': '>='
};

var Compiler = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Compiler, _Obj);

  function Compiler() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto = Compiler.prototype;

  _proto.init = function init(templateName, throwOnUndefined) {
    this.templateName = templateName;
    this.codebuf = [];
    this.lastId = 0;
    this.buffer = null;
    this.bufferStack = [];
    this._scopeClosers = '';
    this.inBlock = false;
    this.throwOnUndefined = throwOnUndefined;
  };

  _proto.fail = function fail(msg, lineno, colno) {
    if (lineno !== undefined) {
      lineno += 1;
    }

    if (colno !== undefined) {
      colno += 1;
    }

    throw new TemplateError(msg, lineno, colno);
  };

  _proto._pushBuffer = function _pushBuffer() {
    var id = this._tmpid();

    this.bufferStack.push(this.buffer);
    this.buffer = id;

    this._emit("var " + this.buffer + " = \"\";");

    return id;
  };

  _proto._popBuffer = function _popBuffer() {
    this.buffer = this.bufferStack.pop();
  };

  _proto._emit = function _emit(code) {
    this.codebuf.push(code);
  };

  _proto._emitLine = function _emitLine(code) {
    this._emit(code + '\n');
  };

  _proto._emitLines = function _emitLines() {
    var _this = this;

    for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {
      lines[_key] = arguments[_key];
    }

    lines.forEach(function (line) {
      return _this._emitLine(line);
    });
  };

  _proto._emitFuncBegin = function _emitFuncBegin(node, name) {
    this.buffer = 'output';
    this._scopeClosers = '';

    this._emitLine("function " + name + "(env, context, frame, runtime, cb) {");

    this._emitLine("var lineno = " + node.lineno + ";");

    this._emitLine("var colno = " + node.colno + ";");

    this._emitLine("var " + this.buffer + " = \"\";");

    this._emitLine('try {');
  };

  _proto._emitFuncEnd = function _emitFuncEnd(noReturn) {
    if (!noReturn) {
      this._emitLine('cb(null, ' + this.buffer + ');');
    }

    this._closeScopeLevels();

    this._emitLine('} catch (e) {');

    this._emitLine('  cb(runtime.handleError(e, lineno, colno));');

    this._emitLine('}');

    this._emitLine('}');

    this.buffer = null;
  };

  _proto._addScopeLevel = function _addScopeLevel() {
    this._scopeClosers += '})';
  };

  _proto._closeScopeLevels = function _closeScopeLevels() {
    this._emitLine(this._scopeClosers + ';');

    this._scopeClosers = '';
  };

  _proto._withScopedSyntax = function _withScopedSyntax(func) {
    var _scopeClosers = this._scopeClosers;
    this._scopeClosers = '';
    func.call(this);

    this._closeScopeLevels();

    this._scopeClosers = _scopeClosers;
  };

  _proto._makeCallback = function _makeCallback(res) {
    var err = this._tmpid();

    return 'function(' + err + (res ? ',' + res : '') + ') {\n' + 'if(' + err + ') { cb(' + err + '); return; }';
  };

  _proto._tmpid = function _tmpid() {
    this.lastId++;
    return 't_' + this.lastId;
  };

  _proto._templateName = function _templateName() {
    return this.templateName == null ? 'undefined' : JSON.stringify(this.templateName);
  };

  _proto._compileChildren = function _compileChildren(node, frame) {
    var _this2 = this;

    node.children.forEach(function (child) {
      _this2.compile(child, frame);
    });
  };

  _proto._compileAggregate = function _compileAggregate(node, frame, startChar, endChar) {
    var _this3 = this;

    if (startChar) {
      this._emit(startChar);
    }

    node.children.forEach(function (child, i) {
      if (i > 0) {
        _this3._emit(',');
      }

      _this3.compile(child, frame);
    });

    if (endChar) {
      this._emit(endChar);
    }
  };

  _proto._compileExpression = function _compileExpression(node, frame) {
    // TODO: I'm not really sure if this type check is worth it or
    // not.
    this.assertType(node, nodes.Literal, nodes.Symbol, nodes.Group, nodes.Array, nodes.Dict, nodes.FunCall, nodes.Caller, nodes.Filter, nodes.LookupVal, nodes.Compare, nodes.InlineIf, nodes.In, nodes.Is, nodes.And, nodes.Or, nodes.Not, nodes.Add, nodes.Concat, nodes.Sub, nodes.Mul, nodes.Div, nodes.FloorDiv, nodes.Mod, nodes.Pow, nodes.Neg, nodes.Pos, nodes.Compare, nodes.NodeList);
    this.compile(node, frame);
  };

  _proto.assertType = function assertType(node) {
    for (var _len2 = arguments.length, types = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      types[_key2 - 1] = arguments[_key2];
    }

    if (!types.some(function (t) {
      return node instanceof t;
    })) {
      this.fail("assertType: invalid type: " + node.typename, node.lineno, node.colno);
    }
  };

  _proto.compileCallExtension = function compileCallExtension(node, frame, async) {
    var _this4 = this;

    var args = node.args;
    var contentArgs = node.contentArgs;
    var autoescape = typeof node.autoescape === 'boolean' ? node.autoescape : true;

    if (!async) {
      this._emit(this.buffer + " += runtime.suppressValue(");
    }

    this._emit("env.getExtension(\"" + node.extName + "\")[\"" + node.prop + "\"](");

    this._emit('context');

    if (args || contentArgs) {
      this._emit(',');
    }

    if (args) {
      if (!(args instanceof nodes.NodeList)) {
        this.fail('compileCallExtension: arguments must be a NodeList, ' + 'use `parser.parseSignature`');
      }

      args.children.forEach(function (arg, i) {
        // Tag arguments are passed normally to the call. Note
        // that keyword arguments are turned into a single js
        // object as the last argument, if they exist.
        _this4._compileExpression(arg, frame);

        if (i !== args.children.length - 1 || contentArgs.length) {
          _this4._emit(',');
        }
      });
    }

    if (contentArgs.length) {
      contentArgs.forEach(function (arg, i) {
        if (i > 0) {
          _this4._emit(',');
        }

        if (arg) {
          _this4._emitLine('function(cb) {');

          _this4._emitLine('if(!cb) { cb = function(err) { if(err) { throw err; }}}');

          var id = _this4._pushBuffer();

          _this4._withScopedSyntax(function () {
            _this4.compile(arg, frame);

            _this4._emitLine("cb(null, " + id + ");");
          });

          _this4._popBuffer();

          _this4._emitLine("return " + id + ";");

          _this4._emitLine('}');
        } else {
          _this4._emit('null');
        }
      });
    }

    if (async) {
      var res = this._tmpid();

      this._emitLine(', ' + this._makeCallback(res));

      this._emitLine(this.buffer + " += runtime.suppressValue(" + res + ", " + autoescape + " && env.opts.autoescape);");

      this._addScopeLevel();
    } else {
      this._emit(')');

      this._emit(", " + autoescape + " && env.opts.autoescape);\n");
    }
  };

  _proto.compileCallExtensionAsync = function compileCallExtensionAsync(node, frame) {
    this.compileCallExtension(node, frame, true);
  };

  _proto.compileNodeList = function compileNodeList(node, frame) {
    this._compileChildren(node, frame);
  };

  _proto.compileLiteral = function compileLiteral(node) {
    if (typeof node.value === 'string') {
      var val = node.value.replace(/\\/g, '\\\\');
      val = val.replace(/"/g, '\\"');
      val = val.replace(/\n/g, '\\n');
      val = val.replace(/\r/g, '\\r');
      val = val.replace(/\t/g, '\\t');
      val = val.replace(/\u2028/g, "\\u2028");

      this._emit("\"" + val + "\"");
    } else if (node.value === null) {
      this._emit('null');
    } else {
      this._emit(node.value.toString());
    }
  };

  _proto.compileSymbol = function compileSymbol(node, frame) {
    var name = node.value;
    var v = frame.lookup(name);

    if (v) {
      this._emit(v);
    } else {
      this._emit('runtime.contextOrFrameLookup(' + 'context, frame, "' + name + '")');
    }
  };

  _proto.compileGroup = function compileGroup(node, frame) {
    this._compileAggregate(node, frame, '(', ')');
  };

  _proto.compileArray = function compileArray(node, frame) {
    this._compileAggregate(node, frame, '[', ']');
  };

  _proto.compileDict = function compileDict(node, frame) {
    this._compileAggregate(node, frame, '{', '}');
  };

  _proto.compilePair = function compilePair(node, frame) {
    var key = node.key;
    var val = node.value;

    if (key instanceof nodes.Symbol) {
      key = new nodes.Literal(key.lineno, key.colno, key.value);
    } else if (!(key instanceof nodes.Literal && typeof key.value === 'string')) {
      this.fail('compilePair: Dict keys must be strings or names', key.lineno, key.colno);
    }

    this.compile(key, frame);

    this._emit(': ');

    this._compileExpression(val, frame);
  };

  _proto.compileInlineIf = function compileInlineIf(node, frame) {
    this._emit('(');

    this.compile(node.cond, frame);

    this._emit('?');

    this.compile(node.body, frame);

    this._emit(':');

    if (node.else_ !== null) {
      this.compile(node.else_, frame);
    } else {
      this._emit('""');
    }

    this._emit(')');
  };

  _proto.compileIn = function compileIn(node, frame) {
    this._emit('runtime.inOperator(');

    this.compile(node.left, frame);

    this._emit(',');

    this.compile(node.right, frame);

    this._emit(')');
  };

  _proto.compileIs = function compileIs(node, frame) {
    // first, we need to try to get the name of the test function, if it's a
    // callable (i.e., has args) and not a symbol.
    var right = node.right.name ? node.right.name.value // otherwise go with the symbol value
    : node.right.value;

    this._emit('env.getTest("' + right + '").call(context, ');

    this.compile(node.left, frame); // compile the arguments for the callable if they exist

    if (node.right.args) {
      this._emit(',');

      this.compile(node.right.args, frame);
    }

    this._emit(') === true');
  };

  _proto._binOpEmitter = function _binOpEmitter(node, frame, str) {
    this.compile(node.left, frame);

    this._emit(str);

    this.compile(node.right, frame);
  } // ensure concatenation instead of addition
  // by adding empty string in between
  ;

  _proto.compileOr = function compileOr(node, frame) {
    return this._binOpEmitter(node, frame, ' || ');
  };

  _proto.compileAnd = function compileAnd(node, frame) {
    return this._binOpEmitter(node, frame, ' && ');
  };

  _proto.compileAdd = function compileAdd(node, frame) {
    return this._binOpEmitter(node, frame, ' + ');
  };

  _proto.compileConcat = function compileConcat(node, frame) {
    return this._binOpEmitter(node, frame, ' + "" + ');
  };

  _proto.compileSub = function compileSub(node, frame) {
    return this._binOpEmitter(node, frame, ' - ');
  };

  _proto.compileMul = function compileMul(node, frame) {
    return this._binOpEmitter(node, frame, ' * ');
  };

  _proto.compileDiv = function compileDiv(node, frame) {
    return this._binOpEmitter(node, frame, ' / ');
  };

  _proto.compileMod = function compileMod(node, frame) {
    return this._binOpEmitter(node, frame, ' % ');
  };

  _proto.compileNot = function compileNot(node, frame) {
    this._emit('!');

    this.compile(node.target, frame);
  };

  _proto.compileFloorDiv = function compileFloorDiv(node, frame) {
    this._emit('Math.floor(');

    this.compile(node.left, frame);

    this._emit(' / ');

    this.compile(node.right, frame);

    this._emit(')');
  };

  _proto.compilePow = function compilePow(node, frame) {
    this._emit('Math.pow(');

    this.compile(node.left, frame);

    this._emit(', ');

    this.compile(node.right, frame);

    this._emit(')');
  };

  _proto.compileNeg = function compileNeg(node, frame) {
    this._emit('-');

    this.compile(node.target, frame);
  };

  _proto.compilePos = function compilePos(node, frame) {
    this._emit('+');

    this.compile(node.target, frame);
  };

  _proto.compileCompare = function compileCompare(node, frame) {
    var _this5 = this;

    this.compile(node.expr, frame);
    node.ops.forEach(function (op) {
      _this5._emit(" " + compareOps[op.type] + " ");

      _this5.compile(op.expr, frame);
    });
  };

  _proto.compileLookupVal = function compileLookupVal(node, frame) {
    this._emit('runtime.memberLookup((');

    this._compileExpression(node.target, frame);

    this._emit('),');

    this._compileExpression(node.val, frame);

    this._emit(')');
  };

  _proto._getNodeName = function _getNodeName(node) {
    switch (node.typename) {
      case 'Symbol':
        return node.value;

      case 'FunCall':
        return 'the return value of (' + this._getNodeName(node.name) + ')';

      case 'LookupVal':
        return this._getNodeName(node.target) + '["' + this._getNodeName(node.val) + '"]';

      case 'Literal':
        return node.value.toString();

      default:
        return '--expression--';
    }
  };

  _proto.compileFunCall = function compileFunCall(node, frame) {
    // Keep track of line/col info at runtime by settings
    // variables within an expression. An expression in javascript
    // like (x, y, z) returns the last value, and x and y can be
    // anything
    this._emit('(lineno = ' + node.lineno + ', colno = ' + node.colno + ', ');

    this._emit('runtime.callWrap('); // Compile it as normal.


    this._compileExpression(node.name, frame); // Output the name of what we're calling so we can get friendly errors
    // if the lookup fails.


    this._emit(', "' + this._getNodeName(node.name).replace(/"/g, '\\"') + '", context, ');

    this._compileAggregate(node.args, frame, '[', '])');

    this._emit(')');
  };

  _proto.compileFilter = function compileFilter(node, frame) {
    var name = node.name;
    this.assertType(name, nodes.Symbol);

    this._emit('env.getFilter("' + name.value + '").call(context, ');

    this._compileAggregate(node.args, frame);

    this._emit(')');
  };

  _proto.compileFilterAsync = function compileFilterAsync(node, frame) {
    var name = node.name;
    var symbol = node.symbol.value;
    this.assertType(name, nodes.Symbol);
    frame.set(symbol, symbol);

    this._emit('env.getFilter("' + name.value + '").call(context, ');

    this._compileAggregate(node.args, frame);

    this._emitLine(', ' + this._makeCallback(symbol));

    this._addScopeLevel();
  };

  _proto.compileKeywordArgs = function compileKeywordArgs(node, frame) {
    this._emit('runtime.makeKeywordArgs(');

    this.compileDict(node, frame);

    this._emit(')');
  };

  _proto.compileSet = function compileSet(node, frame) {
    var _this6 = this;

    var ids = []; // Lookup the variable names for each identifier and create
    // new ones if necessary

    node.targets.forEach(function (target) {
      var name = target.value;
      var id = frame.lookup(name);

      if (id === null || id === undefined) {
        id = _this6._tmpid(); // Note: This relies on js allowing scope across
        // blocks, in case this is created inside an `if`

        _this6._emitLine('var ' + id + ';');
      }

      ids.push(id);
    });

    if (node.value) {
      this._emit(ids.join(' = ') + ' = ');

      this._compileExpression(node.value, frame);

      this._emitLine(';');
    } else {
      this._emit(ids.join(' = ') + ' = ');

      this.compile(node.body, frame);

      this._emitLine(';');
    }

    node.targets.forEach(function (target, i) {
      var id = ids[i];
      var name = target.value; // We are running this for every var, but it's very
      // uncommon to assign to multiple vars anyway

      _this6._emitLine("frame.set(\"" + name + "\", " + id + ", true);");

      _this6._emitLine('if(frame.topLevel) {');

      _this6._emitLine("context.setVariable(\"" + name + "\", " + id + ");");

      _this6._emitLine('}');

      if (name.charAt(0) !== '_') {
        _this6._emitLine('if(frame.topLevel) {');

        _this6._emitLine("context.addExport(\"" + name + "\", " + id + ");");

        _this6._emitLine('}');
      }
    });
  };

  _proto.compileSwitch = function compileSwitch(node, frame) {
    var _this7 = this;

    this._emit('switch (');

    this.compile(node.expr, frame);

    this._emit(') {');

    node.cases.forEach(function (c, i) {
      _this7._emit('case ');

      _this7.compile(c.cond, frame);

      _this7._emit(': ');

      _this7.compile(c.body, frame); // preserve fall-throughs


      if (c.body.children.length) {
        _this7._emitLine('break;');
      }
    });

    if (node.default) {
      this._emit('default:');

      this.compile(node.default, frame);
    }

    this._emit('}');
  };

  _proto.compileIf = function compileIf(node, frame, async) {
    var _this8 = this;

    this._emit('if(');

    this._compileExpression(node.cond, frame);

    this._emitLine(') {');

    this._withScopedSyntax(function () {
      _this8.compile(node.body, frame);

      if (async) {
        _this8._emit('cb()');
      }
    });

    if (node.else_) {
      this._emitLine('}\nelse {');

      this._withScopedSyntax(function () {
        _this8.compile(node.else_, frame);

        if (async) {
          _this8._emit('cb()');
        }
      });
    } else if (async) {
      this._emitLine('}\nelse {');

      this._emit('cb()');
    }

    this._emitLine('}');
  };

  _proto.compileIfAsync = function compileIfAsync(node, frame) {
    this._emit('(function(cb) {');

    this.compileIf(node, frame, true);

    this._emit('})(' + this._makeCallback());

    this._addScopeLevel();
  };

  _proto._emitLoopBindings = function _emitLoopBindings(node, arr, i, len) {
    var _this9 = this;

    var bindings = [{
      name: 'index',
      val: i + " + 1"
    }, {
      name: 'index0',
      val: i
    }, {
      name: 'revindex',
      val: len + " - " + i
    }, {
      name: 'revindex0',
      val: len + " - " + i + " - 1"
    }, {
      name: 'first',
      val: i + " === 0"
    }, {
      name: 'last',
      val: i + " === " + len + " - 1"
    }, {
      name: 'length',
      val: len
    }];
    bindings.forEach(function (b) {
      _this9._emitLine("frame.set(\"loop." + b.name + "\", " + b.val + ");");
    });
  };

  _proto.compileFor = function compileFor(node, frame) {
    var _this10 = this;

    // Some of this code is ugly, but it keeps the generated code
    // as fast as possible. ForAsync also shares some of this, but
    // not much.
    var i = this._tmpid();

    var len = this._tmpid();

    var arr = this._tmpid();

    frame = frame.push();

    this._emitLine('frame = frame.push();');

    this._emit("var " + arr + " = ");

    this._compileExpression(node.arr, frame);

    this._emitLine(';');

    this._emit("if(" + arr + ") {");

    this._emitLine(arr + ' = runtime.fromIterator(' + arr + ');'); // If multiple names are passed, we need to bind them
    // appropriately


    if (node.name instanceof nodes.Array) {
      this._emitLine("var " + i + ";"); // The object could be an arroy or object. Note that the
      // body of the loop is duplicated for each condition, but
      // we are optimizing for speed over size.


      this._emitLine("if(runtime.isArray(" + arr + ")) {");

      this._emitLine("var " + len + " = " + arr + ".length;");

      this._emitLine("for(" + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {"); // Bind each declared var


      node.name.children.forEach(function (child, u) {
        var tid = _this10._tmpid();

        _this10._emitLine("var " + tid + " = " + arr + "[" + i + "][" + u + "];");

        _this10._emitLine("frame.set(\"" + child + "\", " + arr + "[" + i + "][" + u + "]);");

        frame.set(node.name.children[u].value, tid);
      });

      this._emitLoopBindings(node, arr, i, len);

      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });

      this._emitLine('}');

      this._emitLine('} else {'); // Iterate over the key/values of an object


      var _node$name$children = node.name.children,
          key = _node$name$children[0],
          val = _node$name$children[1];

      var k = this._tmpid();

      var v = this._tmpid();

      frame.set(key.value, k);
      frame.set(val.value, v);

      this._emitLine(i + " = -1;");

      this._emitLine("var " + len + " = runtime.keys(" + arr + ").length;");

      this._emitLine("for(var " + k + " in " + arr + ") {");

      this._emitLine(i + "++;");

      this._emitLine("var " + v + " = " + arr + "[" + k + "];");

      this._emitLine("frame.set(\"" + key.value + "\", " + k + ");");

      this._emitLine("frame.set(\"" + val.value + "\", " + v + ");");

      this._emitLoopBindings(node, arr, i, len);

      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });

      this._emitLine('}');

      this._emitLine('}');
    } else {
      // Generate a typical array iteration
      var _v = this._tmpid();

      frame.set(node.name.value, _v);

      this._emitLine("var " + len + " = " + arr + ".length;");

      this._emitLine("for(var " + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");

      this._emitLine("var " + _v + " = " + arr + "[" + i + "];");

      this._emitLine("frame.set(\"" + node.name.value + "\", " + _v + ");");

      this._emitLoopBindings(node, arr, i, len);

      this._withScopedSyntax(function () {
        _this10.compile(node.body, frame);
      });

      this._emitLine('}');
    }

    this._emitLine('}');

    if (node.else_) {
      this._emitLine('if (!' + len + ') {');

      this.compile(node.else_, frame);

      this._emitLine('}');
    }

    this._emitLine('frame = frame.pop();');
  };

  _proto._compileAsyncLoop = function _compileAsyncLoop(node, frame, parallel) {
    var _this11 = this;

    // This shares some code with the For tag, but not enough to
    // worry about. This iterates across an object asynchronously,
    // but not in parallel.
    var i = this._tmpid();

    var len = this._tmpid();

    var arr = this._tmpid();

    var asyncMethod = parallel ? 'asyncAll' : 'asyncEach';
    frame = frame.push();

    this._emitLine('frame = frame.push();');

    this._emit('var ' + arr + ' = runtime.fromIterator(');

    this._compileExpression(node.arr, frame);

    this._emitLine(');');

    if (node.name instanceof nodes.Array) {
      var arrayLen = node.name.children.length;

      this._emit("runtime." + asyncMethod + "(" + arr + ", " + arrayLen + ", function(");

      node.name.children.forEach(function (name) {
        _this11._emit(name.value + ",");
      });

      this._emit(i + ',' + len + ',next) {');

      node.name.children.forEach(function (name) {
        var id = name.value;
        frame.set(id, id);

        _this11._emitLine("frame.set(\"" + id + "\", " + id + ");");
      });
    } else {
      var id = node.name.value;

      this._emitLine("runtime." + asyncMethod + "(" + arr + ", 1, function(" + id + ", " + i + ", " + len + ",next) {");

      this._emitLine('frame.set("' + id + '", ' + id + ');');

      frame.set(id, id);
    }

    this._emitLoopBindings(node, arr, i, len);

    this._withScopedSyntax(function () {
      var buf;

      if (parallel) {
        buf = _this11._pushBuffer();
      }

      _this11.compile(node.body, frame);

      _this11._emitLine('next(' + i + (buf ? ',' + buf : '') + ');');

      if (parallel) {
        _this11._popBuffer();
      }
    });

    var output = this._tmpid();

    this._emitLine('}, ' + this._makeCallback(output));

    this._addScopeLevel();

    if (parallel) {
      this._emitLine(this.buffer + ' += ' + output + ';');
    }

    if (node.else_) {
      this._emitLine('if (!' + arr + '.length) {');

      this.compile(node.else_, frame);

      this._emitLine('}');
    }

    this._emitLine('frame = frame.pop();');
  };

  _proto.compileAsyncEach = function compileAsyncEach(node, frame) {
    this._compileAsyncLoop(node, frame);
  };

  _proto.compileAsyncAll = function compileAsyncAll(node, frame) {
    this._compileAsyncLoop(node, frame, true);
  };

  _proto._compileMacro = function _compileMacro(node, frame) {
    var _this12 = this;

    var args = [];
    var kwargs = null;

    var funcId = 'macro_' + this._tmpid();

    var keepFrame = frame !== undefined; // Type check the definition of the args

    node.args.children.forEach(function (arg, i) {
      if (i === node.args.children.length - 1 && arg instanceof nodes.Dict) {
        kwargs = arg;
      } else {
        _this12.assertType(arg, nodes.Symbol);

        args.push(arg);
      }
    });
    var realNames = [].concat(args.map(function (n) {
      return "l_" + n.value;
    }), ['kwargs']); // Quoted argument names

    var argNames = args.map(function (n) {
      return "\"" + n.value + "\"";
    });
    var kwargNames = (kwargs && kwargs.children || []).map(function (n) {
      return "\"" + n.key.value + "\"";
    }); // We pass a function to makeMacro which destructures the
    // arguments so support setting positional args with keywords
    // args and passing keyword args as positional args
    // (essentially default values). See runtime.js.

    var currFrame;

    if (keepFrame) {
      currFrame = frame.push(true);
    } else {
      currFrame = new Frame();
    }

    this._emitLines("var " + funcId + " = runtime.makeMacro(", "[" + argNames.join(', ') + "], ", "[" + kwargNames.join(', ') + "], ", "function (" + realNames.join(', ') + ") {", 'var callerFrame = frame;', 'frame = ' + (keepFrame ? 'frame.push(true);' : 'new runtime.Frame();'), 'kwargs = kwargs || {};', 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'); // Expose the arguments to the template. Don't need to use
    // random names because the function
    // will create a new run-time scope for us


    args.forEach(function (arg) {
      _this12._emitLine("frame.set(\"" + arg.value + "\", l_" + arg.value + ");");

      currFrame.set(arg.value, "l_" + arg.value);
    }); // Expose the keyword arguments

    if (kwargs) {
      kwargs.children.forEach(function (pair) {
        var name = pair.key.value;

        _this12._emit("frame.set(\"" + name + "\", ");

        _this12._emit("Object.prototype.hasOwnProperty.call(kwargs, \"" + name + "\")");

        _this12._emit(" ? kwargs[\"" + name + "\"] : ");

        _this12._compileExpression(pair.value, currFrame);

        _this12._emit(');');
      });
    }

    var bufferId = this._pushBuffer();

    this._withScopedSyntax(function () {
      _this12.compile(node.body, currFrame);
    });

    this._emitLine('frame = ' + (keepFrame ? 'frame.pop();' : 'callerFrame;'));

    this._emitLine("return new runtime.SafeString(" + bufferId + ");");

    this._emitLine('});');

    this._popBuffer();

    return funcId;
  };

  _proto.compileMacro = function compileMacro(node, frame) {
    var funcId = this._compileMacro(node); // Expose the macro to the templates


    var name = node.name.value;
    frame.set(name, funcId);

    if (frame.parent) {
      this._emitLine("frame.set(\"" + name + "\", " + funcId + ");");
    } else {
      if (node.name.value.charAt(0) !== '_') {
        this._emitLine("context.addExport(\"" + name + "\");");
      }

      this._emitLine("context.setVariable(\"" + name + "\", " + funcId + ");");
    }
  };

  _proto.compileCaller = function compileCaller(node, frame) {
    // basically an anonymous "macro expression"
    this._emit('(function (){');

    var funcId = this._compileMacro(node, frame);

    this._emit("return " + funcId + ";})()");
  };

  _proto._compileGetTemplate = function _compileGetTemplate(node, frame, eagerCompile, ignoreMissing) {
    var parentTemplateId = this._tmpid();

    var parentName = this._templateName();

    var cb = this._makeCallback(parentTemplateId);

    var eagerCompileArg = eagerCompile ? 'true' : 'false';
    var ignoreMissingArg = ignoreMissing ? 'true' : 'false';

    this._emit('env.getTemplate(');

    this._compileExpression(node.template, frame);

    this._emitLine(", " + eagerCompileArg + ", " + parentName + ", " + ignoreMissingArg + ", " + cb);

    return parentTemplateId;
  };

  _proto.compileImport = function compileImport(node, frame) {
    var target = node.target.value;

    var id = this._compileGetTemplate(node, frame, false, false);

    this._addScopeLevel();

    this._emitLine(id + '.getExported(' + (node.withContext ? 'context.getVariables(), frame, ' : '') + this._makeCallback(id));

    this._addScopeLevel();

    frame.set(target, id);

    if (frame.parent) {
      this._emitLine("frame.set(\"" + target + "\", " + id + ");");
    } else {
      this._emitLine("context.setVariable(\"" + target + "\", " + id + ");");
    }
  };

  _proto.compileFromImport = function compileFromImport(node, frame) {
    var _this13 = this;

    var importedId = this._compileGetTemplate(node, frame, false, false);

    this._addScopeLevel();

    this._emitLine(importedId + '.getExported(' + (node.withContext ? 'context.getVariables(), frame, ' : '') + this._makeCallback(importedId));

    this._addScopeLevel();

    node.names.children.forEach(function (nameNode) {
      var name;
      var alias;

      var id = _this13._tmpid();

      if (nameNode instanceof nodes.Pair) {
        name = nameNode.key.value;
        alias = nameNode.value.value;
      } else {
        name = nameNode.value;
        alias = name;
      }

      _this13._emitLine("if(Object.prototype.hasOwnProperty.call(" + importedId + ", \"" + name + "\")) {");

      _this13._emitLine("var " + id + " = " + importedId + "." + name + ";");

      _this13._emitLine('} else {');

      _this13._emitLine("cb(new Error(\"cannot import '" + name + "'\")); return;");

      _this13._emitLine('}');

      frame.set(alias, id);

      if (frame.parent) {
        _this13._emitLine("frame.set(\"" + alias + "\", " + id + ");");
      } else {
        _this13._emitLine("context.setVariable(\"" + alias + "\", " + id + ");");
      }
    });
  };

  _proto.compileBlock = function compileBlock(node) {
    var id = this._tmpid(); // If we are executing outside a block (creating a top-level
    // block), we really don't want to execute its code because it
    // will execute twice: once when the child template runs and
    // again when the parent template runs. Note that blocks
    // within blocks will *always* execute immediately *and*
    // wherever else they are invoked (like used in a parent
    // template). This may have behavioral differences from jinja
    // because blocks can have side effects, but it seems like a
    // waste of performance to always execute huge top-level
    // blocks twice


    if (!this.inBlock) {
      this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');
    }

    this._emit("context.getBlock(\"" + node.name.value + "\")");

    if (!this.inBlock) {
      this._emit(')');
    }

    this._emitLine('(env, context, frame, runtime, ' + this._makeCallback(id));

    this._emitLine(this.buffer + " += " + id + ";");

    this._addScopeLevel();
  };

  _proto.compileSuper = function compileSuper(node, frame) {
    var name = node.blockName.value;
    var id = node.symbol.value;

    var cb = this._makeCallback(id);

    this._emitLine("context.getSuper(env, \"" + name + "\", b_" + name + ", frame, runtime, " + cb);

    this._emitLine(id + " = runtime.markSafe(" + id + ");");

    this._addScopeLevel();

    frame.set(id, id);
  };

  _proto.compileExtends = function compileExtends(node, frame) {
    var k = this._tmpid();

    var parentTemplateId = this._compileGetTemplate(node, frame, true, false); // extends is a dynamic tag and can occur within a block like
    // `if`, so if this happens we need to capture the parent
    // template in the top-level scope


    this._emitLine("parentTemplate = " + parentTemplateId);

    this._emitLine("for(var " + k + " in parentTemplate.blocks) {");

    this._emitLine("context.addBlock(" + k + ", parentTemplate.blocks[" + k + "]);");

    this._emitLine('}');

    this._addScopeLevel();
  };

  _proto.compileInclude = function compileInclude(node, frame) {
    this._emitLine('var tasks = [];');

    this._emitLine('tasks.push(');

    this._emitLine('function(callback) {');

    var id = this._compileGetTemplate(node, frame, false, node.ignoreMissing);

    this._emitLine("callback(null," + id + ");});");

    this._emitLine('});');

    var id2 = this._tmpid();

    this._emitLine('tasks.push(');

    this._emitLine('function(template, callback){');

    this._emitLine('template.render(context.getVariables(), frame, ' + this._makeCallback(id2));

    this._emitLine('callback(null,' + id2 + ');});');

    this._emitLine('});');

    this._emitLine('tasks.push(');

    this._emitLine('function(result, callback){');

    this._emitLine(this.buffer + " += result;");

    this._emitLine('callback(null);');

    this._emitLine('});');

    this._emitLine('env.waterfall(tasks, function(){');

    this._addScopeLevel();
  };

  _proto.compileTemplateData = function compileTemplateData(node, frame) {
    this.compileLiteral(node, frame);
  };

  _proto.compileCapture = function compileCapture(node, frame) {
    var _this14 = this;

    // we need to temporarily override the current buffer id as 'output'
    // so the set block writes to the capture output instead of the buffer
    var buffer = this.buffer;
    this.buffer = 'output';

    this._emitLine('(function() {');

    this._emitLine('var output = "";');

    this._withScopedSyntax(function () {
      _this14.compile(node.body, frame);
    });

    this._emitLine('return output;');

    this._emitLine('})()'); // and of course, revert back to the old buffer id


    this.buffer = buffer;
  };

  _proto.compileOutput = function compileOutput(node, frame) {
    var _this15 = this;

    var children = node.children;
    children.forEach(function (child) {
      // TemplateData is a special case because it is never
      // autoescaped, so simply output it for optimization
      if (child instanceof nodes.TemplateData) {
        if (child.value) {
          _this15._emit(_this15.buffer + " += ");

          _this15.compileLiteral(child, frame);

          _this15._emitLine(';');
        }
      } else {
        _this15._emit(_this15.buffer + " += runtime.suppressValue(");

        if (_this15.throwOnUndefined) {
          _this15._emit('runtime.ensureDefined(');
        }

        _this15.compile(child, frame);

        if (_this15.throwOnUndefined) {
          _this15._emit("," + node.lineno + "," + node.colno + ")");
        }

        _this15._emit(', env.opts.autoescape);\n');
      }
    });
  };

  _proto.compileRoot = function compileRoot(node, frame) {
    var _this16 = this;

    if (frame) {
      this.fail('compileRoot: root node can\'t have frame');
    }

    frame = new Frame();

    this._emitFuncBegin(node, 'root');

    this._emitLine('var parentTemplate = null;');

    this._compileChildren(node, frame);

    this._emitLine('if(parentTemplate) {');

    this._emitLine('parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);');

    this._emitLine('} else {');

    this._emitLine("cb(null, " + this.buffer + ");");

    this._emitLine('}');

    this._emitFuncEnd(true);

    this.inBlock = true;
    var blockNames = [];
    var blocks = node.findAll(nodes.Block);
    blocks.forEach(function (block, i) {
      var name = block.name.value;

      if (blockNames.indexOf(name) !== -1) {
        throw new Error("Block \"" + name + "\" defined more than once.");
      }

      blockNames.push(name);

      _this16._emitFuncBegin(block, "b_" + name);

      var tmpFrame = new Frame();

      _this16._emitLine('var frame = frame.push(true);');

      _this16.compile(block.body, tmpFrame);

      _this16._emitFuncEnd();
    });

    this._emitLine('return {');

    blocks.forEach(function (block, i) {
      var blockName = "b_" + block.name.value;

      _this16._emitLine(blockName + ": " + blockName + ",");
    });

    this._emitLine('root: root\n};');
  };

  _proto.compile = function compile(node, frame) {
    var _compile = this['compile' + node.typename];

    if (_compile) {
      _compile.call(this, node, frame);
    } else {
      this.fail("compile: Cannot compile node: " + node.typename, node.lineno, node.colno);
    }
  };

  _proto.getCode = function getCode() {
    return this.codebuf.join('');
  };

  return Compiler;
}(Obj);

module.exports = {
  compile: function compile(src, asyncFilters, extensions, name, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var c = new Compiler(name, opts.throwOnUndefined); // Run the extension preprocessors against the source.

    var preprocessors = (extensions || []).map(function (ext) {
      return ext.preprocess;
    }).filter(function (f) {
      return !!f;
    });
    var processedSrc = preprocessors.reduce(function (s, processor) {
      return processor(s);
    }, src);
    c.compile(transformer.transform(parser.parse(processedSrc, extensions, opts), asyncFilters, name));
    return c.getCode();
  },
  Compiler: Compiler
};

/***/ }),

/***/ 4428:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var asap = __nccwpck_require__(7943);

var _waterfall = __nccwpck_require__(3980);

var lib = __nccwpck_require__(4127);

var compiler = __nccwpck_require__(4548);

var filters = __nccwpck_require__(9223);

var _require = __nccwpck_require__(4395),
    FileSystemLoader = _require.FileSystemLoader,
    WebLoader = _require.WebLoader,
    PrecompiledLoader = _require.PrecompiledLoader;

var tests = __nccwpck_require__(841);

var globals = __nccwpck_require__(8956);

var _require2 = __nccwpck_require__(7007),
    Obj = _require2.Obj,
    EmitterObj = _require2.EmitterObj;

var globalRuntime = __nccwpck_require__(1998);

var handleError = globalRuntime.handleError,
    Frame = globalRuntime.Frame;

var expressApp = __nccwpck_require__(6548); // If the user is using the async API, *always* call it
// asynchronously even if the template was synchronous.


function callbackAsap(cb, err, res) {
  asap(function () {
    cb(err, res);
  });
}
/**
 * A no-op template, for use with {% include ignore missing %}
 */


var noopTmplSrc = {
  type: 'code',
  obj: {
    root: function root(env, context, frame, runtime, cb) {
      try {
        cb(null, '');
      } catch (e) {
        cb(handleError(e, null, null));
      }
    }
  }
};

var Environment = /*#__PURE__*/function (_EmitterObj) {
  _inheritsLoose(Environment, _EmitterObj);

  function Environment() {
    return _EmitterObj.apply(this, arguments) || this;
  }

  var _proto = Environment.prototype;

  _proto.init = function init(loaders, opts) {
    var _this = this;

    // The dev flag determines the trace that'll be shown on errors.
    // If set to true, returns the full trace from the error point,
    // otherwise will return trace starting from Template.render
    // (the full trace from within nunjucks may confuse developers using
    //  the library)
    // defaults to false
    opts = this.opts = opts || {};
    this.opts.dev = !!opts.dev; // The autoescape flag sets global autoescaping. If true,
    // every string variable will be escaped by default.
    // If false, strings can be manually escaped using the `escape` filter.
    // defaults to true

    this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true; // If true, this will make the system throw errors if trying
    // to output a null or undefined value

    this.opts.throwOnUndefined = !!opts.throwOnUndefined;
    this.opts.trimBlocks = !!opts.trimBlocks;
    this.opts.lstripBlocks = !!opts.lstripBlocks;
    this.loaders = [];

    if (!loaders) {
      // The filesystem loader is only available server-side
      if (FileSystemLoader) {
        this.loaders = [new FileSystemLoader('views')];
      } else if (WebLoader) {
        this.loaders = [new WebLoader('/views')];
      }
    } else {
      this.loaders = lib.isArray(loaders) ? loaders : [loaders];
    } // It's easy to use precompiled templates: just include them
    // before you configure nunjucks and this will automatically
    // pick it up and use it


    if (typeof window !== 'undefined' && window.nunjucksPrecompiled) {
      this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
    }

    this._initLoaders();

    this.globals = globals();
    this.filters = {};
    this.tests = {};
    this.asyncFilters = [];
    this.extensions = {};
    this.extensionsList = [];

    lib._entries(filters).forEach(function (_ref) {
      var name = _ref[0],
          filter = _ref[1];
      return _this.addFilter(name, filter);
    });

    lib._entries(tests).forEach(function (_ref2) {
      var name = _ref2[0],
          test = _ref2[1];
      return _this.addTest(name, test);
    });
  };

  _proto._initLoaders = function _initLoaders() {
    var _this2 = this;

    this.loaders.forEach(function (loader) {
      // Caching and cache busting
      loader.cache = {};

      if (typeof loader.on === 'function') {
        loader.on('update', function (name, fullname) {
          loader.cache[name] = null;

          _this2.emit('update', name, fullname, loader);
        });
        loader.on('load', function (name, source) {
          _this2.emit('load', name, source, loader);
        });
      }
    });
  };

  _proto.invalidateCache = function invalidateCache() {
    this.loaders.forEach(function (loader) {
      loader.cache = {};
    });
  };

  _proto.addExtension = function addExtension(name, extension) {
    extension.__name = name;
    this.extensions[name] = extension;
    this.extensionsList.push(extension);
    return this;
  };

  _proto.removeExtension = function removeExtension(name) {
    var extension = this.getExtension(name);

    if (!extension) {
      return;
    }

    this.extensionsList = lib.without(this.extensionsList, extension);
    delete this.extensions[name];
  };

  _proto.getExtension = function getExtension(name) {
    return this.extensions[name];
  };

  _proto.hasExtension = function hasExtension(name) {
    return !!this.extensions[name];
  };

  _proto.addGlobal = function addGlobal(name, value) {
    this.globals[name] = value;
    return this;
  };

  _proto.getGlobal = function getGlobal(name) {
    if (typeof this.globals[name] === 'undefined') {
      throw new Error('global not found: ' + name);
    }

    return this.globals[name];
  };

  _proto.addFilter = function addFilter(name, func, async) {
    var wrapped = func;

    if (async) {
      this.asyncFilters.push(name);
    }

    this.filters[name] = wrapped;
    return this;
  };

  _proto.getFilter = function getFilter(name) {
    if (!this.filters[name]) {
      throw new Error('filter not found: ' + name);
    }

    return this.filters[name];
  };

  _proto.addTest = function addTest(name, func) {
    this.tests[name] = func;
    return this;
  };

  _proto.getTest = function getTest(name) {
    if (!this.tests[name]) {
      throw new Error('test not found: ' + name);
    }

    return this.tests[name];
  };

  _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
    var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
    return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
  };

  _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
    var _this3 = this;

    var that = this;
    var tmpl = null;

    if (name && name.raw) {
      // this fixes autoescape for templates referenced in symbols
      name = name.raw;
    }

    if (lib.isFunction(parentName)) {
      cb = parentName;
      parentName = null;
      eagerCompile = eagerCompile || false;
    }

    if (lib.isFunction(eagerCompile)) {
      cb = eagerCompile;
      eagerCompile = false;
    }

    if (name instanceof Template) {
      tmpl = name;
    } else if (typeof name !== 'string') {
      throw new Error('template names must be a string: ' + name);
    } else {
      for (var i = 0; i < this.loaders.length; i++) {
        var loader = this.loaders[i];
        tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];

        if (tmpl) {
          break;
        }
      }
    }

    if (tmpl) {
      if (eagerCompile) {
        tmpl.compile();
      }

      if (cb) {
        cb(null, tmpl);
        return undefined;
      } else {
        return tmpl;
      }
    }

    var syncResult;

    var createTemplate = function createTemplate(err, info) {
      if (!info && !err && !ignoreMissing) {
        err = new Error('template not found: ' + name);
      }

      if (err) {
        if (cb) {
          cb(err);
          return;
        } else {
          throw err;
        }
      }

      var newTmpl;

      if (!info) {
        newTmpl = new Template(noopTmplSrc, _this3, '', eagerCompile);
      } else {
        newTmpl = new Template(info.src, _this3, info.path, eagerCompile);

        if (!info.noCache) {
          info.loader.cache[name] = newTmpl;
        }
      }

      if (cb) {
        cb(null, newTmpl);
      } else {
        syncResult = newTmpl;
      }
    };

    lib.asyncIter(this.loaders, function (loader, i, next, done) {
      function handle(err, src) {
        if (err) {
          done(err);
        } else if (src) {
          src.loader = loader;
          done(null, src);
        } else {
          next();
        }
      } // Resolve name relative to parentName


      name = that.resolveTemplate(loader, parentName, name);

      if (loader.async) {
        loader.getSource(name, handle);
      } else {
        handle(null, loader.getSource(name));
      }
    }, createTemplate);
    return syncResult;
  };

  _proto.express = function express(app) {
    return expressApp(this, app);
  };

  _proto.render = function render(name, ctx, cb) {
    if (lib.isFunction(ctx)) {
      cb = ctx;
      ctx = null;
    } // We support a synchronous API to make it easier to migrate
    // existing code to async. This works because if you don't do
    // anything async work, the whole thing is actually run
    // synchronously.


    var syncResult = null;
    this.getTemplate(name, function (err, tmpl) {
      if (err && cb) {
        callbackAsap(cb, err);
      } else if (err) {
        throw err;
      } else {
        syncResult = tmpl.render(ctx, cb);
      }
    });
    return syncResult;
  };

  _proto.renderString = function renderString(src, ctx, opts, cb) {
    if (lib.isFunction(opts)) {
      cb = opts;
      opts = {};
    }

    opts = opts || {};
    var tmpl = new Template(src, this, opts.path);
    return tmpl.render(ctx, cb);
  };

  _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
    return _waterfall(tasks, callback, forceAsync);
  };

  return Environment;
}(EmitterObj);

var Context = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Context, _Obj);

  function Context() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto2 = Context.prototype;

  _proto2.init = function init(ctx, blocks, env) {
    var _this4 = this;

    // Has to be tied to an environment so we can tap into its globals.
    this.env = env || new Environment(); // Make a duplicate of ctx

    this.ctx = lib.extend({}, ctx);
    this.blocks = {};
    this.exported = [];
    lib.keys(blocks).forEach(function (name) {
      _this4.addBlock(name, blocks[name]);
    });
  };

  _proto2.lookup = function lookup(name) {
    // This is one of the most called functions, so optimize for
    // the typical case where the name isn't in the globals
    if (name in this.env.globals && !(name in this.ctx)) {
      return this.env.globals[name];
    } else {
      return this.ctx[name];
    }
  };

  _proto2.setVariable = function setVariable(name, val) {
    this.ctx[name] = val;
  };

  _proto2.getVariables = function getVariables() {
    return this.ctx;
  };

  _proto2.addBlock = function addBlock(name, block) {
    this.blocks[name] = this.blocks[name] || [];
    this.blocks[name].push(block);
    return this;
  };

  _proto2.getBlock = function getBlock(name) {
    if (!this.blocks[name]) {
      throw new Error('unknown block "' + name + '"');
    }

    return this.blocks[name][0];
  };

  _proto2.getSuper = function getSuper(env, name, block, frame, runtime, cb) {
    var idx = lib.indexOf(this.blocks[name] || [], block);
    var blk = this.blocks[name][idx + 1];
    var context = this;

    if (idx === -1 || !blk) {
      throw new Error('no super block available for "' + name + '"');
    }

    blk(env, context, frame, runtime, cb);
  };

  _proto2.addExport = function addExport(name) {
    this.exported.push(name);
  };

  _proto2.getExported = function getExported() {
    var _this5 = this;

    var exported = {};
    this.exported.forEach(function (name) {
      exported[name] = _this5.ctx[name];
    });
    return exported;
  };

  return Context;
}(Obj);

var Template = /*#__PURE__*/function (_Obj2) {
  _inheritsLoose(Template, _Obj2);

  function Template() {
    return _Obj2.apply(this, arguments) || this;
  }

  var _proto3 = Template.prototype;

  _proto3.init = function init(src, env, path, eagerCompile) {
    this.env = env || new Environment();

    if (lib.isObject(src)) {
      switch (src.type) {
        case 'code':
          this.tmplProps = src.obj;
          break;

        case 'string':
          this.tmplStr = src.obj;
          break;

        default:
          throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
      }
    } else if (lib.isString(src)) {
      this.tmplStr = src;
    } else {
      throw new Error('src must be a string or an object describing the source');
    }

    this.path = path;

    if (eagerCompile) {
      try {
        this._compile();
      } catch (err) {
        throw lib._prettifyError(this.path, this.env.opts.dev, err);
      }
    } else {
      this.compiled = false;
    }
  };

  _proto3.render = function render(ctx, parentFrame, cb) {
    var _this6 = this;

    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    } else if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    } // If there is a parent frame, we are being called from internal
    // code of another template, and the internal system
    // depends on the sync/async nature of the parent template
    // to be inherited, so force an async callback


    var forceAsync = !parentFrame; // Catch compile errors for async rendering

    try {
      this.compile();
    } catch (e) {
      var err = lib._prettifyError(this.path, this.env.opts.dev, e);

      if (cb) {
        return callbackAsap(cb, err);
      } else {
        throw err;
      }
    }

    var context = new Context(ctx || {}, this.blocks, this.env);
    var frame = parentFrame ? parentFrame.push(true) : new Frame();
    frame.topLevel = true;
    var syncResult = null;
    var didError = false;
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err, res) {
      // TODO: this is actually a bug in the compiled template (because waterfall
      // tasks are both not passing errors up the chain of callbacks AND are not
      // causing a return from the top-most render function). But fixing that
      // will require a more substantial change to the compiler.
      if (didError && cb && typeof res !== 'undefined') {
        // prevent multiple calls to cb
        return;
      }

      if (err) {
        err = lib._prettifyError(_this6.path, _this6.env.opts.dev, err);
        didError = true;
      }

      if (cb) {
        if (forceAsync) {
          callbackAsap(cb, err, res);
        } else {
          cb(err, res);
        }
      } else {
        if (err) {
          throw err;
        }

        syncResult = res;
      }
    });
    return syncResult;
  };

  _proto3.getExported = function getExported(ctx, parentFrame, cb) {
    // eslint-disable-line consistent-return
    if (typeof ctx === 'function') {
      cb = ctx;
      ctx = {};
    }

    if (typeof parentFrame === 'function') {
      cb = parentFrame;
      parentFrame = null;
    } // Catch compile errors for async rendering


    try {
      this.compile();
    } catch (e) {
      if (cb) {
        return cb(e);
      } else {
        throw e;
      }
    }

    var frame = parentFrame ? parentFrame.push() : new Frame();
    frame.topLevel = true; // Run the rootRenderFunc to populate the context with exported vars

    var context = new Context(ctx || {}, this.blocks, this.env);
    this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, context.getExported());
      }
    });
  };

  _proto3.compile = function compile() {
    if (!this.compiled) {
      this._compile();
    }
  };

  _proto3._compile = function _compile() {
    var props;

    if (this.tmplProps) {
      props = this.tmplProps;
    } else {
      var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
      var func = new Function(source); // eslint-disable-line no-new-func

      props = func();
    }

    this.blocks = this._getBlocks(props);
    this.rootRenderFunc = props.root;
    this.compiled = true;
  };

  _proto3._getBlocks = function _getBlocks(props) {
    var blocks = {};
    lib.keys(props).forEach(function (k) {
      if (k.slice(0, 2) === 'b_') {
        blocks[k.slice(2)] = props[k];
      }
    });
    return blocks;
  };

  return Template;
}(Obj);

module.exports = {
  Environment: Environment,
  Template: Template
};

/***/ }),

/***/ 6548:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var path = __nccwpck_require__(5622);

module.exports = function express(env, app) {
  function NunjucksView(name, opts) {
    this.name = name;
    this.path = name;
    this.defaultEngine = opts.defaultEngine;
    this.ext = path.extname(name);

    if (!this.ext && !this.defaultEngine) {
      throw new Error('No default engine was specified and no extension was provided.');
    }

    if (!this.ext) {
      this.name += this.ext = (this.defaultEngine[0] !== '.' ? '.' : '') + this.defaultEngine;
    }
  }

  NunjucksView.prototype.render = function render(opts, cb) {
    env.render(this.name, opts, cb);
  };

  app.set('view', NunjucksView);
  app.set('nunjucksEnv', env);
  return env;
};

/***/ }),

/***/ 9223:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var lib = __nccwpck_require__(4127);

var r = __nccwpck_require__(1998);

var _exports = module.exports = {};

function normalize(value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue;
  }

  return value;
}

_exports.abs = Math.abs;

function isNaN(num) {
  return num !== num; // eslint-disable-line no-self-compare
}

function batch(arr, linecount, fillWith) {
  var i;
  var res = [];
  var tmp = [];

  for (i = 0; i < arr.length; i++) {
    if (i % linecount === 0 && tmp.length) {
      res.push(tmp);
      tmp = [];
    }

    tmp.push(arr[i]);
  }

  if (tmp.length) {
    if (fillWith) {
      for (i = tmp.length; i < linecount; i++) {
        tmp.push(fillWith);
      }
    }

    res.push(tmp);
  }

  return res;
}

_exports.batch = batch;

function capitalize(str) {
  str = normalize(str, '');
  var ret = str.toLowerCase();
  return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
}

_exports.capitalize = capitalize;

function center(str, width) {
  str = normalize(str, '');
  width = width || 80;

  if (str.length >= width) {
    return str;
  }

  var spaces = width - str.length;
  var pre = lib.repeat(' ', spaces / 2 - spaces % 2);
  var post = lib.repeat(' ', spaces / 2);
  return r.copySafeness(str, pre + str + post);
}

_exports.center = center;

function default_(val, def, bool) {
  if (bool) {
    return val || def;
  } else {
    return val !== undefined ? val : def;
  }
} // TODO: it is confusing to export something called 'default'


_exports['default'] = default_; // eslint-disable-line dot-notation

function dictsort(val, caseSensitive, by) {
  if (!lib.isObject(val)) {
    throw new lib.TemplateError('dictsort filter: val must be an object');
  }

  var array = []; // deliberately include properties from the object's prototype

  for (var k in val) {
    // eslint-disable-line guard-for-in, no-restricted-syntax
    array.push([k, val[k]]);
  }

  var si;

  if (by === undefined || by === 'key') {
    si = 0;
  } else if (by === 'value') {
    si = 1;
  } else {
    throw new lib.TemplateError('dictsort filter: You can only sort by either key or value');
  }

  array.sort(function (t1, t2) {
    var a = t1[si];
    var b = t2[si];

    if (!caseSensitive) {
      if (lib.isString(a)) {
        a = a.toUpperCase();
      }

      if (lib.isString(b)) {
        b = b.toUpperCase();
      }
    }

    return a > b ? 1 : a === b ? 0 : -1; // eslint-disable-line no-nested-ternary
  });
  return array;
}

_exports.dictsort = dictsort;

function dump(obj, spaces) {
  return JSON.stringify(obj, null, spaces);
}

_exports.dump = dump;

function escape(str) {
  if (str instanceof r.SafeString) {
    return str;
  }

  str = str === null || str === undefined ? '' : str;
  return r.markSafe(lib.escape(str.toString()));
}

_exports.escape = escape;

function safe(str) {
  if (str instanceof r.SafeString) {
    return str;
  }

  str = str === null || str === undefined ? '' : str;
  return r.markSafe(str.toString());
}

_exports.safe = safe;

function first(arr) {
  return arr[0];
}

_exports.first = first;

function forceescape(str) {
  str = str === null || str === undefined ? '' : str;
  return r.markSafe(lib.escape(str.toString()));
}

_exports.forceescape = forceescape;

function groupby(arr, attr) {
  return lib.groupBy(arr, attr, this.env.opts.throwOnUndefined);
}

_exports.groupby = groupby;

function indent(str, width, indentfirst) {
  str = normalize(str, '');

  if (str === '') {
    return '';
  }

  width = width || 4; // let res = '';

  var lines = str.split('\n');
  var sp = lib.repeat(' ', width);
  var res = lines.map(function (l, i) {
    return i === 0 && !indentfirst ? l : "" + sp + l;
  }).join('\n');
  return r.copySafeness(str, res);
}

_exports.indent = indent;

function join(arr, del, attr) {
  del = del || '';

  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }

  return arr.join(del);
}

_exports.join = join;

function last(arr) {
  return arr[arr.length - 1];
}

_exports.last = last;

function lengthFilter(val) {
  var value = normalize(val, '');

  if (value !== undefined) {
    if (typeof Map === 'function' && value instanceof Map || typeof Set === 'function' && value instanceof Set) {
      // ECMAScript 2015 Maps and Sets
      return value.size;
    }

    if (lib.isObject(value) && !(value instanceof r.SafeString)) {
      // Objects (besides SafeStrings), non-primative Arrays
      return lib.keys(value).length;
    }

    return value.length;
  }

  return 0;
}

_exports.length = lengthFilter;

function list(val) {
  if (lib.isString(val)) {
    return val.split('');
  } else if (lib.isObject(val)) {
    return lib._entries(val || {}).map(function (_ref) {
      var key = _ref[0],
          value = _ref[1];
      return {
        key: key,
        value: value
      };
    });
  } else if (lib.isArray(val)) {
    return val;
  } else {
    throw new lib.TemplateError('list filter: type not iterable');
  }
}

_exports.list = list;

function lower(str) {
  str = normalize(str, '');
  return str.toLowerCase();
}

_exports.lower = lower;

function nl2br(str) {
  if (str === null || str === undefined) {
    return '';
  }

  return r.copySafeness(str, str.replace(/\r\n|\n/g, '<br />\n'));
}

_exports.nl2br = nl2br;

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

_exports.random = random;
/**
 * Construct select or reject filter
 *
 * @param {boolean} expectedTestResult
 * @returns {function(array, string, *): array}
 */

function getSelectOrReject(expectedTestResult) {
  function filter(arr, testName, secondArg) {
    if (testName === void 0) {
      testName = 'truthy';
    }

    var context = this;
    var test = context.env.getTest(testName);
    return lib.toArray(arr).filter(function examineTestResult(item) {
      return test.call(context, item, secondArg) === expectedTestResult;
    });
  }

  return filter;
}

_exports.reject = getSelectOrReject(false);

function rejectattr(arr, attr) {
  return arr.filter(function (item) {
    return !item[attr];
  });
}

_exports.rejectattr = rejectattr;
_exports.select = getSelectOrReject(true);

function selectattr(arr, attr) {
  return arr.filter(function (item) {
    return !!item[attr];
  });
}

_exports.selectattr = selectattr;

function replace(str, old, new_, maxCount) {
  var originalStr = str;

  if (old instanceof RegExp) {
    return str.replace(old, new_);
  }

  if (typeof maxCount === 'undefined') {
    maxCount = -1;
  }

  var res = ''; // Output
  // Cast Numbers in the search term to string

  if (typeof old === 'number') {
    old = '' + old;
  } else if (typeof old !== 'string') {
    // If it is something other than number or string,
    // return the original string
    return str;
  } // Cast numbers in the replacement to string


  if (typeof str === 'number') {
    str = '' + str;
  } // If by now, we don't have a string, throw it back


  if (typeof str !== 'string' && !(str instanceof r.SafeString)) {
    return str;
  } // ShortCircuits


  if (old === '') {
    // Mimic the python behaviour: empty string is replaced
    // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
    res = new_ + str.split('').join(new_) + new_;
    return r.copySafeness(str, res);
  }

  var nextIndex = str.indexOf(old); // if # of replacements to perform is 0, or the string to does
  // not contain the old value, return the string

  if (maxCount === 0 || nextIndex === -1) {
    return str;
  }

  var pos = 0;
  var count = 0; // # of replacements made

  while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
    // Grab the next chunk of src string and add it with the
    // replacement, to the result
    res += str.substring(pos, nextIndex) + new_; // Increment our pointer in the src string

    pos = nextIndex + old.length;
    count++; // See if there are any more replacements to be made

    nextIndex = str.indexOf(old, pos);
  } // We've either reached the end, or done the max # of
  // replacements, tack on any remaining string


  if (pos < str.length) {
    res += str.substring(pos);
  }

  return r.copySafeness(originalStr, res);
}

_exports.replace = replace;

function reverse(val) {
  var arr;

  if (lib.isString(val)) {
    arr = list(val);
  } else {
    // Copy it
    arr = lib.map(val, function (v) {
      return v;
    });
  }

  arr.reverse();

  if (lib.isString(val)) {
    return r.copySafeness(val, arr.join(''));
  }

  return arr;
}

_exports.reverse = reverse;

function round(val, precision, method) {
  precision = precision || 0;
  var factor = Math.pow(10, precision);
  var rounder;

  if (method === 'ceil') {
    rounder = Math.ceil;
  } else if (method === 'floor') {
    rounder = Math.floor;
  } else {
    rounder = Math.round;
  }

  return rounder(val * factor) / factor;
}

_exports.round = round;

function slice(arr, slices, fillWith) {
  var sliceLength = Math.floor(arr.length / slices);
  var extra = arr.length % slices;
  var res = [];
  var offset = 0;

  for (var i = 0; i < slices; i++) {
    var start = offset + i * sliceLength;

    if (i < extra) {
      offset++;
    }

    var end = offset + (i + 1) * sliceLength;
    var currSlice = arr.slice(start, end);

    if (fillWith && i >= extra) {
      currSlice.push(fillWith);
    }

    res.push(currSlice);
  }

  return res;
}

_exports.slice = slice;

function sum(arr, attr, start) {
  if (start === void 0) {
    start = 0;
  }

  if (attr) {
    arr = lib.map(arr, function (v) {
      return v[attr];
    });
  }

  return start + arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

_exports.sum = sum;
_exports.sort = r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function sortFilter(arr, reversed, caseSens, attr) {
  var _this = this;

  // Copy it
  var array = lib.map(arr, function (v) {
    return v;
  });
  var getAttribute = lib.getAttrGetter(attr);
  array.sort(function (a, b) {
    var x = attr ? getAttribute(a) : a;
    var y = attr ? getAttribute(b) : b;

    if (_this.env.opts.throwOnUndefined && attr && (x === undefined || y === undefined)) {
      throw new TypeError("sort: attribute \"" + attr + "\" resolved to undefined");
    }

    if (!caseSens && lib.isString(x) && lib.isString(y)) {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }

    if (x < y) {
      return reversed ? 1 : -1;
    } else if (x > y) {
      return reversed ? -1 : 1;
    } else {
      return 0;
    }
  });
  return array;
});

function string(obj) {
  return r.copySafeness(obj, obj);
}

_exports.string = string;

function striptags(input, preserveLinebreaks) {
  input = normalize(input, '');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
  var trimmedInput = trim(input.replace(tags, ''));
  var res = '';

  if (preserveLinebreaks) {
    res = trimmedInput.replace(/^ +| +$/gm, '') // remove leading and trailing spaces
    .replace(/ +/g, ' ') // squash adjacent spaces
    .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
    .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
  } else {
    res = trimmedInput.replace(/\s+/gi, ' ');
  }

  return r.copySafeness(input, res);
}

_exports.striptags = striptags;

function title(str) {
  str = normalize(str, '');
  var words = str.split(' ').map(function (word) {
    return capitalize(word);
  });
  return r.copySafeness(str, words.join(' '));
}

_exports.title = title;

function trim(str) {
  return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
}

_exports.trim = trim;

function truncate(input, length, killwords, end) {
  var orig = input;
  input = normalize(input, '');
  length = length || 255;

  if (input.length <= length) {
    return input;
  }

  if (killwords) {
    input = input.substring(0, length);
  } else {
    var idx = input.lastIndexOf(' ', length);

    if (idx === -1) {
      idx = length;
    }

    input = input.substring(0, idx);
  }

  input += end !== undefined && end !== null ? end : '...';
  return r.copySafeness(orig, input);
}

_exports.truncate = truncate;

function upper(str) {
  str = normalize(str, '');
  return str.toUpperCase();
}

_exports.upper = upper;

function urlencode(obj) {
  var enc = encodeURIComponent;

  if (lib.isString(obj)) {
    return enc(obj);
  } else {
    var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
    return keyvals.map(function (_ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      return enc(k) + "=" + enc(v);
    }).join('&');
  }
}

_exports.urlencode = urlencode; // For the jinja regexp, see
// https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23

var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/; // from http://blog.gerv.net/2011/05/html5_email_address_regexp/

var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
var httpHttpsRe = /^https?:\/\/.*$/;
var wwwRe = /^www\./;
var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;

function urlize(str, length, nofollow) {
  if (isNaN(length)) {
    length = Infinity;
  }

  var noFollowAttr = nofollow === true ? ' rel="nofollow"' : '';
  var words = str.split(/(\s+)/).filter(function (word) {
    // If the word has no length, bail. This can happen for str with
    // trailing whitespace.
    return word && word.length;
  }).map(function (word) {
    var matches = word.match(puncRe);
    var possibleUrl = matches ? matches[1] : word;
    var shortUrl = possibleUrl.substr(0, length); // url that starts with http or https

    if (httpHttpsRe.test(possibleUrl)) {
      return "<a href=\"" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    } // url that starts with www.


    if (wwwRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    } // an email address of the form username@domain.tld


    if (emailRe.test(possibleUrl)) {
      return "<a href=\"mailto:" + possibleUrl + "\">" + possibleUrl + "</a>";
    } // url that ends in .com, .org or .net that is not an email address


    if (tldRe.test(possibleUrl)) {
      return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
    }

    return word;
  });
  return words.join('');
}

_exports.urlize = urlize;

function wordcount(str) {
  str = normalize(str, '');
  var words = str ? str.match(/\w+/g) : null;
  return words ? words.length : null;
}

_exports.wordcount = wordcount;

function float(val, def) {
  var res = parseFloat(val);
  return isNaN(res) ? def : res;
}

_exports.float = float;
var intFilter = r.makeMacro(['value', 'default', 'base'], [], function doInt(value, defaultValue, base) {
  if (base === void 0) {
    base = 10;
  }

  var res = parseInt(value, base);
  return isNaN(res) ? defaultValue : res;
});
_exports.int = intFilter; // Aliases

_exports.d = _exports.default;
_exports.e = _exports.escape;

/***/ }),

/***/ 8956:
/***/ ((module) => {

"use strict";


function _cycler(items) {
  var index = -1;
  return {
    current: null,
    reset: function reset() {
      index = -1;
      this.current = null;
    },
    next: function next() {
      index++;

      if (index >= items.length) {
        index = 0;
      }

      this.current = items[index];
      return this.current;
    }
  };
}

function _joiner(sep) {
  sep = sep || ',';
  var first = true;
  return function () {
    var val = first ? '' : sep;
    first = false;
    return val;
  };
} // Making this a function instead so it returns a new object
// each time it's called. That way, if something like an environment
// uses it, they will each have their own copy.


function globals() {
  return {
    range: function range(start, stop, step) {
      if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
        step = 1;
      } else if (!step) {
        step = 1;
      }

      var arr = [];

      if (step > 0) {
        for (var i = start; i < stop; i += step) {
          arr.push(i);
        }
      } else {
        for (var _i = start; _i > stop; _i += step) {
          // eslint-disable-line for-direction
          arr.push(_i);
        }
      }

      return arr;
    },
    cycler: function cycler() {
      return _cycler(Array.prototype.slice.call(arguments));
    },
    joiner: function joiner(sep) {
      return _joiner(sep);
    }
  };
}

module.exports = globals;

/***/ }),

/***/ 6976:
/***/ ((module) => {

"use strict";


function installCompat() {
  'use strict';
  /* eslint-disable camelcase */
  // This must be called like `nunjucks.installCompat` so that `this`
  // references the nunjucks instance

  var runtime = this.runtime;
  var lib = this.lib; // Handle slim case where these 'modules' are excluded from the built source

  var Compiler = this.compiler.Compiler;
  var Parser = this.parser.Parser;
  var nodes = this.nodes;
  var lexer = this.lexer;
  var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
  var orig_memberLookup = runtime.memberLookup;
  var orig_Compiler_assertType;
  var orig_Parser_parseAggregate;

  if (Compiler) {
    orig_Compiler_assertType = Compiler.prototype.assertType;
  }

  if (Parser) {
    orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
  }

  function uninstall() {
    runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
    runtime.memberLookup = orig_memberLookup;

    if (Compiler) {
      Compiler.prototype.assertType = orig_Compiler_assertType;
    }

    if (Parser) {
      Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
    }
  }

  runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
    var val = orig_contextOrFrameLookup.apply(this, arguments);

    if (val !== undefined) {
      return val;
    }

    switch (key) {
      case 'True':
        return true;

      case 'False':
        return false;

      case 'None':
        return null;

      default:
        return undefined;
    }
  };

  function getTokensState(tokens) {
    return {
      index: tokens.index,
      lineno: tokens.lineno,
      colno: tokens.colno
    };
  }

  if (process.env.BUILD_TYPE !== 'SLIM' && nodes && Compiler && Parser) {
    // i.e., not slim mode
    var Slice = nodes.Node.extend('Slice', {
      fields: ['start', 'stop', 'step'],
      init: function init(lineno, colno, start, stop, step) {
        start = start || new nodes.Literal(lineno, colno, null);
        stop = stop || new nodes.Literal(lineno, colno, null);
        step = step || new nodes.Literal(lineno, colno, 1);
        this.parent(lineno, colno, start, stop, step);
      }
    });

    Compiler.prototype.assertType = function assertType(node) {
      if (node instanceof Slice) {
        return;
      }

      orig_Compiler_assertType.apply(this, arguments);
    };

    Compiler.prototype.compileSlice = function compileSlice(node, frame) {
      this._emit('(');

      this._compileExpression(node.start, frame);

      this._emit('),(');

      this._compileExpression(node.stop, frame);

      this._emit('),(');

      this._compileExpression(node.step, frame);

      this._emit(')');
    };

    Parser.prototype.parseAggregate = function parseAggregate() {
      var _this = this;

      var origState = getTokensState(this.tokens); // Set back one accounting for opening bracket/parens

      origState.colno--;
      origState.index--;

      try {
        return orig_Parser_parseAggregate.apply(this);
      } catch (e) {
        var errState = getTokensState(this.tokens);

        var rethrow = function rethrow() {
          lib._assign(_this.tokens, errState);

          return e;
        }; // Reset to state before original parseAggregate called


        lib._assign(this.tokens, origState);

        this.peeked = false;
        var tok = this.peekToken();

        if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
          throw rethrow();
        } else {
          this.nextToken();
        }

        var node = new Slice(tok.lineno, tok.colno); // If we don't encounter a colon while parsing, this is not a slice,
        // so re-raise the original exception.

        var isSlice = false;

        for (var i = 0; i <= node.fields.length; i++) {
          if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
            break;
          }

          if (i === node.fields.length) {
            if (isSlice) {
              this.fail('parseSlice: too many slice components', tok.lineno, tok.colno);
            } else {
              break;
            }
          }

          if (this.skip(lexer.TOKEN_COLON)) {
            isSlice = true;
          } else {
            var field = node.fields[i];
            node[field] = this.parseExpression();
            isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
          }
        }

        if (!isSlice) {
          throw rethrow();
        }

        return new nodes.Array(tok.lineno, tok.colno, [node]);
      }
    };
  }

  function sliceLookup(obj, start, stop, step) {
    obj = obj || [];

    if (start === null) {
      start = step < 0 ? obj.length - 1 : 0;
    }

    if (stop === null) {
      stop = step < 0 ? -1 : obj.length;
    } else if (stop < 0) {
      stop += obj.length;
    }

    if (start < 0) {
      start += obj.length;
    }

    var results = [];

    for (var i = start;; i += step) {
      if (i < 0 || i > obj.length) {
        break;
      }

      if (step > 0 && i >= stop) {
        break;
      }

      if (step < 0 && i <= stop) {
        break;
      }

      results.push(runtime.memberLookup(obj, i));
    }

    return results;
  }

  function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  var ARRAY_MEMBERS = {
    pop: function pop(index) {
      if (index === undefined) {
        return this.pop();
      }

      if (index >= this.length || index < 0) {
        throw new Error('KeyError');
      }

      return this.splice(index, 1);
    },
    append: function append(element) {
      return this.push(element);
    },
    remove: function remove(element) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          return this.splice(i, 1);
        }
      }

      throw new Error('ValueError');
    },
    count: function count(element) {
      var count = 0;

      for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
          count++;
        }
      }

      return count;
    },
    index: function index(element) {
      var i;

      if ((i = this.indexOf(element)) === -1) {
        throw new Error('ValueError');
      }

      return i;
    },
    find: function find(element) {
      return this.indexOf(element);
    },
    insert: function insert(index, elem) {
      return this.splice(index, 0, elem);
    }
  };
  var OBJECT_MEMBERS = {
    items: function items() {
      return lib._entries(this);
    },
    values: function values() {
      return lib._values(this);
    },
    keys: function keys() {
      return lib.keys(this);
    },
    get: function get(key, def) {
      var output = this[key];

      if (output === undefined) {
        output = def;
      }

      return output;
    },
    has_key: function has_key(key) {
      return hasOwnProp(this, key);
    },
    pop: function pop(key, def) {
      var output = this[key];

      if (output === undefined && def !== undefined) {
        output = def;
      } else if (output === undefined) {
        throw new Error('KeyError');
      } else {
        delete this[key];
      }

      return output;
    },
    popitem: function popitem() {
      var keys = lib.keys(this);

      if (!keys.length) {
        throw new Error('KeyError');
      }

      var k = keys[0];
      var val = this[k];
      delete this[k];
      return [k, val];
    },
    setdefault: function setdefault(key, def) {
      if (def === void 0) {
        def = null;
      }

      if (!(key in this)) {
        this[key] = def;
      }

      return this[key];
    },
    update: function update(kwargs) {
      lib._assign(this, kwargs);

      return null; // Always returns None
    }
  };
  OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
  OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
  OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;

  runtime.memberLookup = function memberLookup(obj, val, autoescape) {
    if (arguments.length === 4) {
      return sliceLookup.apply(this, arguments);
    }

    obj = obj || {}; // If the object is an object, return any of the methods that Python would
    // otherwise provide.

    if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
      return ARRAY_MEMBERS[val].bind(obj);
    }

    if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
      return OBJECT_MEMBERS[val].bind(obj);
    }

    return orig_memberLookup.apply(this, arguments);
  };

  return uninstall;
}

module.exports = installCompat;

/***/ }),

/***/ 3158:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var lib = __nccwpck_require__(4127);

var whitespaceChars = " \n\t\r\xA0";
var delimChars = '()[]{}%*-+~/#,:|.<>=!';
var intChars = '0123456789';
var BLOCK_START = '{%';
var BLOCK_END = '%}';
var VARIABLE_START = '{{';
var VARIABLE_END = '}}';
var COMMENT_START = '{#';
var COMMENT_END = '#}';
var TOKEN_STRING = 'string';
var TOKEN_WHITESPACE = 'whitespace';
var TOKEN_DATA = 'data';
var TOKEN_BLOCK_START = 'block-start';
var TOKEN_BLOCK_END = 'block-end';
var TOKEN_VARIABLE_START = 'variable-start';
var TOKEN_VARIABLE_END = 'variable-end';
var TOKEN_COMMENT = 'comment';
var TOKEN_LEFT_PAREN = 'left-paren';
var TOKEN_RIGHT_PAREN = 'right-paren';
var TOKEN_LEFT_BRACKET = 'left-bracket';
var TOKEN_RIGHT_BRACKET = 'right-bracket';
var TOKEN_LEFT_CURLY = 'left-curly';
var TOKEN_RIGHT_CURLY = 'right-curly';
var TOKEN_OPERATOR = 'operator';
var TOKEN_COMMA = 'comma';
var TOKEN_COLON = 'colon';
var TOKEN_TILDE = 'tilde';
var TOKEN_PIPE = 'pipe';
var TOKEN_INT = 'int';
var TOKEN_FLOAT = 'float';
var TOKEN_BOOLEAN = 'boolean';
var TOKEN_NONE = 'none';
var TOKEN_SYMBOL = 'symbol';
var TOKEN_SPECIAL = 'special';
var TOKEN_REGEX = 'regex';

function token(type, value, lineno, colno) {
  return {
    type: type,
    value: value,
    lineno: lineno,
    colno: colno
  };
}

var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(str, opts) {
    this.str = str;
    this.index = 0;
    this.len = str.length;
    this.lineno = 0;
    this.colno = 0;
    this.in_code = false;
    opts = opts || {};
    var tags = opts.tags || {};
    this.tags = {
      BLOCK_START: tags.blockStart || BLOCK_START,
      BLOCK_END: tags.blockEnd || BLOCK_END,
      VARIABLE_START: tags.variableStart || VARIABLE_START,
      VARIABLE_END: tags.variableEnd || VARIABLE_END,
      COMMENT_START: tags.commentStart || COMMENT_START,
      COMMENT_END: tags.commentEnd || COMMENT_END
    };
    this.trimBlocks = !!opts.trimBlocks;
    this.lstripBlocks = !!opts.lstripBlocks;
  }

  var _proto = Tokenizer.prototype;

  _proto.nextToken = function nextToken() {
    var lineno = this.lineno;
    var colno = this.colno;
    var tok;

    if (this.in_code) {
      // Otherwise, if we are in a block parse it as code
      var cur = this.current();

      if (this.isFinished()) {
        // We have nothing else to parse
        return null;
      } else if (cur === '"' || cur === '\'') {
        // We've hit a string
        return token(TOKEN_STRING, this._parseString(cur), lineno, colno);
      } else if (tok = this._extract(whitespaceChars)) {
        // We hit some whitespace
        return token(TOKEN_WHITESPACE, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.BLOCK_END)) || (tok = this._extractString('-' + this.tags.BLOCK_END))) {
        // Special check for the block end tag
        //
        // It is a requirement that start and end tags are composed of
        // delimiter characters (%{}[] etc), and our code always
        // breaks on delimiters so we can assume the token parsing
        // doesn't consume these elsewhere
        this.in_code = false;

        if (this.trimBlocks) {
          cur = this.current();

          if (cur === '\n') {
            // Skip newline
            this.forward();
          } else if (cur === '\r') {
            // Skip CRLF newline
            this.forward();
            cur = this.current();

            if (cur === '\n') {
              this.forward();
            } else {
              // Was not a CRLF, so go back
              this.back();
            }
          }
        }

        return token(TOKEN_BLOCK_END, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.VARIABLE_END)) || (tok = this._extractString('-' + this.tags.VARIABLE_END))) {
        // Special check for variable end tag (see above)
        this.in_code = false;
        return token(TOKEN_VARIABLE_END, tok, lineno, colno);
      } else if (cur === 'r' && this.str.charAt(this.index + 1) === '/') {
        // Skip past 'r/'.
        this.forwardN(2); // Extract until the end of the regex -- / ends it, \/ does not.

        var regexBody = '';

        while (!this.isFinished()) {
          if (this.current() === '/' && this.previous() !== '\\') {
            this.forward();
            break;
          } else {
            regexBody += this.current();
            this.forward();
          }
        } // Check for flags.
        // The possible flags are according to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


        var POSSIBLE_FLAGS = ['g', 'i', 'm', 'y'];
        var regexFlags = '';

        while (!this.isFinished()) {
          var isCurrentAFlag = POSSIBLE_FLAGS.indexOf(this.current()) !== -1;

          if (isCurrentAFlag) {
            regexFlags += this.current();
            this.forward();
          } else {
            break;
          }
        }

        return token(TOKEN_REGEX, {
          body: regexBody,
          flags: regexFlags
        }, lineno, colno);
      } else if (delimChars.indexOf(cur) !== -1) {
        // We've hit a delimiter (a special char like a bracket)
        this.forward();
        var complexOps = ['==', '===', '!=', '!==', '<=', '>=', '//', '**'];
        var curComplex = cur + this.current();
        var type;

        if (lib.indexOf(complexOps, curComplex) !== -1) {
          this.forward();
          cur = curComplex; // See if this is a strict equality/inequality comparator

          if (lib.indexOf(complexOps, curComplex + this.current()) !== -1) {
            cur = curComplex + this.current();
            this.forward();
          }
        }

        switch (cur) {
          case '(':
            type = TOKEN_LEFT_PAREN;
            break;

          case ')':
            type = TOKEN_RIGHT_PAREN;
            break;

          case '[':
            type = TOKEN_LEFT_BRACKET;
            break;

          case ']':
            type = TOKEN_RIGHT_BRACKET;
            break;

          case '{':
            type = TOKEN_LEFT_CURLY;
            break;

          case '}':
            type = TOKEN_RIGHT_CURLY;
            break;

          case ',':
            type = TOKEN_COMMA;
            break;

          case ':':
            type = TOKEN_COLON;
            break;

          case '~':
            type = TOKEN_TILDE;
            break;

          case '|':
            type = TOKEN_PIPE;
            break;

          default:
            type = TOKEN_OPERATOR;
        }

        return token(type, cur, lineno, colno);
      } else {
        // We are not at whitespace or a delimiter, so extract the
        // text and parse it
        tok = this._extractUntil(whitespaceChars + delimChars);

        if (tok.match(/^[-+]?[0-9]+$/)) {
          if (this.current() === '.') {
            this.forward();

            var dec = this._extract(intChars);

            return token(TOKEN_FLOAT, tok + '.' + dec, lineno, colno);
          } else {
            return token(TOKEN_INT, tok, lineno, colno);
          }
        } else if (tok.match(/^(true|false)$/)) {
          return token(TOKEN_BOOLEAN, tok, lineno, colno);
        } else if (tok === 'none') {
          return token(TOKEN_NONE, tok, lineno, colno);
          /*
           * Added to make the test `null is null` evaluate truthily.
           * Otherwise, Nunjucks will look up null in the context and
           * return `undefined`, which is not what we want. This *may* have
           * consequences is someone is using null in their templates as a
           * variable.
           */
        } else if (tok === 'null') {
          return token(TOKEN_NONE, tok, lineno, colno);
        } else if (tok) {
          return token(TOKEN_SYMBOL, tok, lineno, colno);
        } else {
          throw new Error('Unexpected value while parsing: ' + tok);
        }
      }
    } else {
      // Parse out the template text, breaking on tag
      // delimiters because we need to look for block/variable start
      // tags (don't use the full delimChars for optimization)
      var beginChars = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);

      if (this.isFinished()) {
        return null;
      } else if ((tok = this._extractString(this.tags.BLOCK_START + '-')) || (tok = this._extractString(this.tags.BLOCK_START))) {
        this.in_code = true;
        return token(TOKEN_BLOCK_START, tok, lineno, colno);
      } else if ((tok = this._extractString(this.tags.VARIABLE_START + '-')) || (tok = this._extractString(this.tags.VARIABLE_START))) {
        this.in_code = true;
        return token(TOKEN_VARIABLE_START, tok, lineno, colno);
      } else {
        tok = '';
        var data;
        var inComment = false;

        if (this._matches(this.tags.COMMENT_START)) {
          inComment = true;
          tok = this._extractString(this.tags.COMMENT_START);
        } // Continually consume text, breaking on the tag delimiter
        // characters and checking to see if it's a start tag.
        //
        // We could hit the end of the template in the middle of
        // our looping, so check for the null return value from
        // _extractUntil


        while ((data = this._extractUntil(beginChars)) !== null) {
          tok += data;

          if ((this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !inComment) {
            if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= tok.length) {
              var lastLine = tok.slice(-this.colno);

              if (/^\s+$/.test(lastLine)) {
                // Remove block leading whitespace from beginning of the string
                tok = tok.slice(0, -this.colno);

                if (!tok.length) {
                  // All data removed, collapse to avoid unnecessary nodes
                  // by returning next token (block start)
                  return this.nextToken();
                }
              }
            } // If it is a start tag, stop looping


            break;
          } else if (this._matches(this.tags.COMMENT_END)) {
            if (!inComment) {
              throw new Error('unexpected end of comment');
            }

            tok += this._extractString(this.tags.COMMENT_END);
            break;
          } else {
            // It does not match any tag, so add the character and
            // carry on
            tok += this.current();
            this.forward();
          }
        }

        if (data === null && inComment) {
          throw new Error('expected end of comment, got end of file');
        }

        return token(inComment ? TOKEN_COMMENT : TOKEN_DATA, tok, lineno, colno);
      }
    }
  };

  _proto._parseString = function _parseString(delimiter) {
    this.forward();
    var str = '';

    while (!this.isFinished() && this.current() !== delimiter) {
      var cur = this.current();

      if (cur === '\\') {
        this.forward();

        switch (this.current()) {
          case 'n':
            str += '\n';
            break;

          case 't':
            str += '\t';
            break;

          case 'r':
            str += '\r';
            break;

          default:
            str += this.current();
        }

        this.forward();
      } else {
        str += cur;
        this.forward();
      }
    }

    this.forward();
    return str;
  };

  _proto._matches = function _matches(str) {
    if (this.index + str.length > this.len) {
      return null;
    }

    var m = this.str.slice(this.index, this.index + str.length);
    return m === str;
  };

  _proto._extractString = function _extractString(str) {
    if (this._matches(str)) {
      this.forwardN(str.length);
      return str;
    }

    return null;
  };

  _proto._extractUntil = function _extractUntil(charString) {
    // Extract all non-matching chars, with the default matching set
    // to everything
    return this._extractMatching(true, charString || '');
  };

  _proto._extract = function _extract(charString) {
    // Extract all matching chars (no default, so charString must be
    // explicit)
    return this._extractMatching(false, charString);
  };

  _proto._extractMatching = function _extractMatching(breakOnMatch, charString) {
    // Pull out characters until a breaking char is hit.
    // If breakOnMatch is false, a non-matching char stops it.
    // If breakOnMatch is true, a matching char stops it.
    if (this.isFinished()) {
      return null;
    }

    var first = charString.indexOf(this.current()); // Only proceed if the first character doesn't meet our condition

    if (breakOnMatch && first === -1 || !breakOnMatch && first !== -1) {
      var t = this.current();
      this.forward(); // And pull out all the chars one at a time until we hit a
      // breaking char

      var idx = charString.indexOf(this.current());

      while ((breakOnMatch && idx === -1 || !breakOnMatch && idx !== -1) && !this.isFinished()) {
        t += this.current();
        this.forward();
        idx = charString.indexOf(this.current());
      }

      return t;
    }

    return '';
  };

  _proto._extractRegex = function _extractRegex(regex) {
    var matches = this.currentStr().match(regex);

    if (!matches) {
      return null;
    } // Move forward whatever was matched


    this.forwardN(matches[0].length);
    return matches;
  };

  _proto.isFinished = function isFinished() {
    return this.index >= this.len;
  };

  _proto.forwardN = function forwardN(n) {
    for (var i = 0; i < n; i++) {
      this.forward();
    }
  };

  _proto.forward = function forward() {
    this.index++;

    if (this.previous() === '\n') {
      this.lineno++;
      this.colno = 0;
    } else {
      this.colno++;
    }
  };

  _proto.backN = function backN(n) {
    for (var i = 0; i < n; i++) {
      this.back();
    }
  };

  _proto.back = function back() {
    this.index--;

    if (this.current() === '\n') {
      this.lineno--;
      var idx = this.src.lastIndexOf('\n', this.index - 1);

      if (idx === -1) {
        this.colno = this.index;
      } else {
        this.colno = this.index - idx;
      }
    } else {
      this.colno--;
    }
  } // current returns current character
  ;

  _proto.current = function current() {
    if (!this.isFinished()) {
      return this.str.charAt(this.index);
    }

    return '';
  } // currentStr returns what's left of the unparsed string
  ;

  _proto.currentStr = function currentStr() {
    if (!this.isFinished()) {
      return this.str.substr(this.index);
    }

    return '';
  };

  _proto.previous = function previous() {
    return this.str.charAt(this.index - 1);
  };

  return Tokenizer;
}();

module.exports = {
  lex: function lex(src, opts) {
    return new Tokenizer(src, opts);
  },
  TOKEN_STRING: TOKEN_STRING,
  TOKEN_WHITESPACE: TOKEN_WHITESPACE,
  TOKEN_DATA: TOKEN_DATA,
  TOKEN_BLOCK_START: TOKEN_BLOCK_START,
  TOKEN_BLOCK_END: TOKEN_BLOCK_END,
  TOKEN_VARIABLE_START: TOKEN_VARIABLE_START,
  TOKEN_VARIABLE_END: TOKEN_VARIABLE_END,
  TOKEN_COMMENT: TOKEN_COMMENT,
  TOKEN_LEFT_PAREN: TOKEN_LEFT_PAREN,
  TOKEN_RIGHT_PAREN: TOKEN_RIGHT_PAREN,
  TOKEN_LEFT_BRACKET: TOKEN_LEFT_BRACKET,
  TOKEN_RIGHT_BRACKET: TOKEN_RIGHT_BRACKET,
  TOKEN_LEFT_CURLY: TOKEN_LEFT_CURLY,
  TOKEN_RIGHT_CURLY: TOKEN_RIGHT_CURLY,
  TOKEN_OPERATOR: TOKEN_OPERATOR,
  TOKEN_COMMA: TOKEN_COMMA,
  TOKEN_COLON: TOKEN_COLON,
  TOKEN_TILDE: TOKEN_TILDE,
  TOKEN_PIPE: TOKEN_PIPE,
  TOKEN_INT: TOKEN_INT,
  TOKEN_FLOAT: TOKEN_FLOAT,
  TOKEN_BOOLEAN: TOKEN_BOOLEAN,
  TOKEN_NONE: TOKEN_NONE,
  TOKEN_SYMBOL: TOKEN_SYMBOL,
  TOKEN_SPECIAL: TOKEN_SPECIAL,
  TOKEN_REGEX: TOKEN_REGEX
};

/***/ }),

/***/ 4127:
/***/ ((module) => {

"use strict";


var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var escapeMap = {
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&#39;',
  '<': '&lt;',
  '>': '&gt;'
};
var escapeRegex = /[&"'<>]/g;

var _exports = module.exports = {};

function hasOwnProp(obj, k) {
  return ObjProto.hasOwnProperty.call(obj, k);
}

_exports.hasOwnProp = hasOwnProp;

function lookupEscape(ch) {
  return escapeMap[ch];
}

function _prettifyError(path, withInternals, err) {
  if (!err.Update) {
    // not one of ours, cast it
    err = new _exports.TemplateError(err);
  }

  err.Update(path); // Unless they marked the dev flag, show them a trace from here

  if (!withInternals) {
    var old = err;
    err = new Error(old.message);
    err.name = old.name;
  }

  return err;
}

_exports._prettifyError = _prettifyError;

function TemplateError(message, lineno, colno) {
  var err;
  var cause;

  if (message instanceof Error) {
    cause = message;
    message = cause.name + ": " + cause.message;
  }

  if (Object.setPrototypeOf) {
    err = new Error(message);
    Object.setPrototypeOf(err, TemplateError.prototype);
  } else {
    err = this;
    Object.defineProperty(err, 'message', {
      enumerable: false,
      writable: true,
      value: message
    });
  }

  Object.defineProperty(err, 'name', {
    value: 'Template render error'
  });

  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, this.constructor);
  }

  var getStack;

  if (cause) {
    var stackDescriptor = Object.getOwnPropertyDescriptor(cause, 'stack');

    getStack = stackDescriptor && (stackDescriptor.get || function () {
      return stackDescriptor.value;
    });

    if (!getStack) {
      getStack = function getStack() {
        return cause.stack;
      };
    }
  } else {
    var stack = new Error(message).stack;

    getStack = function getStack() {
      return stack;
    };
  }

  Object.defineProperty(err, 'stack', {
    get: function get() {
      return getStack.call(err);
    }
  });
  Object.defineProperty(err, 'cause', {
    value: cause
  });
  err.lineno = lineno;
  err.colno = colno;
  err.firstUpdate = true;

  err.Update = function Update(path) {
    var msg = '(' + (path || 'unknown path') + ')'; // only show lineno + colno next to path of template
    // where error occurred

    if (this.firstUpdate) {
      if (this.lineno && this.colno) {
        msg += " [Line " + this.lineno + ", Column " + this.colno + "]";
      } else if (this.lineno) {
        msg += " [Line " + this.lineno + "]";
      }
    }

    msg += '\n ';

    if (this.firstUpdate) {
      msg += ' ';
    }

    this.message = msg + (this.message || '');
    this.firstUpdate = false;
    return this;
  };

  return err;
}

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
} else {
  TemplateError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: TemplateError
    }
  });
}

_exports.TemplateError = TemplateError;

function escape(val) {
  return val.replace(escapeRegex, lookupEscape);
}

_exports.escape = escape;

function isFunction(obj) {
  return ObjProto.toString.call(obj) === '[object Function]';
}

_exports.isFunction = isFunction;

function isArray(obj) {
  return ObjProto.toString.call(obj) === '[object Array]';
}

_exports.isArray = isArray;

function isString(obj) {
  return ObjProto.toString.call(obj) === '[object String]';
}

_exports.isString = isString;

function isObject(obj) {
  return ObjProto.toString.call(obj) === '[object Object]';
}

_exports.isObject = isObject;
/**
 * @param {string|number} attr
 * @returns {(string|number)[]}
 * @private
 */

function _prepareAttributeParts(attr) {
  if (!attr) {
    return [];
  }

  if (typeof attr === 'string') {
    return attr.split('.');
  }

  return [attr];
}
/**
 * @param {string}   attribute      Attribute value. Dots allowed.
 * @returns {function(Object): *}
 */


function getAttrGetter(attribute) {
  var parts = _prepareAttributeParts(attribute);

  return function attrGetter(item) {
    var _item = item;

    for (var i = 0; i < parts.length; i++) {
      var part = parts[i]; // If item is not an object, and we still got parts to handle, it means
      // that something goes wrong. Just roll out to undefined in that case.

      if (hasOwnProp(_item, part)) {
        _item = _item[part];
      } else {
        return undefined;
      }
    }

    return _item;
  };
}

_exports.getAttrGetter = getAttrGetter;

function groupBy(obj, val, throwOnUndefined) {
  var result = {};
  var iterator = isFunction(val) ? val : getAttrGetter(val);

  for (var i = 0; i < obj.length; i++) {
    var value = obj[i];
    var key = iterator(value, i);

    if (key === undefined && throwOnUndefined === true) {
      throw new TypeError("groupby: attribute \"" + val + "\" resolved to undefined");
    }

    (result[key] || (result[key] = [])).push(value);
  }

  return result;
}

_exports.groupBy = groupBy;

function toArray(obj) {
  return Array.prototype.slice.call(obj);
}

_exports.toArray = toArray;

function without(array) {
  var result = [];

  if (!array) {
    return result;
  }

  var length = array.length;
  var contains = toArray(arguments).slice(1);
  var index = -1;

  while (++index < length) {
    if (indexOf(contains, array[index]) === -1) {
      result.push(array[index]);
    }
  }

  return result;
}

_exports.without = without;

function repeat(char_, n) {
  var str = '';

  for (var i = 0; i < n; i++) {
    str += char_;
  }

  return str;
}

_exports.repeat = repeat;

function each(obj, func, context) {
  if (obj == null) {
    return;
  }

  if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
    obj.forEach(func, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      func.call(context, obj[i], i, obj);
    }
  }
}

_exports.each = each;

function map(obj, func) {
  var results = [];

  if (obj == null) {
    return results;
  }

  if (ArrayProto.map && obj.map === ArrayProto.map) {
    return obj.map(func);
  }

  for (var i = 0; i < obj.length; i++) {
    results[results.length] = func(obj[i], i);
  }

  if (obj.length === +obj.length) {
    results.length = obj.length;
  }

  return results;
}

_exports.map = map;

function asyncIter(arr, iter, cb) {
  var i = -1;

  function next() {
    i++;

    if (i < arr.length) {
      iter(arr[i], i, next, cb);
    } else {
      cb();
    }
  }

  next();
}

_exports.asyncIter = asyncIter;

function asyncFor(obj, iter, cb) {
  var keys = keys_(obj || {});
  var len = keys.length;
  var i = -1;

  function next() {
    i++;
    var k = keys[i];

    if (i < len) {
      iter(k, obj[k], i, len, next);
    } else {
      cb();
    }
  }

  next();
}

_exports.asyncFor = asyncFor;

function indexOf(arr, searchElement, fromIndex) {
  return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
}

_exports.indexOf = indexOf;

function keys_(obj) {
  /* eslint-disable no-restricted-syntax */
  var arr = [];

  for (var k in obj) {
    if (hasOwnProp(obj, k)) {
      arr.push(k);
    }
  }

  return arr;
}

_exports.keys = keys_;

function _entries(obj) {
  return keys_(obj).map(function (k) {
    return [k, obj[k]];
  });
}

_exports._entries = _entries;

function _values(obj) {
  return keys_(obj).map(function (k) {
    return obj[k];
  });
}

_exports._values = _values;

function extend(obj1, obj2) {
  obj1 = obj1 || {};
  keys_(obj2).forEach(function (k) {
    obj1[k] = obj2[k];
  });
  return obj1;
}

_exports._assign = _exports.extend = extend;

function inOperator(key, val) {
  if (isArray(val) || isString(val)) {
    return val.indexOf(key) !== -1;
  } else if (isObject(val)) {
    return key in val;
  }

  throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
}

_exports.inOperator = inOperator;

/***/ }),

/***/ 6981:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var path = __nccwpck_require__(5622);

var _require = __nccwpck_require__(7007),
    EmitterObj = _require.EmitterObj;

module.exports = /*#__PURE__*/function (_EmitterObj) {
  _inheritsLoose(Loader, _EmitterObj);

  function Loader() {
    return _EmitterObj.apply(this, arguments) || this;
  }

  var _proto = Loader.prototype;

  _proto.resolve = function resolve(from, to) {
    return path.resolve(path.dirname(from), to);
  };

  _proto.isRelative = function isRelative(filename) {
    return filename.indexOf('./') === 0 || filename.indexOf('../') === 0;
  };

  return Loader;
}(EmitterObj);

/***/ }),

/***/ 4395:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


// This file will automatically be rewired to web-loader.js when
// building for the browser
module.exports = __nccwpck_require__(9082);

/***/ }),

/***/ 9082:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint-disable no-console */


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var fs = __nccwpck_require__(5747);

var path = __nccwpck_require__(5622);

var Loader = __nccwpck_require__(6981);

var _require = __nccwpck_require__(8957),
    PrecompiledLoader = _require.PrecompiledLoader;

var chokidar;

var FileSystemLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(FileSystemLoader, _Loader);

  function FileSystemLoader(searchPaths, opts) {
    var _this;

    _this = _Loader.call(this) || this;

    if (typeof opts === 'boolean') {
      console.log('[nunjucks] Warning: you passed a boolean as the second ' + 'argument to FileSystemLoader, but it now takes an options ' + 'object. See http://mozilla.github.io/nunjucks/api.html#filesystemloader');
    }

    opts = opts || {};
    _this.pathsToNames = {};
    _this.noCache = !!opts.noCache;

    if (searchPaths) {
      searchPaths = Array.isArray(searchPaths) ? searchPaths : [searchPaths]; // For windows, convert to forward slashes

      _this.searchPaths = searchPaths.map(path.normalize);
    } else {
      _this.searchPaths = ['.'];
    }

    if (opts.watch) {
      // Watch all the templates in the paths and fire an event when
      // they change
      try {
        chokidar = __nccwpck_require__(561); // eslint-disable-line global-require
      } catch (e) {
        throw new Error('watch requires chokidar to be installed');
      }

      var paths = _this.searchPaths.filter(fs.existsSync);

      var watcher = chokidar.watch(paths);
      watcher.on('all', function (event, fullname) {
        fullname = path.resolve(fullname);

        if (event === 'change' && fullname in _this.pathsToNames) {
          _this.emit('update', _this.pathsToNames[fullname], fullname);
        }
      });
      watcher.on('error', function (error) {
        console.log('Watcher error: ' + error);
      });
    }

    return _this;
  }

  var _proto = FileSystemLoader.prototype;

  _proto.getSource = function getSource(name) {
    var fullpath = null;
    var paths = this.searchPaths;

    for (var i = 0; i < paths.length; i++) {
      var basePath = path.resolve(paths[i]);
      var p = path.resolve(paths[i], name); // Only allow the current directory and anything
      // underneath it to be searched

      if (p.indexOf(basePath) === 0 && fs.existsSync(p)) {
        fullpath = p;
        break;
      }
    }

    if (!fullpath) {
      return null;
    }

    this.pathsToNames[fullpath] = name;
    var source = {
      src: fs.readFileSync(fullpath, 'utf-8'),
      path: fullpath,
      noCache: this.noCache
    };
    this.emit('load', name, source);
    return source;
  };

  return FileSystemLoader;
}(Loader);

var NodeResolveLoader = /*#__PURE__*/function (_Loader2) {
  _inheritsLoose(NodeResolveLoader, _Loader2);

  function NodeResolveLoader(opts) {
    var _this2;

    _this2 = _Loader2.call(this) || this;
    opts = opts || {};
    _this2.pathsToNames = {};
    _this2.noCache = !!opts.noCache;

    if (opts.watch) {
      try {
        chokidar = __nccwpck_require__(561); // eslint-disable-line global-require
      } catch (e) {
        throw new Error('watch requires chokidar to be installed');
      }

      _this2.watcher = chokidar.watch();

      _this2.watcher.on('change', function (fullname) {
        _this2.emit('update', _this2.pathsToNames[fullname], fullname);
      });

      _this2.watcher.on('error', function (error) {
        console.log('Watcher error: ' + error);
      });

      _this2.on('load', function (name, source) {
        _this2.watcher.add(source.path);
      });
    }

    return _this2;
  }

  var _proto2 = NodeResolveLoader.prototype;

  _proto2.getSource = function getSource(name) {
    // Don't allow file-system traversal
    if (/^\.?\.?(\/|\\)/.test(name)) {
      return null;
    }

    if (/^[A-Z]:/.test(name)) {
      return null;
    }

    var fullpath;

    try {
      fullpath = require.resolve(name);
    } catch (e) {
      return null;
    }

    this.pathsToNames[fullpath] = name;
    var source = {
      src: fs.readFileSync(fullpath, 'utf-8'),
      path: fullpath,
      noCache: this.noCache
    };
    this.emit('load', name, source);
    return source;
  };

  return NodeResolveLoader;
}(Loader);

module.exports = {
  FileSystemLoader: FileSystemLoader,
  PrecompiledLoader: PrecompiledLoader,
  NodeResolveLoader: NodeResolveLoader
};

/***/ }),

/***/ 429:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = __nccwpck_require__(7007),
    Obj = _require.Obj;

function traverseAndCheck(obj, type, results) {
  if (obj instanceof type) {
    results.push(obj);
  }

  if (obj instanceof Node) {
    obj.findAll(type, results);
  }
}

var Node = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Node, _Obj);

  function Node() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto = Node.prototype;

  _proto.init = function init(lineno, colno) {
    var _arguments = arguments,
        _this = this;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.lineno = lineno;
    this.colno = colno;
    this.fields.forEach(function (field, i) {
      // The first two args are line/col numbers, so offset by 2
      var val = _arguments[i + 2]; // Fields should never be undefined, but null. It makes
      // testing easier to normalize values.

      if (val === undefined) {
        val = null;
      }

      _this[field] = val;
    });
  };

  _proto.findAll = function findAll(type, results) {
    var _this2 = this;

    results = results || [];

    if (this instanceof NodeList) {
      this.children.forEach(function (child) {
        return traverseAndCheck(child, type, results);
      });
    } else {
      this.fields.forEach(function (field) {
        return traverseAndCheck(_this2[field], type, results);
      });
    }

    return results;
  };

  _proto.iterFields = function iterFields(func) {
    var _this3 = this;

    this.fields.forEach(function (field) {
      func(_this3[field], field);
    });
  };

  return Node;
}(Obj); // Abstract nodes


var Value = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Value, _Node);

  function Value() {
    return _Node.apply(this, arguments) || this;
  }

  _createClass(Value, [{
    key: "typename",
    get: function get() {
      return 'Value';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['value'];
    }
  }]);

  return Value;
}(Node); // Concrete nodes


var NodeList = /*#__PURE__*/function (_Node2) {
  _inheritsLoose(NodeList, _Node2);

  function NodeList() {
    return _Node2.apply(this, arguments) || this;
  }

  var _proto2 = NodeList.prototype;

  _proto2.init = function init(lineno, colno, nodes) {
    _Node2.prototype.init.call(this, lineno, colno, nodes || []);
  };

  _proto2.addChild = function addChild(node) {
    this.children.push(node);
  };

  _createClass(NodeList, [{
    key: "typename",
    get: function get() {
      return 'NodeList';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['children'];
    }
  }]);

  return NodeList;
}(Node);

var Root = NodeList.extend('Root');
var Literal = Value.extend('Literal');
var Symbol = Value.extend('Symbol');
var Group = NodeList.extend('Group');
var ArrayNode = NodeList.extend('Array');
var Pair = Node.extend('Pair', {
  fields: ['key', 'value']
});
var Dict = NodeList.extend('Dict');
var LookupVal = Node.extend('LookupVal', {
  fields: ['target', 'val']
});
var If = Node.extend('If', {
  fields: ['cond', 'body', 'else_']
});
var IfAsync = If.extend('IfAsync');
var InlineIf = Node.extend('InlineIf', {
  fields: ['cond', 'body', 'else_']
});
var For = Node.extend('For', {
  fields: ['arr', 'name', 'body', 'else_']
});
var AsyncEach = For.extend('AsyncEach');
var AsyncAll = For.extend('AsyncAll');
var Macro = Node.extend('Macro', {
  fields: ['name', 'args', 'body']
});
var Caller = Macro.extend('Caller');
var Import = Node.extend('Import', {
  fields: ['template', 'target', 'withContext']
});

var FromImport = /*#__PURE__*/function (_Node3) {
  _inheritsLoose(FromImport, _Node3);

  function FromImport() {
    return _Node3.apply(this, arguments) || this;
  }

  var _proto3 = FromImport.prototype;

  _proto3.init = function init(lineno, colno, template, names, withContext) {
    _Node3.prototype.init.call(this, lineno, colno, template, names || new NodeList(), withContext);
  };

  _createClass(FromImport, [{
    key: "typename",
    get: function get() {
      return 'FromImport';
    }
  }, {
    key: "fields",
    get: function get() {
      return ['template', 'names', 'withContext'];
    }
  }]);

  return FromImport;
}(Node);

var FunCall = Node.extend('FunCall', {
  fields: ['name', 'args']
});
var Filter = FunCall.extend('Filter');
var FilterAsync = Filter.extend('FilterAsync', {
  fields: ['name', 'args', 'symbol']
});
var KeywordArgs = Dict.extend('KeywordArgs');
var Block = Node.extend('Block', {
  fields: ['name', 'body']
});
var Super = Node.extend('Super', {
  fields: ['blockName', 'symbol']
});
var TemplateRef = Node.extend('TemplateRef', {
  fields: ['template']
});
var Extends = TemplateRef.extend('Extends');
var Include = Node.extend('Include', {
  fields: ['template', 'ignoreMissing']
});
var Set = Node.extend('Set', {
  fields: ['targets', 'value']
});
var Switch = Node.extend('Switch', {
  fields: ['expr', 'cases', 'default']
});
var Case = Node.extend('Case', {
  fields: ['cond', 'body']
});
var Output = NodeList.extend('Output');
var Capture = Node.extend('Capture', {
  fields: ['body']
});
var TemplateData = Literal.extend('TemplateData');
var UnaryOp = Node.extend('UnaryOp', {
  fields: ['target']
});
var BinOp = Node.extend('BinOp', {
  fields: ['left', 'right']
});
var In = BinOp.extend('In');
var Is = BinOp.extend('Is');
var Or = BinOp.extend('Or');
var And = BinOp.extend('And');
var Not = UnaryOp.extend('Not');
var Add = BinOp.extend('Add');
var Concat = BinOp.extend('Concat');
var Sub = BinOp.extend('Sub');
var Mul = BinOp.extend('Mul');
var Div = BinOp.extend('Div');
var FloorDiv = BinOp.extend('FloorDiv');
var Mod = BinOp.extend('Mod');
var Pow = BinOp.extend('Pow');
var Neg = UnaryOp.extend('Neg');
var Pos = UnaryOp.extend('Pos');
var Compare = Node.extend('Compare', {
  fields: ['expr', 'ops']
});
var CompareOperand = Node.extend('CompareOperand', {
  fields: ['expr', 'type']
});
var CallExtension = Node.extend('CallExtension', {
  init: function init(ext, prop, args, contentArgs) {
    this.parent();
    this.extName = ext.__name || ext;
    this.prop = prop;
    this.args = args || new NodeList();
    this.contentArgs = contentArgs || [];
    this.autoescape = ext.autoescape;
  },
  fields: ['extName', 'prop', 'args', 'contentArgs']
});
var CallExtensionAsync = CallExtension.extend('CallExtensionAsync'); // This is hacky, but this is just a debugging function anyway

function print(str, indent, inline) {
  var lines = str.split('\n');
  lines.forEach(function (line, i) {
    if (line && (inline && i > 0 || !inline)) {
      process.stdout.write(' '.repeat(indent));
    }

    var nl = i === lines.length - 1 ? '' : '\n';
    process.stdout.write("" + line + nl);
  });
} // Print the AST in a nicely formatted tree format for debuggin


function printNodes(node, indent) {
  indent = indent || 0;
  print(node.typename + ': ', indent);

  if (node instanceof NodeList) {
    print('\n');
    node.children.forEach(function (n) {
      printNodes(n, indent + 2);
    });
  } else if (node instanceof CallExtension) {
    print(node.extName + "." + node.prop + "\n");

    if (node.args) {
      printNodes(node.args, indent + 2);
    }

    if (node.contentArgs) {
      node.contentArgs.forEach(function (n) {
        printNodes(n, indent + 2);
      });
    }
  } else {
    var nodes = [];
    var props = null;
    node.iterFields(function (val, fieldName) {
      if (val instanceof Node) {
        nodes.push([fieldName, val]);
      } else {
        props = props || {};
        props[fieldName] = val;
      }
    });

    if (props) {
      print(JSON.stringify(props, null, 2) + '\n', null, true);
    } else {
      print('\n');
    }

    nodes.forEach(function (_ref) {
      var fieldName = _ref[0],
          n = _ref[1];
      print("[" + fieldName + "] =>", indent + 2);
      printNodes(n, indent + 4);
    });
  }
}

module.exports = {
  Node: Node,
  Root: Root,
  NodeList: NodeList,
  Value: Value,
  Literal: Literal,
  Symbol: Symbol,
  Group: Group,
  Array: ArrayNode,
  Pair: Pair,
  Dict: Dict,
  Output: Output,
  Capture: Capture,
  TemplateData: TemplateData,
  If: If,
  IfAsync: IfAsync,
  InlineIf: InlineIf,
  For: For,
  AsyncEach: AsyncEach,
  AsyncAll: AsyncAll,
  Macro: Macro,
  Caller: Caller,
  Import: Import,
  FromImport: FromImport,
  FunCall: FunCall,
  Filter: Filter,
  FilterAsync: FilterAsync,
  KeywordArgs: KeywordArgs,
  Block: Block,
  Super: Super,
  Extends: Extends,
  Include: Include,
  Set: Set,
  Switch: Switch,
  Case: Case,
  LookupVal: LookupVal,
  BinOp: BinOp,
  In: In,
  Is: Is,
  Or: Or,
  And: And,
  Not: Not,
  Add: Add,
  Concat: Concat,
  Sub: Sub,
  Mul: Mul,
  Div: Div,
  FloorDiv: FloorDiv,
  Mod: Mod,
  Pow: Pow,
  Neg: Neg,
  Pos: Pos,
  Compare: Compare,
  CompareOperand: CompareOperand,
  CallExtension: CallExtension,
  CallExtensionAsync: CallExtensionAsync,
  printNodes: printNodes
};

/***/ }),

/***/ 7007:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
 // A simple class system, more documentation to come

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = __nccwpck_require__(8614);

var lib = __nccwpck_require__(4127);

function parentWrap(parent, prop) {
  if (typeof parent !== 'function' || typeof prop !== 'function') {
    return prop;
  }

  return function wrap() {
    // Save the current parent method
    var tmp = this.parent; // Set parent to the previous method, call, and restore

    this.parent = parent;
    var res = prop.apply(this, arguments);
    this.parent = tmp;
    return res;
  };
}

function extendClass(cls, name, props) {
  props = props || {};
  lib.keys(props).forEach(function (k) {
    props[k] = parentWrap(cls.prototype[k], props[k]);
  });

  var subclass = /*#__PURE__*/function (_cls) {
    _inheritsLoose(subclass, _cls);

    function subclass() {
      return _cls.apply(this, arguments) || this;
    }

    _createClass(subclass, [{
      key: "typename",
      get: function get() {
        return name;
      }
    }]);

    return subclass;
  }(cls);

  lib._assign(subclass.prototype, props);

  return subclass;
}

var Obj = /*#__PURE__*/function () {
  function Obj() {
    // Unfortunately necessary for backwards compatibility
    this.init.apply(this, arguments);
  }

  var _proto = Obj.prototype;

  _proto.init = function init() {};

  Obj.extend = function extend(name, props) {
    if (typeof name === 'object') {
      props = name;
      name = 'anonymous';
    }

    return extendClass(this, name, props);
  };

  _createClass(Obj, [{
    key: "typename",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Obj;
}();

var EmitterObj = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(EmitterObj, _EventEmitter);

  function EmitterObj() {
    var _this2;

    var _this;

    _this = _EventEmitter.call(this) || this; // Unfortunately necessary for backwards compatibility

    (_this2 = _this).init.apply(_this2, arguments);

    return _this;
  }

  var _proto2 = EmitterObj.prototype;

  _proto2.init = function init() {};

  EmitterObj.extend = function extend(name, props) {
    if (typeof name === 'object') {
      props = name;
      name = 'anonymous';
    }

    return extendClass(this, name, props);
  };

  _createClass(EmitterObj, [{
    key: "typename",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return EmitterObj;
}(EventEmitter);

module.exports = {
  Obj: Obj,
  EmitterObj: EmitterObj
};

/***/ }),

/***/ 6614:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexer = __nccwpck_require__(3158);

var nodes = __nccwpck_require__(429);

var Obj = __nccwpck_require__(7007).Obj;

var lib = __nccwpck_require__(4127);

var Parser = /*#__PURE__*/function (_Obj) {
  _inheritsLoose(Parser, _Obj);

  function Parser() {
    return _Obj.apply(this, arguments) || this;
  }

  var _proto = Parser.prototype;

  _proto.init = function init(tokens) {
    this.tokens = tokens;
    this.peeked = null;
    this.breakOnBlocks = null;
    this.dropLeadingWhitespace = false;
    this.extensions = [];
  };

  _proto.nextToken = function nextToken(withWhitespace) {
    var tok;

    if (this.peeked) {
      if (!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE) {
        this.peeked = null;
      } else {
        tok = this.peeked;
        this.peeked = null;
        return tok;
      }
    }

    tok = this.tokens.nextToken();

    if (!withWhitespace) {
      while (tok && tok.type === lexer.TOKEN_WHITESPACE) {
        tok = this.tokens.nextToken();
      }
    }

    return tok;
  };

  _proto.peekToken = function peekToken() {
    this.peeked = this.peeked || this.nextToken();
    return this.peeked;
  };

  _proto.pushToken = function pushToken(tok) {
    if (this.peeked) {
      throw new Error('pushToken: can only push one token on between reads');
    }

    this.peeked = tok;
  };

  _proto.error = function error(msg, lineno, colno) {
    if (lineno === undefined || colno === undefined) {
      var tok = this.peekToken() || {};
      lineno = tok.lineno;
      colno = tok.colno;
    }

    if (lineno !== undefined) {
      lineno += 1;
    }

    if (colno !== undefined) {
      colno += 1;
    }

    return new lib.TemplateError(msg, lineno, colno);
  };

  _proto.fail = function fail(msg, lineno, colno) {
    throw this.error(msg, lineno, colno);
  };

  _proto.skip = function skip(type) {
    var tok = this.nextToken();

    if (!tok || tok.type !== type) {
      this.pushToken(tok);
      return false;
    }

    return true;
  };

  _proto.expect = function expect(type) {
    var tok = this.nextToken();

    if (tok.type !== type) {
      this.fail('expected ' + type + ', got ' + tok.type, tok.lineno, tok.colno);
    }

    return tok;
  };

  _proto.skipValue = function skipValue(type, val) {
    var tok = this.nextToken();

    if (!tok || tok.type !== type || tok.value !== val) {
      this.pushToken(tok);
      return false;
    }

    return true;
  };

  _proto.skipSymbol = function skipSymbol(val) {
    return this.skipValue(lexer.TOKEN_SYMBOL, val);
  };

  _proto.advanceAfterBlockEnd = function advanceAfterBlockEnd(name) {
    var tok;

    if (!name) {
      tok = this.peekToken();

      if (!tok) {
        this.fail('unexpected end of file');
      }

      if (tok.type !== lexer.TOKEN_SYMBOL) {
        this.fail('advanceAfterBlockEnd: expected symbol token or ' + 'explicit name to be passed');
      }

      name = this.nextToken().value;
    }

    tok = this.nextToken();

    if (tok && tok.type === lexer.TOKEN_BLOCK_END) {
      if (tok.value.charAt(0) === '-') {
        this.dropLeadingWhitespace = true;
      }
    } else {
      this.fail('expected block end in ' + name + ' statement');
    }

    return tok;
  };

  _proto.advanceAfterVariableEnd = function advanceAfterVariableEnd() {
    var tok = this.nextToken();

    if (tok && tok.type === lexer.TOKEN_VARIABLE_END) {
      this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.VARIABLE_END.length - 1) === '-';
    } else {
      this.pushToken(tok);
      this.fail('expected variable end');
    }
  };

  _proto.parseFor = function parseFor() {
    var forTok = this.peekToken();
    var node;
    var endBlock;

    if (this.skipSymbol('for')) {
      node = new nodes.For(forTok.lineno, forTok.colno);
      endBlock = 'endfor';
    } else if (this.skipSymbol('asyncEach')) {
      node = new nodes.AsyncEach(forTok.lineno, forTok.colno);
      endBlock = 'endeach';
    } else if (this.skipSymbol('asyncAll')) {
      node = new nodes.AsyncAll(forTok.lineno, forTok.colno);
      endBlock = 'endall';
    } else {
      this.fail('parseFor: expected for{Async}', forTok.lineno, forTok.colno);
    }

    node.name = this.parsePrimary();

    if (!(node.name instanceof nodes.Symbol)) {
      this.fail('parseFor: variable name expected for loop');
    }

    var type = this.peekToken().type;

    if (type === lexer.TOKEN_COMMA) {
      // key/value iteration
      var key = node.name;
      node.name = new nodes.Array(key.lineno, key.colno);
      node.name.addChild(key);

      while (this.skip(lexer.TOKEN_COMMA)) {
        var prim = this.parsePrimary();
        node.name.addChild(prim);
      }
    }

    if (!this.skipSymbol('in')) {
      this.fail('parseFor: expected "in" keyword for loop', forTok.lineno, forTok.colno);
    }

    node.arr = this.parseExpression();
    this.advanceAfterBlockEnd(forTok.value);
    node.body = this.parseUntilBlocks(endBlock, 'else');

    if (this.skipSymbol('else')) {
      this.advanceAfterBlockEnd('else');
      node.else_ = this.parseUntilBlocks(endBlock);
    }

    this.advanceAfterBlockEnd();
    return node;
  };

  _proto.parseMacro = function parseMacro() {
    var macroTok = this.peekToken();

    if (!this.skipSymbol('macro')) {
      this.fail('expected macro');
    }

    var name = this.parsePrimary(true);
    var args = this.parseSignature();
    var node = new nodes.Macro(macroTok.lineno, macroTok.colno, name, args);
    this.advanceAfterBlockEnd(macroTok.value);
    node.body = this.parseUntilBlocks('endmacro');
    this.advanceAfterBlockEnd();
    return node;
  };

  _proto.parseCall = function parseCall() {
    // a call block is parsed as a normal FunCall, but with an added
    // 'caller' kwarg which is a Caller node.
    var callTok = this.peekToken();

    if (!this.skipSymbol('call')) {
      this.fail('expected call');
    }

    var callerArgs = this.parseSignature(true) || new nodes.NodeList();
    var macroCall = this.parsePrimary();
    this.advanceAfterBlockEnd(callTok.value);
    var body = this.parseUntilBlocks('endcall');
    this.advanceAfterBlockEnd();
    var callerName = new nodes.Symbol(callTok.lineno, callTok.colno, 'caller');
    var callerNode = new nodes.Caller(callTok.lineno, callTok.colno, callerName, callerArgs, body); // add the additional caller kwarg, adding kwargs if necessary

    var args = macroCall.args.children;

    if (!(args[args.length - 1] instanceof nodes.KeywordArgs)) {
      args.push(new nodes.KeywordArgs());
    }

    var kwargs = args[args.length - 1];
    kwargs.addChild(new nodes.Pair(callTok.lineno, callTok.colno, callerName, callerNode));
    return new nodes.Output(callTok.lineno, callTok.colno, [macroCall]);
  };

  _proto.parseWithContext = function parseWithContext() {
    var tok = this.peekToken();
    var withContext = null;

    if (this.skipSymbol('with')) {
      withContext = true;
    } else if (this.skipSymbol('without')) {
      withContext = false;
    }

    if (withContext !== null) {
      if (!this.skipSymbol('context')) {
        this.fail('parseFrom: expected context after with/without', tok.lineno, tok.colno);
      }
    }

    return withContext;
  };

  _proto.parseImport = function parseImport() {
    var importTok = this.peekToken();

    if (!this.skipSymbol('import')) {
      this.fail('parseImport: expected import', importTok.lineno, importTok.colno);
    }

    var template = this.parseExpression();

    if (!this.skipSymbol('as')) {
      this.fail('parseImport: expected "as" keyword', importTok.lineno, importTok.colno);
    }

    var target = this.parseExpression();
    var withContext = this.parseWithContext();
    var node = new nodes.Import(importTok.lineno, importTok.colno, template, target, withContext);
    this.advanceAfterBlockEnd(importTok.value);
    return node;
  };

  _proto.parseFrom = function parseFrom() {
    var fromTok = this.peekToken();

    if (!this.skipSymbol('from')) {
      this.fail('parseFrom: expected from');
    }

    var template = this.parseExpression();

    if (!this.skipSymbol('import')) {
      this.fail('parseFrom: expected import', fromTok.lineno, fromTok.colno);
    }

    var names = new nodes.NodeList();
    var withContext;

    while (1) {
      // eslint-disable-line no-constant-condition
      var nextTok = this.peekToken();

      if (nextTok.type === lexer.TOKEN_BLOCK_END) {
        if (!names.children.length) {
          this.fail('parseFrom: Expected at least one import name', fromTok.lineno, fromTok.colno);
        } // Since we are manually advancing past the block end,
        // need to keep track of whitespace control (normally
        // this is done in `advanceAfterBlockEnd`


        if (nextTok.value.charAt(0) === '-') {
          this.dropLeadingWhitespace = true;
        }

        this.nextToken();
        break;
      }

      if (names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)) {
        this.fail('parseFrom: expected comma', fromTok.lineno, fromTok.colno);
      }

      var name = this.parsePrimary();

      if (name.value.charAt(0) === '_') {
        this.fail('parseFrom: names starting with an underscore cannot be imported', name.lineno, name.colno);
      }

      if (this.skipSymbol('as')) {
        var alias = this.parsePrimary();
        names.addChild(new nodes.Pair(name.lineno, name.colno, name, alias));
      } else {
        names.addChild(name);
      }

      withContext = this.parseWithContext();
    }

    return new nodes.FromImport(fromTok.lineno, fromTok.colno, template, names, withContext);
  };

  _proto.parseBlock = function parseBlock() {
    var tag = this.peekToken();

    if (!this.skipSymbol('block')) {
      this.fail('parseBlock: expected block', tag.lineno, tag.colno);
    }

    var node = new nodes.Block(tag.lineno, tag.colno);
    node.name = this.parsePrimary();

    if (!(node.name instanceof nodes.Symbol)) {
      this.fail('parseBlock: variable name expected', tag.lineno, tag.colno);
    }

    this.advanceAfterBlockEnd(tag.value);
    node.body = this.parseUntilBlocks('endblock');
    this.skipSymbol('endblock');
    this.skipSymbol(node.name.value);
    var tok = this.peekToken();

    if (!tok) {
      this.fail('parseBlock: expected endblock, got end of file');
    }

    this.advanceAfterBlockEnd(tok.value);
    return node;
  };

  _proto.parseExtends = function parseExtends() {
    var tagName = 'extends';
    var tag = this.peekToken();

    if (!this.skipSymbol(tagName)) {
      this.fail('parseTemplateRef: expected ' + tagName);
    }

    var node = new nodes.Extends(tag.lineno, tag.colno);
    node.template = this.parseExpression();
    this.advanceAfterBlockEnd(tag.value);
    return node;
  };

  _proto.parseInclude = function parseInclude() {
    var tagName = 'include';
    var tag = this.peekToken();

    if (!this.skipSymbol(tagName)) {
      this.fail('parseInclude: expected ' + tagName);
    }

    var node = new nodes.Include(tag.lineno, tag.colno);
    node.template = this.parseExpression();

    if (this.skipSymbol('ignore') && this.skipSymbol('missing')) {
      node.ignoreMissing = true;
    }

    this.advanceAfterBlockEnd(tag.value);
    return node;
  };

  _proto.parseIf = function parseIf() {
    var tag = this.peekToken();
    var node;

    if (this.skipSymbol('if') || this.skipSymbol('elif') || this.skipSymbol('elseif')) {
      node = new nodes.If(tag.lineno, tag.colno);
    } else if (this.skipSymbol('ifAsync')) {
      node = new nodes.IfAsync(tag.lineno, tag.colno);
    } else {
      this.fail('parseIf: expected if, elif, or elseif', tag.lineno, tag.colno);
    }

    node.cond = this.parseExpression();
    this.advanceAfterBlockEnd(tag.value);
    node.body = this.parseUntilBlocks('elif', 'elseif', 'else', 'endif');
    var tok = this.peekToken();

    switch (tok && tok.value) {
      case 'elseif':
      case 'elif':
        node.else_ = this.parseIf();
        break;

      case 'else':
        this.advanceAfterBlockEnd();
        node.else_ = this.parseUntilBlocks('endif');
        this.advanceAfterBlockEnd();
        break;

      case 'endif':
        node.else_ = null;
        this.advanceAfterBlockEnd();
        break;

      default:
        this.fail('parseIf: expected elif, else, or endif, got end of file');
    }

    return node;
  };

  _proto.parseSet = function parseSet() {
    var tag = this.peekToken();

    if (!this.skipSymbol('set')) {
      this.fail('parseSet: expected set', tag.lineno, tag.colno);
    }

    var node = new nodes.Set(tag.lineno, tag.colno, []);
    var target;

    while (target = this.parsePrimary()) {
      node.targets.push(target);

      if (!this.skip(lexer.TOKEN_COMMA)) {
        break;
      }
    }

    if (!this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
      if (!this.skip(lexer.TOKEN_BLOCK_END)) {
        this.fail('parseSet: expected = or block end in set tag', tag.lineno, tag.colno);
      } else {
        node.body = new nodes.Capture(tag.lineno, tag.colno, this.parseUntilBlocks('endset'));
        node.value = null;
        this.advanceAfterBlockEnd();
      }
    } else {
      node.value = this.parseExpression();
      this.advanceAfterBlockEnd(tag.value);
    }

    return node;
  };

  _proto.parseSwitch = function parseSwitch() {
    /*
     * Store the tag names in variables in case someone ever wants to
     * customize this.
     */
    var switchStart = 'switch';
    var switchEnd = 'endswitch';
    var caseStart = 'case';
    var caseDefault = 'default'; // Get the switch tag.

    var tag = this.peekToken(); // fail early if we get some unexpected tag.

    if (!this.skipSymbol(switchStart) && !this.skipSymbol(caseStart) && !this.skipSymbol(caseDefault)) {
      this.fail('parseSwitch: expected "switch," "case" or "default"', tag.lineno, tag.colno);
    } // parse the switch expression


    var expr = this.parseExpression(); // advance until a start of a case, a default case or an endswitch.

    this.advanceAfterBlockEnd(switchStart);
    this.parseUntilBlocks(caseStart, caseDefault, switchEnd); // this is the first case. it could also be an endswitch, we'll check.

    var tok = this.peekToken(); // create new variables for our cases and default case.

    var cases = [];
    var defaultCase; // while we're dealing with new cases nodes...

    do {
      // skip the start symbol and get the case expression
      this.skipSymbol(caseStart);
      var cond = this.parseExpression();
      this.advanceAfterBlockEnd(switchStart); // get the body of the case node and add it to the array of cases.

      var body = this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
      cases.push(new nodes.Case(tok.line, tok.col, cond, body)); // get our next case

      tok = this.peekToken();
    } while (tok && tok.value === caseStart); // we either have a default case or a switch end.


    switch (tok.value) {
      case caseDefault:
        this.advanceAfterBlockEnd();
        defaultCase = this.parseUntilBlocks(switchEnd);
        this.advanceAfterBlockEnd();
        break;

      case switchEnd:
        this.advanceAfterBlockEnd();
        break;

      default:
        // otherwise bail because EOF
        this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
    } // and return the switch node.


    return new nodes.Switch(tag.lineno, tag.colno, expr, cases, defaultCase);
  };

  _proto.parseStatement = function parseStatement() {
    var tok = this.peekToken();
    var node;

    if (tok.type !== lexer.TOKEN_SYMBOL) {
      this.fail('tag name expected', tok.lineno, tok.colno);
    }

    if (this.breakOnBlocks && lib.indexOf(this.breakOnBlocks, tok.value) !== -1) {
      return null;
    }

    switch (tok.value) {
      case 'raw':
        return this.parseRaw();

      case 'verbatim':
        return this.parseRaw('verbatim');

      case 'if':
      case 'ifAsync':
        return this.parseIf();

      case 'for':
      case 'asyncEach':
      case 'asyncAll':
        return this.parseFor();

      case 'block':
        return this.parseBlock();

      case 'extends':
        return this.parseExtends();

      case 'include':
        return this.parseInclude();

      case 'set':
        return this.parseSet();

      case 'macro':
        return this.parseMacro();

      case 'call':
        return this.parseCall();

      case 'import':
        return this.parseImport();

      case 'from':
        return this.parseFrom();

      case 'filter':
        return this.parseFilterStatement();

      case 'switch':
        return this.parseSwitch();

      default:
        if (this.extensions.length) {
          for (var i = 0; i < this.extensions.length; i++) {
            var ext = this.extensions[i];

            if (lib.indexOf(ext.tags || [], tok.value) !== -1) {
              return ext.parse(this, nodes, lexer);
            }
          }
        }

        this.fail('unknown block tag: ' + tok.value, tok.lineno, tok.colno);
    }

    return node;
  };

  _proto.parseRaw = function parseRaw(tagName) {
    tagName = tagName || 'raw';
    var endTagName = 'end' + tagName; // Look for upcoming raw blocks (ignore all other kinds of blocks)

    var rawBlockRegex = new RegExp('([\\s\\S]*?){%\\s*(' + tagName + '|' + endTagName + ')\\s*(?=%})%}');
    var rawLevel = 1;
    var str = '';
    var matches = null; // Skip opening raw token
    // Keep this token to track line and column numbers

    var begun = this.advanceAfterBlockEnd(); // Exit when there's nothing to match
    // or when we've found the matching "endraw" block

    while ((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {
      var all = matches[0];
      var pre = matches[1];
      var blockName = matches[2]; // Adjust rawlevel

      if (blockName === tagName) {
        rawLevel += 1;
      } else if (blockName === endTagName) {
        rawLevel -= 1;
      } // Add to str


      if (rawLevel === 0) {
        // We want to exclude the last "endraw"
        str += pre; // Move tokenizer to beginning of endraw block

        this.tokens.backN(all.length - pre.length);
      } else {
        str += all;
      }
    }

    return new nodes.Output(begun.lineno, begun.colno, [new nodes.TemplateData(begun.lineno, begun.colno, str)]);
  };

  _proto.parsePostfix = function parsePostfix(node) {
    var lookup;
    var tok = this.peekToken();

    while (tok) {
      if (tok.type === lexer.TOKEN_LEFT_PAREN) {
        // Function call
        node = new nodes.FunCall(tok.lineno, tok.colno, node, this.parseSignature());
      } else if (tok.type === lexer.TOKEN_LEFT_BRACKET) {
        // Reference
        lookup = this.parseAggregate();

        if (lookup.children.length > 1) {
          this.fail('invalid index');
        }

        node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup.children[0]);
      } else if (tok.type === lexer.TOKEN_OPERATOR && tok.value === '.') {
        // Reference
        this.nextToken();
        var val = this.nextToken();

        if (val.type !== lexer.TOKEN_SYMBOL) {
          this.fail('expected name as lookup value, got ' + val.value, val.lineno, val.colno);
        } // Make a literal string because it's not a variable
        // reference


        lookup = new nodes.Literal(val.lineno, val.colno, val.value);
        node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup);
      } else {
        break;
      }

      tok = this.peekToken();
    }

    return node;
  };

  _proto.parseExpression = function parseExpression() {
    var node = this.parseInlineIf();
    return node;
  };

  _proto.parseInlineIf = function parseInlineIf() {
    var node = this.parseOr();

    if (this.skipSymbol('if')) {
      var condNode = this.parseOr();
      var bodyNode = node;
      node = new nodes.InlineIf(node.lineno, node.colno);
      node.body = bodyNode;
      node.cond = condNode;

      if (this.skipSymbol('else')) {
        node.else_ = this.parseOr();
      } else {
        node.else_ = null;
      }
    }

    return node;
  };

  _proto.parseOr = function parseOr() {
    var node = this.parseAnd();

    while (this.skipSymbol('or')) {
      var node2 = this.parseAnd();
      node = new nodes.Or(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseAnd = function parseAnd() {
    var node = this.parseNot();

    while (this.skipSymbol('and')) {
      var node2 = this.parseNot();
      node = new nodes.And(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseNot = function parseNot() {
    var tok = this.peekToken();

    if (this.skipSymbol('not')) {
      return new nodes.Not(tok.lineno, tok.colno, this.parseNot());
    }

    return this.parseIn();
  };

  _proto.parseIn = function parseIn() {
    var node = this.parseIs();

    while (1) {
      // eslint-disable-line no-constant-condition
      // check if the next token is 'not'
      var tok = this.nextToken();

      if (!tok) {
        break;
      }

      var invert = tok.type === lexer.TOKEN_SYMBOL && tok.value === 'not'; // if it wasn't 'not', put it back

      if (!invert) {
        this.pushToken(tok);
      }

      if (this.skipSymbol('in')) {
        var node2 = this.parseIs();
        node = new nodes.In(node.lineno, node.colno, node, node2);

        if (invert) {
          node = new nodes.Not(node.lineno, node.colno, node);
        }
      } else {
        // if we'd found a 'not' but this wasn't an 'in', put back the 'not'
        if (invert) {
          this.pushToken(tok);
        }

        break;
      }
    }

    return node;
  } // I put this right after "in" in the operator precedence stack. That can
  // obviously be changed to be closer to Jinja.
  ;

  _proto.parseIs = function parseIs() {
    var node = this.parseCompare(); // look for an is

    if (this.skipSymbol('is')) {
      // look for a not
      var not = this.skipSymbol('not'); // get the next node

      var node2 = this.parseCompare(); // create an Is node using the next node and the info from our Is node.

      node = new nodes.Is(node.lineno, node.colno, node, node2); // if we have a Not, create a Not node from our Is node.

      if (not) {
        node = new nodes.Not(node.lineno, node.colno, node);
      }
    } // return the node.


    return node;
  };

  _proto.parseCompare = function parseCompare() {
    var compareOps = ['==', '===', '!=', '!==', '<', '>', '<=', '>='];
    var expr = this.parseConcat();
    var ops = [];

    while (1) {
      // eslint-disable-line no-constant-condition
      var tok = this.nextToken();

      if (!tok) {
        break;
      } else if (compareOps.indexOf(tok.value) !== -1) {
        ops.push(new nodes.CompareOperand(tok.lineno, tok.colno, this.parseConcat(), tok.value));
      } else {
        this.pushToken(tok);
        break;
      }
    }

    if (ops.length) {
      return new nodes.Compare(ops[0].lineno, ops[0].colno, expr, ops);
    } else {
      return expr;
    }
  } // finds the '~' for string concatenation
  ;

  _proto.parseConcat = function parseConcat() {
    var node = this.parseAdd();

    while (this.skipValue(lexer.TOKEN_TILDE, '~')) {
      var node2 = this.parseAdd();
      node = new nodes.Concat(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseAdd = function parseAdd() {
    var node = this.parseSub();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
      var node2 = this.parseSub();
      node = new nodes.Add(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseSub = function parseSub() {
    var node = this.parseMul();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
      var node2 = this.parseMul();
      node = new nodes.Sub(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseMul = function parseMul() {
    var node = this.parseDiv();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '*')) {
      var node2 = this.parseDiv();
      node = new nodes.Mul(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseDiv = function parseDiv() {
    var node = this.parseFloorDiv();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '/')) {
      var node2 = this.parseFloorDiv();
      node = new nodes.Div(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseFloorDiv = function parseFloorDiv() {
    var node = this.parseMod();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '//')) {
      var node2 = this.parseMod();
      node = new nodes.FloorDiv(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseMod = function parseMod() {
    var node = this.parsePow();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '%')) {
      var node2 = this.parsePow();
      node = new nodes.Mod(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parsePow = function parsePow() {
    var node = this.parseUnary();

    while (this.skipValue(lexer.TOKEN_OPERATOR, '**')) {
      var node2 = this.parseUnary();
      node = new nodes.Pow(node.lineno, node.colno, node, node2);
    }

    return node;
  };

  _proto.parseUnary = function parseUnary(noFilters) {
    var tok = this.peekToken();
    var node;

    if (this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
      node = new nodes.Neg(tok.lineno, tok.colno, this.parseUnary(true));
    } else if (this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
      node = new nodes.Pos(tok.lineno, tok.colno, this.parseUnary(true));
    } else {
      node = this.parsePrimary();
    }

    if (!noFilters) {
      node = this.parseFilter(node);
    }

    return node;
  };

  _proto.parsePrimary = function parsePrimary(noPostfix) {
    var tok = this.nextToken();
    var val;
    var node = null;

    if (!tok) {
      this.fail('expected expression, got end of file');
    } else if (tok.type === lexer.TOKEN_STRING) {
      val = tok.value;
    } else if (tok.type === lexer.TOKEN_INT) {
      val = parseInt(tok.value, 10);
    } else if (tok.type === lexer.TOKEN_FLOAT) {
      val = parseFloat(tok.value);
    } else if (tok.type === lexer.TOKEN_BOOLEAN) {
      if (tok.value === 'true') {
        val = true;
      } else if (tok.value === 'false') {
        val = false;
      } else {
        this.fail('invalid boolean: ' + tok.value, tok.lineno, tok.colno);
      }
    } else if (tok.type === lexer.TOKEN_NONE) {
      val = null;
    } else if (tok.type === lexer.TOKEN_REGEX) {
      val = new RegExp(tok.value.body, tok.value.flags);
    }

    if (val !== undefined) {
      node = new nodes.Literal(tok.lineno, tok.colno, val);
    } else if (tok.type === lexer.TOKEN_SYMBOL) {
      node = new nodes.Symbol(tok.lineno, tok.colno, tok.value);
    } else {
      // See if it's an aggregate type, we need to push the
      // current delimiter token back on
      this.pushToken(tok);
      node = this.parseAggregate();
    }

    if (!noPostfix) {
      node = this.parsePostfix(node);
    }

    if (node) {
      return node;
    } else {
      throw this.error("unexpected token: " + tok.value, tok.lineno, tok.colno);
    }
  };

  _proto.parseFilterName = function parseFilterName() {
    var tok = this.expect(lexer.TOKEN_SYMBOL);
    var name = tok.value;

    while (this.skipValue(lexer.TOKEN_OPERATOR, '.')) {
      name += '.' + this.expect(lexer.TOKEN_SYMBOL).value;
    }

    return new nodes.Symbol(tok.lineno, tok.colno, name);
  };

  _proto.parseFilterArgs = function parseFilterArgs(node) {
    if (this.peekToken().type === lexer.TOKEN_LEFT_PAREN) {
      // Get a FunCall node and add the parameters to the
      // filter
      var call = this.parsePostfix(node);
      return call.args.children;
    }

    return [];
  };

  _proto.parseFilter = function parseFilter(node) {
    while (this.skip(lexer.TOKEN_PIPE)) {
      var name = this.parseFilterName();
      node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [node].concat(this.parseFilterArgs(node))));
    }

    return node;
  };

  _proto.parseFilterStatement = function parseFilterStatement() {
    var filterTok = this.peekToken();

    if (!this.skipSymbol('filter')) {
      this.fail('parseFilterStatement: expected filter');
    }

    var name = this.parseFilterName();
    var args = this.parseFilterArgs(name);
    this.advanceAfterBlockEnd(filterTok.value);
    var body = new nodes.Capture(name.lineno, name.colno, this.parseUntilBlocks('endfilter'));
    this.advanceAfterBlockEnd();
    var node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [body].concat(args)));
    return new nodes.Output(name.lineno, name.colno, [node]);
  };

  _proto.parseAggregate = function parseAggregate() {
    var tok = this.nextToken();
    var node;

    switch (tok.type) {
      case lexer.TOKEN_LEFT_PAREN:
        node = new nodes.Group(tok.lineno, tok.colno);
        break;

      case lexer.TOKEN_LEFT_BRACKET:
        node = new nodes.Array(tok.lineno, tok.colno);
        break;

      case lexer.TOKEN_LEFT_CURLY:
        node = new nodes.Dict(tok.lineno, tok.colno);
        break;

      default:
        return null;
    }

    while (1) {
      // eslint-disable-line no-constant-condition
      var type = this.peekToken().type;

      if (type === lexer.TOKEN_RIGHT_PAREN || type === lexer.TOKEN_RIGHT_BRACKET || type === lexer.TOKEN_RIGHT_CURLY) {
        this.nextToken();
        break;
      }

      if (node.children.length > 0) {
        if (!this.skip(lexer.TOKEN_COMMA)) {
          this.fail('parseAggregate: expected comma after expression', tok.lineno, tok.colno);
        }
      }

      if (node instanceof nodes.Dict) {
        // TODO: check for errors
        var key = this.parsePrimary(); // We expect a key/value pair for dicts, separated by a
        // colon

        if (!this.skip(lexer.TOKEN_COLON)) {
          this.fail('parseAggregate: expected colon after dict key', tok.lineno, tok.colno);
        } // TODO: check for errors


        var value = this.parseExpression();
        node.addChild(new nodes.Pair(key.lineno, key.colno, key, value));
      } else {
        // TODO: check for errors
        var expr = this.parseExpression();
        node.addChild(expr);
      }
    }

    return node;
  };

  _proto.parseSignature = function parseSignature(tolerant, noParens) {
    var tok = this.peekToken();

    if (!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN) {
      if (tolerant) {
        return null;
      } else {
        this.fail('expected arguments', tok.lineno, tok.colno);
      }
    }

    if (tok.type === lexer.TOKEN_LEFT_PAREN) {
      tok = this.nextToken();
    }

    var args = new nodes.NodeList(tok.lineno, tok.colno);
    var kwargs = new nodes.KeywordArgs(tok.lineno, tok.colno);
    var checkComma = false;

    while (1) {
      // eslint-disable-line no-constant-condition
      tok = this.peekToken();

      if (!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN) {
        this.nextToken();
        break;
      } else if (noParens && tok.type === lexer.TOKEN_BLOCK_END) {
        break;
      }

      if (checkComma && !this.skip(lexer.TOKEN_COMMA)) {
        this.fail('parseSignature: expected comma after expression', tok.lineno, tok.colno);
      } else {
        var arg = this.parseExpression();

        if (this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
          kwargs.addChild(new nodes.Pair(arg.lineno, arg.colno, arg, this.parseExpression()));
        } else {
          args.addChild(arg);
        }
      }

      checkComma = true;
    }

    if (kwargs.children.length) {
      args.addChild(kwargs);
    }

    return args;
  };

  _proto.parseUntilBlocks = function parseUntilBlocks() {
    var prev = this.breakOnBlocks;

    for (var _len = arguments.length, blockNames = new Array(_len), _key = 0; _key < _len; _key++) {
      blockNames[_key] = arguments[_key];
    }

    this.breakOnBlocks = blockNames;
    var ret = this.parse();
    this.breakOnBlocks = prev;
    return ret;
  };

  _proto.parseNodes = function parseNodes() {
    var tok;
    var buf = [];

    while (tok = this.nextToken()) {
      if (tok.type === lexer.TOKEN_DATA) {
        var data = tok.value;
        var nextToken = this.peekToken();
        var nextVal = nextToken && nextToken.value; // If the last token has "-" we need to trim the
        // leading whitespace of the data. This is marked with
        // the `dropLeadingWhitespace` variable.

        if (this.dropLeadingWhitespace) {
          // TODO: this could be optimized (don't use regex)
          data = data.replace(/^\s*/, '');
          this.dropLeadingWhitespace = false;
        } // Same for the succeeding block start token


        if (nextToken && (nextToken.type === lexer.TOKEN_BLOCK_START && nextVal.charAt(nextVal.length - 1) === '-' || nextToken.type === lexer.TOKEN_VARIABLE_START && nextVal.charAt(this.tokens.tags.VARIABLE_START.length) === '-' || nextToken.type === lexer.TOKEN_COMMENT && nextVal.charAt(this.tokens.tags.COMMENT_START.length) === '-')) {
          // TODO: this could be optimized (don't use regex)
          data = data.replace(/\s*$/, '');
        }

        buf.push(new nodes.Output(tok.lineno, tok.colno, [new nodes.TemplateData(tok.lineno, tok.colno, data)]));
      } else if (tok.type === lexer.TOKEN_BLOCK_START) {
        this.dropLeadingWhitespace = false;
        var n = this.parseStatement();

        if (!n) {
          break;
        }

        buf.push(n);
      } else if (tok.type === lexer.TOKEN_VARIABLE_START) {
        var e = this.parseExpression();
        this.dropLeadingWhitespace = false;
        this.advanceAfterVariableEnd();
        buf.push(new nodes.Output(tok.lineno, tok.colno, [e]));
      } else if (tok.type === lexer.TOKEN_COMMENT) {
        this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.COMMENT_END.length - 1) === '-';
      } else {
        // Ignore comments, otherwise this should be an error
        this.fail('Unexpected token at top-level: ' + tok.type, tok.lineno, tok.colno);
      }
    }

    return buf;
  };

  _proto.parse = function parse() {
    return new nodes.NodeList(0, 0, this.parseNodes());
  };

  _proto.parseAsRoot = function parseAsRoot() {
    return new nodes.Root(0, 0, this.parseNodes());
  };

  return Parser;
}(Obj); // var util = require('util');
// var l = lexer.lex('{%- if x -%}\n hello {% endif %}');
// var t;
// while((t = l.nextToken())) {
//     console.log(util.inspect(t));
// }
// var p = new Parser(lexer.lex('hello {% filter title %}' +
//                              'Hello madam how are you' +
//                              '{% endfilter %}'));
// var n = p.parseAsRoot();
// nodes.printNodes(n);


module.exports = {
  parse: function parse(src, extensions, opts) {
    var p = new Parser(lexer.lex(src, opts));

    if (extensions !== undefined) {
      p.extensions = extensions;
    }

    return p.parseAsRoot();
  },
  Parser: Parser
};

/***/ }),

/***/ 1524:
/***/ ((module) => {

"use strict";


function precompileGlobal(templates, opts) {
  var out = '';
  opts = opts || {};

  for (var i = 0; i < templates.length; i++) {
    var name = JSON.stringify(templates[i].name);
    var template = templates[i].template;
    out += '(function() {' + '(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})' + '[' + name + '] = (function() {\n' + template + '\n})();\n';

    if (opts.asFunction) {
      out += 'return function(ctx, cb) { return nunjucks.render(' + name + ', ctx, cb); }\n';
    }

    out += '})();\n';
  }

  return out;
}

module.exports = precompileGlobal;

/***/ }),

/***/ 7513:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var fs = __nccwpck_require__(5747);

var path = __nccwpck_require__(5622);

var _require = __nccwpck_require__(4127),
    _prettifyError = _require._prettifyError;

var compiler = __nccwpck_require__(4548);

var _require2 = __nccwpck_require__(4428),
    Environment = _require2.Environment;

var precompileGlobal = __nccwpck_require__(1524);

function match(filename, patterns) {
  if (!Array.isArray(patterns)) {
    return false;
  }

  return patterns.some(function (pattern) {
    return filename.match(pattern);
  });
}

function precompileString(str, opts) {
  opts = opts || {};
  opts.isString = true;
  var env = opts.env || new Environment([]);
  var wrapper = opts.wrapper || precompileGlobal;

  if (!opts.name) {
    throw new Error('the "name" option is required when compiling a string');
  }

  return wrapper([_precompile(str, opts.name, env)], opts);
}

function precompile(input, opts) {
  // The following options are available:
  //
  // * name: name of the template (auto-generated when compiling a directory)
  // * isString: input is a string, not a file path
  // * asFunction: generate a callable function
  // * force: keep compiling on error
  // * env: the Environment to use (gets extensions and async filters from it)
  // * include: which file/folders to include (folders are auto-included, files are auto-excluded)
  // * exclude: which file/folders to exclude (folders are auto-included, files are auto-excluded)
  // * wrapper: function(templates, opts) {...}
  //       Customize the output format to store the compiled template.
  //       By default, templates are stored in a global variable used by the runtime.
  //       A custom loader will be necessary to load your custom wrapper.
  opts = opts || {};
  var env = opts.env || new Environment([]);
  var wrapper = opts.wrapper || precompileGlobal;

  if (opts.isString) {
    return precompileString(input, opts);
  }

  var pathStats = fs.existsSync(input) && fs.statSync(input);
  var precompiled = [];
  var templates = [];

  function addTemplates(dir) {
    fs.readdirSync(dir).forEach(function (file) {
      var filepath = path.join(dir, file);
      var subpath = filepath.substr(path.join(input, '/').length);
      var stat = fs.statSync(filepath);

      if (stat && stat.isDirectory()) {
        subpath += '/';

        if (!match(subpath, opts.exclude)) {
          addTemplates(filepath);
        }
      } else if (match(subpath, opts.include)) {
        templates.push(filepath);
      }
    });
  }

  if (pathStats.isFile()) {
    precompiled.push(_precompile(fs.readFileSync(input, 'utf-8'), opts.name || input, env));
  } else if (pathStats.isDirectory()) {
    addTemplates(input);

    for (var i = 0; i < templates.length; i++) {
      var name = templates[i].replace(path.join(input, '/'), '');

      try {
        precompiled.push(_precompile(fs.readFileSync(templates[i], 'utf-8'), name, env));
      } catch (e) {
        if (opts.force) {
          // Don't stop generating the output if we're
          // forcing compilation.
          console.error(e); // eslint-disable-line no-console
        } else {
          throw e;
        }
      }
    }
  }

  return wrapper(precompiled, opts);
}

function _precompile(str, name, env) {
  env = env || new Environment([]);
  var asyncFilters = env.asyncFilters;
  var extensions = env.extensionsList;
  var template;
  name = name.replace(/\\/g, '/');

  try {
    template = compiler.compile(str, asyncFilters, extensions, name, env.opts);
  } catch (err) {
    throw _prettifyError(name, false, err);
  }

  return {
    name: name,
    template: template
  };
}

module.exports = {
  precompile: precompile,
  precompileString: precompileString
};

/***/ }),

/***/ 8957:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Loader = __nccwpck_require__(6981);

var PrecompiledLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(PrecompiledLoader, _Loader);

  function PrecompiledLoader(compiledTemplates) {
    var _this;

    _this = _Loader.call(this) || this;
    _this.precompiled = compiledTemplates || {};
    return _this;
  }

  var _proto = PrecompiledLoader.prototype;

  _proto.getSource = function getSource(name) {
    if (this.precompiled[name]) {
      return {
        src: {
          type: 'code',
          obj: this.precompiled[name]
        },
        path: name
      };
    }

    return null;
  };

  return PrecompiledLoader;
}(Loader);

module.exports = {
  PrecompiledLoader: PrecompiledLoader
};

/***/ }),

/***/ 1998:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var lib = __nccwpck_require__(4127);

var arrayFrom = Array.from;
var supportsIterators = typeof Symbol === 'function' && Symbol.iterator && typeof arrayFrom === 'function'; // Frames keep track of scoping both at compile-time and run-time so
// we know how to access variables. Block tags can introduce special
// variables, for example.

var Frame = /*#__PURE__*/function () {
  function Frame(parent, isolateWrites) {
    this.variables = Object.create(null);
    this.parent = parent;
    this.topLevel = false; // if this is true, writes (set) should never propagate upwards past
    // this frame to its parent (though reads may).

    this.isolateWrites = isolateWrites;
  }

  var _proto = Frame.prototype;

  _proto.set = function set(name, val, resolveUp) {
    // Allow variables with dots by automatically creating the
    // nested structure
    var parts = name.split('.');
    var obj = this.variables;
    var frame = this;

    if (resolveUp) {
      if (frame = this.resolve(parts[0], true)) {
        frame.set(name, val);
        return;
      }
    }

    for (var i = 0; i < parts.length - 1; i++) {
      var id = parts[i];

      if (!obj[id]) {
        obj[id] = {};
      }

      obj = obj[id];
    }

    obj[parts[parts.length - 1]] = val;
  };

  _proto.get = function get(name) {
    var val = this.variables[name];

    if (val !== undefined) {
      return val;
    }

    return null;
  };

  _proto.lookup = function lookup(name) {
    var p = this.parent;
    var val = this.variables[name];

    if (val !== undefined) {
      return val;
    }

    return p && p.lookup(name);
  };

  _proto.resolve = function resolve(name, forWrite) {
    var p = forWrite && this.isolateWrites ? undefined : this.parent;
    var val = this.variables[name];

    if (val !== undefined) {
      return this;
    }

    return p && p.resolve(name);
  };

  _proto.push = function push(isolateWrites) {
    return new Frame(this, isolateWrites);
  };

  _proto.pop = function pop() {
    return this.parent;
  };

  return Frame;
}();

function makeMacro(argNames, kwargNames, func) {
  return function macro() {
    for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      macroArgs[_key] = arguments[_key];
    }

    var argCount = numArgs(macroArgs);
    var args;
    var kwargs = getKeywordArgs(macroArgs);

    if (argCount > argNames.length) {
      args = macroArgs.slice(0, argNames.length); // Positional arguments that should be passed in as
      // keyword arguments (essentially default values)

      macroArgs.slice(args.length, argCount).forEach(function (val, i) {
        if (i < kwargNames.length) {
          kwargs[kwargNames[i]] = val;
        }
      });
      args.push(kwargs);
    } else if (argCount < argNames.length) {
      args = macroArgs.slice(0, argCount);

      for (var i = argCount; i < argNames.length; i++) {
        var arg = argNames[i]; // Keyword arguments that should be passed as
        // positional arguments, i.e. the caller explicitly
        // used the name of a positional arg

        args.push(kwargs[arg]);
        delete kwargs[arg];
      }

      args.push(kwargs);
    } else {
      args = macroArgs;
    }

    return func.apply(this, args);
  };
}

function makeKeywordArgs(obj) {
  obj.__keywords = true;
  return obj;
}

function isKeywordArgs(obj) {
  return obj && Object.prototype.hasOwnProperty.call(obj, '__keywords');
}

function getKeywordArgs(args) {
  var len = args.length;

  if (len) {
    var lastArg = args[len - 1];

    if (isKeywordArgs(lastArg)) {
      return lastArg;
    }
  }

  return {};
}

function numArgs(args) {
  var len = args.length;

  if (len === 0) {
    return 0;
  }

  var lastArg = args[len - 1];

  if (isKeywordArgs(lastArg)) {
    return len - 1;
  } else {
    return len;
  }
} // A SafeString object indicates that the string should not be
// autoescaped. This happens magically because autoescaping only
// occurs on primitive string objects.


function SafeString(val) {
  if (typeof val !== 'string') {
    return val;
  }

  this.val = val;
  this.length = val.length;
}

SafeString.prototype = Object.create(String.prototype, {
  length: {
    writable: true,
    configurable: true,
    value: 0
  }
});

SafeString.prototype.valueOf = function valueOf() {
  return this.val;
};

SafeString.prototype.toString = function toString() {
  return this.val;
};

function copySafeness(dest, target) {
  if (dest instanceof SafeString) {
    return new SafeString(target);
  }

  return target.toString();
}

function markSafe(val) {
  var type = typeof val;

  if (type === 'string') {
    return new SafeString(val);
  } else if (type !== 'function') {
    return val;
  } else {
    return function wrapSafe(args) {
      var ret = val.apply(this, arguments);

      if (typeof ret === 'string') {
        return new SafeString(ret);
      }

      return ret;
    };
  }
}

function suppressValue(val, autoescape) {
  val = val !== undefined && val !== null ? val : '';

  if (autoescape && !(val instanceof SafeString)) {
    val = lib.escape(val.toString());
  }

  return val;
}

function ensureDefined(val, lineno, colno) {
  if (val === null || val === undefined) {
    throw new lib.TemplateError('attempted to output null or undefined value', lineno + 1, colno + 1);
  }

  return val;
}

function memberLookup(obj, val) {
  if (obj === undefined || obj === null) {
    return undefined;
  }

  if (typeof obj[val] === 'function') {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return obj[val].apply(obj, args);
    };
  }

  return obj[val];
}

function callWrap(obj, name, context, args) {
  if (!obj) {
    throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
  } else if (typeof obj !== 'function') {
    throw new Error('Unable to call `' + name + '`, which is not a function');
  }

  return obj.apply(context, args);
}

function contextOrFrameLookup(context, frame, name) {
  var val = frame.lookup(name);
  return val !== undefined ? val : context.lookup(name);
}

function handleError(error, lineno, colno) {
  if (error.lineno) {
    return error;
  } else {
    return new lib.TemplateError(error, lineno, colno);
  }
}

function asyncEach(arr, dimen, iter, cb) {
  if (lib.isArray(arr)) {
    var len = arr.length;
    lib.asyncIter(arr, function iterCallback(item, i, next) {
      switch (dimen) {
        case 1:
          iter(item, i, len, next);
          break;

        case 2:
          iter(item[0], item[1], i, len, next);
          break;

        case 3:
          iter(item[0], item[1], item[2], i, len, next);
          break;

        default:
          item.push(i, len, next);
          iter.apply(this, item);
      }
    }, cb);
  } else {
    lib.asyncFor(arr, function iterCallback(key, val, i, len, next) {
      iter(key, val, i, len, next);
    }, cb);
  }
}

function asyncAll(arr, dimen, func, cb) {
  var finished = 0;
  var len;
  var outputArr;

  function done(i, output) {
    finished++;
    outputArr[i] = output;

    if (finished === len) {
      cb(null, outputArr.join(''));
    }
  }

  if (lib.isArray(arr)) {
    len = arr.length;
    outputArr = new Array(len);

    if (len === 0) {
      cb(null, '');
    } else {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        switch (dimen) {
          case 1:
            func(item, i, len, done);
            break;

          case 2:
            func(item[0], item[1], i, len, done);
            break;

          case 3:
            func(item[0], item[1], item[2], i, len, done);
            break;

          default:
            item.push(i, len, done);
            func.apply(this, item);
        }
      }
    }
  } else {
    var keys = lib.keys(arr || {});
    len = keys.length;
    outputArr = new Array(len);

    if (len === 0) {
      cb(null, '');
    } else {
      for (var _i = 0; _i < keys.length; _i++) {
        var k = keys[_i];
        func(k, arr[k], _i, len, done);
      }
    }
  }
}

function fromIterator(arr) {
  if (typeof arr !== 'object' || arr === null || lib.isArray(arr)) {
    return arr;
  } else if (supportsIterators && Symbol.iterator in arr) {
    return arrayFrom(arr);
  } else {
    return arr;
  }
}

module.exports = {
  Frame: Frame,
  makeMacro: makeMacro,
  makeKeywordArgs: makeKeywordArgs,
  numArgs: numArgs,
  suppressValue: suppressValue,
  ensureDefined: ensureDefined,
  memberLookup: memberLookup,
  contextOrFrameLookup: contextOrFrameLookup,
  callWrap: callWrap,
  handleError: handleError,
  isArray: lib.isArray,
  keys: lib.keys,
  SafeString: SafeString,
  copySafeness: copySafeness,
  markSafe: markSafe,
  asyncEach: asyncEach,
  asyncAll: asyncAll,
  inOperator: lib.inOperator,
  fromIterator: fromIterator
};

/***/ }),

/***/ 841:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var SafeString = __nccwpck_require__(1998).SafeString;
/**
 * Returns `true` if the object is a function, otherwise `false`.
 * @param { any } value
 * @returns { boolean }
 */


function callable(value) {
  return typeof value === 'function';
}

exports.callable = callable;
/**
 * Returns `true` if the object is strictly not `undefined`.
 * @param { any } value
 * @returns { boolean }
 */

function defined(value) {
  return value !== undefined;
}

exports.defined = defined;
/**
 * Returns `true` if the operand (one) is divisble by the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function divisibleby(one, two) {
  return one % two === 0;
}

exports.divisibleby = divisibleby;
/**
 * Returns true if the string has been escaped (i.e., is a SafeString).
 * @param { any } value
 * @returns { boolean }
 */

function escaped(value) {
  return value instanceof SafeString;
}

exports.escaped = escaped;
/**
 * Returns `true` if the arguments are strictly equal.
 * @param { any } one
 * @param { any } two
 */

function equalto(one, two) {
  return one === two;
}

exports.equalto = equalto; // Aliases

exports.eq = exports.equalto;
exports.sameas = exports.equalto;
/**
 * Returns `true` if the value is evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */

function even(value) {
  return value % 2 === 0;
}

exports.even = even;
/**
 * Returns `true` if the value is falsy - if I recall correctly, '', 0, false,
 * undefined, NaN or null. I don't know if we should stick to the default JS
 * behavior or attempt to replicate what Python believes should be falsy (i.e.,
 * empty arrays, empty dicts, not 0...).
 * @param { any } value
 * @returns { boolean }
 */

function falsy(value) {
  return !value;
}

exports.falsy = falsy;
/**
 * Returns `true` if the operand (one) is greater or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function ge(one, two) {
  return one >= two;
}

exports.ge = ge;
/**
 * Returns `true` if the operand (one) is greater than the test's argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function greaterthan(one, two) {
  return one > two;
}

exports.greaterthan = greaterthan; // alias

exports.gt = exports.greaterthan;
/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function le(one, two) {
  return one <= two;
}

exports.le = le;
/**
 * Returns `true` if the operand (one) is less than the test's passed argument
 * (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function lessthan(one, two) {
  return one < two;
}

exports.lessthan = lessthan; // alias

exports.lt = exports.lessthan;
/**
 * Returns `true` if the string is lowercased.
 * @param { string } value
 * @returns { boolean }
 */

function lower(value) {
  return value.toLowerCase() === value;
}

exports.lower = lower;
/**
 * Returns `true` if the operand (one) is less than or equal to the test's
 * argument (two).
 * @param { number } one
 * @param { number } two
 * @returns { boolean }
 */

function ne(one, two) {
  return one !== two;
}

exports.ne = ne;
/**
 * Returns true if the value is strictly equal to `null`.
 * @param { any }
 * @returns { boolean }
 */

function nullTest(value) {
  return value === null;
}

exports.null = nullTest;
/**
 * Returns true if value is a number.
 * @param { any }
 * @returns { boolean }
 */

function number(value) {
  return typeof value === 'number';
}

exports.number = number;
/**
 * Returns `true` if the value is *not* evenly divisible by 2.
 * @param { number } value
 * @returns { boolean }
 */

function odd(value) {
  return value % 2 === 1;
}

exports.odd = odd;
/**
 * Returns `true` if the value is a string, `false` if not.
 * @param { any } value
 * @returns { boolean }
 */

function string(value) {
  return typeof value === 'string';
}

exports.string = string;
/**
 * Returns `true` if the value is not in the list of things considered falsy:
 * '', null, undefined, 0, NaN and false.
 * @param { any } value
 * @returns { boolean }
 */

function truthy(value) {
  return !!value;
}

exports.truthy = truthy;
/**
 * Returns `true` if the value is undefined.
 * @param { any } value
 * @returns { boolean }
 */

function undefinedTest(value) {
  return value === undefined;
}

exports.undefined = undefinedTest;
/**
 * Returns `true` if the string is uppercased.
 * @param { string } value
 * @returns { boolean }
 */

function upper(value) {
  return value.toUpperCase() === value;
}

exports.upper = upper;
/**
 * If ES6 features are available, returns `true` if the value implements the
 * `Symbol.iterator` method. If not, it's a string or Array.
 *
 * Could potentially cause issues if a browser exists that has Set and Map but
 * not Symbol.
 *
 * @param { any } value
 * @returns { boolean }
 */

function iterable(value) {
  if (typeof Symbol !== 'undefined') {
    return !!value[Symbol.iterator];
  } else {
    return Array.isArray(value) || typeof value === 'string';
  }
}

exports.iterable = iterable;
/**
 * If ES6 features are available, returns `true` if the value is an object hash
 * or an ES6 Map. Otherwise just return if it's an object hash.
 * @param { any } value
 * @returns { boolean }
 */

function mapping(value) {
  // only maps and object hashes
  var bool = value !== null && value !== undefined && typeof value === 'object' && !Array.isArray(value);

  if (Set) {
    return bool && !(value instanceof Set);
  } else {
    return bool;
  }
}

exports.mapping = mapping;

/***/ }),

/***/ 3773:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var nodes = __nccwpck_require__(429);

var lib = __nccwpck_require__(4127);

var sym = 0;

function gensym() {
  return 'hole_' + sym++;
} // copy-on-write version of map


function mapCOW(arr, func) {
  var res = null;

  for (var i = 0; i < arr.length; i++) {
    var item = func(arr[i]);

    if (item !== arr[i]) {
      if (!res) {
        res = arr.slice();
      }

      res[i] = item;
    }
  }

  return res || arr;
}

function walk(ast, func, depthFirst) {
  if (!(ast instanceof nodes.Node)) {
    return ast;
  }

  if (!depthFirst) {
    var astT = func(ast);

    if (astT && astT !== ast) {
      return astT;
    }
  }

  if (ast instanceof nodes.NodeList) {
    var children = mapCOW(ast.children, function (node) {
      return walk(node, func, depthFirst);
    });

    if (children !== ast.children) {
      ast = new nodes[ast.typename](ast.lineno, ast.colno, children);
    }
  } else if (ast instanceof nodes.CallExtension) {
    var args = walk(ast.args, func, depthFirst);
    var contentArgs = mapCOW(ast.contentArgs, function (node) {
      return walk(node, func, depthFirst);
    });

    if (args !== ast.args || contentArgs !== ast.contentArgs) {
      ast = new nodes[ast.typename](ast.extName, ast.prop, args, contentArgs);
    }
  } else {
    var props = ast.fields.map(function (field) {
      return ast[field];
    });
    var propsT = mapCOW(props, function (prop) {
      return walk(prop, func, depthFirst);
    });

    if (propsT !== props) {
      ast = new nodes[ast.typename](ast.lineno, ast.colno);
      propsT.forEach(function (prop, i) {
        ast[ast.fields[i]] = prop;
      });
    }
  }

  return depthFirst ? func(ast) || ast : ast;
}

function depthWalk(ast, func) {
  return walk(ast, func, true);
}

function _liftFilters(node, asyncFilters, prop) {
  var children = [];
  var walked = depthWalk(prop ? node[prop] : node, function (descNode) {
    var symbol;

    if (descNode instanceof nodes.Block) {
      return descNode;
    } else if (descNode instanceof nodes.Filter && lib.indexOf(asyncFilters, descNode.name.value) !== -1 || descNode instanceof nodes.CallExtensionAsync) {
      symbol = new nodes.Symbol(descNode.lineno, descNode.colno, gensym());
      children.push(new nodes.FilterAsync(descNode.lineno, descNode.colno, descNode.name, descNode.args, symbol));
    }

    return symbol;
  });

  if (prop) {
    node[prop] = walked;
  } else {
    node = walked;
  }

  if (children.length) {
    children.push(node);
    return new nodes.NodeList(node.lineno, node.colno, children);
  } else {
    return node;
  }
}

function liftFilters(ast, asyncFilters) {
  return depthWalk(ast, function (node) {
    if (node instanceof nodes.Output) {
      return _liftFilters(node, asyncFilters);
    } else if (node instanceof nodes.Set) {
      return _liftFilters(node, asyncFilters, 'value');
    } else if (node instanceof nodes.For) {
      return _liftFilters(node, asyncFilters, 'arr');
    } else if (node instanceof nodes.If) {
      return _liftFilters(node, asyncFilters, 'cond');
    } else if (node instanceof nodes.CallExtension) {
      return _liftFilters(node, asyncFilters, 'args');
    } else {
      return undefined;
    }
  });
}

function liftSuper(ast) {
  return walk(ast, function (blockNode) {
    if (!(blockNode instanceof nodes.Block)) {
      return;
    }

    var hasSuper = false;
    var symbol = gensym();
    blockNode.body = walk(blockNode.body, function (node) {
      // eslint-disable-line consistent-return
      if (node instanceof nodes.FunCall && node.name.value === 'super') {
        hasSuper = true;
        return new nodes.Symbol(node.lineno, node.colno, symbol);
      }
    });

    if (hasSuper) {
      blockNode.body.children.unshift(new nodes.Super(0, 0, blockNode.name, new nodes.Symbol(0, 0, symbol)));
    }
  });
}

function convertStatements(ast) {
  return depthWalk(ast, function (node) {
    if (!(node instanceof nodes.If) && !(node instanceof nodes.For)) {
      return undefined;
    }

    var async = false;
    walk(node, function (child) {
      if (child instanceof nodes.FilterAsync || child instanceof nodes.IfAsync || child instanceof nodes.AsyncEach || child instanceof nodes.AsyncAll || child instanceof nodes.CallExtensionAsync) {
        async = true; // Stop iterating by returning the node

        return child;
      }

      return undefined;
    });

    if (async) {
      if (node instanceof nodes.If) {
        return new nodes.IfAsync(node.lineno, node.colno, node.cond, node.body, node.else_);
      } else if (node instanceof nodes.For && !(node instanceof nodes.AsyncAll)) {
        return new nodes.AsyncEach(node.lineno, node.colno, node.arr, node.name, node.body, node.else_);
      }
    }

    return undefined;
  });
}

function cps(ast, asyncFilters) {
  return convertStatements(liftSuper(liftFilters(ast, asyncFilters)));
}

function transform(ast, asyncFilters) {
  return cps(ast, asyncFilters || []);
} // var parser = require('./parser');
// var src = 'hello {% foo %}{% endfoo %} end';
// var ast = transform(parser.parse(src, [new FooExtension()]), ['bar']);
// nodes.printNodes(ast);


module.exports = {
  transform: transform
};

/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 4338:
/***/ ((module) => {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),

/***/ 6149:
/***/ ((module) => {

module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/

/***/ }),

/***/ 8019:
/***/ ((module) => {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ 8810:
/***/ ((module) => {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ }),

/***/ 5649:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


exports.Any = __nccwpck_require__(703);
exports.Cc = __nccwpck_require__(4338);
exports.Cf = __nccwpck_require__(6149);
exports.P = __nccwpck_require__(8019);
exports.Z = __nccwpck_require__(8810);


/***/ }),

/***/ 703:
/***/ ((module) => {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ }),

/***/ 561:
/***/ ((module) => {

module.exports = eval("require")("chokidar");


/***/ }),

/***/ 4007:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 5229:
/***/ ((module) => {

"use strict";
module.exports = require("domain");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 4213:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __nccwpck_require__(2186);
const readme_1 = __nccwpck_require__(1435);
const inputs_1 = __nccwpck_require__(6180);
function run() {
    try {
        const projectType = (0, inputs_1.validateProjectType)(core.getInput('project_type', { required: true, trimWhitespace: true }));
        const projectInfo = getProjectInfo(projectType);
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
       project info: ${JSON.stringify(projectInfo)}
     project status: ${projectStatus}
  project stability: ${projectStability}
`);
        (0, readme_1.generateReadmeFileFromTemplateFile)({
            templateFile: templateFile,
            outputFile: outputFile,
            projectInfo: projectInfo,
            projectStatus: projectStatus,
            projectStability: projectStability,
        });
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
function getProjectInfo(projectType) {
    if (projectType === inputs_1.ProjectType.SDK) {
        const sdkLanguage = core.getInput('sdk_language', {
            required: true,
            trimWhitespace: true,
        });
        const usageExamplePath = core.getInput('usage_example_path', {
            required: true,
            trimWhitespace: true,
        });
        const projectInfo = {
            type: inputs_1.ProjectType.SDK,
            language: sdkLanguage,
            usageExamplePath: usageExamplePath,
        };
        return projectInfo;
    }
    const projectInfo = {
        type: inputs_1.ProjectType.OTHER,
    };
    return projectInfo;
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBQ3RDLHFDQUE0RDtBQUM1RCxxQ0FRa0I7QUFFbEIsU0FBUyxHQUFHO0lBQ1YsSUFBSTtRQUNGLE1BQU0sV0FBVyxHQUFHLElBQUEsNEJBQW1CLEVBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDdEUsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoRCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFxQixFQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUNGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxpQ0FBd0IsRUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDLENBQzNFLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUNsRCxRQUFRLEVBQUUsS0FBSztZQUNmLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUVILE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQzlDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQzs7dUJBRVMsWUFBWTt1QkFDWixVQUFVO3VCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO3VCQUMzQixhQUFhO3VCQUNiLGdCQUFnQjtDQUN0QyxDQUFDLENBQUM7UUFDQyxJQUFBLDJDQUFrQyxFQUFDO1lBQ2pDLFlBQVksRUFBRSxZQUFZO1lBQzFCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLGdCQUFnQixFQUFFLGdCQUFnQjtTQUNuQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLFdBQXdCO0lBQzlDLElBQUksV0FBVyxLQUFLLG9CQUFXLENBQUMsR0FBRyxFQUFFO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ2hELFFBQVEsRUFBRSxJQUFJO1lBQ2QsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFO1lBQzNELFFBQVEsRUFBRSxJQUFJO1lBQ2QsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxXQUFXLEdBQWU7WUFDOUIsSUFBSSxFQUFFLG9CQUFXLENBQUMsR0FBRztZQUNyQixRQUFRLEVBQUUsV0FBVztZQUNyQixnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQztRQUNGLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBRUQsTUFBTSxXQUFXLEdBQWlCO1FBQ2hDLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7S0FDeEIsQ0FBQztJQUNGLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQge2dlbmVyYXRlUmVhZG1lRmlsZUZyb21UZW1wbGF0ZUZpbGV9IGZyb20gJy4vcmVhZG1lJztcbmltcG9ydCB7XG4gIE90aGVyUHJvamVjdCxcbiAgUHJvamVjdEluZm8sXG4gIFByb2plY3RUeXBlLFxuICBTZGtQcm9qZWN0LFxuICB2YWxpZGF0ZVByb2plY3RTdGFiaWxpdHksXG4gIHZhbGlkYXRlUHJvamVjdFN0YXR1cyxcbiAgdmFsaWRhdGVQcm9qZWN0VHlwZSxcbn0gZnJvbSAnLi9pbnB1dHMnO1xuXG5mdW5jdGlvbiBydW4oKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvamVjdFR5cGUgPSB2YWxpZGF0ZVByb2plY3RUeXBlKFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF90eXBlJywge3JlcXVpcmVkOiB0cnVlLCB0cmltV2hpdGVzcGFjZTogdHJ1ZX0pXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZ2V0UHJvamVjdEluZm8ocHJvamVjdFR5cGUpO1xuXG4gICAgY29uc3QgcHJvamVjdFN0YXR1cyA9IHZhbGlkYXRlUHJvamVjdFN0YXR1cyhcbiAgICAgIGNvcmUuZ2V0SW5wdXQoJ3Byb2plY3Rfc3RhdHVzJywge3JlcXVpcmVkOiB0cnVlLCB0cmltV2hpdGVzcGFjZTogdHJ1ZX0pXG4gICAgKTtcbiAgICBjb25zdCBwcm9qZWN0U3RhYmlsaXR5ID0gdmFsaWRhdGVQcm9qZWN0U3RhYmlsaXR5KFxuICAgICAgY29yZS5nZXRJbnB1dCgncHJvamVjdF9zdGFiaWxpdHknLCB7cmVxdWlyZWQ6IHRydWUsIHRyaW1XaGl0ZXNwYWNlOiB0cnVlfSlcbiAgICApO1xuXG4gICAgY29uc3QgdGVtcGxhdGVGaWxlID0gY29yZS5nZXRJbnB1dCgndGVtcGxhdGVfZmlsZScsIHtcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIHRyaW1XaGl0ZXNwYWNlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3V0cHV0RmlsZSA9IGNvcmUuZ2V0SW5wdXQoJ291dHB1dF9maWxlJywge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgdHJpbVdoaXRlc3BhY2U6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb3JlLmluZm8oYFxuR2VuZXJhdGluZyBNb21lbnRvIE9TUyBSRUFETUVcbiAgICAgICAgIGlucHV0IGZpbGU6ICR7dGVtcGxhdGVGaWxlfVxuICAgICAgICBvdXRwdXQgZmlsZTogJHtvdXRwdXRGaWxlfVxuICAgICAgIHByb2plY3QgaW5mbzogJHtKU09OLnN0cmluZ2lmeShwcm9qZWN0SW5mbyl9XG4gICAgIHByb2plY3Qgc3RhdHVzOiAke3Byb2plY3RTdGF0dXN9XG4gIHByb2plY3Qgc3RhYmlsaXR5OiAke3Byb2plY3RTdGFiaWxpdHl9XG5gKTtcbiAgICBnZW5lcmF0ZVJlYWRtZUZpbGVGcm9tVGVtcGxhdGVGaWxlKHtcbiAgICAgIHRlbXBsYXRlRmlsZTogdGVtcGxhdGVGaWxlLFxuICAgICAgb3V0cHV0RmlsZTogb3V0cHV0RmlsZSxcbiAgICAgIHByb2plY3RJbmZvOiBwcm9qZWN0SW5mbyxcbiAgICAgIHByb2plY3RTdGF0dXM6IHByb2plY3RTdGF0dXMsXG4gICAgICBwcm9qZWN0U3RhYmlsaXR5OiBwcm9qZWN0U3RhYmlsaXR5LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBjb3JlLnNldEZhaWxlZChlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SW5mbyhwcm9qZWN0VHlwZTogUHJvamVjdFR5cGUpOiBQcm9qZWN0SW5mbyB7XG4gIGlmIChwcm9qZWN0VHlwZSA9PT0gUHJvamVjdFR5cGUuU0RLKSB7XG4gICAgY29uc3Qgc2RrTGFuZ3VhZ2UgPSBjb3JlLmdldElucHV0KCdzZGtfbGFuZ3VhZ2UnLCB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW1XaGl0ZXNwYWNlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHVzYWdlRXhhbXBsZVBhdGggPSBjb3JlLmdldElucHV0KCd1c2FnZV9leGFtcGxlX3BhdGgnLCB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW1XaGl0ZXNwYWNlOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2plY3RJbmZvOiBTZGtQcm9qZWN0ID0ge1xuICAgICAgdHlwZTogUHJvamVjdFR5cGUuU0RLLFxuICAgICAgbGFuZ3VhZ2U6IHNka0xhbmd1YWdlLFxuICAgICAgdXNhZ2VFeGFtcGxlUGF0aDogdXNhZ2VFeGFtcGxlUGF0aCxcbiAgICB9O1xuICAgIHJldHVybiBwcm9qZWN0SW5mbztcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RJbmZvOiBPdGhlclByb2plY3QgPSB7XG4gICAgdHlwZTogUHJvamVjdFR5cGUuT1RIRVIsXG4gIH07XG4gIHJldHVybiBwcm9qZWN0SW5mbztcbn1cblxucnVuKCk7XG4iXX0=
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map