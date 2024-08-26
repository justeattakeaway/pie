const { find } = require('@11ty/eleventy-navigation').navigation;
const fs = require('fs');
const path = require('path');

/** IndexPageDisplay Shortcode - automatic page rendering:
 * Render index items in a flexible grid.
 * Every main item in our menu can now render an index page. This shortcode will loop on every child menu item and create an
 * interactive card with a link to that menu item. Items can be excluded if specified. Images must exist for items not excluded.
 * Mobile images are optional, desktop image will be rendered if mobile image is not provided.
 * A default image will be rendered if desktop image is not provided and a warning is printed to the server console.
 * Images must be added:
 *  - within a folder with the main menu item name, for example 'components/' 'foundations/'
 *  - image should have the name of the sub-menu in snakecase, for example Checkbox Group is called 'checkbox-group'
 *  - mobile images will use the same name with a mobile keyword, for example 'checkbox-group-mobile'
 * @param {string} collection - It is the object from 11y collections.all https://www.11ty.dev/docs/collections/
 * @returns {string} itemKey - Is the key of the element in the main menu, and the page we will be rendering e.g. components
 * @returns {string} excludedElements - Is the key of the element in the main menu, and the page we will be rendering e.g. 'Component Status'
 */
const defaultImageDirectory = '../../assets/img/index';
const toSlug = (string) => string.toLowerCase().replace(/\s+/g, '-');

module.exports = function ({
    collection,
    itemKey,
    excludedElements,
    imageSrcDirectory,
}) {
    const menuItems = find(collection, itemKey);
    const indexElements = menuItems.map((element) => {
        if (!excludedElements.includes(element.title)) {
            const menuItemSlug = toSlug(element.title);
            const itemKeySlug = toSlug(itemKey);
            const imageDirectory = imageSrcDirectory || defaultImageDirectory;
            const imgSrc = `${imageDirectory}/${itemKeySlug}/${menuItemSlug}.svg`;
            const imgMobileSrc = `${imageDirectory}/${itemKeySlug}/${menuItemSlug}-mobile.svg`;
            const fallbackImage = `${imageDirectory}/${itemKeySlug}/default.svg`;

            const hasSource = fs.existsSync(path.join(__dirname, imgSrc));
            const hasMobileSource = fs.existsSync(path.join(__dirname, imgMobileSrc));

            const renderFallbackImage = () => {
                console.warn(`Fallback image used for ${menuItemSlug}. Please ensure image is provided.`);
                return `<img src="${fallbackImage}">`;
            };

            return `
                <a class="c-indexPage-link" href="${element.url}">
                    <picture>
                    ${hasMobileSource ? `<source media="(max-width: 600px)" srcset="${imgMobileSrc}">` : ''}
                    ${hasSource
                ? `<img src="${imgSrc}">`
                : renderFallbackImage()}
                    </picture>
                    ${element.title}
                    <div class="c-indexPage-background"></div>
                </a>`;
        }
        return '';
    });
    return `<div class="c-indexPage">${indexElements.join('')}</div>`;
};
