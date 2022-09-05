createCaption = function (config) {
  if (!config.caption) {
    return '';
  }

  if (config.captionType === 'list') {
    return `<figcaption>
      ${config.caption}
      <ul>
        ${config.captionListItems.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </figcaption>`;
  }

  return `<figcaption>${config.caption}</figcaption>`;
};

module.exports = function (config) {
  if (config.type !== 'spread') {
    return `<figure class="c-contentPage-image c-contentPage-image--with-bg">
      <div>
        <img style="--img-width: ${config.width};" src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
      </div>
      ${createCaption(config)}
    </figure>`;
  }
  
  return `<figure class="c-contentPage-image">
      <img src="${config.src}" ${config.alt ? `alt="${config.alt}"` : ''} />
      ${createCaption(config)}
    </figure>`;
}
