const markdownFilter = require('../filters/markdown');
const { deindentHTML } = require('./shortcode-utilities');
const headingAnchor = require('../filters/headingAnchor');

/**
 * Creates a container for a selection of elements that have one visual wrapper.
 * @param {object} content - content to be displayed inside the wrapper
 */
const contentWrapper = (content) => `<div class="c-contentWrapper">
        ${markdownFilter(deindentHTML(content))}
    </div>`;

/**
 * Creates a container for a selection of elements that should be displayed in one column.
 * @param {object} content - content to be displayed in columns
 */
const contentItem = (content) => `<div class="c-columns-item">
        ${markdownFilter(deindentHTML(content))}
    </div>`;

/**
 * Creates a container that displays contents in a specified number of columns.
 * @param {object} content - content to be displayed in columns.
 * @param {object} options - object with layout properties
 * @param {object} options.columns - number of columns (2 or 3).
 */
const contentLayout = (content, options) => {
    const columns = options?.columns || 2;
    const columnClass = columns === 3 ? 'c-columns c-columns--three' : 'c-columns';

    return `<div class="${columnClass}">
                ${headingAnchor(markdownFilter(deindentHTML(content)))}
            </div>`;
};

module.exports = {
    contentLayout,
    contentItem,
    contentWrapper,
};
