const markdownFilter = require('../filters/markdown');
const { deindentHTML } = require('./shortcode-utilities');
const headingAnchor = require('../filters/headingAnchor');

/**
 * Creates a container for a selection of elements that dhould be displayed in one column.
 * @param {object} content - content to be displayed in columns
 */
const contentItem = (content) => `<div class="c-columns-item">
        ${markdownFilter(deindentHTML(content))}
    </div>`;

/**
 * Creates a container that displays contents in two columns.
 * @param {object} content - content to be displayed in columns
 */
const contentLayout = (content) => `<div class="c-columns">
    ${headingAnchor(markdownFilter(deindentHTML(content)))}
    </div>`;

module.exports = {
    contentLayout,
    contentItem,
};
