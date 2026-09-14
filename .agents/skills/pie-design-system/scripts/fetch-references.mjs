#!/usr/bin/env node

/**
 * Copies PIE component and guide docs into the skill.
 */

import {
    readFileSync,
    writeFileSync,
    copyFileSync,
    mkdirSync,
    existsSync,
    rmSync,
    readdirSync,
} from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
const VERSIONS_FILE = join(SKILL_DIR, '.versions');

const OUTPUT_DIRS = {
    components: join(SKILL_DIR, 'components'),
    guides: join(SKILL_DIR, 'guides'),
    tokens: join(SKILL_DIR, 'tokens'),
};

// Resolve a package under node_modules, walking up from the working directory so
// that monorepos hoisting to the root resolve the same as a flat install.
const resolvePkg = (scope, name) => {
    let dir = process.cwd();

    for (;;) {
        const candidate = join(dir, 'node_modules', scope, name);
        if (existsSync(join(candidate, 'package.json'))) return candidate;

        const parent = dirname(dir);
        if (parent === dir) {
            throw new Error(`Could not resolve ${scope}/${name} from ${process.cwd()}. Is it installed?`);
        }
        dir = parent;
    }
};
const readPkgJson = (scope, name) =>
    JSON.parse(readFileSync(join(resolvePkg(scope, name), 'package.json'), 'utf-8'));

// Recursively copy all files from src dir into a flat dest dir
const copyDirFlat = (srcDir, destDir) => {
    const dirs = [srcDir];
    while (dirs.length) {
        const current = dirs.pop();
        readdirSync(current, { withFileTypes: true }).forEach((entry) => {
            const src = join(entry.parentPath, entry.name);
            if (entry.isDirectory()) {
                dirs.push(src);
            } else {
                copyFileSync(src, join(destDir, relative(srcDir, src).replaceAll(/[\\/]/g, '-')));
            }
        });
    }
};

// Clean & recreate output dirs
Object.values(OUTPUT_DIRS).forEach((dir) => {
    if (existsSync(dir)) rmSync(dir, { recursive: true });
    mkdirSync(dir, { recursive: true });
});

const versions = {};

// --- Components ---
const webc = readPkgJson('@justeattakeaway', 'pie-webc');
// Keys are fully scoped. Design tokens sit under the older `@justeat` scope while
// everything else is `@justeattakeaway`, so an unscoped key is not resolvable.
versions['@justeattakeaway/pie-webc'] = webc.version;

// Every component is copied regardless of status. The status is recorded in
// component-metadata.json so the skill can caveat its advice rather than hide
// components, which previously left stable docs referencing components with no
// doc at all.
const componentMetadata = {};

// Custom element tag names a package registers, read from its custom elements
// manifest. A package can register several (pie-list also registers
// pie-list-item), and component docs reference the element rather than the
// package, so without this an element name cannot be looked up at all.
// Returns [] when the names cannot be determined. Never guess a name from the
// package: the skill treats this array as proof an element exists, so a guess
// would read as an assertion.
const readElementNames = (pkgDir) => {
    const manifest = join(pkgDir, 'custom-elements.json');
    if (!existsSync(manifest)) return [];

    const { modules = [] } = JSON.parse(readFileSync(manifest, 'utf-8'));
    const tagNames = modules
        .flatMap(({ declarations = [] }) => declarations)
        .map(({ tagName }) => tagName)
        .filter(Boolean);

    return [...new Set(tagNames)].sort();
};

Object.keys(webc.dependencies).forEach((dep) => {
    const name = dep.replace('@justeattakeaway/', '');
    const pkgDir = resolvePkg('@justeattakeaway', name);
    const { pieMetadata } = readPkgJson('@justeattakeaway', name);

    const readme = join(pkgDir, 'README.md');
    if (existsSync(readme)) {
        copyFileSync(readme, join(OUTPUT_DIRS.components, `${name}.md`));
    }

    componentMetadata[name] = {
        status: pieMetadata?.componentStatus ?? 'unknown',
        elements: readElementNames(pkgDir),
    };
});

writeFileSync(
    join(OUTPUT_DIRS.components, 'component-metadata.json'),
    JSON.stringify(componentMetadata, null, 2),
    'utf-8',
);

// --- Guides ---
['pie-webc', 'pie-css', 'pie-icons-webc'].forEach((name) => {
    const pkgDir = resolvePkg('@justeattakeaway', name);
    const pkgJson = readPkgJson('@justeattakeaway', name);

    copyFileSync(join(pkgDir, 'README.md'), join(OUTPUT_DIRS.guides, `${name}.md`));

    const docsDir = join(pkgDir, 'docs');
    if (existsSync(docsDir)) {
        copyDirFlat(docsDir, OUTPUT_DIRS.guides);
    }

    versions[`@justeattakeaway/${name}`] = pkgJson.version;
});

// --- Design tokens metadata ---
const tokensPkg = readPkgJson('@justeat', 'pie-design-tokens');
const metadataDir = join(resolvePkg('@justeat', 'pie-design-tokens'), 'metadata');
if (existsSync(metadataDir)) {
    copyDirFlat(metadataDir, OUTPUT_DIRS.tokens);
}
versions['@justeat/pie-design-tokens'] = tokensPkg.version;

writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf-8');
console.info('✅ Done');
