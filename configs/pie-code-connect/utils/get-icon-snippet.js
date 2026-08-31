/**
 * Returns the Code Connect snippet for a Figma instance swap node.
 *
 * @param {object|null} instance - The Figma instance swap node to evaluate.
 * @param {string|function} [transform] - Either the name of the slot to assign the
 *   rendered icon to (e.g. `'leadingIcon'`), or a function to transform
 *   `snippet[0].code` directly for cases the slot shorthand does not cover.
 * @returns {Array|string} The snippet array, or an empty string if the instance is invalid.
 */
function getIconSnippet (instance, transform) {
    const isValid = instance && instance.type === 'INSTANCE' && instance.hasCodeConnect();

    const snippet = isValid ? instance.executeTemplate().example : '';

    // A slot name is shorthand for assigning that slot to the rendered icon
    const transformCode = typeof transform === 'string'
        ? (code) => code.replace('></', ` slot="${transform}"></`)
        : transform;

    if (transformCode && snippet && snippet[0] && snippet[0].code) {
        snippet[0].code = transformCode(snippet[0].code);
    }

    return snippet;
}

module.exports = getIconSnippet;
