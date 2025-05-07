window.buildIconCard = (icon) => {
    const pieIcon = window.pieIcons.find((x) => x.name === icon.name)?.icon;

    if (!pieIcon) {
        throw new Error(`Could not find icon with name "${icon.name}".`);
    }

    let largeIcon;

    if (!icon.oneSize) {
        largeIcon = window.pieIcons.find((x) => x.name === `${icon.name}-large`)?.icon;

        if (!largeIcon) {
            throw new Error(`Could not find icon with name "${icon.name}-large".`);
        }
    }

    const regularSizeClass = icon.oneSize
        ? 'c-categorisedIconList-icon-large'
        : 'c-categorisedIconList-icon';

    return `<li class="c-categorisedIconList-iconCard">
        <div class="c-categorisedIconList-iconCard-iconContainer">
            ${largeIcon ? `<div class="c-categorisedIconList-icon-large" aria-hidden="true">
                ${largeIcon}
            </div>` : ''}
            ${pieIcon ? `<div class="${regularSizeClass}" aria-hidden="true">
                ${pieIcon}
            </div>` : ''}
        </div>
        <span class="c-categorisedIconList-iconCard-separator"></span>
        <p>${icon.displayName}</p>
    </li>`;
};

window.generateIconsList = (filterCategory) => {
    const filteredCategories = window.iconData.categories.filter((category) => {
        if (!filterCategory) {
            return category.name !== 'payment';
        }
        return category.name !== 'payment' && category.name === filterCategory;
    });

    return filteredCategories.map((cat) => `
        <li>
            <h3 class="c-categorisedIconList-heading" id="category-${cat.name}">
                ${cat.displayName}
            </h3>

            <ul class="c-categorisedIconList-iconList" aria-labelledby="category-${cat.name}">
                ${cat.icons.map((i) => window.buildIconCard(i)).join('')}
            </ul>`).join('');
};
