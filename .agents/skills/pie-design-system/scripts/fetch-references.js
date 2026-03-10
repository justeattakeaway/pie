#!/usr/bin/env node

/**
 * Copies PIE component and guide docs into the skill.
 */

import {
    readFileSync, writeFileSync, copyFileSync,
    mkdirSync, existsSync, rmSync, readdirSync,
} from 'node:fs';
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
[COMPONENTS_DIR, GUIDES_DIR].forEach((dir) => {
    if (existsSync(dir)) rmSync(dir, { recursive: true });
    mkdirSync(dir, { recursive: true });
});

// Copy component READMEs
const webc = readPkg('pie-webc');
const versions = { 'pie-webc': webc.version };

Object.keys(webc.dependencies).forEach((dep) => {
    const name = dep.replace('@justeattakeaway/', '');
    // Skip copying alpha components
    const isComponentStatusAlpha = readPkg(name).pieMetadata?.componentStatus === 'alpha';
    if (!isComponentStatusAlpha) {
        copyFileSync(join(pkg(name), 'README.md'), join(COMPONENTS_DIR, `${name}.md`));
    }
});

// Copy guide READMEs + docs/ folders
GUIDE_PACKAGES.forEach((name) => {
    const pkgJson = readPkg(name);
    copyFileSync(join(pkg(name), 'README.md'), join(GUIDES_DIR, `${name}.md`));

    const docsDir = join(pkg(name), 'docs');
    if (existsSync(docsDir)) {
        const directoriesToProcess = [docsDir];
        while (directoriesToProcess.length) {
            const currentDir = directoriesToProcess.pop();
            readdirSync(currentDir, { withFileTypes: true }).forEach((entry) => {
                const src = join(entry.parentPath, entry.name);
                if (entry.isDirectory()) {
                    directoriesToProcess.push(src);
                    return;
                }
                copyFileSync(src, join(GUIDES_DIR, relative(docsDir, src).replaceAll('/', '-')));
            });
        }
    }

    versions[name] = pkgJson.version;
});

writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf-8');
console.info('✅ Done');
