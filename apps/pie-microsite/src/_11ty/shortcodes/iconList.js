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

    const icons = Object.values(pieIcons()).map(({ name, icon }) => {
        const isSmallIcon = name.toLowerCase().includes('small');

        const previewClasses = [
            'c-iconListCard-preview',
            isSmallIcon && 'c-iconListCard-preview--small'
        ].filter(Boolean).join(' ');

        return `<div class="c-iconList-card">
                <div class="${previewClasses}">
                    ${icon}
                </div>
                <hr>
                <p class="c-iconListCard-name">${buildIconName(name)}</p>
            </div>`;
    }).join('');

    return `<div class="c-iconList">
        ${icons}
    </div>`;
};
