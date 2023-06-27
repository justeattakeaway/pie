
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--appRestaurant"><path d="M13.906 4.395a2.519 2.519 0 0 0-.796-1.829l-1.015-.971a1.374 1.374 0 0 0-.945-.376H4.867c-.346 0-.679.135-.927.376l-1.032.963a2.537 2.537 0 0 0-.814 1.846 2.529 2.529 0 0 0 .875 1.89v6.519a1.969 1.969 0 0 0 1.969 1.968h6.125a1.969 1.969 0 0 0 1.968-1.969V6.295a2.545 2.545 0 0 0 .875-1.899ZM3.8 3.52l1.067-.989h6.318l1.024.963a1.244 1.244 0 0 1 .385.875 1.19 1.19 0 0 1-.945 1.155 1.295 1.295 0 0 1-1.409-.578H9.102a1.295 1.295 0 0 1-2.205 0H5.76a1.295 1.295 0 0 1-1.409.578 1.19 1.19 0 0 1-.945-1.12A1.199 1.199 0 0 1 3.8 3.52Zm7.263 9.949H4.936a.665.665 0 0 1-.656-.656v-5.95A2.625 2.625 0 0 0 6.33 6.31a2.625 2.625 0 0 0 3.342 0 2.625 2.625 0 0 0 2.048.551v5.95a.665.665 0 0 1-.656.657ZM8.874 11.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></svg>';

export default class IconAppRestaurant extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconAppRestaurant');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconAppRestaurant');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-app-restaurant', IconAppRestaurant);
