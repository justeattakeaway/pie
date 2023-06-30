import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--trash"><path d="M9.864 1.219H6.136L5.49 2.53h5.022L9.864 1.22Z"></path><path d="M1.875 3.844v1.312h.962l.788 8.243a1.531 1.531 0 0 0 1.522 1.382h5.723a1.53 1.53 0 0 0 1.505-1.382l.779-8.243h.971V3.844H1.875Zm9.205 9.406a.228.228 0 0 1-.219.201H5.14a.228.228 0 0 1-.219-.201l-.77-8.094h7.7l-.77 8.094Z"></path></svg>';

export class IconTrash extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--trash');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--trash', '', newVal, 'IconTrash');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-trash', IconTrash);
