import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--orderFilledLarge"><path d="M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l3.561-1.898L12.5 28.38l3.5-1.968 3.5 1.968 3.43-1.977 3.57 1.898V6.375a2.625 2.625 0 0 0-2.625-2.625ZM19.5 21.25h-7V19.5h7v1.75Zm1.75-3.5h-10.5V16h10.5v1.75Zm-8.75-6.816 1.242-1.243 1.567 1.575 3.754-3.762 1.312 1.242-4.996 4.988-2.879-2.8Z"></path></svg>';

export class IconOrderFilledLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--orderFilledLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--orderFilledLarge', '', newVal, 'IconOrderFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-order-filled-large', IconOrderFilledLarge);
