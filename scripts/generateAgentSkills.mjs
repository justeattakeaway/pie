#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Generates Agent Skills for PIE Design System from Storybook MDX files and component READMEs.
 * Output follows the Agent Skills format (https://agentskills.io/specification).
 *
 * Usage: node scripts/generateAgentSkills.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STORIES_DIR = path.join(ROOT, 'apps/pie-storybook/stories');
const COMPONENTS_DIR = path.join(ROOT, 'packages/components');
const OUTPUT_DIR = path.join(ROOT, '.agents/skills/pie-design-system');

const SKIP_FOLDERS = ['testing', 'contribution'];
const SKIP_FILES = ['component-statuses.mdx'];

const titleCase = (str) => str.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

/**
 * Strip MDX-specific syntax (imports, Meta tags, JSX components) and convert Storybook links to plain text.
 */
function mdxToMarkdown (content) {
    const lines = content.split('\n')
        .filter((line) => {
            const trimmed = line.trim();
            return !trimmed.startsWith('import ') &&
                !trimmed.startsWith('<Meta ') &&
                !trimmed.match(/^<[A-Z][a-zA-Z]*\s*\/>/);
        })
        .map((line) => line.replace(/\[([^\]]+)\]\(\?path=[^)]+\)/g, '$1'));

    while (lines.length && lines[0].trim() === '') lines.shift();

    return lines.join('\n');
}

/**
 * Recursively collect MDX files from the stories directory.
 */
function collectMdxFiles (dir, baseDir = dir) {
    if (!fs.existsSync(dir)) return [];

    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            return SKIP_FOLDERS.includes(entry.name) ? [] : collectMdxFiles(fullPath, baseDir);
        }

        if (entry.isFile() && entry.name.endsWith('.mdx') && !SKIP_FILES.includes(entry.name)) {
            return [{ fullPath, relativePath: path.relative(baseDir, fullPath), filename: entry.name }];
        }

        return [];
    });
}

/**
 * Resolve a README import from MDX content like `import readme from '@justeattakeaway/pkg/README.md?raw'`.
 */
function resolveReadmeImport (mdxContent) {
    const match = mdxContent.match(/import\s+readme\s+from\s+['"]@justeattakeaway\/([^/]+)\/README\.md\?raw['"]/);
    if (!match) return null;

    const [, pkg] = match;
    const readmePath = [
        path.join(ROOT, 'packages/tools', pkg, 'README.md'),
        path.join(ROOT, 'packages/components', pkg, 'README.md'),
    ].find((p) => fs.existsSync(p));

    if (!readmePath) {
        console.warn(`  Warning: README not found for @justeattakeaway/${pkg}`);
        return null;
    }

    return fs.readFileSync(readmePath, 'utf-8');
}

/**
 * Check if an MDX file wraps a component README (pie-*.mdx with a matching component package).
 * Returns the component name if true, null otherwise.
 */
function getComponentName (filename) {
    const match = filename.match(/^pie-(.+)\.mdx$/);
    return match && fs.existsSync(path.join(COMPONENTS_DIR, `pie-${match[1]}`, 'README.md'))
        ? match[1]
        : null;
}

/**
 * Process MDX files into component docs (from READMEs) and guide docs (from MDX content).
 */
function processFiles (mdxFiles) {
    const componentsDir = path.join(OUTPUT_DIR, 'components');
    const guidesDir = path.join(OUTPUT_DIR, 'guides');

    fs.mkdirSync(componentsDir, { recursive: true });
    fs.mkdirSync(guidesDir, { recursive: true });

    const components = [];
    const guides = [];

    mdxFiles.forEach((file) => {
        const componentName = getComponentName(file.filename);

        if (componentName) {
            const readme = fs.readFileSync(path.join(COMPONENTS_DIR, `pie-${componentName}`, 'README.md'), 'utf-8');
            const outPath = `components/${componentName}.md`;
            fs.writeFileSync(path.join(OUTPUT_DIR, outPath), readme);
            components.push({ name: componentName, path: outPath });
            console.log(`  Component: ${componentName}`);
        } else {
            const content = fs.readFileSync(file.fullPath, 'utf-8');
            const markdown = resolveReadmeImport(content) || mdxToMarkdown(content);

            // Use just the filename, without the storybook folder prefix
            const flatName = file.filename.replace(/\.mdx$/, '.md');
            fs.writeFileSync(path.join(guidesDir, flatName), markdown);

            const titleMatch = markdown.match(/^#\s+(.+)$/m);
            // Derive category from the first segment of the original path
            const category = file.relativePath.includes('/') ? file.relativePath.split('/')[0] : 'root';
            guides.push({
                title: titleMatch ? titleMatch[1] : file.filename.replace(/\.mdx$/, ''),
                path: `guides/${flatName}`,
                category,
            });
            console.log(`  Guide: ${file.relativePath}`);
        }
    });

    return {
        components: components.sort((a, b) => a.name.localeCompare(b.name)),
        guides,
    };
}

/**
 * Generate SKILL.md index file with frontmatter, guide links, and component links.
 */
function generateSkillMd (components, guides) {
    let content = `---
name: pie-design-system
description: Build UIs with PIE (Just Eat Takeaway) Design System web components. Use when developers mention PIE, pie-webc, @justeattakeaway, JET design system, or need accessible UI components. Provides documentation for buttons, forms, modals, and other accessible web components.
license: Apache-2.0
metadata:
  author: Just Eat Takeaway
  website: https://webc.pie.design/
---

# PIE Design System

PIE (Principles for Interfaces and Experiences) is Just Eat Takeaway's global design system. PIE Web Components provides accessible, reusable UI components built as native web components.

## Documentation Structure

The \`components/\` and \`guides/\` directories contain detailed documentation.

`;

    // Group guides by category
    const byCategory = {};
    guides.forEach((guide) => {
        const cat = guide.category === '.' ? 'General' : guide.category;
        (byCategory[cat] = byCategory[cat] || []).push(guide);
    });

    content += '## Guides\n\n';

    Object.keys(byCategory)
        .sort((a, b) => {
            if (a === 'introduction') return -1;
            if (b === 'introduction') return 1;
            return a.localeCompare(b);
        })
        .forEach((category) => {
            content += `### ${titleCase(category)}\n\n`;
            byCategory[category].forEach((guide) => {
                content += `- [${guide.title}](${guide.path})\n`;
            });
            content += '\n';
        });

    content += '## Components\n\n';
    components.forEach((c) => {
        content += `- [${titleCase(c.name)}](${c.path})\n`;
    });

    return content;
}

// --- Main ---

console.log('Generating Agent Skills for PIE Design System...\n');

// Clean and rebuild
['components', 'guides'].forEach((dir) => {
    const p = path.join(OUTPUT_DIR, dir);
    if (fs.existsSync(p)) fs.rmSync(p, { recursive: true });
});

const mdxFiles = collectMdxFiles(STORIES_DIR);
console.log(`Found ${mdxFiles.length} MDX files\n`);

const { components, guides } = processFiles(mdxFiles);
fs.writeFileSync(path.join(OUTPUT_DIR, 'SKILL.md'), generateSkillMd(components, guides));

console.log(`\nDone! ${components.length} components, ${guides.length} guides → ${OUTPUT_DIR}`);
