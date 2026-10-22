/**
 * Returns the Code Connect code for a Figma instance node.
 *
 * @param {object|null} instance - The Figma instance node to evaluate.
 * @param {string|function} [transform] - Either the name of the slot to assign the
 *   rendered instance to (e.g. `'leadingIcon'`), or a function to transform
 *   `code[0].code` directly for cases the slot shorthand does not cover.
 * @returns {Array|string} The code array, or an empty string if the instance is not an
 *   instance node, or if rendering it throws.
 */
function getInstanceCode (instance, transform) {
    // `findInstance`/`findLayers` hand back an ERROR handle (truthy, but not a node) when
    // nothing matches, so check the type rather than the truthiness of the value.
    // Deliberately not gated on `hasCodeConnect()`: the runtime resolves instances that have
    // no mapping of their own, and gating on it drops them instead of letting them render.
    const isValid = instance && instance.type === 'INSTANCE';

    try {
        const code = isValid ? instance.executeTemplate().example : '';

        // A slot name is shorthand for inserting that slot attribute into the rendered instance
        const transformCode = typeof transform === 'string'
            ? (str) => str.replace(/(<[\w-]+\s)/, `$1slot="${transform}" `)
            : transform;

        if (transformCode && code && code[0] && code[0].code) {
            code[0].code = transformCode(code[0].code);
        }

        return code;
    } catch {
        return '';
    }
}

module.exports = getInstanceCode;
