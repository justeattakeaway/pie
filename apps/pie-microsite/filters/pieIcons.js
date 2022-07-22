const pieicons = require('@justeattakeaway/pie-icons');

module.exports = function(iconName) {
    try {
      return pieicons.default.icons[iconName].toSvg();
    } catch (error) {
      console.error(`Could not find icon of name: ${iconName}. Error: ${error}`);
    }
}
