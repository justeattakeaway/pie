const createGetInstanceProp = require('../get-instance-prop');

function makeInstance (properties = {}, children = {}) {
    const instance = {
        type: 'INSTANCE',
        properties,
        getStringPropValue: (prop) => properties[prop] ?? null,
        getBooleanPropValue: (prop) => properties[prop] ?? null,
        findInstance: (name) => children[name] ?? null,
    };
    return instance;
}

describe('getInstanceProp', () => {
    describe('direct call (no path)', () => {
        it('should return the property value from selectedInstance', () => {
            const figma = { selectedInstance: makeInstance({ size: 'large' }) };
            const getInstanceProp = createGetInstanceProp(figma);
            expect(getInstanceProp('getStringPropValue', 'size')).toBe('large');
        });

        it('should return null when the property does not exist', () => {
            const figma = { selectedInstance: makeInstance({}) };
            const getInstanceProp = createGetInstanceProp(figma);
            expect(getInstanceProp('getStringPropValue', 'size')).toBeNull();
        });
    });

    describe('path call (nested instance)', () => {
        it('should traverse the path and return the property value', () => {
            const child = makeInstance({ isLoading: true });
            const figma = { selectedInstance: makeInstance({}, { 'Button Slot': child }) };
            const getInstanceProp = createGetInstanceProp(figma);
            expect(getInstanceProp(['Button Slot'], 'getBooleanPropValue', 'isLoading')).toBe(true);
        });

        it('should return null when findInstance returns null', () => {
            const figma = { selectedInstance: makeInstance({}, {}) };
            const getInstanceProp = createGetInstanceProp(figma);
            expect(getInstanceProp(['Missing Slot'], 'getStringPropValue', 'size')).toBeNull();
        });

        it('should return null when a node in the path has type ERROR', () => {
            const errorNode = { type: 'ERROR', findInstance: () => null };
            const figma = { selectedInstance: makeInstance({}, { 'Button Slot': errorNode }) };
            const getInstanceProp = createGetInstanceProp(figma);
            expect(getInstanceProp(['Button Slot'], 'getStringPropValue', 'size')).toBeNull();
        });
    });
});
