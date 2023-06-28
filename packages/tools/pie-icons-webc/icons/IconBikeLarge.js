import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bikeLarge"><g clip-path="url(#prefix__clip0_2_1966)"><path fill-rule="evenodd" d="M23.438 14.329a5.94 5.94 0 0 1 .875-.079 5.687 5.687 0 1 1-2.547.613l-.927-3.238h-.709a1.75 1.75 0 0 0-1.505.875l-3.701 6.142c-.184.298-.41.566-.674.797a4.77 4.77 0 0 1 0 .498 5.688 5.688 0 1 1-1.671-4.025l-1.54-5.162H9L8.414 9h5.836v1.75h-1.383L14.434 16l2.677-4.428a3.5 3.5 0 0 1 3.002-1.697h.2l-.367-1.295a2.625 2.625 0 0 1 1.61-3.185L23 4.861v1.864l-.875.306a.875.875 0 0 0-.499 1.094l1.811 6.204ZM6.521 23.314a3.92 3.92 0 0 0 5.925-3.035 3.07 3.07 0 0 1-.568.061H8.983l-.587-1.75h3.5c.113-.004.224-.022.333-.052a3.938 3.938 0 1 0-5.707 4.776Zm15.413-.23c.685.517 1.52.794 2.378.791a3.937 3.937 0 0 0 0-7.875 2.987 2.987 0 0 0-.438.044l1.286 4.331h-1.82l-1.094-3.78a3.928 3.928 0 0 0-.312 6.49Z" clip-rule="evenodd"></path><path d="M2.84 10.75h4.41L6.664 9h-4.41l.586 1.75Z"></path><path d="M7.539 11.625h-2.94l.595 1.75h2.931l-.586-1.75Z"></path></g><defs><clipPath id="prefix__clip0_2_1966"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconBikeLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconBikeLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconBikeLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-bike-large', IconBikeLarge);
