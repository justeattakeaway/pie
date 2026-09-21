const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SNAPSHOTS_DIR = path.join(ROOT, 'snapshots');
const CONFIG = './config/figma-react-components-batch.config.json';

// The batch manifest with the list of what actually gets published.
const MANIFEST = path.join(ROOT, 'components.figma.batch.json');

// `spawnSync`/`execFileSync` default to a 1MB buffer, which `--all` can exceed: it
// renders up to MAX_COMBINATIONS property combinations per Figma node, and a batch
// file maps several nodes. Overflowing it kills the child process, so set a ceiling
// high enough that the limit is never the thing that fails a run.
const MAX_BUFFER = 64 * 1024 * 1024;

// 500 is both the CLI's default and its hard maximum (a higher value is rejected).
// Pinning it keeps snapshot sizes predictable and the baseline stable if that
// default ever changes upstream.
const MAX_COMBINATIONS = 500;

/**
 * The two previews that together make up one component's baseline. `--max-combinations`
 * is only valid alongside `--all` — the CLI exits with an error if it is passed on its
 * own, and ignores it under `--inspect`.
 */
const CHECKS = [
    { label: 'inspect', flags: ['--inspect'] },
    { label: 'all', flags: ['--all', '--max-combinations', MAX_COMBINATIONS] },
];

/**
 * Lists the component templates to snapshot, read from the batch manifest.
 *
 * @returns {{ component: string, templateFile: string }[]}
 * Entries sorted by component name, one per template, with `templateFile` relative
 * to the package root.
 */
function listTemplates () {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));

    if (!Array.isArray(manifest)) {
        throw new Error(`expected ${path.basename(MANIFEST)} to contain an array of entries`);
    }

    const byTemplateFile = new Map();

    manifest.forEach(({ templateFile }, index) => {
        if (typeof templateFile !== 'string') {
            throw new Error(`entry ${index} of ${path.basename(MANIFEST)} has no templateFile`);
        }

        byTemplateFile.set(templateFile, {
            component: path.basename(templateFile).replace(/\.figma\.batch\.js$/, ''),
            templateFile,
        });
    });

    return [...byTemplateFile.values()].sort((a, b) => a.component.localeCompare(b.component));
}

/**
 * Resolves the snapshot file holding one check's baseline for a component.
 *
 * @param {string} component - Component name, e.g. `pie-button`.
 * @param {string} label - Check label, as found in `CHECKS`.
 * @returns {string} Absolute path to the snapshot file.
 */
function snapshotPathFor (component, label) {
    return path.join(SNAPSHOTS_DIR, `${component}.${label}.json`);
}

/**
 * Runs `figma connect preview` against one built template file and returns its JSON
 * output, re-serialised so snapshots are formatted identically however the CLI emits it.
 *
 * @param {string} templateFile - Template path relative to the package root, as listed
 *                                in the manifest by `listTemplates`.
 * @param {string[]} flags - Preview flags for this check, as found in `CHECKS`.
 * @returns {string} Pretty-printed JSON output.
 * @throws {Error} If the template has not been built, the preview fails, or its output
 *                 exceeds `MAX_BUFFER`.
 */
function runPreview (templateFile, flags) {
    // The manifest can name a template that the build has not produced, which the CLI
    // reports only as a generic "no files found to preview". Say what is actually wrong.
    if (!fs.existsSync(path.join(ROOT, templateFile))) {
        throw new Error(`${templateFile} has not been built — check the manifest entry and run \`yarn build:react\``);
    }

    const result = spawnSync(
        'yarn',
        ['figma', 'connect', 'preview', templateFile, '-c', CONFIG, ...flags, '--output', 'json'],
        { cwd: ROOT, encoding: 'utf8', maxBuffer: MAX_BUFFER },
    );

    if (result.error) {
        if (result.error.code === 'ENOBUFS') {
            throw new Error(`preview output exceeded the ${MAX_BUFFER / 1024 / 1024}MB buffer — raise MAX_BUFFER, or lower MAX_COMBINATIONS`);
        }

        throw result.error;
    }

    if (result.status !== 0) {
        const message = (result.stderr || result.stdout || '').trim();
        throw new Error(`exit ${result.status}: ${message}`);
    }

    return JSON.stringify(JSON.parse(result.stdout), null, 2);
}

module.exports = {
    CHECKS,
    MAX_BUFFER,
    ROOT,
    SNAPSHOTS_DIR,
    listTemplates,
    runPreview,
    snapshotPathFor,
};
