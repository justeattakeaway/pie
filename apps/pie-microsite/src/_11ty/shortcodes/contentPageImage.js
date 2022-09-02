module.exports = function (config) {
  return `<figure class="c-contentPage-image">
    <div>
      <img style="--img-width: ${config.width};" src="${config.src}" />
    </div>
    ${config.caption ? `<figcaption>${config.caption}</figcaption>` : null }
  </figure>`;
}
