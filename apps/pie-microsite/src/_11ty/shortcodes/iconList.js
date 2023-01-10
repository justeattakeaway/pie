const pieIcons = require('../filters/pieIconsSvg');

/**
 * A List HTML component – takes an array of list items and turns them into a marked-up list
 * @param {string} type - Type of list: ordered, pill
 * @param {string[]} items - An array of list items
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
            ${icon}
          </div>
          <hr>
          <p class="c-iconListCard-name">${buildIconName(name)}</p>
        </div>`).join('');

    return `<div class="c-iconList">
        ${icons}
    </div>`;
};
