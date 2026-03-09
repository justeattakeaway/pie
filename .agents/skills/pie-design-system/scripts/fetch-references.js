#!/usr/bin/env node

/**
 * Copies PIE component and guide docs into the skill.
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS_DIR = join(SKILL_DIR, 'components');
const GUIDES_DIR = join(SKILL_DIR, 'guides');
const VERSIONS_FILE = join(SKILL_DIR, '.versions');
const pkg = (name) => join(process.cwd(), 'node_modules', '@justeattakeaway', name);
const readPkg = (name) => JSON.parse(readFileSync(join(pkg(name), 'package.json'), 'utf-8'));

const GUIDE_PACKAGES = ['pie-webc', 'pie-css', 'pie-icons-webc'];

// Clean & recreate output
for (const dir of [COMPONENTS_DIR, GUIDES_DIR]) {
    if (existsSync(dir)) rmSync(dir, { recursive: true });
    mkdirSync(dir, { recursive: true });
}

// Copy component READMEs
const webc = readPkg('pie-webc');
const versions = { 'pie-webc': webc.version };

for (const dep of Object.keys(webc.dependencies)) {
    const name = dep.replace('@justeattakeaway/', '');
    if (readPkg(name).pieMetadata?.componentStatus === 'alpha') continue;
    copyFileSync(join(pkg(name), 'README.md'), join(COMPONENTS_DIR, `${name}.md`));
}

// Copy guide READMEs + docs/ folders
for (const name of GUIDE_PACKAGES) {
    const pkgJson = readPkg(name);
    copyFileSync(join(pkg(name), 'README.md'), join(GUIDES_DIR, `${name}.md`));

    const docsDir = join(pkg(name), 'docs');
    if (existsSync(docsDir)) {
        const pending = [docsDir];
        while (pending.length) {
            for (const entry of readdirSync(pending.pop(), { withFileTypes: true })) {
                const src = join(entry.parentPath, entry.name);
                if (entry.isDirectory()) { pending.push(src); continue; }
                copyFileSync(src, join(GUIDES_DIR, relative(docsDir, src).replaceAll('/', '-')));
            }
        }
    }

    versions[name] = pkgJson.version;
}

writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf-8');
console.log('✅ Done');