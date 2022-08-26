const pieicons = require('@justeattakeaway/pie-icons');

/**
 * Custom filter that returns an SVG HTML string for a specified PIE Icon
 * @param {*} iconConfig 
 * @param {string} iconConfig.name - the name of the icon to retrieve
 * @param {object} iconConfig.attrs - any attributes to add to the svg such as height, width, classes and fill
 * @returns 
 */
module.exports = function(iconConfig = {
  name: '',
  attrs: {}
}) {
    try {
      const defaultAttributes = {
        height: 50,
        width: 50,
        fill: '#000'
      }

      const attributes = { ...defaultAttributes, ...iconConfig.attrs };
      
      return pieicons.default.icons[iconConfig.name].toSvg(attributes);
    } catch (error) {
      console.error(`Could not find icon of name: ${iconConfig.name}. Error: ${error}`);
    }
}
