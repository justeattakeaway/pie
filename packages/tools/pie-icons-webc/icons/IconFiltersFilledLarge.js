import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--filtersFilledLarge"><path d="M14.25 9v-.875A2.625 2.625 0 0 0 11.625 5.5h-.875a2.625 2.625 0 0 0-2.625 2.625V9h-5.25v1.75h5.25v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625v-.875h14.875V9H14.25Z"></path><path d="M23.875 20.375a2.625 2.625 0 0 0-2.625-2.625h-.875a2.625 2.625 0 0 0-2.625 2.625v.875H2.875V23H17.75v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625V23h5.25v-1.75h-5.25v-.875Z"></path></svg>';

export class IconFiltersFilledLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--filtersFilledLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--filtersFilledLarge', '', newVal, 'IconFiltersFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-filters-filled-large', IconFiltersFilledLarge);
