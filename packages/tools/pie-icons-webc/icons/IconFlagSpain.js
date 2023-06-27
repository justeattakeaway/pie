
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--spain"><path fill="#FFDA44" d="M1 8c0 .856.153 1.677.438 2.434l6.562.61 6.562-.61a6.99 6.99 0 0 0 0-4.868L8 4.956l-6.563.61A6.99 6.99 0 0 0 1 8Z"></path><path fill="#D80027" d="M14.562 5.566A7.001 7.001 0 0 0 4.003 2.254a7.002 7.002 0 0 0-2.566 3.312h13.125ZM1.438 10.434A7.002 7.002 0 0 0 8 15a6.999 6.999 0 0 0 6.562-4.566H1.438Z"></path></svg>';

export default class IconFlagSpain extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagSpain');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagSpain');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-spain', IconFlagSpain);
