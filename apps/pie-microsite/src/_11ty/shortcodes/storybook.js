/**
 * Returns an HTML snippet that allows embedding Storybook components on the page
 * @param {string} url - a url to a Storybook embed
 * @returns {string} HTML to embed a Storybook component
 */
// eslint-disable-next-line func-names
module.exports = function (url) {
    return `<iframe
    src="${url}"
    width="800"
    height="200"></iframe>`;
};
