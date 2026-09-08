/**
 * Returns the Code Connect code for a Figma instance node.
 *
 * @param {object|null} instance - The Figma instance node to evaluate.
 * @param {string|function} [transform] - Either the name of the slot to assign the
 *   rendered instance to (e.g. `'leadingIcon'`), or a function to transform
 *   `code[0].code` directly for cases the slot shorthand does not cover.
 * @returns {Array|string} The code array, or an empty string if the instance is invalid.
 */
function getInstanceCode (instance, transform) {
    const isValid = instance && instance.type === 'INSTANCE' && instance.hasCodeConnect();

    const code = isValid ? instance.executeTemplate().example : '';

    // A slot name is shorthand for inserting that slot attribute into the rendered instance
    const transformCode = typeof transform === 'string'
        ? (str) => str.replace(/(<[\w-]+)([\s/>])/, `$1 slot="${transform}"$2`)
        : transform;

    if (transformCode && code && code[0] && code[0].code) {
        code[0].code = transformCode(code[0].code);
    }

    return code;
}

module.exports = getInstanceCode;
