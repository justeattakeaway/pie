
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cashCardFilled"><path d="M11.605 4.771v-.875a1.426 1.426 0 0 0-1.418-1.417H2.532a1.426 1.426 0 0 0-1.426 1.417v.875h10.5Z"></path><path d="M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 0 0 1.426 1.426h.753V6.75Z"></path><path d="M4.596 8.061v5.793h10.08V8.06H4.596Zm5.04 3.973a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154Z"></path></svg>';

export class IconCashCardFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCashCardFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCashCardFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-cash-card-filled', IconCashCardFilled);
