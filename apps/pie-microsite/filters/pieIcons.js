const pieicons = require('@justeattakeaway/pie-icons');

module.exports = function(iconConfig = {
  name: '',
  attrs: {}
}) {
    try {
      return pieicons.default.icons[iconConfig.name].toSvg(iconConfig.attrs);
    } catch (error) {
      console.error(`Could not find icon of name: ${iconConfig.name}. Error: ${error}`);
    }
}
