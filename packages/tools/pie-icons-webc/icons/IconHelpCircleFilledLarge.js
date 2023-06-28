import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--helpCircleFilledLarge"><path d="M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 18.375a1.313 1.313 0 1 1 0-2.626 1.313 1.313 0 0 1 0 2.626Zm1.024-5.81H16.9l-.166 1.435h-1.391l-.219-2.511h.088c1.75-.272 2.782-1.199 2.782-2.424a1.75 1.75 0 0 0-1.89-1.689 2.67 2.67 0 0 0-1.61.508l-.061.043L13.2 10.41l.07-.062a4.489 4.489 0 0 1 2.922-.997c2.704 0 3.92 1.654 3.92 3.299a3.955 3.955 0 0 1-3.088 3.666Z"></path></svg>';

export class IconHelpCircleFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconHelpCircleFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconHelpCircleFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-help-circle-filled-large', IconHelpCircleFilledLarge);
