const readmePathRegex = /^packages\/components\/(?!pie-webc(?:-core|-testing)?\/)[^/]+\/README\.md$/;

const requiredReadmeSections = [
    { regex: /https:\/\/img\.shields\.io\/npm\/v\/@justeattakeaway\//, error: 'Missing npm badge (https://img.shields.io/npm/v/@justeattakeaway/...).' },
    { regex: /## Table of Contents/, error: 'Missing "## Table of Contents" section.' },
    { regex: /## Documentation/, error: 'Missing "## Documentation" section.' },
    { regex: /### Properties/, error: 'Missing "### Properties" sub-section under Documentation.' },
    { regex: /### Slots/, error: 'Missing "### Slots" sub-section under Documentation.' },
    { regex: /### Events/, error: 'Missing "### Events" sub-section under Documentation.' },
    { regex: /### CSS Variables/, error: 'Missing "### CSS Variables" sub-section under Documentation.' },
    { regex: /## Usage Examples/, error: 'Missing "## Usage Examples" section.' },
    { regex: /## Questions and Support/, error: 'Missing "## Questions and Support" section.' },
    { regex: /## Contributing/, error: 'Missing "## Contributing" section.' },
];

async function checkReadmeStructure (danger, fail, filepath) {
    const diff = await danger.git.diffForFile(filepath);
    const fileContent = diff.after;

    const errors = requiredReadmeSections
        .filter(({ regex }) => !regex.test(fileContent))
        .map(({ error }) => error);

    if (errors.length > 0) {
        fail(`📘 \`${filepath}\` is missing required README sections:\n- ${errors.join('\n- ')}`);
    }
}

export default async function readmeStructure ({ danger, fail }) {
    const readmeFiles = [...danger.git.created_files, ...danger.git.modified_files]
        .filter((file) => readmePathRegex.test(file));

    await Promise.all(readmeFiles.map((file) => checkReadmeStructure(danger, fail, file)));
}
