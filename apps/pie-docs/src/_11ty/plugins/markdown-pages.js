/**
 * Eleventy plugin that generates an `.md` sibling for every built HTML page.
 * Used to provide AI/agent-friendly markdown versions of pie.design content.
 *
 */

const {
    readFile,
    writeFile,
    readdir,
} = require('node:fs/promises');
const { join } = require('node:path');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');

const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
});

// GFM adds table, strikethrough, and task-list support
turndown.use(gfm);

// Strip elements that add noise to the markdown output
turndown.remove(['script', 'style', 'nav', 'svg']);

/**
 * Finds all index.html files in the output directory.
 */
async function findHtmlFiles (dir) {
    const entries = await readdir(dir, { recursive: true });
    return entries
        .filter((entry) => entry === 'index.html' || entry.endsWith('/index.html'))
        .map((entry) => join(dir, entry));
}

/**
 * Extracts the <main> content from a full HTML page and converts it to markdown.
 */
function htmlToMarkdown (html) {
    const mainMatch = html.match(/<main[^>]*id="main-content"[^>]*>([\s\S]*?)<\/main>/i);

    return turndown.turndown(mainMatch ? mainMatch[1] : html);
}

/**
 * Converts a single HTML file to markdown and writes it alongside as index.md.
 */
async function processHtmlFile (htmlFile) {
    try {
        const html = await readFile(htmlFile, 'utf-8');
        const md = htmlToMarkdown(html);

        await writeFile(htmlFile.replace(/index\.html$/, 'index.md'), md, 'utf-8');
        return true;
    } catch {
        return false;
    }
}

/**
 * Registers the plugin on the eleventy.after event.
 */
function markdownPagesPlugin (eleventyConfig) {
    eleventyConfig.on('eleventy.after', async ({ dir }) => {
        const htmlFiles = await findHtmlFiles(dir.output);
        const results = await Promise.all(htmlFiles.map(processHtmlFile));
        const count = results.filter(Boolean).length;

        // eslint-disable-next-line no-console
        console.log(`[markdown-pages] Generated ${count} .md files`);
    });
}

module.exports = markdownPagesPlugin;
