/**
 * Returns the Code Connect snippet for a Figma instance swap node.
 *
 * @param {object|null} instance - The Figma instance swap node to evaluate.
 * @param {function} [transformCode] - Optional function to transform `snippet[0].code`.
 * @returns {Array|string} The snippet array, or an empty string if the instance is invalid.
 */
function getIconSnippet (instance, transformCode) {
    const isValid = instance && instance.type === 'INSTANCE' && instance.hasCodeConnect();

    const snippet = isValid ? instance.executeTemplate().example : '';

    if (transformCode && snippet && snippet[0] && snippet[0].code) {
        snippet[0].code = transformCode(snippet[0].code);
    }

    return snippet;
}

module.exports = getIconSnippet;
