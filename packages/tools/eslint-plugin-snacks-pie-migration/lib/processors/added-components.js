const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const getAddedComponents = require('../util/get-added-components');

module.exports = {
    // Filter out errors for components that weren't added
    postprocess (messages, filePath) {
        // Get file relative path to the repo
        const relativeFilePath = filePath.replace(process.cwd(), '').substr(1);

        // Check if file was added, but not committed yet
        // This is used in the pre-commit hook
        const isFileNew = (() => {
            try {
                // File exists in HEAD
                execSync(`git cat-file -e HEAD:"${relativeFilePath}"`, { stdio: 'ignore' });
                return false;
            } catch {
                return true;
            }
        })();

        // Get file previous state in the main branch or return false
        const isFileInMain = (() => {
            try {
                const mergeBase = execSync('git merge-base HEAD main', { encoding: 'utf8' }).trim();
                return execSync(`git show ${mergeBase}:"${relativeFilePath}"`, { encoding: 'utf8', stdio: 'pipe' });
            } catch (error) {
                // If the file was added in this branch, this might fail
                return false;
            }
        })();

        // Get file content before and after
        // Get the merge base to find the actual parent branch
        const filePreviousState = isFileNew ? '' : isFileInMain;
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
    },
};
