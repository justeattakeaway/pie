const markdownFilter = require('../filters/markdown');
const { deindentHTML } = require('./shortcode-utilities');
const headingAnchor = require('../filters/headingAnchor');

/**
 * Creates an container for a selection of elements that dhould be displayed in one column.
 * @param {object} config.content - content to be diplayed in columns
 */
const contentItem = (content) => `<div class="c-columns-item">
        ${markdownFilter(deindentHTML(content))}
    </div>`;

/**
 * Creates an container that displays contents in two columns.
 * @param {object} config.content - content to be diplayed in columns
 */
const contentLayout = (content) => `<div class="c-columns">
    ${headingAnchor(markdownFilter(deindentHTML(content)))}
    </div>`;

module.exports = {
    contentLayout,
    contentItem,
};
