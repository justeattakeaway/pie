const markdownFilter = require('../filters/markdown');

/**
 * Creates a figcaption element containing the image caption if one has been provided
 * @param {Object} config
 * @param {String} config.caption - A string to use as the image caption. This can be raw text or markdown (which will be transformed into HTML).
 * @returns {String} a <figcaption> element containing the caption text, or an empty string if no caption is provided.
 */
const createCaption = (config) => (config.caption
    ? `<figcaption class="c-contentImage-caption">${markdownFilter(config.caption, true)}</figcaption>`
    : '');

/**
 * Creates an image to render on a content page.
 * If a width is not provided, image will default to fill up the entire container.
 * @param {object} config - image configuration
 * @param {string} config.width - the image width in px (will go to full width on smaller screens).
 * @param {string} config.height - (s, m, l), the image height (will default to small).
 * @param {string} config.alt - an optional alt for the image
 * @param {string} config.src - the image src path
 * @param {string} config.mobileSrc - the image src path for an optimised mobile image if required
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @param {string} config.caption - A string to use as the image caption. This can be raw text or markdown (which will be transformed into HTML).
 * @param {string} config.variant - Sets the variant of the shortcut. Valid values are default, secondary and inverse. Defaults to "default"
 * @returns {string} a <figure> element containing the image(s) provided with the config settings applied.
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const context = config.context ?? 'contentPage';
    const contextClass = `c-${context}-img`;
    const isImageFullContainerWidth = !config.width;
    const imageStyles = !isImageFullContainerWidth ? `style="--img-width: ${config.width};"` : ''; // If image isn't full width, set it to required width
    const imageAlt = `alt="${config.alt || ''}"`;
    const variant = config.variant || 'default';
    const figureClasses = [
        contextClass,
        'c-contentImage',
        ...(isImageFullContainerWidth
            ? ['c-contentImage--fullWidth']
            : ['c-contentImage--hasBackdrop']),
        ...(config.shouldShowPadding
            ? ['c-contentImage--paddedBackdrop']
            : ''),
        ...(config.height
            ? [`c-contentImage--height-${config.height}`]
            : '')
    ];

    // This is based on the narrowMid breakpoint defined in fozzie:
    // https://github.com/justeat/fozzie-components/blob/7fd01766b3126b30b1ab704c131b8ac767f882ea/packages/tools/fozzie/src/scss/tools/helpers/_breakpoints.scss#L9
    const mobileImageMaxWidth = '600px';

    return `<figure class="${figureClasses.join(' ')}">
        <div class="c-contentImage-backdrop c-contentImage-${variant}">
          <picture>
            ${config.mobileSrc ? `<source ${imageStyles} media="(max-width: ${mobileImageMaxWidth})" srcset="${config.mobileSrc}">` : ''}
            <img src="${config.src}" ${imageStyles} ${imageAlt}>
          </picture>
        </div>
        ${createCaption(config)}
      </figure>`;
};
