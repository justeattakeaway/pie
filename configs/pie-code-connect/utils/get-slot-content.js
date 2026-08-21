/**
 * Creates a `getSlotContent` helper bound to the given Figma Code Connect context.
 *
 * @param {object} figma - The Figma Code Connect context object (provides `selectedInstance`).
 * @returns {function} `getSlotContent(slotName)` - retrieves the connected instances for the
 *   named slot and returns their rendered template examples as a flat array.
 */
function createGetSlotContent (figma) {
    return function getSlotContent (slotName) {
        const slotInstance = figma.selectedInstance.getSlot(slotName);
        return slotInstance ? slotInstance.connectedInstances.map((instance) => instance.executeTemplate().example) : '';
    };
}

module.exports = createGetSlotContent;
