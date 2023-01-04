const createCaption = config => (config.caption
    ? `<figcaption class="c-contentImage-caption">${config.caption}</figcaption>`
    : '');

/**
 * Creates an image to render on a content page.
 * Can specify an image type as 'spread' to take up the entire container.
 * @param {object} config - image configuration
 * @param {string} config.type - can be spread, or left empty for default
 * @param {string} config.width - the image width (will go to full width on smaller screens)
 * @param {string} config.alt - an optional alt for the image
 * @param {string} config.src - the image src path
 * @param {string} config.context - a contextual string to use to in-built class names. Defaults to "contentPage".
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function (config) {
    const context = config.context ?? 'contentPage';
    const contextClass = `c-${context}-img`;
    const isSpreadImage = config.type === 'spread';
    const imageStyles = !isSpreadImage ? `style="--img-width: ${config.width};"` : '';
    const imageAlt = config.alt ? `alt="${config.alt}"` : '';
    const figureClasses = [
        contextClass,
        'c-contentImage',
        ...(!isSpreadImage ? ['c-contentImage--hasBackdrop'] : [])
    ];

    return `<figure class="${figureClasses.join(' ')}">
        <div class="c-contentImage-backdrop">
          <picture>
            ${config.mobileSrc ? `<source ${imageStyles} media="(max-width: 600px)" srcset="${config.mobileSrc}">` : ''}
            <img src="${config.src}" ${imageStyles} ${imageAlt}> 
          </picture>
        </div>
        ${createCaption(config)}
      </figure>`;
};
