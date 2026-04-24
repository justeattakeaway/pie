const readmePathRegex = /^packages\/components\/(?!pie-webc(?:-core|-testing)?\/)[^/]+\/README\.md$/;

async function checkReadmeStructure (danger, fail, filepath) {
    const diff = await danger.git.diffForFile(filepath);
    const fileContent = diff.after;

    const errors = [];

    if (!/https:\/\/img\.shields\.io\/npm\/v\/@justeattakeaway\//.test(fileContent)) {
        errors.push('Missing npm badge (https://img.shields.io/npm/v/@justeattakeaway/...).');
    }
    if (!/## Table of Contents/.test(fileContent)) errors.push('Missing "## Table of Contents" section.');
    if (!/## Documentation/.test(fileContent)) errors.push('Missing "## Documentation" section.');
    if (!/### Properties/.test(fileContent)) errors.push('Missing "### Properties" sub-section under Documentation.');
    if (!/### Slots/.test(fileContent)) errors.push('Missing "### Slots" sub-section under Documentation.');
    if (!/### Events/.test(fileContent)) errors.push('Missing "### Events" sub-section under Documentation.');
    if (!/### CSS Variables/.test(fileContent)) errors.push('Missing "### CSS Variables" sub-section under Documentation.');
    if (!/## Usage Examples/.test(fileContent)) errors.push('Missing "## Usage Examples" section.');
    if (!/## Questions and Support/.test(fileContent)) errors.push('Missing "## Questions and Support" section.');
    if (!/## Contributing/.test(fileContent)) errors.push('Missing "## Contributing" section.');

    if (errors.length > 0) {
        fail(`📘 \`${filepath}\` is missing required README sections:\n- ${errors.join('\n- ')}`);
    }
}

export default async function readmeStructure ({ danger, fail }) {
    const readmeFiles = [...danger.git.created_files, ...danger.git.modified_files]
        .filter((file) => readmePathRegex.test(file));

    await Promise.all(readmeFiles.map((file) => checkReadmeStructure(danger, fail, file)));
}
