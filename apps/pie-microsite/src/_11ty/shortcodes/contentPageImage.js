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

    if (config.type !== 'spread') {
        return `<figure class="${contextClass} c-contentImage c-contentImage--with-bg">
            <div class="c-contentImage-bg">
              <img style="--img-width: ${config.width};" src="${config.src}" ${
          config.alt ? `alt="${config.alt}"` : ''
        } />
            </div>${createCaption(config)}
          </figure>`;
    }

    return `<figure class="${contextClass} c-contentImage">
        <img src="${config.src}" ${
      config.alt ? `alt="${config.alt}"` : ''
    } />${createCaption(config)}
      </figure>`;
};
