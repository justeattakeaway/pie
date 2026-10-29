/*
// Generates an llms.txt file (https://llmstxt.org) for pie.design.
//
// The file is built from the frontmatter of the markdown content files and their
// directory data files (e.g. `button/button.json`), so the content files remain the
// single source of truth. It runs independently of the Eleventy build.
//
// Supported frontmatter / directory data fields:
// - `includeInLlmsTxt: false` excludes a page (or a whole directory when set in a directory data file).
// - `llmsTxtDescription` overrides the description used for a page.
//
// Usage: node scripts/generate-llms-txt.js [--output <path>]
*/

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const metadata = require('../src/_data/metadata');

const SRC_DIR = path.resolve(__dirname, '../src');
const DEFAULT_OUTPUT = path.resolve(__dirname, '../dist/llms.txt');

// Order of the sections in the generated file. Values are the top-level content directories.
// This can differ from the website navigation, so the most relevant content for agents comes first.
// Sections missing from this list are still included, appended at the end with a warning.
const SECTION_ORDER = [
    'foundations',
    'components',
    'patterns',
    'accessibility',
    'all-about-pie',
    'agents',
    'designers',
    'engineers',
    'support',
];

const IGNORED_DIRECTORIES = ['assets', '__tests__'];

const getOutputPath = () => {
    const outputFlagIndex = process.argv.indexOf('--output');
    return outputFlagIndex > -1 ? path.resolve(process.argv[outputFlagIndex + 1]) : DEFAULT_OUTPUT;
};

const parseFrontmatter = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    // Like Eleventy, accept frontmatter that is closed by the end of the file instead of `---`
    const match = content.match(/^---\r?\n([\s\S]*?)(?:\r?\n---[^\S\r\n]*(?:\r?\n|$)|$)/);
    return match ? yaml.load(match[1]) || {} : {};
};

// Mirrors the Eleventy directory data file convention: `foo/foo.json`
const readDirectoryData = (dirPath) => {
    const name = dirPath === SRC_DIR ? 'src' : path.basename(dirPath);
    const dataFile = path.join(dirPath, `${name}.json`);
    return fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : {};
};

const shouldIgnoreDirectory = (name) => name.startsWith('_') || name.startsWith('.') || IGNORED_DIRECTORIES.includes(name);

// Recursively collects all markdown pages, cascading directory data down to each page.
const collectPages = (dirPath = SRC_DIR, inheritedData = {}, pages = []) => {
    const dirData = { ...inheritedData, ...readDirectoryData(dirPath) };

    fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
        const entryPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            if (!shouldIgnoreDirectory(entry.name)) collectPages(entryPath, dirData, pages);
            return;
        }

        // `.content.md` files are shared partials and are not built as pages (see .eleventyignore)
        if (!entry.name.endsWith('.md') || entry.name.endsWith('.content.md')) return;

        pages.push({
            filePath: entryPath,
            dir: dirPath,
            data: { ...dirData, ...parseFrontmatter(entryPath) },
        });
    });

    return pages;
};

const normaliseUrl = (url) => `/${url}/`.replace(/\/index\.html\/$|\.html\/$/, '/').replace(/\/{2,}/g, '/');

// Mirrors Eleventy's default permalink behaviour when no explicit permalink is provided
const getDefaultUrl = (filePath) => {
    const relativePath = path.relative(SRC_DIR, filePath).replace(/\\/g, '/');
    const segments = relativePath.replace(/\.md$/, '').split('/');
    const fileName = segments.at(-1);
    const parentDirName = segments.at(-2);

    if (fileName === 'index' || fileName === parentDirName) segments.pop();

    return normaliseUrl(segments.join('/'));
};

const getUrl = ({ filePath, data }) => {
    if (data.permalink === false) return null;
    if (typeof data.permalink === 'string') return normaliseUrl(data.permalink);
    return getDefaultUrl(filePath);
};

const getNavLabel = (node) => node.data.eleventyNavigation.title || node.data.eleventyNavigation.key;

// Navigation keys are not unique (e.g. every component has an "Overview" page), so a parent key
// is resolved to the matching node closest to the child in the directory tree.
const findParentNode = (navNodes, node) => {
    const parentKey = node.data.eleventyNavigation.parent;

    return navNodes
        .filter((candidate) => candidate !== node &&
            candidate.data.eleventyNavigation.key === parentKey &&
            `${node.dir}${path.sep}`.startsWith(`${candidate.dir}${path.sep}`))
        .sort((a, b) => b.dir.length - a.dir.length)[0];
};

// Toggle pages (e.g. light/dark alias tokens) share one navigation entry, so the toggle label is
// used to tell them apart. Pages without their own navigation entry use their sibling's.
const getToggleLabel = (page) => {
    const { toggleContent } = page.data;
    if (!toggleContent) return null;

    const slug = path.basename(page.filePath, '.md');
    const toggle = Object.values(toggleContent).find((option) => option.slug === slug);
    return toggle ? toggle.label : null;
};

