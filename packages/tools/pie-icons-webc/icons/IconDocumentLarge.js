import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--documentLarge"><path d="M18.625 3.75h-14v25.375h22.75V12.5a8.749 8.749 0 0 0-8.75-8.75Zm6.773 7h-5.023V5.728a7.044 7.044 0 0 1 5.023 5.022Zm.227 16.625H6.375V5.5h12.25v7h7v14.875Zm-10.5-14H10.75v-1.75h4.375v1.75Zm-4.375 7h7v1.75h-7v-1.75Zm0-4.375h10.5v1.75h-10.5V16Z"></path></svg>';

export class IconDocumentLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconDocumentLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconDocumentLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-document-large', IconDocumentLarge);
