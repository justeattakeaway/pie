const createGetInstanceTemplate = require('../get-instance-template');

function makeInstance (example, children = {}) {
    return {
        type: 'INSTANCE',
        executeTemplate: () => ({ example }),
        findInstance: (name) => children[name] ?? null,
    };
}

describe('getInstanceTemplate', () => {
    it('should traverse the path and return the template example', () => {
        const leaf = makeInstance('<pie-icon />');
        const figma = { selectedInstance: makeInstance(null, { 'Icon Slot': leaf }) };
        const getInstanceTemplate = createGetInstanceTemplate(figma);
        expect(getInstanceTemplate(['Icon Slot'])).toBe('<pie-icon />');
    });

    it('should traverse multiple path segments', () => {
        const leaf = makeInstance('<pie-spinner />');
        const mid = makeInstance(null, { 'Spinner Slot': leaf });
        const figma = { selectedInstance: makeInstance(null, { 'Wrapper Slot': mid }) };
        const getInstanceTemplate = createGetInstanceTemplate(figma);
        expect(getInstanceTemplate(['Wrapper Slot', 'Spinner Slot'])).toBe('<pie-spinner />');
    });

    it('should return null when findInstance returns null', () => {
        const figma = { selectedInstance: makeInstance(null, {}) };
        const getInstanceTemplate = createGetInstanceTemplate(figma);
        expect(getInstanceTemplate(['Missing Slot'])).toBeNull();
    });

    it('should return null when a node in the path has type ERROR', () => {
        const errorNode = { type: 'ERROR', findInstance: () => null };
        const figma = { selectedInstance: makeInstance(null, { 'Icon Slot': errorNode }) };
        const getInstanceTemplate = createGetInstanceTemplate(figma);
        expect(getInstanceTemplate(['Icon Slot'])).toBeNull();
    });
});
