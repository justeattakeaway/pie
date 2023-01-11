const pieIcons = require('../filters/pieIconsSvg');

/**
 * A HTML component that renders a list of icons
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function () {
    const buildIconName = name => name.replace(/([A-Z])/g, match => ` ${match}`)
      .replace(/^./, match => match.toUpperCase())
      .trim();

    const icons = Object.values(pieIcons()).map(({ name, icon }) => `<div class="c-iconList-card">
          <div class="c-iconListCard-preview">
            ${icon}
          </div>
          <hr>
          <p class="c-iconListCard-name">${buildIconName(name)}</p>
        </div>`).join('');

    return `<div class="c-iconList">
        ${icons}
    </div>`;
};
