import { generateLlmsTxt } from '../../../scripts/generate-llms-txt';
import expectedRoutes from '../../../test/snapshots/expected-routes.snapshot.json';

// Matches the URL of every markdown link, e.g. `- [Button - Overview](https://www.pie.design/components/button/)`
const getLinkUrls = (content) => [...content.matchAll(/^- \[[^\]]+\]\(([^)]+)\)/gm)].map(([, url]) => url);

// Converts a link URL to the route format used by the snapshot, e.g. `components/button`
const toRoute = (url) => new URL(url).pathname.replace(/^\/|\/$/g, '');

describe('PIE Docs - llms.txt generator', () => {
    const { content } = generateLlmsTxt();
    const urls = getLinkUrls(content);

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
});
