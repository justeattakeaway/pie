import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--numeroSymbolLarge"><path d="M26.5 21.25V19.5h-7v1.75h7Z"></path><path d="M23 17.75a5.11 5.11 0 0 1-1.978-.359 4.374 4.374 0 0 1-1.417-.971 4.006 4.006 0 0 1-.875-1.444 5.608 5.608 0 0 1 0-3.5 3.99 3.99 0 0 1 2.275-2.423A4.952 4.952 0 0 1 23 8.703a4.953 4.953 0 0 1 1.977.358 3.78 3.78 0 0 1 1.4.98c.386.418.684.909.875 1.444.189.564.283 1.155.28 1.75 0 .595-.094 1.185-.28 1.75a4.235 4.235 0 0 1-.875 1.444c-.393.418-.87.75-1.4.971a5.108 5.108 0 0 1-1.977.35Zm-2.188-4.533c-.04.72.164 1.432.578 2.022A1.934 1.934 0 0 0 23 16a1.916 1.916 0 0 0 1.592-.744c.414-.59.617-1.302.578-2.021a3.22 3.22 0 0 0-.578-2.03A1.909 1.909 0 0 0 23 10.47a1.925 1.925 0 0 0-1.61.735 3.22 3.22 0 0 0-.56 2.03l-.018-.018Z"></path><path d="M14.092 7.25v13.02L8.002 7.25H4.625v17.5h2.362V10.435l6.694 14.315h2.774V7.25h-2.362Z"></path></svg>';

export class IconNumeroSymbolLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconNumeroSymbolLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconNumeroSymbolLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-numero-symbol-large', IconNumeroSymbolLarge);
