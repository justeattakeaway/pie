
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationPinRestaurant"><g clip-path="url(#prefix__clip0_3_53)"><path d="m8 12.436 3.29-3.325a4.734 4.734 0 0 0 0-6.624 4.602 4.602 0 0 0-6.58 0 4.734 4.734 0 0 0 0 6.624L8 12.436Zm-2.354-9.03a3.299 3.299 0 0 1 4.708 0 3.404 3.404 0 0 1 0 4.778L8 10.564l-2.354-2.38a3.404 3.404 0 0 1 0-4.778ZM4.5 13.47h7v1.312h-7V13.47Z"></path></g><defs><clipPath id="prefix__clip0_3_53"><rect width="16" height="16"></rect></clipPath></defs></svg>;';

export class IconLocationPinRestaurant extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconLocationPinRestaurant');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconLocationPinRestaurant');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-location-pin-restaurant', IconLocationPinRestaurant);
