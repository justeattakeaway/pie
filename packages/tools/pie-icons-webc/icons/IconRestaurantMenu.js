import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--restaurantMenu"><path d="M12.375 2.094h-8.75a1.54 1.54 0 0 0-1.531 1.531v10.281h11.812V3.625a1.54 1.54 0 0 0-1.531-1.531Zm.219 10.5H3.406V3.625a.219.219 0 0 1 .219-.219h8.75a.219.219 0 0 1 .219.219v8.969Z"></path><path d="M10.625 7.668a2.625 2.625 0 0 0-2.196-2.144.437.437 0 1 0-.875 0 2.625 2.625 0 0 0-2.135 2.144 2.478 2.478 0 0 0 0 .437v.438h5.25v-.438a2.48 2.48 0 0 0-.044-.438Z"></path><path d="M10.625 9.645h-5.25v1.313h5.25V9.644Z"></path></svg>';

export class IconRestaurantMenu extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);

        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('IconRestaurantMenu');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconRestaurantMenu');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-restaurant-menu', IconRestaurantMenu);
