module.exports = ({ tableData }) => {
    const data = JSON.parse(tableData);

    return `<table>
        <tr>
            ${data.headings.map(heading => `
            <th>${heading.text}</th>`)}
        </tr>
        ${data.rows.map(row => `
        <tr>
            ${row.data.map(data => `
            <td>${data.text}</td>`)}
        </tr>
        `)}
    </table>`;
};
