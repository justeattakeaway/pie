const { objectHelpers, numberHelpers } = require('../../_utilities/helpers');
const normalisedPieDesignTokens = require('../../_data/normaliseTokens');
const pieTokenCategories = require('../../tokenCategories.json');
const {
    createListForCategory,
    createScssTokenName,
    createTokenDisplayName,
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
const buildListWithHeadings = (categories, tokens, tokenType, path, useMonospace, isFullWidth) => {
    const categoryTokenLists = Object.keys(categories).map((category) => {
        const heading = `<h2>${categories[category].displayName}</h2>`;
        const listItems = createListForCategory(tokens, path, category, tokenType);
        const rows = listItems.map((item) => [item.tokenScssName, item.description]);
        const table = buildTable({ rows }, useMonospace, isFullWidth);

        return `${heading}${table}`;
    });

    return `${categoryTokenLists.join('')}`;
};

const createTokenList = (tokens, tokenType, path, tokenTypeMetadata) => {
    // if tokens are numbers (spacing / radius), sort in ascending order
    const sortedTokens = Object.keys(tokens).every(numberHelpers.isNumber)
        ? Object.entries(tokens).sort((a, b) => a[1] - b[1]) // [[key, value]]
        : tokens;

    const tokenListElements = sortedTokens.map((token) => ({
        tokenScssName: createScssTokenName(token[0], tokenType, path),
        description: tokenTypeMetadata[token[0]].description,
    }));

    return tokenListElements.map((item) => [item.tokenScssName, item.description]);
};

const buildTokenTable = (useMonospace, isFullWidth, tokenType, path) => {
    const tokens = objectHelpers.getObjectPropertyByPath(normalisedPieDesignTokens, `theme.jet.${path}`);
    const tokenTypeMetadata = getTokenTypeMetadata(path);

    const categories = objectHelpers.getObjectPropertyByPath(pieTokenCategories, path);

    if (categories) {
        return `${buildListWithHeadings(categories, tokens, tokenType, path, useMonospace, isFullWidth)}`;
    }

    const rows = createTokenList(tokens, tokenType, path, tokenTypeMetadata);

    return `${buildTable({ rows }, useMonospace, isFullWidth)}`;
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
    if (path) {
        return buildTokenTable(useMonospace, isFullWidth, tokenType, path);
    }

    const data = JSON.parse(tableData);

    return `${buildTable(normaliseData(data), useMonospace, isFullWidth)}`;
};
