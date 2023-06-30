import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--creditCardLarge"><path d="M7.25 18.625h5.25v1.75H7.25v-1.75ZM29.125 9v14a2.625 2.625 0 0 1-2.625 2.625h-21A2.625 2.625 0 0 1 2.875 23V9A2.625 2.625 0 0 1 5.5 6.375h21A2.625 2.625 0 0 1 29.125 9Zm-24.5 0v2.188h22.75V9a.875.875 0 0 0-.875-.875h-21A.875.875 0 0 0 4.625 9Zm22.75 14v-9.188H4.625V23a.875.875 0 0 0 .875.875h21a.875.875 0 0 0 .875-.875Zm-4.121-4.996a1.479 1.479 0 0 0-1.129.516 1.496 1.496 0 1 0 0 1.96 1.497 1.497 0 1 0 1.129-2.476Z"></path></svg>';

export class IconCreditCardLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--creditCardLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--creditCardLarge', '', newVal, 'IconCreditCardLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-credit-card-large', IconCreditCardLarge);
