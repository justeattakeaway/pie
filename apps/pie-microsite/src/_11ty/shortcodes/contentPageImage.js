module.exports = function (config) {
  return `<figure class="c-contentPage-image">
    <div>
      <img style="--img-width: ${config.width};" src="${config.src}" alt="${config.alt ? config.alt : ''}" />
    </div>
    ${config.caption ? `<figcaption>${config.caption}</figcaption>` : '' }
  </figure>`;
}
