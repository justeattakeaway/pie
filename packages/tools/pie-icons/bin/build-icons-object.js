import path from 'path';
import cheerio from 'cheerio';
import { minify } from 'html-minifier';

const ICING_FOLDER = 'icing';

function getSVGName(svgFile) {
  if ((svgFile, svgFile.includes(ICING_FOLDER))) {
    return `icing-${path.basename(svgFile, '.svg')}`;
  } else {
    return path.basename(svgFile, '.svg');
  }
}
/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map((svgFile) => {
      const svg = getSvg(svgFile);
      const attributes = getSvgAttributes(svg);
      const contents = getSvgContents(svg);
      const name = getSVGName(svgFile);
      //   console.log(svgFile, name);

      return { attributes, contents, name };
    })
    .reduce((icons, icon) => {
      icons[icon.name] = {
        attrs: icon.attributes,
        contents: icon.contents,
      };
      return icons;
    }, {});
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents(svg) {
  const $ = cheerio.load(svg);
  return minify($('svg').html(), {
    caseSensitive: true,
    collapseWhitespace: true,
  });
}

function getSvgAttributes(svg) {
  const $ = cheerio.load(svg);
  const viewBox = $('svg').attr('viewBox');
  return { viewBox };
}

export default buildIconsObject;
