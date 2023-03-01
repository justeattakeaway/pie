import SVGO from 'svgo';
import cheerio from 'cheerio';
import prettier from 'prettier';
import { DEFAULT_ATTRS } from '../src/default-attrs';

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
function processSvg (svg) {
    return (
        optimize(svg)
            .then(setAttrs)
            .then((data) => prettier.format(data, {
                parser: 'babel',
            }))
            // remove semicolon inserted by prettier
            // because prettier thinks it's formatting JSX not HTML
            .then((svg) => svg.replace(/;/g, ''))
    );
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize (svg) {
    const svgo = new SVGO({
        plugins: [
            { prefixIds: true },
            { convertShapeToPath: false },
            { mergePaths: false },
            { removeTitle: true },
            { removeViewBox: false }
        ],
    });

    return new Promise((resolve) => {
        svgo.optimize(svg)
            .then(({ data }) => resolve(data));
    });
}

/**
 * Set default attributes on SVG.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function setAttrs (svg) {
    const $ = cheerio.load(svg);

    Object.keys(DEFAULT_ATTRS).forEach((key) => $('svg').attr(key, DEFAULT_ATTRS[key]));

    return $('body').html();
}

export default processSvg;
