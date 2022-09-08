const pieIconsSvg = require('../filters/pieIconsSvg');
const pieDesignTokenColours = require('../filters/pieDesignTokenColours');

const getNotificationColour = tokenName => {
  const tokenPath = ['alias', 'default'];

  return pieDesignTokenColours({ tokenName, tokenPath });
};

const notificationSettings = {
  error: {
      iconFill: 'support-error',
      bgColour: 'support-error-02',
      iconName: 'AlertCircle'
  },
  warning: {
      iconFill: 'support-warning',
      bgColour: 'support-warning-02',
      iconName: 'AlertTriangle'
  },
  information: {
      iconFill: 'support-info',
      bgColour: 'support-info-02',
      iconName: 'InfoCircleOutline'
  },
  positive: {
      iconFill: 'support-positive',
      bgColour: 'support-positive-02',
      iconName: 'CheckCircleOutline'
  }
};

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
    name: notificationSettings[config.type].iconName, 
    attrs: { 
      height: 24, 
      width: 24, 
      fill: getNotificationColour(notificationSettings[config.type].iconFill) 
    }
  });

  const bgColour = getNotificationColour(notificationSettings[config.type].bgColour);

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
