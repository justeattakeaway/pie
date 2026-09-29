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
 * The two previews that together make up one component's baseline, named for what they
 * capture rather than for the CLI flag that produces them:
 *
 * - `props` is the component's Figma property surface — its properties and variants.
 * - `code` is the code the design system renders for every property combination.
 *
 * `--max-combinations` is only valid alongside `--all` — the CLI exits with an error if
 * it is passed on its own, and ignores it under `--inspect`.
 */
const CHECKS = [
    { label: 'props', flags: ['--inspect'] },
    { label: 'code', flags: ['--all', '--max-combinations', MAX_COMBINATIONS] },
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
 * Lines the CLI logs to stderr before doing any work. They carry no diagnostic value,
 * but they are all that is left on stderr when a preview fails, so strip them rather
 * than surfacing them as the error.
 */
const CLI_PREAMBLE = [
    /^Using ".*" parser\b/,
    /^If this is incorrect, please check/,
    /^Config file found, parsing\b/,
    /^Using label\b/,
    /^Using language\b/,
    /^Found: /,
    /^Previewing \d+ component\(s\)\.\.\.$/,
    /^Previewing all local Code Connect files\.\.\.$/,
];

/**
 * Reduces the CLI's stderr to the parts that say something about a failure.
 *
 * @param {string} stderr - Raw stderr from the preview.
 * @returns {string} The meaningful lines, joined, or an empty string.
 */
function filterMeaningfulCliOutput (stderr) {
    return (stderr || '')
        // eslint-disable-next-line no-control-regex
        .replace(/\u001b\[[0-9;]*m/g, '')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !CLI_PREAMBLE.some((pattern) => pattern.test(line)))
        .join('; ');
}

/**
 * Parses the CLI's JSON output, or returns `undefined` if it did not emit any.
 *
 * @param {string} stdout - Raw stdout from the preview.
 * @returns {unknown|undefined} The parsed output, or `undefined`.
 */
function parseOutput (stdout) {
    if (!(stdout || '').trim()) return undefined;

    try {
        return JSON.parse(stdout);
    } catch {
        return undefined;
    }
}

/**
 * Counts how many of a preview's results rendered successfully. The `props` check
 * (`--inspect`) has no `success` field, so it reports zero of zero.
 *
 * @param {unknown} parsed - Parsed preview output.
 * @returns {{ failed: number, total: number }} Render tally.
 */
function countRenderFailures (parsed) {
    const rendered = Array.isArray(parsed)
        ? parsed.filter((entry) => entry && typeof entry.success === 'boolean')
        : [];

    return { failed: rendered.filter((entry) => !entry.success).length, total: rendered.length };
}

/**
 * Explains a preview in which nothing rendered at all. The CLI signals this only
 * through its exit code, but the JSON it printed first says exactly what went wrong —
 * so build the message from that instead of from the exit code.
 *
 * @param {unknown} parsed - Parsed preview output.
 * @returns {string|undefined} A message, or `undefined` if something did render.
 */
function describeTotalRenderFailure (parsed) {
    const { failed, total } = countRenderFailures(parsed);

    if (total === 0 || failed < total) return undefined;

    const parts = [`every render failed (${failed}/${total})`];
    const reasons = [...new Set(parsed.map((entry) => entry.error).filter(Boolean))];

    if (reasons.length > 0) {
        parts.push(reasons.slice(0, 3).join(' | ') + (reasons.length > 3 ? ` (+${reasons.length - 3} more)` : ''));
    }

    // The reason text already names the offending property, so add only what it does
    // not have: the set of properties the component actually exposes.
    const details = parsed.find((entry) => entry.errorDetails && entry.errorDetails.availableProperties);
    const available = details
        ? details.errorDetails.availableProperties
            .map((property) => (property && property.name) || property)
            .filter(Boolean)
        : [];

    if (available.length > 0) {
        parts.push(`available properties: ${available.join(', ')}`);
    }

    return parts.join(' — ');
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

    // The CLI prints its JSON to stdout and its logging to stderr, then exits 1 if
    // nothing rendered. Read stdout first: on that path the exit code says only "it
    // failed", while the JSON says why, and stderr holds nothing but the preamble.
    const parsed = parseOutput(result.stdout);
    const totalFailure = parsed === undefined ? undefined : describeTotalRenderFailure(parsed);

    if (totalFailure) {
        throw new Error(totalFailure);
    }

    const diagnostics = filterMeaningfulCliOutput(result.stderr);

    if (parsed === undefined) {
        const detail = diagnostics ? `: ${diagnostics}` : '';

        throw new Error(`the Figma CLI produced no parseable JSON (exit ${result.status})${detail}`);
    }

    if (result.status !== 0) {
        throw new Error(`exit ${result.status}: ${diagnostics || 'no diagnostic output from the Figma CLI'}`);
    }

    return JSON.stringify(parsed, null, 2);
}

module.exports = {
    CHECKS,
    ROOT,
    SNAPSHOTS_DIR,
    countRenderFailures,
    listTemplates,
    runPreview,
    snapshotPathFor,
};
