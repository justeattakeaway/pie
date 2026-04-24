const validChangesetCategories = ['Added', 'Changed', 'Removed', 'Fixed'];

export default async function changesetFormat ({ danger, fail, flags }) {
    const changesetFiles = danger.git.created_files.filter((filepath) => filepath.includes('.changeset/') && !filepath.includes('.changeset/pre.json'));

    await Promise.all(changesetFiles.map(async (filepath) => {
        const result = await danger.git.diffForFile(filepath);
        const diffString = result.diff;
        const changesetCategoryRegex = /(?<=\[).+?(?=\])/g;
        const changesetCategories = diffString.match(changesetCategoryRegex);
        const numberOfCategories = changesetCategories ? changesetCategories.length : 0;

        if (!flags.isDependabotPR) return;

        if (numberOfCategories === 0) {
            fail(`:memo: Your changeset doesn't include a category. Please add one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
        } else if (!validChangesetCategories.some((cat) => changesetCategories.includes(cat))) {
            fail(`:memo: Your changeset includes an invalid category. Please use one of: \`${validChangesetCategories.join(', ')}\`. Filepath: \`${filepath}`);
        }

        const changesetLineFormatRegex = /\[\w+\] - [\S].+/g;
        const validChangesetEntries = diffString.match(changesetLineFormatRegex);
        const numberOfValidChangesetEntries = validChangesetEntries ? validChangesetEntries.length : 0;
        if (numberOfCategories !== numberOfValidChangesetEntries) {
            fail(`:memo: Your changeset entries should be in the format: \`[Category] - {Description}\`. One or more of your entries does not follow this format. Filepath: \`${filepath}`);
        }
    }));
}
