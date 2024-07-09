/**
 * Generate an HTML tag component. It duplicates pie tag variants.
 * Can be replaced by pie tag when we include pie web components
 * @param {string} label - string that renders within the tag
 * @param {string} variant - variant name: neutral, blue, green,
 * yellow, red, brand, neutral-alternative, outline, ghost
 * @returns {string}
 */
module.exports = ({
    label,
    variant,
}) => `<span class="c-tag" variant="${variant}">${label}</span>`;
