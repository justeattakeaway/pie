const pieicons = require('@justeattakeaway/pie-icons');

/**
 * Custom filter that returns an SVG HTML string for a specified PIE Icon
 * @param {*} iconConfig 
 * @returns 
 */
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
