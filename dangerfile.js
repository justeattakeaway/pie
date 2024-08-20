import { danger, fail, exec } from 'danger';
import fs from 'fs/promises'; // Import the promises version of fs for async operations

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
            // Check if at least one of the valid changeset categories is present
            if (numberOfCategories === 0) {
                fail(`:memo: Your changeset doesn't include a category. Please add one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
            } else if (!validChangesetCategories.some((cat) => changesetCategories.includes(cat))) {
                fail(`:memo: Your changeset includes an invalid category. Please use one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
            }

            // Check that categories are followed are in the following format `[Category] - {Description}`
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

// Check if any package.json was modified
const packageJsonModified = danger.git.modified_files.some((file) => file.endsWith('package.json'));
const yarnLockModified = danger.git.modified_files.includes('yarn.lock');

if (packageJsonModified && !isRenovatePR && !isDependabotPR) {
    // Store the current yarn.lock file content
    const yarnLockBefore = await fs.readFile('yarn.lock', 'utf8');

    // Run yarn install to update the lock file
    exec('yarn install').then(async () => {
        // Store the new yarn.lock file content
        const yarnLockAfter = await fs.readFile('yarn.lock', 'utf8');

        if (yarnLockBefore !== yarnLockAfter) {
            fail('It seems your `yarn.lock` file is not fully in sync with the `package.json` file(s). Please run `yarn install` and commit the updated `yarn.lock` file.');
        } else if (!yarnLockModified) {
            // In case yarn.lock was not included in the PR but should have been
            fail('You modified `package.json` but did not update `yarn.lock`. Please commit the updated `yarn.lock` file.');
        }
    }).catch((error) => {
        console.error('Error running yarn install:', error);
        fail('There was an error running `yarn install`. Please ensure your environment is set up correctly.');
    });
}
