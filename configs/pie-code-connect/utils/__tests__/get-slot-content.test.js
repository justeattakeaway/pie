const createGetSlotContent = require('../get-slot-content');

function makeFigma (slot) {
    return {
        selectedInstance: {
            getSlot: () => slot,
        },
    };
}

describe('getSlotContent', () => {
    it('should return an empty string when the slot does not exist', () => {
        const getSlotContent = createGetSlotContent(makeFigma(null));
        expect(getSlotContent('leadingIcon')).toBe('');
    });

    it('should return an array of template examples for connected instances', () => {
        const slot = {
            connectedInstances: [
                { executeTemplate: () => ({ example: '<pie-icon />' }) },
                { executeTemplate: () => ({ example: '<pie-spinner />' }) },
            ],
        };
        const getSlotContent = createGetSlotContent(makeFigma(slot));
        expect(getSlotContent('leadingIcon')).toEqual(['<pie-icon />', '<pie-spinner />']);
    });

    it('should return an empty array when the slot has no connected instances', () => {
        const slot = { connectedInstances: [] };
        const getSlotContent = createGetSlotContent(makeFigma(slot));
        expect(getSlotContent('leadingIcon')).toEqual([]);
    });
});
