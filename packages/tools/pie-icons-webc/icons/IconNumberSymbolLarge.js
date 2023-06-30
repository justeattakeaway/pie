import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--numberSymbolLarge"><path d="m23 13.375.245-1.75H20.62l.63-4.375H19.5l-.639 4.375h-4.375l.639-4.375h-1.75l-.639 4.375H9.997l-.245 1.75h2.687l-.77 5.25h-2.67l-.244 1.75h2.625l-.63 4.375h1.75l.639-4.375h4.375l-.64 4.375h1.75l.64-4.375h2.695l.245-1.75H19.56l.814-5.25H23Zm-5.189 5.25h-4.375l.814-5.25h4.375l-.814 5.25Z"></path></svg>';

export class IconNumberSymbolLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--numberSymbolLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--numberSymbolLarge', '', newVal, 'IconNumberSymbolLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-number-symbol-large', IconNumberSymbolLarge);
