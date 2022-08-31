const pieIconsSvg = require('./pieIconsSvg');
const pieDesignTokenColours = require('./pieDesignTokenColours');

/**
 * All custom 11ty filters should be part of the exported object
 * So that they can be registered in the .eleventy.js file
 */
module.exports = {
  pieIconsSvg,
  pieDesignTokenColours
}
