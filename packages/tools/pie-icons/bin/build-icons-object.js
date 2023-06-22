import path from 'path';
import cheerio from 'cheerio';
import { minify } from 'html-minifier-terser';

import pathHelpers from './path-helpers';

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
async function buildIconsObject(svgFiles, getSvg) {
    const mapSvgFilesToObjects = async (svgFile) => {
        const svg = getSvg(svgFile);
        const attributes = getSvgAttributes(svg);
        const contents = await getSvgContents(svg);
        const svgPath = path.dirname(svgFile);
        const pathPrefix = pathHelpers.getAssetDirectoryName(svgPath);
        const name = getSvgName(svgFile);

        return {
            attributes,
            contents,
            name,
            pathPrefix,
        };
    };

    const svgObjectsArray = await Promise.all(svgFiles.map(mapSvgFilesToObjects));

    return svgObjectsArray.reduce((icons, icon) => {
        icons[icon.name] = {
            attrs: icon.attributes,
            contents: icon.contents,
            pathPrefix: icon.pathPrefix,
        };
        return icons;
    }, {});
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {Promise<string>}
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

function getSvgName(svgFile) {
    return path.basename(svgFile, '.svg');
}

export default buildIconsObject;
