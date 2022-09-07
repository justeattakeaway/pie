createCaption = function (config) {
  if (config.captionType === 'list') {
    return `<figcaption class="c-contentImage-caption">
      ${config.caption}
      <ul>
        ${config.captionListItems.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </figcaption>`;
  }

  return `<figcaption class="c-contentImage-caption">${config.caption}</figcaption>`;
};

/**
 * Creates an image to render on a content page.
 * Can specify an image type as 'spread' to take up the entire container.
 * @param {object} config - image configuration
 * @param {string} config.type - can be spread, or left empty for default
 * @param {string} config.width - the image width (will go to full width on smaller screens)
 * @param {string} config.alt - an optional alt for the image
 * @param {string} config.src - the image src path
 * @returns {string}
 */
module.exports = function (config) {
  if (config.type !== 'spread') {
    if (config.caption) {
      return `<figure class="c-contentPage-img c-contentImage c-contentImage--with-bg">
        <div class="c-contentImage-bg">
          <img style="--img-width: ${config.width};" src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
        </div>
        ${createCaption(config)}
      </figure>`;
    }
    
    return `<figure class="c-contentPage-img c-contentImage c-contentImage--with-bg">
      <div class="c-contentImage-bg">
        <img style="--img-width: ${config.width};" src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
      </div>
    </figure>`;
  }

  if (config.caption) {
    return `<figure class="c-contentPage-img c-contentImage">
      <img src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
      ${createCaption(config)}
    </figure>`;
  }

  return `<figure class="c-contentPage-img c-contentImage">
      <img src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
    </figure>`;
}
