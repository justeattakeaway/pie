import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--notification"><path d="m13.906 10.354-.402-.403a4.577 4.577 0 0 1-1.348-3.255V6.25a4.165 4.165 0 0 0-1.365-3.08 4.208 4.208 0 0 0-2.135-1.006V1H7.344v1.164a4.287 4.287 0 0 0-3.5 4.252v.28a4.576 4.576 0 0 1-1.348 3.255l-.402.403v1.802h3.089a2.827 2.827 0 0 0 5.635 0h3.088v-1.802ZM8 13.469a1.532 1.532 0 0 1-1.514-1.313h3.028A1.531 1.531 0 0 1 8 13.47Zm2.686-2.625H3.46a5.871 5.871 0 0 0 1.697-4.148v-.28a2.958 2.958 0 0 1 2.555-2.992 2.844 2.844 0 0 1 3.133 2.826v.446a5.872 5.872 0 0 0 1.697 4.148h-1.855Z"></path></svg>';

export class IconNotification extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconNotification');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconNotification');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-notification', IconNotification);
