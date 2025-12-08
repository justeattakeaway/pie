const path = require('path');
const { getAddedComponents } = require('./get-added-components');
const { getDefaultBranchName } = require('./git-utils');

/**
 * Processes messages related to deprecated components in a file
 * It filters out error messages for components that weren't added
 * by the commit or introduced in the branch when compared with main
 * @param messages - array of eslint messages
 * @param filePath - the file path
 * @returns A filtered array of messages based on certain conditions
 */
function addedComponentsPostprocessor (messages, filePath, { readFileSync, isFileNew, getFileStateFromBranch }) {
    // Get file relative path to the repo
    const relativeFilePath = path.relative(process.cwd(), filePath)
        .replace(/\\/g, '/'); // Fix path handling on Windows

    // Check if file was added, but not committed yet
    // This is used in the pre-commit hook
    const isNewFile = isFileNew(relativeFilePath);

    // Get file content before and after
    const ref = 'BASE_SHA' in process.env && process.env.BASE_SHA;
    const filePreviousState = isNewFile ? '' : getFileStateFromBranch(relativeFilePath, ref, getDefaultBranchName());
    const fileCurrentState = readFileSync(relativeFilePath, 'utf8');

    // Get list of added components
    const addedComponents = getAddedComponents(filePreviousState, fileCurrentState);

    return messages.flat()
        .filter(({ message, ruleId }) => {
            // Check if the message has the id from the plugin
            if (ruleId === '@justeattakeaway/snacks-pie-migration/deprecated-components') {
                // Get component name for error message
                const match = message.match(/^The Snacks component "([^"]+)" is being deprecated/);
                const componentName = match ? match[1] : null;

                return addedComponents.includes(componentName);
            }

            // Do not filter other types of messages
            return true;
        });
}

module.exports = { addedComponentsPostprocessor };
