module.exports = function (config) {
  return `<figure class="c-contentPage-image">
    <div>
      <img src="${config.src}" height="${config.height}" width="${config.width}" />
    </div>
    ${config.caption ? `<figcaption>${config.caption}</figcaption>` : null }
  </figure>`;
}
