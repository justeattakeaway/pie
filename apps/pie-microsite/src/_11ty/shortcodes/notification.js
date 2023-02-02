const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');
const markdownFilter = require('../filters/markdown');

const getNotificationColour = tokenName => {
    const tokenPath = ['alias', 'default'];

    return pieDesignTokenColours({ tokenName, tokenPath });
};

const notificationSettings = {
    error: {
        iconFill: 'support-error',
        bgColour: 'support-error-02',
        iconName: 'AlertCircleSmall'
    },
    warning: {
        iconFill: 'support-warning',
        bgColour: 'support-warning-02',
        iconName: 'AlertTriangleSmall'
    },
    information: {
        iconFill: 'support-info',
        bgColour: 'support-info-02',
        iconName: 'InfoCircleOutlineSmall'
    },
    positive: {
        iconFill: 'support-positive',
        bgColour: 'support-positive-02',
        iconName: 'CheckCircleOutlineSmall'
    }
};

/**
 * A Notification HTML component
 * @param {object} config - the Notification configuration
 * @param {string} config.type - Type of notification: information, error, warning or positive
 * @param {string} config.title - The title of the Notification
 * @param {string} config.message - The message within the Notification. This can be raw text or markdown (which will be transformed into HTML).
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const context = config.context ?? 'contentPage';
    const contextClass = `c-${context}-notification`;

    const svg = pieIconsSvg({
        name: notificationSettings[config.type].iconName,
        attrs: {
            height: 24,
            width: 24,
            fill: getNotificationColour(notificationSettings[config.type].iconFill)
        }
    });

    const bgColour = getNotificationColour(notificationSettings[config.type].bgColour);

    if (config.title) {
        return `<aside class="${contextClass} c-notification" style="--bg-colour: ${bgColour}">
          ${svg}
          <h4 class="c-notification-title">${config.title}</h4>
          <p class="c-notification-message">${markdownFilter(config.message, true)}</p>
        </aside>`;
    }

    return `<aside class="${contextClass} c-notification" style="--bg-colour: ${bgColour}">
      ${svg}
      <p class="c-notification-message">${markdownFilter(config.message, true)}</p>
    </aside>`;
};
