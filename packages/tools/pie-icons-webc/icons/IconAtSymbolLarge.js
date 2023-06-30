import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--atSymbolLarge"><path d="M15.886 27.086a10.577 10.577 0 0 1-4.165-.805 10.14 10.14 0 0 1-3.342-2.248 10.405 10.405 0 0 1-2.205-3.448 11.83 11.83 0 0 1-.796-4.375 12.906 12.906 0 0 1 .796-4.585 10.5 10.5 0 0 1 2.222-3.579 9.8 9.8 0 0 1 3.386-2.31 10.946 10.946 0 0 1 4.305-.822c1.379-.009 2.75.204 4.06.63A9.46 9.46 0 0 1 23.5 7.442a8.97 8.97 0 0 1 2.284 3.142 10.64 10.64 0 0 1 .874 4.375 8.95 8.95 0 0 1-.463 2.791 6.676 6.676 0 0 1-1.181 2.161 5.248 5.248 0 0 1-1.75 1.383 5.04 5.04 0 0 1-2.197.481H19.44v-2.126h-.175c-.3.712-.802 1.32-1.444 1.75a4.007 4.007 0 0 1-2.319.691 4.97 4.97 0 0 1-2.056-.429 4.76 4.76 0 0 1-1.636-1.286 5.855 5.855 0 0 1-1.059-1.881A7.34 7.34 0 0 1 10.321 16a7 7 0 0 1 .429-2.45 5.853 5.853 0 0 1 1.059-1.925 4.926 4.926 0 0 1 1.636-1.242 4.838 4.838 0 0 1 2.056-.438 4.19 4.19 0 0 1 2.336.647 3.44 3.44 0 0 1 1.427 1.75h.175v-2.108h1.916V20.27a2.625 2.625 0 0 0 1.339-.376c.445-.27.822-.638 1.102-1.076.34-.524.588-1.1.735-1.707.183-.732.271-1.485.263-2.24a9.171 9.171 0 0 0-.7-3.745 7.193 7.193 0 0 0-1.899-2.564 7.604 7.604 0 0 0-2.782-1.478c-1.08-.318-2.2-.477-3.326-.473a9.266 9.266 0 0 0-3.543.639 7.779 7.779 0 0 0-2.748 1.925 8.592 8.592 0 0 0-1.75 3.01 11.803 11.803 0 0 0-.63 3.981 10.5 10.5 0 0 0 .648 3.736 8.654 8.654 0 0 0 1.759 2.923A8.173 8.173 0 0 0 12.5 24.75a8.356 8.356 0 0 0 3.386.674 9.705 9.705 0 0 0 2.118-.219 7.877 7.877 0 0 0 1.75-.604l.621 1.488c-.643.3-1.314.538-2.004.709-.813.198-1.648.295-2.485.288Zm0-15.356a3.201 3.201 0 0 0-2.511 1.067A4.733 4.733 0 0 0 12.439 16a4.707 4.707 0 0 0 .936 3.229 3.203 3.203 0 0 0 2.494 1.067 3.149 3.149 0 0 0 2.45-1.067 4.664 4.664 0 0 0 .98-3.229 4.69 4.69 0 0 0-.963-3.22 3.15 3.15 0 0 0-2.45-1.05Z"></path></svg>';

export class IconAtSymbolLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--atSymbolLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--atSymbolLarge', '', newVal, 'IconAtSymbolLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-at-symbol-large', IconAtSymbolLarge);
