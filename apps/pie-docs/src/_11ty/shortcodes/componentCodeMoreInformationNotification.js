const baseNotification = require('./helpers/baseNotification');

// Provides more information about where component integration guides can be found.
// To be used at the top of each component Code page.
const componentCodeMoreInformationNotification = baseNotification({
    type: 'information',
    iconName: 'link',
    message: 'We have a number of integration guides! Check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components) for a general introduction. For framework specific guides please take a look in our [engineers section](/engineers/web-components/)',
});

module.exports = componentCodeMoreInformationNotification;
