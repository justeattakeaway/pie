/* global danger, fail, message */
import { message, danger } from 'danger';

const { pr } = danger.github;
const validChangesetCategories = ['Added', 'Changed', 'Removed', 'Fixed'];

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
        }, (err) => {
            console.log(err);
        });
    });

// Check for empty PR Description checkboxes
if (pr.body.includes('- [ ]')) {
    fail('You currently have an unchecked checklist item in your PR description.\n\nPlease confirm this check has been carried out – if it\'s not relevant to your PR, delete this line from the PR checklist.');
}
