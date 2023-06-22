module.exports = ({ tableData }) => {
    const data = JSON.parse(tableData);

    return `<table class="c-simpleTable">
        <tr>${data.headings
            .map(
                (heading) => `
            <th>${heading.text}</th>`,
            )
            .join('')}
        </tr>
        ${data.rows
            .map(
                (row) => `
        <tr>${row.data
            .map(
                (data) => `
            <td>${data.text}</td>`,
            )
            .join('')}
        </tr>
        `,
            )
            .join('')}
    </table>`;
};
