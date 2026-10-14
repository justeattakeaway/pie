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
import { createRequire } from 'node:module';

const SKILL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
const VERSIONS_FILE = join(SKILL_DIR, '.versions');

const OUTPUT_DIRS = {
    components: join(SKILL_DIR, 'components'),
    guides: join(SKILL_DIR, 'guides'),
    tokens: join(SKILL_DIR, 'tokens'),
};

// Resolve from the consumer's cwd, not the skill's location, so hoisted and global installs both work.
const { resolve } = createRequire(join(process.cwd(), 'noop.js'));
const resolvePkg = (scope, name) => {
    const pkgDir = resolve.paths(`${scope}/${name}`)
        .map((nodeModules) => join(nodeModules, scope, name))
        .find((dir) => existsSync(join(dir, 'package.json')));

    if (!pkgDir) throw new Error(`Could not resolve ${scope}/${name} from ${process.cwd()}.`);
    return pkgDir;
};
const readPkgJson = (pkgDir) => JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf-8'));

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
const webc = readPkgJson(resolvePkg('@justeattakeaway', 'pie-webc'));
versions['@justeattakeaway/pie-webc'] = webc.version;

Object.keys(webc.dependencies).forEach((dep) => {
    const name = dep.replace('@justeattakeaway/', '');
    const pkgDir = resolvePkg('@justeattakeaway', name);
    const { pieMetadata } = readPkgJson(pkgDir);
    if (pieMetadata?.componentStatus === 'alpha') return;

    const readme = join(pkgDir, 'README.md');
    if (existsSync(readme)) {
        copyFileSync(readme, join(OUTPUT_DIRS.components, `${name}.md`));
    }
});

// --- Guides ---
['pie-webc', 'pie-css', 'pie-icons-webc'].forEach((name) => {
    const pkgDir = resolvePkg('@justeattakeaway', name);
    const pkgJson = readPkgJson(pkgDir);

    copyFileSync(join(pkgDir, 'README.md'), join(OUTPUT_DIRS.guides, `${name}.md`));

    const docsDir = join(pkgDir, 'docs');
    if (existsSync(docsDir)) {
        copyDirFlat(docsDir, OUTPUT_DIRS.guides);
    }

    versions[`@justeattakeaway/${name}`] = pkgJson.version;
});

// --- Design tokens metadata ---
const tokensDir = resolvePkg('@justeat', 'pie-design-tokens');
const tokensPkg = readPkgJson(tokensDir);
const metadataDir = join(tokensDir, 'metadata');
if (existsSync(metadataDir)) {
    copyDirFlat(metadataDir, OUTPUT_DIRS.tokens);
}
versions['@justeat/pie-design-tokens'] = tokensPkg.version;

writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf-8');
console.info('✅ Done');
