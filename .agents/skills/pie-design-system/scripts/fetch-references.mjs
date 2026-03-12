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

// Resolve a package path under node_modules
const resolvePkg = (scope, name) => join(process.cwd(), 'node_modules', scope, name);
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
                copyFileSync(src, join(destDir, relative(srcDir, src).replaceAll('/', '-')));
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
versions['pie-webc'] = webc.version;

Object.keys(webc.dependencies).forEach((dep) => {
    const name = dep.replace('@justeattakeaway/', '');
    const meta = readPkgJson('@justeattakeaway', name);
    const isAlphaComponent = meta.pieMetadata?.componentStatus === 'alpha';
    if (!isAlphaComponent) {
        copyFileSync(
            join(resolvePkg('@justeattakeaway', name), 'README.md'),
            join(OUTPUT_DIRS.components, `${name}.md`),
        );
    }
});

// --- Guides ---
['pie-webc', 'pie-css', 'pie-icons-webc'].forEach((name) => {
    const pkgDir = resolvePkg('@justeattakeaway', name);
    const pkgJson = readPkgJson('@justeattakeaway', name);

    copyFileSync(join(pkgDir, 'README.md'), join(OUTPUT_DIRS.guides, `${name}.md`));

    const docsDir = join(pkgDir, 'docs');
    if (existsSync(docsDir)) {
        copyDirFlat(docsDir, OUTPUT_DIRS.guides);
    }

    versions[name] = pkgJson.version;
});

// --- Design tokens metadata ---
const tokensPkg = readPkgJson('@justeat', 'pie-design-tokens');
const metadataDir = join(resolvePkg('@justeat', 'pie-design-tokens'), 'metadata');
if (existsSync(metadataDir)) {
    copyDirFlat(metadataDir, OUTPUT_DIRS.tokens);
}
versions['pie-design-tokens'] = tokensPkg.version;

writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf-8');
console.info('✅ Done');
