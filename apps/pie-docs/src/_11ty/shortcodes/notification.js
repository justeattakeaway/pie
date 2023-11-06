const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');
const markdownFilter = require('../filters/markdown');

const getNotificationColour = (tokenName) => {
    const tokenPath = ['alias', 'default'];

    return pieDesignTokenColours({ tokenName, tokenPath });
};

const notificationSettings = {
    neutral: {
        iconFill: 'content-default',
        bgColour: 'container-subtle',
    },
    error: {
        iconFill: 'support-error',
        bgColour: 'support-error-02',
        iconName: 'alert-circle',
    },
    warning: {
        iconFill: 'support-warning',
        bgColour: 'support-warning-02',
        iconName: 'alert-triangle',
    },
    information: {
        iconFill: 'support-info',
        bgColour: 'support-info-02',
        iconName: 'info-circle',
    },
    positive: {
        iconFill: 'support-positive',
        bgColour: 'support-positive-02',
        iconName: 'check-circle',
    },
};

/**
 * A Notification HTML component
 * @param {object} config - the Notification configuration
 * @param {string} config.type - Type of notification: information, error, warning or positive
 * @param {string} config.title - The title of the Notification
 * @param {string} config.message - The message within the Notification. This can be raw text or markdown (which will be transformed into HTML).
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @param {string} config.iconName - The name of the icon to use for the Notification".
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const context = config.context ?? 'contentPage';
    const contextClass = `c-${context}-notification`;
    const iconFill = getNotificationColour(notificationSettings[config.type].iconFill);
    const svg = pieIconsSvg({
        name: config.iconName ?? notificationSettings[config.type].iconName,
        attrs: {
            height: 24,
            width: 24,
            fill: notificationSettings[config.type].iconFill,
            class: 'u-iconFilled',
        },
    });

    const bgColour = getNotificationColour(notificationSettings[config.type].bgColour);

    if (config.title) {
        return `<aside class="${contextClass} c-notification" style="--bg-colour: ${bgColour}; --icon-fill: ${iconFill};">
            ${svg}
            <h4 class="c-notification-title">${config.title}</h4>
            <p class="c-notification-message">${markdownFilter(config.message, true)}</p>
        </aside>`;
    }

    return `<aside class="${contextClass} c-notification" style="--bg-colour: ${bgColour}; --icon-fill: ${iconFill};">
        ${svg}
        <p class="c-notification-message">${markdownFilter(config.message, true)}</p>
    </aside>`;
};
