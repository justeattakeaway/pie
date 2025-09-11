const markdownFilter = require('../../filters/markdown');

/**
 * A shortcode for the <pie-notification> Web Component.
 * @param {object} config - the Notification configuration
 * @param {string} config.type - Type of notification: information, error, warning or positive
 * @param {string} config.title - The title of the Notification
 * @param {string} config.message - The message within the Notification. This can be raw text or markdown (which will be transformed into HTML).
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @param {string} config.iconName - The name of the icon to use for the Notification".
 * @returns {string}
 */
const baseNotification = (config) => {
    const context = config.context ?? 'contentPage';
    const contextClass = `c-${context}-notification`;
    const variant = config.type === 'information' ? 'info' : config.type;
    const headingAttribute = config.title ? `heading="${config.title}"` : '';

    let iconSlot = '';
    if (config.iconName) {
        iconSlot = `<icon-${config.iconName} slot="icon"></icon-${config.iconName}>`;
    }

    return `<div>
                <pie-notification
                    class="${contextClass}"
                    variant="${variant}"
                    ${headingAttribute}>
                        ${iconSlot}
                        ${markdownFilter(config.message, true)}
                </pie-notification>
            </div>`;
};

module.exports = baseNotification;
