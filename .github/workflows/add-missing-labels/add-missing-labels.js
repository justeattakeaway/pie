const { getAddedComponentPackages, scriptPrefix } = require('./get-added-component-packages');

module.exports = async ({ github, context, prBranchName }) => {
    const packagePrefix = '@justeattakeaway/';
    const packageFilePath = 'packages/components/pie-webc/package.json';

    try {
        const addedComponentPackages = await getAddedComponentPackages(packageFilePath, packagePrefix, prBranchName);

        if (addedComponentPackages.length===0) {
            console.info(`${scriptPrefix} No components were added, nothing to update.`);
        } else {
            for await (const componentName of addedComponentPackages) {
                const name = componentName.replace(packagePrefix, '');

                console.info(`${scriptPrefix} Adding label for the package "${name}"...`);

                await github.rest.issues.createLabel({
                    name,
                    color: 'ededed',
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                });
            }
        }
    } catch (error) {
        console.error(`${scriptPrefix} Failed`);
        console.error(error.message);
    }
};
