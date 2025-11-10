const { readFileSync } = require('fs');
const getAddedComponents = require('../util/get-added-components');
const { isFileNew, getFileStateFromBranch } = require('../util/git-utils');

module.exports = {
    // Filter out errors for components that weren't added
    postprocess (messages, filePath) {
        // Get file relative path to the repo
        const relativeFilePath = filePath.replace(process.cwd(), '').substr(1);

        // Check if file was added, but not committed yet
        // This is used in the pre-commit hook
        const isNewFile = isFileNew(relativeFilePath);

        // Get file content before and after
        const filePreviousState = isNewFile ? '' : getFileStateFromBranch(relativeFilePath, 'main');
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
