const autoprefixer = require('autoprefixer')
const postcss = require("postcss");

/**
 * Processes the provided CSS using PostCSS and any plugins that have been integrated
 * @param {string} css 
 * @returns {object} the postcss result
 */
module.exports = function (css) {
  return postcss([autoprefixer]).process(css);
}
