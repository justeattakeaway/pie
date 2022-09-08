const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

const getNotificationColour = tokenName => {
  const tokenPath = ['alias', 'default'];

  return pieDesignTokenColours({ tokenName, tokenPath });
};

const notificationIconFills = {
  error: 'support-error',
  warning: 'support-warning',
  information: 'support-info',
  positive: 'support-positive'
}

const notificationBackgroundColours = {
  error: 'support-error-02',
  warning: 'support-warning-02',
  information: 'support-info-02',
  positive: 'support-positive-02'
}

const notificationIcons = {
  error: 'AlertCircle',
  warning: 'AlertTriangle',
  information: 'InfoCircleOutline',
  positive: 'CheckCircleOutline'
}

/**
 * A Notification HTML component
 * @param {object} config - the Notification configuration
 * @param {string} config.type - Type of notification: information, error, warning or positive
 * @param {string} config.title - The title of the Notification
 * @param {string} config.message - The message within the Notification
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @returns {string}
 */
module.exports = function (config) {
  const context = config.context ?? 'contentPage';
  const contextClass = `c-${context}-notification`;

  const svg = pieIconsSvg({ 
    name: notificationIcons[config.type], 
    attrs: { 
      height: 24, 
      width: 24, 
      fill: getNotificationColour(notificationIconFills[config.type]) 
    }
  });

  const bgColour = getNotificationColour(notificationBackgroundColours[config.type]);

  if (config.title) {
    return `<aside class="${contextClass} c-notification" style="--bgColour: ${bgColour}">
      ${svg}
      <h4 class="c-notification-title">${config.title}</h4>
      <p class="c-notification-message">${config.message}</p>
    </aside>`;
  }

  return `<aside class="${contextClass} c-notification" style="--bgColour: ${bgColour}">
    ${svg}
    <p class="c-notification-message">${config.message}</p>
  </aside>`;
};
