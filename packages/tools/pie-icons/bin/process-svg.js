import cheerio from 'cheerio';
import prettier from 'prettier';
import { optimize } from 'svgo';
import { DEFAULT_ATTRS } from '../src/default-attrs';

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {string} fileName - An svg file name string.
 * @param {string} filePath - An svg file path string.
 * @param {Promise<string>}
 */
function processSvg (svg, fileName, filePath) {
    return (
        optimizeSVG(svg)
            .then((svg) => removeFillAttribute(svg, fileName, filePath))
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
function optimizeSVG (svg) {
    return new Promise((resolve) => {
        const optimizedSVG = optimize(svg, {
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            // viewBox is required to resize SVGs with CSS.
                            // @see https://github.com/svg/svgo/issues/1128
                            removeViewBox: false,
                            convertShapeToPath: false,
                            mergePaths: false,
                            cleanupIds: false,
                        },
                    },
                },
                'prefixIds',
            ],
        });
        resolve(optimizedSVG.data);
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

/**
 * Remove fill attr from an svg if the svgName doesn't contain "-static" and it is not a flag or payment icon.
 * @param {string} svg - An SVG string.
 * @param {string} fileName - An svg file name string.
 * @param {string} filePath - An svg file path string.
 * @returns {string}
 */

function removeFillAttribute (svg, fileName, filePath) {
    const shouldNotProcessFile = fileName.includes('-static') || filePath.includes('assets/flag') || filePath.includes('assets/payment');
    if (shouldNotProcessFile) {
        return svg;
    }
    return svg.replace(/fill=".*?"/gm, '');
}

export default processSvg;
