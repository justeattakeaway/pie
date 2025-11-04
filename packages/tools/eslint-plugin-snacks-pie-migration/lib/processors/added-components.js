const { execSync } = require('child_process');
const getAddedComponents = require('../util/get-added-components');

module.exports = {
    // Filter out errors for components that weren't added
    postprocess (messages, filePath) {
        // Get file relative path to the repo
        const relativeFilePath = filePath.replace(process.cwd(), '').substr(1);

        // Get file content before and after
        const mergeBase = execSync('git merge-base HEAD main', { encoding: 'utf8' }).trim();
        // Get the merge base to find the actual parent branch
        const filePreviousState = execSync(`git show ${mergeBase}:"${relativeFilePath}"`, { encoding: 'utf8' });
        const fileCurrentState = execSync(`git show HEAD:"${relativeFilePath}"`, { encoding: 'utf8' });

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
