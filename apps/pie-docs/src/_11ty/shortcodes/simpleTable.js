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
}) => {
    const data = JSON.parse(tableData);

    const hasHeadings = !!data.headings;
    const headerClass = hasHeadings ? '' : 'c-simpleTable--headerless';
    const fontClass = useMonospace ? 'c-simpleTable--monospace' : '';
    const widthClass = isFullWidth ? 'c-simpleTable--fullWidth' : '';

    return `<table class="c-simpleTable ${widthClass} ${headerClass} ${fontClass}">
        ${hasHeadings ? `<tr>${data.headings.map((heading) => `
            <th>${heading.text}</th>`).join('')}
        </tr>` : ''}
        ${data.rows.map((row) => `
        <tr>${row.data.map((data) => `
            <td>
                ${data.text}
            </td>`).join('')}
        </tr>
        `).join('')}
    </table>`;
};
