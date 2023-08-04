const { getTokenCategories, getTokenData } = require('../../_utilities/tokens');

const normaliseData = (data) => {
    if (data.rows) {
        const headings = data?.headings.map((heading) => heading.text) ?? [];
        const rows = data.rows.map((row) => row.data.map((data) => data.text));

        return { headings, rows };
    }

    return { rows: Object.entries(data) };
};

const createTokenList = (tokens, tokenType, path, category, categoryData) => {
    const tokenData = getTokenData(tokens, tokenType, path, category);
    const data = {
        rows: tokenData.map((item) => [item.tokenScssName, item.tokenDescription]),
    };

    return {
        ...category ? {
            category: categoryData,
            data,
        } : data,
    };
};

const getTokens = ({ tokenType, path }) => {
    const { tokens, categories } = getTokenCategories(path, tokenType);

    return categories
        ? Object.entries(categories).map(([category, categoryData]) => createTokenList(tokens, tokenType, path, category, categoryData))
        : createTokenList(tokens, tokenType, path);
};

const createSwatch = (token) => {
    const [colour] = token[1].split(',');
    const shouldShowBorder = colour === '#FFFFFF';
    const styles = `style = "--swatch-color: ${colour}"`;
    const className = `class="c-simpleTable--swatch ${shouldShowBorder ? 'c-simpleTable--swatch-lightBordered' : ''}"`;

    return `${styles} ${className}`;
};

const buildTable = ({ rows, headings }, useMonospace, isFullWidth, tokenType) => {
    const headerClass = headings ? '' : 'c-simpleTable--headerless';
    const fontClass = useMonospace ? 'c-simpleTable--monospace' : '';
    const widthClass = isFullWidth ? 'c-simpleTable--fullWidth' : '';
    const shouldShowSwatch = tokenType === 'color';

    return `<table class="c-simpleTable ${widthClass} ${headerClass} ${fontClass}">
        ${headings ? `<tr>${headings.map((heading) => `
            <th>${heading}</th>`).join('')}
        </tr>` : ''}

        ${rows.map((row) => `
        <tr ${shouldShowSwatch && createSwatch(row)}>${row.map((data) => `
            <td>
                ${data}
            </td>`).join('')}
        </tr>
        `).join('')}
    </table>`;
};

const buildCategorisedTables = (tableData, useMonospace, isFullWidth, tokenType) => Object.values(tableData).map(({ category, data }) => {
    const table = buildTable(data, useMonospace, isFullWidth, tokenType);
    const displayName = category.displayName !== 'default' ? `<h3>${category.displayName}</h3>` : '';
    const description = category.description ? `<p>${category.description}</p>` : '';

    return `${displayName}${description}${table}`;
}).join('');

/**
 * If `tableData` contains no headings, the table will enter a headerless mode, where:
 * 1. The first column will have bold text
 * 2. Other columns will have subdued text
 * 3. Rows stack vertically at narrow viewports
 *
 * @param {Object} tableData - Contains heading and table data
 * @param {boolean} isFullWidth - Should the table use the full available width
 * @param {boolean} useMonospace - Should the table use a monospace font
 * @param {object} tokens - An object of token information - path:  tokenType - the type of token
 */
module.exports = ({
    isFullWidth = false,
    tableData,
    useMonospace = false,
    tokens,
}) => {
    const data = tokens
        ? getTokens(tokens)
        : normaliseData(JSON.parse(tableData));

    const hasMultipleTables = Array.isArray(data);

    return hasMultipleTables
        ? `${buildCategorisedTables(data, useMonospace, isFullWidth, tokens?.tokenType)}`
        : `${buildTable(data, useMonospace, isFullWidth, tokens?.tokenType)}`;
};
