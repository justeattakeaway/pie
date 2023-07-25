const { getTokenCategories, getTokenData } = require('../../_utilities/tokens');

const normaliseData = (data) => {
    if (data.rows) {
        const headings = data?.headings.map((heading) => heading.text) ?? [];
        const rows = data.rows.map((row) => row.data.map((data) => data.text));

        return { headings, rows };
    }

    return { rows: Object.entries(data) };
};

const createTokenList = (tokens, tokenType, path, category, displayName) => {
    const tokenData = getTokenData(tokens, tokenType, path, category);
    const data = {
        rows: tokenData.map((item) => [item.tokenScssName, item.tokenDescription]),
    };

    return {
        ...category ? {
            category: displayName,
            data,
        } : data,
    };
};

const getTokens = ({ tokenType, path }) => {
    const { tokens, categories } = getTokenCategories(path, tokenType);

    return categories
        ? Object.entries(categories).map(([category, { displayName }]) => createTokenList(tokens, tokenType, path, category, displayName))
        : createTokenList(tokens, tokenType, path);
};

const buildTable = ({ rows, headings }, useMonospace, isFullWidth) => {
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

const buildCategorisedTables = (tableData, useMonospace, isFullWidth) => Object.values(tableData).map(({ category, data }) => {
    const table = buildTable(data, useMonospace, isFullWidth);

    return `<h2>${category}</h2>${table}`;
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
        ? `${buildCategorisedTables(data, useMonospace, isFullWidth)}`
        : `${buildTable(data, useMonospace, isFullWidth)}`;
};
