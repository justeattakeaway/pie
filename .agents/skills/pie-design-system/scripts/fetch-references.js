#!/usr/bin/env node

/**
 * Clones README.md files from @justeattakeaway/pie-* packages into the skill's references/ folder.
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const NODE_MODULES = join(process.cwd(), 'node_modules');
const REFERENCES_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'references');
const WEBC_PKG = join(NODE_MODULES, '@justeattakeaway', 'pie-webc', 'package.json');

const EXTRA_PACKAGES = ['@justeattakeaway/pie-css', '@justeattakeaway/pie-icons-webc'];

// 1. Read pie-webc package.json to get component list
if (!existsSync(WEBC_PKG)) {
    console.error('❌ @justeattakeaway/pie-webc is not installed.');
    process.exit(1);
}

const { version, dependencies } = JSON.parse(readFileSync(WEBC_PKG, 'utf-8'));
const components = Object.keys(dependencies || {});

// 2. Clean & recreate references/
if (existsSync(REFERENCES_DIR)) rmSync(REFERENCES_DIR, { recursive: true });
mkdirSync(REFERENCES_DIR, { recursive: true });

// 3. Clone README.md for all packages and track versions
const versions = { 'pie-webc': version };

for (const pkg of [...components, ...EXTRA_PACKAGES]) {
    const name = pkg.replace('@justeattakeaway/', '');
    const pkgJsonPath = join(NODE_MODULES, '@justeattakeaway', name, 'package.json');
    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));

    // skip alpha components
    if (pkgJson.pieMetadata?.componentStatus === 'alpha') {
        continue;
    }

    copyFileSync(join(NODE_MODULES, '@justeattakeaway', name, 'README.md'), join(REFERENCES_DIR, `${name}.md`));

    // Only track versions for extra packages (webc version covers component versions)
    if (EXTRA_PACKAGES.includes(pkg)) {
        versions[name] = pkgJson.version;
    }
}

// 4. Write versions
writeFileSync(join(REFERENCES_DIR, '.versions'), JSON.stringify(versions, null, 2), 'utf-8');
console.log(`\n✅ Done`);