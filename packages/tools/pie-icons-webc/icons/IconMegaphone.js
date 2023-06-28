import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--megaphone"><path d="M14.781 7.125a2.835 2.835 0 0 0-2.625-2.817v-3.09h-1.479l-.175.15a27.627 27.627 0 0 1-1.986 1.46c-.682.456-1.137.692-1.75 1.016H2.75a1.54 1.54 0 0 0-1.531 1.531v3.5a1.531 1.531 0 0 0 1.093 1.461l.762 4.445h2.852l.744-4.375h.123c.586.324 1.163.656 1.75 1.015.586.359 1.356.945 1.986 1.462l.175.148h1.478V9.943a2.835 2.835 0 0 0 2.6-2.818Zm-12.25-1.75a.219.219 0 0 1 .219-.219h2.844v3.938H2.75a.219.219 0 0 1-.219-.219v-3.5Zm2.293 8.094h-.648l-.551-3.063h1.75l-.551 3.063Zm6.02-1.969a23.316 23.316 0 0 0-1.61-1.146A24.508 24.508 0 0 0 6.906 8.97V5.28a24.5 24.5 0 0 0 2.328-1.357c.516-.358 1.094-.743 1.61-1.172v8.75Zm1.312-2.844V5.62a1.523 1.523 0 0 1 0 3.01v.026Z"></path></svg>';

export class IconMegaphone extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconMegaphone');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconMegaphone');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-megaphone', IconMegaphone);
