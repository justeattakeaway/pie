const fs = require('fs');
const { getAddedComponentPackages, scriptPrefix } = require('./get-added-component-packages');

module.exports = async ({ prBranchName, prNumber, artifactFilePath }) => {
    const packagePrefix = '@justeattakeaway/';
    const packageFilePath = 'packages/components/pie-webc/package.json';

    try {
        // Check what labels should be created
        const addedComponentPackages = await getAddedComponentPackages(packageFilePath, packagePrefix, prBranchName);

        if (addedComponentPackages.length === 0) {
            console.info(`${scriptPrefix} No components were added, nothing to update.`);
            return;
        }

        // Save artifact with label names to be created by the "labeler-get-labels.yml" workflow
        const newLabels = addedComponentPackages.map((componentName) => componentName.replace(packagePrefix, ''));
        const artifactStr = JSON.stringify({ prNumber, newLabels }, null, 2);
        fs.writeFileSync(artifactFilePath, artifactStr, { encoding: 'utf8' });
    } catch (error) {
        console.error(error.message);
    }
};
