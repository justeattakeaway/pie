import { danger, fail } from 'danger';
import { execSync } from 'child_process';

const { pr } = danger.github;
const validChangesetCategories = ['Added', 'Changed', 'Removed', 'Fixed'];

const isRenovatePR = pr.user.login === 'renovate[bot]';
const isDependabotPR = pr.user.login === 'dependabot[bot]';

// Check for correct Changeset formatting
danger.git.created_files.filter((filepath) => filepath.includes('.changeset/') && !filepath.includes('.changeset/pre.json'))
    .forEach((filepath) => {
        // get the git diff for the changeset file
        const changesetDiff = danger.git.diffForFile(filepath);
        changesetDiff.then((result) => {
            const diffString = result.diff;
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
        }, (err) => {
            console.error(err);
        });
    });

// Check for empty PR Description checkboxes - but not for automated version PRs
if (pr.body.includes('- [ ]') && !isDependabotPR && !isRenovatePR) {
    fail('You currently have an unchecked checklist item in your PR description.\n\nPlease confirm this check has been carried out – if it\'s not relevant to your PR, delete this line from the PR checklist.');
}

// Check for package.json updates without corresponding yarn.lock updates
const packageJsonFiles = danger.git.modified_files.filter((file) => file.endsWith('package.json'));

// If package.json files have been modified
if (packageJsonFiles.length > 0) {
    try {
        // Run yarn check
        execSync('yarn check', { stdio: 'inherit' });

        // If there are differences, yarn check will fail and we catch it here
        fail(':lock: `package.json` was modified, but `yarn.lock` was not updated. Please run `yarn install` to ensure the lockfile is updated.');
    } catch (error) {
        // If yarn check succeeds, there is no need to do anything.
        console.log('Yarn check passed. All dependencies are in sync.');
    }
}
