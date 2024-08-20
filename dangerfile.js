import { danger, fail } from 'danger';

const { pr } = danger.github;
const validChangesetCategories = ['Added', 'Changed', 'Removed', 'Fixed'];

const isRenovatePR = pr.user.login === 'renovate[bot]';
const isDependabotPR = pr.user.login === 'dependabot[bot]';

// Check for correct Changeset formatting
danger.git.created_files.filter((filepath) => filepath.includes('.changeset/') && !filepath.includes('.changeset/pre.json'))
    .forEach(async (filepath) => {
        const changesetDiff = await danger.git.diffForFile(filepath);
        const diffString = changesetDiff.diff;
        const changesetCategoryRegex = /(?<=\[).+?(?=\])/g;
        const changesetCategories = diffString.match(changesetCategoryRegex);
        const numberOfCategories = changesetCategories ? changesetCategories.length : 0;

        if (isRenovatePR) {
            if (numberOfCategories === 0) {
                fail(`:memo: Your changeset doesn't include a category. Please add one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
            } else if (!validChangesetCategories.some((cat) => changesetCategories.includes(cat))) {
                fail(`:memo: Your changeset includes an invalid category. Please use one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
            }

            const changesetLineFormatRegex = /\[\w+\] - [\S].+/g;
            const validChangesetEntries = diffString.match(changesetLineFormatRegex);
            const numberOfValidChangesetEntries = (validChangesetEntries === null ? 0 : validChangesetEntries.length);
            if (numberOfCategories !== numberOfValidChangesetEntries) {
                fail(`:memo: Your changeset entries should be in the format: \`[Category] - {Description}\`. One or more of your entries does not follow this format. Filepath: \`${filepath}`);
            }
        }
    });

// Check for empty PR Description checkboxes - but not for automated version PRs
if (pr.body.includes('- [ ]') && !isDependabotPR && !isRenovatePR) {
    fail('You currently have an unchecked checklist item in your PR description.\n\nPlease confirm this check has been carried out – if it\'s not relevant to your PR, delete this line from the PR checklist.');
}

// Get a list of modified package.json files
const modifiedPackageJsons = danger.git.modified_files.filter((file) => file.endsWith('package.json'));
const yarnLockModified = danger.git.modified_files.includes('yarn.lock');

if (modifiedPackageJsons.length > 0 && !isRenovatePR && !isDependabotPR) {
    if (!yarnLockModified) {
        fail('You modified `package.json` but did not update `yarn.lock`. Please run `yarn install` and commit the updated `yarn.lock` file.');
    } else {
        // Compare diffs between package.json and yarn.lock
        Promise.all(modifiedPackageJsons.map(async (packageJson) => {
            const packageJsonDiff = await danger.git.diffForFile(packageJson);
            const yarnLockDiff = await danger.git.diffForFile('yarn.lock');

            const packageJsonDepsRegex = /"dependencies": {(.*)}/gs;
            const depsMatches = packageJsonDiff.diff.match(packageJsonDepsRegex);

            if (depsMatches) {
                const updatedDeps = depsMatches[1].split(',').map((dep) => dep.trim().split(':')[0].replace(/"/g, ''));
                const missingDeps = updatedDeps.filter((dep) => !yarnLockDiff.diff.includes(dep));

                if (missingDeps.length > 0) {
                    fail(`The following dependencies were updated in \`${packageJson}\` but are missing in \`yarn.lock\`: ${missingDeps.join(', ')}. Please run \`yarn install\` and commit the updated \`yarn.lock\`.`);
                }
            }
        }));
    }
}