const getNavNode = (page, navNodes) => {
    if (page.data.eleventyNavigation) return page;
    if (!page.data.toggleContent) return null;
    return navNodes.find((node) => node.dir === page.dir) || null;
};

// Returns the navigation ancestry of a page, from the section page down to the page itself
const getNavChain = (navNode, navNodes) => {
    const chain = [];
    let current = navNode;

    while (current) {
        chain.unshift(current);
        current = findParentNode(navNodes, current);
    }

    return chain;
};

// Sort keys are lists of [order, label] pairs, one per navigation level, so siblings sharing
// the same order are still grouped with their own children.
const compareSortKeys = (a, b) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i] === undefined) return -1;
        if (b[i] === undefined) return 1;

        const [orderA, labelA] = a[i];
        const [orderB, labelB] = b[i];
        if (orderA !== orderB) return orderA < orderB ? -1 : 1;
        if (labelA !== labelB) return labelA.localeCompare(labelB);
    }
    return 0;
};

const isSectionNode = (node, section) => node.dir === path.join(SRC_DIR, section) &&
    path.basename(node.filePath, '.md') === section;

const buildSections = (pages) => {
    const navNodes = pages.filter((page) => page.data.eleventyNavigation && page.data.eleventyNavigation.key);
    const sections = new Map(SECTION_ORDER.map((section) => [section, { title: null, links: [] }]));
    const warnings = [];

    pages.forEach((page) => {
        const [section] = path.relative(SRC_DIR, page.dir).split(path.sep);

        // Root-level pages (e.g. the homepage) do not belong to a section
        if (!section) return;

        if (!sections.has(section)) {
            warnings.push(`Section "${section}" is not in SECTION_ORDER, appending it at the end.`);
            sections.set(section, { title: null, links: [] });
        }

        const sectionEntry = sections.get(section);

        // Section pages (e.g. /foundations/) are only indexes of their child pages and don't provide useful context,
        // so they are used for the section heading but not listed as links
        if (isSectionNode(page, section)) {
            if (page.data.eleventyNavigation) sectionEntry.title = getNavLabel(page);
            return;
        }

        // Drafts are always excluded, as llms.txt only describes published content
        const url = getUrl(page);
        if (!url || page.data.draft || page.data.includeInLlmsTxt === false) return;

        const navNode = getNavNode(page, navNodes);
        let labels;
        let sortKey;

        if (navNode) {
            // Drop the section node itself so labels start below the section, e.g. "Colour - Overview"
            const chain = getNavChain(navNode, navNodes).filter((node) => !isSectionNode(node, section));
            labels = chain.map(getNavLabel);
            sortKey = chain.map((node) => [node.data.eleventyNavigation.order ?? Infinity, getNavLabel(node)]);
        } else {
            warnings.push(`No eleventyNavigation found for ${path.relative(SRC_DIR, page.filePath)}, falling back to its title.`);
            labels = [page.data.title || url];
            sortKey = [[Infinity, labels[0]]];
        }

        const toggleLabel = getToggleLabel(page);
        if (toggleLabel) labels.push(toggleLabel);

        sectionEntry.links.push({
            label: labels.join(' - '),
            url: new URL(url, metadata.url).href,
            description: page.data.llmsTxtDescription || page.data.description,
            sortKey,
        });
    });

    sections.forEach((entry) => {
        entry.links.sort((a, b) => compareSortKeys(a.sortKey, b.sortKey) || a.label.localeCompare(b.label));
    });

    return { sections, warnings };
};

const formatLink = ({ label, url, description }) => {
    const singleLineDescription = description && description.replace(/\s+/g, ' ').trim();
    return `- [${label}](${url})${singleLineDescription ? `: ${singleLineDescription}` : ''}`;
};

const generateLlmsTxt = () => {
    const { sections, warnings } = buildSections(collectPages());
    const lines = [
        `# ${metadata.title}`,
        '',
        `> ${metadata.description}`,
        '',
    ];

    sections.forEach(({ title, links }, section) => {
        if (!links.length) return;
        lines.push(`## ${title || section}`, '', ...links.map(formatLink), '');
    });

    lines.push(`Generated on: ${new Date().toISOString()}`, '');

    return { content: lines.join('\n'), warnings };
};

const writeLlmsTxt = () => {
    const outputPath = getOutputPath();
    const { content, warnings } = generateLlmsTxt();

    warnings.forEach((warning) => console.warn(`[generate-llms-txt] ${warning}`));

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, content);

    console.info(`[generate-llms-txt] Written to ${path.relative(process.cwd(), outputPath)}`);
};

// Only write the file when run directly, so the generator can be imported by tests
if (require.main === module) writeLlmsTxt();

module.exports = { generateLlmsTxt };
