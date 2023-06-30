import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--foundations"><g clip-path="url(#prefix__clip0_7066_3748)"><path d="M10.739 1.945H5.252v5.486h5.487V1.945ZM9.426 6.119H6.565V3.258h2.861v2.86Z"></path><path d="M1.875 14.169h5.486V8.683H1.875v5.486Zm1.313-4.174h2.86v2.861h-2.86V9.995Z"></path><path d="M8.621 8.674v5.486h5.486V8.674H8.622Zm4.174 4.174H9.934V9.986h2.861v2.861Z"></path></g><defs><clipPath id="prefix__clip0_7066_3748"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconFoundations extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--foundations');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--foundations', '', newVal, 'IconFoundations');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-foundations', IconFoundations);
