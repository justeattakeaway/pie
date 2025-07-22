import { danger, fail } from 'danger';
const { execSync } = require('child_process');

const { pr } = danger.github;
const validChangesetCategories = ['Added', 'Changed', 'Removed', 'Fixed'];

const isDependabotPR = pr.user.login === 'dependabot[bot]';

// PIE Webc major versioning check (only for non-Dependabot PRs)
if (!isDependabotPR) {
    try {
        execSync('npx detect-webc-major-version', { stdio: 'pipe' });
    } catch (err) {
        const errorOutput = err.stderr ? err.stderr.toString() : '';
        fail(`${errorOutput}`);
    }
}

// Check for correct Changeset formatting
danger.git.created_files
    .filter((filepath) => filepath.includes('.changeset/') && !filepath.includes('.changeset/pre.json'))
    .forEach((filepath) => {
        const changesetDiff = danger.git.diffForFile(filepath);
        changesetDiff.then((result) => {
            const diffString = result.diff;
            const changesetCategoryRegex = /(?<=\[).+?(?=\])/g;
            const changesetCategories = diffString.match(changesetCategoryRegex);
            const numberOfCategories = changesetCategories ? changesetCategories.length : 0;

            if (isDependabotPR) {
                // Check if at least one of the valid changeset categories is present
                if (numberOfCategories === 0) {
                    fail(`:memo: Your changeset doesn't include a category. Please add one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
                } else if (!validChangesetCategories.some((cat) => changesetCategories.includes(cat))) {
                    fail(`:memo: Your changeset includes an invalid category. Please use one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
                }

                // Check that categories are followed are in the following format `[Category] - {Description}`
                const changesetLineFormatRegex = /\[\w+\] - [\S].+/g;
                const validChangesetEntries = diffString.match(changesetLineFormatRegex);
                const numberOfValidChangesetEntries = validChangesetEntries ? validChangesetEntries.length : 0;
                if (numberOfCategories !== numberOfValidChangesetEntries) {
                    fail(`:memo: Your changeset entries should be in the format: \`[Category] - {Description}\`. One or more of your entries does not follow this format. Filepath: \`${filepath}`);
                }
            }
        }, (err) => {
            console.error(err);
        });
    });

// Allow unchecked checkboxes only in "Not-applicable Checklist items"
if (!isDependabotPR) {
    const { body } = pr;

    const uncheckedCheckboxRegex = /- \[ \]/g;

    // Split the body into sections
    const sections = body.split(/## /);
    const notApplicableSection = sections.find((section) => section.startsWith('Not-applicable Checklist items'));

    // Check for unchecked checkboxes outside the "Not-applicable Checklist items" section
    const uncheckedOutsideNotApplicableSection = sections.some((section) => {
        if (section !== notApplicableSection) {
            return uncheckedCheckboxRegex.test(section);
        }
        return false;
    });

    if (uncheckedOutsideNotApplicableSection) {
        fail('You have unchecked checklist items outside the "Not-applicable Checklist items" section.\n\nPlease ensure all unchecked checkboxes are moved to the appropriate section.');
    }

    // Match sections for Reviewer 1 and Reviewer 2
    const reviewer1Section = body.match(/### Reviewer 1.*?(?=###|$)/s);
    const reviewer2Section = body.match(/### Reviewer 2.*?(?=###|$)/s);

    // Helper function to check a reviewer's section
    const checkReviewerSection = (section, reviewerName) => {
        if (section) {
            const uncheckedReviewerCheckboxes = section.match(uncheckedCheckboxRegex);
            if (uncheckedReviewerCheckboxes) {
                fail(`You have unchecked checklist items in ${reviewerName}'s section.\n\nPlease ensure all items are addressed before approval.`);
            }
        }
    };

    // Check Reviewer 1
    checkReviewerSection(reviewer1Section ? reviewer1Section[0] : null, 'Reviewer 1');

    // Check Reviewer 2
    checkReviewerSection(reviewer2Section ? reviewer2Section[0] : null, 'Reviewer 2');
}

// README checks for Web Components (excluding core/testing projects)
const readmeFiles = [...danger.git.created_files, ...danger.git.modified_files]
    .filter((file) => /^packages\/components\/(?!pie-webc(?:-core|-testing)?\/)[^/]+\/README\.md$/.test(file));

const checkReadmeStructure = async (filepath) => {
    const diff = await danger.git.diffForFile(filepath);
    const fileContent = diff.after;

    const errors = [];

    if (!/https:\/\/img\.shields\.io\/npm\/v\/@justeattakeaway\//.test(fileContent)) {
        errors.push('Missing npm badge (https://img.shields.io/npm/v/@justeattakeaway/...).');
    }

    if (!/## Table of Contents/.test(fileContent)) {
        errors.push('Missing "## Table of Contents" section.');
    }

    if (!/## Documentation/.test(fileContent)) {
        errors.push('Missing "## Documentation" section.');
    }

    if (!/### Properties/.test(fileContent)) {
        errors.push('Missing "### Properties" sub-section under Documentation.');
    }
    if (!/### Slots/.test(fileContent)) {
        errors.push('Missing "### Slots" sub-section under Documentation.');
    }
    if (!/### Events/.test(fileContent)) {
        errors.push('Missing "### Events" sub-section under Documentation.');
    }
    if (!/### CSS Variables/.test(fileContent)) {
        errors.push('Missing "### CSS Variables" sub-section under Documentation.');
    }

    if (!/## Usage Examples/.test(fileContent)) {
        errors.push('Missing "## Usage Examples" section.');
    }

    if (!/## Questions and Support/.test(fileContent)) {
        errors.push('Missing "## Questions and Support" section.');
    }

    if (!/## Contributing/.test(fileContent)) {
        errors.push('Missing "## Contributing" section.');
    }

    if (errors.length > 0) {
        fail(`📘 \`${filepath}\` is missing required README sections:\n- ${errors.join('\n- ')}`);
    }
};

readmeFiles.forEach((file) => {
    checkReadmeStructure(file);
});
