const pieIcons = require('../filters/pieIconsSvg');

/**
 * A HTML component that renders a list of icons
 * @returns {string}
 */
// eslint-disable-next-line func-names
module.exports = function () {
    const buildIconName = (name) => name.replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();

    const icons = Object.values(pieIcons()).map(({ name, icon }) => {
        const isLargeIcon = name.toLowerCase().includes('large');

        const previewClasses = [
            'c-iconListCard-preview',
            isLargeIcon && 'c-iconListCard-preview--large'
        ].filter(Boolean).join(' ');

        const iconName = buildIconName(name);

        return `<li class="c-iconList-card">
                    <div aria-hidden="true" class="${previewClasses}">
                        ${icon}
                    </div>
                    <hr aria-hidden="true">
                    <p class="c-iconListCard-name">${iconName}</p>
                </li>`;
    }).join('');

    return `<div class="u-spacing-f--top">
                <ul class="c-iconList">
                    ${icons}
                </ul>
            </div>`;
};
