#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import { existsSync, readFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Reports which newly added pie-icons still need entries in the Code Connect config.
 *
 * Usage:
 *   node check-icons-sync.mjs                 # latest pie-icons update commit on origin/main
 *   node check-icons-sync.mjs --sha 69ed425   # a specific commit
 *   node check-icons-sync.mjs --all-commits   # audit every pie-icons update commit
 */

const CONFIG_PATH = 'configs/pie-code-connect/icons-standard.figma.batch.json';
const ASSETS_PREFIX = 'packages/tools/pie-icons/src/assets/';
const COMMIT_GREP = '^feat(pie-icons): Update icons from pie-iconography';

/**
 * Runs a git command and returns its stdout. Arguments are passed as an array
 * rather than interpolated into a shell string, so refs and paths containing
 * spaces or other special characters are handled correctly. stderr is captured
 * too, so git's own error text does not leak into the output - callers report
 * failures themselves with a message that makes sense in context.
 */
function git (args, cwd) {
    return execFileSync('git', args, {
        cwd,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
    });
}

function searchUpwards (dir) {
    if (existsSync(join(dir, '.git'))) return dir;

    const parent = dirname(dir);

    return parent === dir ? null : searchUpwards(parent);
}

/**
 * Resolves the repository root, falling back to walking up from this script
 * (which lives inside the repo) so it also works when invoked from elsewhere.
 */
function repoRoot () {
    try {
        return git(['rev-parse', '--show-toplevel']).trim();
    } catch {
        return searchUpwards(dirname(fileURLToPath(import.meta.url)));
    }
}

/**
 * Compares icon names ignoring punctuation, because the config drops the hyphen
 * before digits: the asset `cc-2.svg` is `icon-cc2`.
 */
function normalise (name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Splits the icons a commit adds into standard ones and those belonging to
 * another family. Only SVGs sitting at the top level of the assets directory
 * are covered by the standard config; everything in a subdirectory (payment
 * methods, flags, social and logo marks) is mapped by its own config and must
 * not be reported as missing here.
 */
function addedIcons (sha, root) {
    const files = git(['show', sha, '--name-only', '--diff-filter=A'], root).split('\n');
    const standard = [];
    const other = [];

    files.forEach((file) => {
        const isAsset = file.startsWith(ASSETS_PREFIX) && file.endsWith('.svg');
        if (!isAsset) return;

        const relative = file.slice(ASSETS_PREFIX.length);
        const stem = basename(relative, '.svg');
        // Large and filled variants share the base icon's Code Connect mapping.
        const isVariant = stem.includes('-large') || stem.includes('filled');
        if (isVariant) return;

        const dir = dirname(relative);

        if (dir === '.') {
            standard.push(`icon-${stem}`);
        } else {
            other.push({ family: dir.split('/')[0], name: `icon-${stem}` });
        }
    });

    return { standard: standard.sort(), other };
}

function commitSubject (sha, root) {
    return git(['show', sha, '--no-patch', '--format=%h %ad %s', '--date=short'], root).trim();
}

function groupByFamily (other) {
    const families = new Map();

    other.forEach(({ family, name }) => {
        families.set(family, [...(families.get(family) || []), name]);
    });

    return families;
}

function describe (sha, root, mapped) {
    const { standard, other } = addedIcons(sha, root);
    const missing = standard.filter((icon) => !mapped.has(normalise(icon)));
    const lines = [`Commit ${commitSubject(sha, root)}`];

    if (standard.length === 0 && other.length === 0) {
        lines.push('  no new standard icons');
        return { lines, missing };
    }

    if (standard.length > 0) {
        const already = standard.filter((icon) => mapped.has(normalise(icon)));

        lines.push(`  new standard icons (${standard.length}): ${standard.join(', ')}`);

        if (already.length > 0) {
            lines.push(`  already in config (${already.length}): ${already.join(', ')}`);
        }

        lines.push(missing.length > 0
            ? `  MISSING (${missing.length}): ${missing.join(', ')}`
            : '  MISSING: none');
    }

    groupByFamily(other).forEach((names, family) => {
        lines.push(`  ${family}/ icons (${names.length}): ${names.join(', ')}  <- covered by their own config, ignore here`);
    });

    return { lines, missing };
}

function resolveCommits (values, root) {
    if (values.sha) {
        try {
            return [git(['rev-parse', values.sha], root).trim()];
        } catch {
            return null;
        }
    }

    const onMain = git(['log', 'origin/main', '--format=%H', '--grep', COMMIT_GREP], root)
        .split('\n').filter(Boolean);
    const commits = onMain.length > 0
        ? onMain
        : git(['log', 'HEAD', '--format=%H', '--grep', COMMIT_GREP], root).split('\n').filter(Boolean);

    if (commits.length === 0) return null;

    return values['all-commits'] ? commits : commits.slice(0, 1);
}

function parseArguments () {
    try {
        return parseArgs({
            options: {
                sha: { type: 'string' },
                'all-commits': { type: 'boolean', default: false },
                config: { type: 'string', default: CONFIG_PATH },
            },
        }).values;
    } catch (error) {
        console.error(`error: ${error.message}`);
        console.error('Usage: node check-icons-sync.mjs [--sha <commit>] [--all-commits] [--config <path>]');
        return null;
    }
}

function main () {
    const values = parseArguments();

    if (!values) process.exit(2);

    const root = repoRoot();

    if (!root) {
        console.error('error: not inside a git repository');
        process.exit(2);
    }

    const configPath = join(root, values.config);

    if (!existsSync(configPath)) {
        console.error(`error: config not found: ${values.config}`);
        process.exit(2);
    }

    const { components } = JSON.parse(readFileSync(configPath, 'utf8'));
    const mapped = new Set(components.filter((c) => c.baseName).map((c) => normalise(c.baseName)));

    console.info(`Repository : ${root}`);
    console.info(`Config     : ${values.config} (${components.length} entries)`);
    console.info();

    const commits = resolveCommits(values, root);

    if (!commits) {
        console.error(values.sha
            ? `error: unknown commit: ${values.sha}`
            : "error: no 'feat(pie-icons): Update icons from pie-iconography' commit found.");
        process.exit(2);
    }

    let totalMissing = 0;

    commits.forEach((sha, index) => {
        if (index > 0) console.info();

        const { lines, missing } = describe(sha, root, mapped);

        console.info(lines.join('\n'));
        totalMissing += missing.length;
    });

    console.info();

    console.info(totalMissing > 0
        ? `Summary: ${totalMissing} standard icon(s) need Figma node IDs. Continue with the next steps.`
        : 'Summary: nothing to do - every standard icon from these commits is already in the config. Report this to the user and stop.');
}

main();
