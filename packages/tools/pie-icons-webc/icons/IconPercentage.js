import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--percentage"><g clip-path="url(#prefix__clip0_15_528)"><path d="M10.835 2.75 3.58 13.25h1.593l7.262-10.5h-1.601Z"></path><path d="M12.375 7.869a2.625 2.625 0 0 0-2.625 2.756 2.625 2.625 0 0 0 5.25 0 2.625 2.625 0 0 0-2.625-2.756Zm0 4.2a1.313 1.313 0 0 1-1.348-1.444 1.313 1.313 0 0 1 2.625 0 1.313 1.313 0 0 1-1.277 1.444Z"></path><path d="M6.197 5.375a2.625 2.625 0 0 0-2.572-2.756A2.625 2.625 0 0 0 1 5.375a2.625 2.625 0 0 0 2.625 2.756 2.625 2.625 0 0 0 2.572-2.756Zm-3.92 0a1.313 1.313 0 1 1 2.625 0 1.313 1.313 0 0 1-2.625 0Z"></path></g><defs><clipPath id="prefix__clip0_15_528"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconPercentage extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--percentage');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--percentage', '', newVal, 'IconPercentage');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-percentage', IconPercentage);
