const pieIcons = require('../filters/pieIconsSvg')();
const iconData = require('../../iconData.json');

const categorisedIconList = () => {
    console.log(pieIcons.filter(i => i.name.includes('alert')));
    return `<div>${iconData.categories.map(cat => {
        return `
            <h3 class="c-categorisedIconList-heading">
                ${cat.displayName}
            </h3>

            <div class="c-categorisedIconList-iconList">
                ${cat.icons.map(i => {
                    const icon = pieIcons.find(x => x.name === i.name).icon;
                    const largeIcon = pieIcons.find(x => x.name === `${i.name}-large`).icon;
                    return `<div class="c-categorisedIconList-iconCard">
                        <div class="c-categorisedIconList-iconCard-iconContainer">
                            <div class="c-categorisedIconList-icon-large">${largeIcon}</div>
                            <div class="c-categorisedIconList-icon">${icon}</div>
                        </div>
                        <span class="c-categorisedIconList-iconCard-separator"></span>
                        <p>${i.displayName}</p>
                    </div>`
                }).join('')}
            </div>`;
    }).join('')}</div>`;
};

module.exports = categorisedIconList;
