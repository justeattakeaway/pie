/**
 * A Notification HTML component
 * @param {object} config - the Notification configuration
 * @param {string} config.type - Type of notification: information, error, warning or positive
 * @param {string} config.title - The title of the Notification
 * @param {string} config.message - The message within the Notification
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function ({ items }) {
    const listItems = items.map(item => `<li c-pillList-pill>${item}</li>`).join('');
    return `<ul class="c-pillList">
        ${listItems}
    </ul>`;
};
