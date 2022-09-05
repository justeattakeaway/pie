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
 * @returns {string}
 */
module.exports = function (config) {
  const svg = pieIconsSvg({ 
    name: notificationIcons[config.type], 
    attrs: { 
      height: 23.73, 
      width: 23.73, 
      fill: getNotificationColour(notificationIconFills[config.type]) 
    }
  });

  const bgColour = getNotificationColour(notificationBackgroundColours[config.type]);
  
  return `<aside class="c-notification" style="--bgColour: ${bgColour}">
    ${svg}
    <h4>${config.title}</h4>
    <p>${config.message}</p>
  </aside>`;
};
