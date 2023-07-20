const { objectHelpers } = require('../../_utilities/helpers');
const normalisedPieDesignTokens = require('../../_data/normaliseTokens');
const pieTokenCategories = require('../../tokenCategories.json');
const {
    getTokensForCategory,
    getTokenTypeMetadata,
} = require('./tokensTable/handleTokenData');

const normaliseData = (data) => {
    if (data.rows) {
        const headings = data.headings ? data.headings.map((heading) => heading.text) : [];
        const rows = data.rows.map((row) => row.data.map((data) => data.text));

        return { headings, rows };
    }

    return { rows: Object.entries(data) };
};

const buildTable = ({ headings, rows }, useMonospace, isFullWidth) => {
    const headerClass = headings ? '' : 'c-simpleTable--headerless';
    const fontClass = useMonospace ? 'c-simpleTable--monospace' : '';
    const widthClass = isFullWidth ? 'c-simpleTable--fullWidth' : '';

    return `<table class="c-simpleTable ${widthClass} ${headerClass} ${fontClass}">
        ${headings ? `<tr>${headings.map((heading) => `
            <th>${heading}</th>`).join('')}
        </tr>` : ''}

        ${rows.map((row) => `
        <tr>${row.map((data) => `
            <td>
                ${data}
            </td>`).join('')}
        </tr>
        `).join('')}
    </table>`;
};

const createScssTokenName = (tokenKey, tokenType, path) => {
    // TODO: This is a little hacky and we should revisit it as part of a wider refactor
    // of how token information is generated for the docs site
    const isDarkToken = path.includes('dark');

    return `$${tokenType}-${isDarkToken ? 'dark-' : ''}${tokenKey}`;
};

const buildTableListForCategory = (tokens, path, category, tokenType) => {
    const tokenTypeMetadata = getTokenTypeMetadata(path);
    const tokensForCategory = getTokensForCategory(category, tokenTypeMetadata);

    // create a list item for the current token
    const elements = tokensForCategory.map((key) => ([
        createScssTokenName(key, tokenType, path),
        tokenTypeMetadata[key].description,
    ]));
    return { rows: elements };
};

const buildListWithHeadings = (categories, data, useMonospace, isFullWidth, tokenType, path, tokens) => {
    const categoryTokenLists = Object.keys(categories).map((category) => {
        const heading = `<h2>${categories[category].displayName}</h2>`;
        const data = buildTableListForCategory(tokens, path, category, tokenType);
        const table = buildTable(data, useMonospace, isFullWidth);
        return `${heading}${table}`;
    });

    return `${categoryTokenLists.join('')}`;
};

/**
 * If `tableData` contains no headings, the table will enter a headerless mode, where:
 * 1. The first column will have bold text
 * 2. Other columns will have subdued text
 * 3. Rows stack vertically at narrow viewports
 *
 * @param {Object} tableData - Contains heading and table data
 * @param {boolean} isFullWidth - Should the table use the full available width
 * @param {boolean} useMonospace - Should the table use a monospace font
 */
module.exports = ({
    isFullWidth = false,
    tableData,
    useMonospace = false,
    path,
    tokenType,
}) => {
    let categories;
    let data;

    if (tableData) {
        data = JSON.parse(tableData);
    } else {
        const tokens = objectHelpers.getObjectPropertyByPath(normalisedPieDesignTokens, `theme.jet.${path}`);

        categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

        data = tokens;
    }

    return categories
        ? `${buildListWithHeadings(categories, data, useMonospace, isFullWidth, tokenType, path, data)}`
        : `${buildTable(normaliseData(data), useMonospace, isFullWidth)}`;
};
