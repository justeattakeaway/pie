import path from 'path';
import cheerio from 'cheerio';
import { minify } from 'html-minifier';

import pathHelpers from './path-helpers';

function getSVGName (svgFile) {
    return path.basename(svgFile, '.svg');
}
/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject (svgFiles, getSvg) {
    return svgFiles
    .map(svgFile => {
        const svg = getSvg(svgFile);
        const attributes = getSvgAttributes(svg);
        const contents = getSvgContents(svg);
        const svgPath = path.dirname(svgFile);
        const pathPrefix = pathHelpers.getAssetDirectoryName(svgPath);
        const name = getSVGName(svgFile);

        return {
            attributes, contents, name, pathPrefix
        };
    })
    .reduce((icons, icon) => {
        icons[icon.name] = {
            attrs: icon.attributes,
            contents: icon.contents,
            pathPrefix: icon.pathPrefix
        };
        return icons;
    }, {});
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents (svg) {
    const $ = cheerio.load(svg);
    return minify($('svg').html(), {
        caseSensitive: true,
        collapseWhitespace: true
    });
}

function getSvgAttributes (svg) {
    const $ = cheerio.load(svg);
    const viewBox = $('svg').attr('viewBox');
    return { viewBox };
}

export default buildIconsObject;
