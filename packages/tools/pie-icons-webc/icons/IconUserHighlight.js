import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userHighlight"><path d="M8.656 1.875H7.344V4.5h1.312V1.875Z"></path><path d="m11.04 3.085-1.003 2.003 1.174.587 1.003-2.002-1.174-.588Z"></path><path d="m4.961 3.082-1.174.587L4.79 5.673l1.173-.588-1.002-2.003Z"></path><path d="M12.261 12.76a3.29 3.29 0 0 0-2.441-2.047l.087-.07a2.695 2.695 0 0 0 0-3.824 2.774 2.774 0 0 0-3.815 0 2.695 2.695 0 0 0 0 3.824l.088.07a3.29 3.29 0 0 0-2.441 2.047l-.499 1.365h1.4l.332-.875a2.022 2.022 0 0 1 1.943-1.26h2.17a2.02 2.02 0 0 1 1.942 1.26l.333.875h1.4l-.499-1.365Zm-5.25-5.014a1.435 1.435 0 0 1 1.96 0 1.391 1.391 0 1 1-1.96 0Z"></path></svg>';

export class IconUserHighlight extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconUserHighlight');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconUserHighlight');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-user-highlight', IconUserHighlight);
