
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--conversionRateLarge"><path d="M14.04 18.625a3.927 3.927 0 0 0 7.607-.93 3.93 3.93 0 0 0-3.696-4.32 3.927 3.927 0 0 0-7.606.93 3.93 3.93 0 0 0 3.695 4.32Zm4.095-3.5a2.196 2.196 0 0 1-.385 4.375 2.17 2.17 0 0 1-1.943-1.199 3.92 3.92 0 0 0 2.328-3.176ZM14.25 12.5a2.188 2.188 0 1 1 0 4.375 2.188 2.188 0 0 1 0-4.375Zm14.936.98-3.141 3.141a.874.874 0 0 1-1.243 0l-3.14-3.141 1.242-1.242 1.557 1.557A8.75 8.75 0 0 0 9.814 9.814L8.57 8.57a10.5 10.5 0 0 1 17.71 5.329l1.663-1.662 1.242 1.242Zm-7 8.75 1.243 1.242A10.5 10.5 0 0 1 5.719 18.1l-1.663 1.662-1.242-1.242 3.141-3.141a.875.875 0 0 1 1.242 0l3.142 3.141-1.243 1.242-1.557-1.557a8.75 8.75 0 0 0 14.647 3.981v.044Z"></path></svg>';

export default class IconConversionRateLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconConversionRateLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconConversionRateLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-conversion-rate-large', IconConversionRateLarge);
