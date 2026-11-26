import path from 'path';
import { generateLlmsTxt, findParentNode } from '../../../scripts/generate-llms-txt';
import expectedRoutes from '../../../test/snapshots/expected-routes.snapshot.json';

// Matches the URL of every markdown link, e.g. `- [Button - Overview](https://www.pie.design/components/button/)`
const getLinkUrls = (content) => [...content.matchAll(/^- \[[^\]]+\]\(([^)]+)\)/gm)].map(([, url]) => url);

// Matches the label of every markdown link, e.g. `Button - Overview`
const getLinkLabels = (content) => [...content.matchAll(/^- \[([^\]]+)\]/gm)].map(([, label]) => label);

// Converts a link URL to the route format used by the snapshot, e.g. `components/button`
const toRoute = (url) => new URL(url).pathname.replace(/^\/|\/$/g, '');

// Builds a navigation node as consumed by findParentNode
const navNode = (dirSegments, key, parent) => ({
    dir: path.join(...dirSegments),
    data: { eleventyNavigation: { key, parent } },
});

describe('PIE Docs - llms.txt generator', () => {
    const { content } = generateLlmsTxt();
    const urls = getLinkUrls(content);
    const labels = getLinkLabels(content);

    it('should generate links', () => {
        expect(urls.length).toBeGreaterThan(0);
    });

    it('should only link to routes that exist in the navigation routes snapshot', () => {
        const missingRoutes = urls.map(toRoute).filter((route) => !expectedRoutes.includes(route));

        expect(missingRoutes).toEqual([]);
    });

    it('should not contain duplicate links', () => {
        expect(new Set(urls).size).toBe(urls.length);
    });

    it('should prefix two-page component pages with their component name (e.g. Dropdown)', () => {
        expect(labels).toEqual(expect.arrayContaining([
            'Dropdown - Overview',
            'Dropdown - Web',
            'Dropdown - Android',
            'Dropdown - iOS',
        ]));
    });
});

describe('PIE Docs - llms.txt generator - findParentNode', () => {
    it('should resolve a parent node in an ancestor directory', () => {
        const parent = navNode(['src', 'components', 'button'], 'Button');
        const child = navNode(['src', 'components', 'button', 'web'], 'Web', 'Button');

        expect(findParentNode([parent, child], child)).toBe(parent);
    });

    it('should resolve a parent node in a sibling directory (two-page component structure)', () => {
        // e.g. the Dropdown navigation node lives in `dropdown/dropdown` while its content
        // pages live in `dropdown/web`, `dropdown/overview`, etc.
        const parent = navNode(['src', 'components', 'dropdown', 'dropdown'], 'Dropdown', 'dropdown');
        const child = navNode(['src', 'components', 'dropdown', 'web'], 'Web', 'Dropdown');

        expect(findParentNode([parent, child], child)).toBe(parent);
    });

    it('should prefer an ancestor parent over a closer node that shares the same key', () => {
        const ancestor = navNode(['src', 'components', 'button'], 'Button');
        const sibling = navNode(['src', 'components', 'button', 'button'], 'Button');
        const child = navNode(['src', 'components', 'button', 'web'], 'Web', 'Button');

        expect(findParentNode([ancestor, sibling, child], child)).toBe(ancestor);
    });

    it('should fall back to the candidate sharing the longest directory prefix when there is no ancestor', () => {
        const closest = navNode(['src', 'components', 'button', 'button'], 'Button');
        const further = navNode(['src', 'components', 'other'], 'Button');
        const child = navNode(['src', 'components', 'button', 'web'], 'Web', 'Button');

        expect(findParentNode([further, closest, child], child)).toBe(closest);
    });

    it('should return undefined when no candidate matches the parent key', () => {
        const child = navNode(['src', 'components', 'button', 'web'], 'Web', 'Button');

        expect(findParentNode([child], child)).toBeUndefined();
    });
});
