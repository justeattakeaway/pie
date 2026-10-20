#!/usr/bin/env node
import { readFileSync } from 'node:fs';

/**
 * Pulls Code Connect node IDs out of Figma metadata for the given icon names.
 *
 * Usage:
 *   node find-icon-nodes.mjs <metadata-file> binoculars compass "map search"
 *
 * Only inner "Category / Icon Name" frames match, which are the ones the config
 * needs - outer wrapper frames and the Size=... symbol instances inside them are
 * ignored. The metadata may be plain XML or XML wrapped in a JSON payload.
 */

/**
 * Reads Figma metadata, which may be plain XML or XML wrapped in a JSON payload
 * with the markup in a text field, and returns the markup.
 */
function loadMarkup (file) {
    const raw = readFileSync(file, 'utf8');

    try {
        const data = JSON.parse(raw);
        const texts = Array.isArray(data)
            ? data.filter((item) => item && typeof item === 'object').map((item) => item.text || '')
            : [];

        return texts.sort((a, b) => b.length - a.length)[0] || raw;
    } catch {
        return raw;
    }
}

function escapeRegExp (value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Matches only the inner "Category / Icon Name" frame, never the outer wrapper
 * frame or the Size=... symbol instances inside it.
 */
function findNodeIds (markup, icon) {
    const pattern = new RegExp(`<frame id="([\\d:]+)" name="[^"]*/\\s*${escapeRegExp(icon)}"`, 'gi');

    return [...new Set([...markup.matchAll(pattern)].map((match) => match[1]))];
}

function report (icon, ids, file) {
    if (ids.length === 0) {
        console.info(`${icon}: NOT FOUND in ${file}`);
        return false;
    }

    ids.forEach((id) => console.info(`${icon}: ${id}  ->  node-id=${id.replace(':', '-')}`));

    return true;
}

function main () {
    const [file, ...icons] = process.argv.slice(2);

    if (!file || icons.length === 0) {
        console.error('Usage: node find-icon-nodes.mjs <metadata-file> <icon-name> [icon-name...]');
        console.error('Example: node find-icon-nodes.mjs metadata.xml binoculars compass "map search"');
        console.error();
        console.error('Only inner "Category / Icon Name" frames match, which are the ones the');
        console.error('config needs - wrapper frames and the Size=... symbol instances are ignored.');
        process.exit(2);
    }

    const markup = loadMarkup(file);
    const complete = icons.map((icon) => report(icon, findNodeIds(markup, icon), file));

    process.exit(complete.every(Boolean) ? 0 : 1);
}

main();
