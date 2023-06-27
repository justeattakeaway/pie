
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--portugal"><path fill="#6DA544" d="M1 8a7 7 0 0 0 4.567 6.563L6.174 8l-.607-6.563A7 7 0 0 0 1 8Z"></path><path fill="#D80027" d="M15.002 8a7 7 0 0 0-9.435-6.563v13.126A7.002 7.002 0 0 0 15.002 8Z"></path><path fill="#FFDA44" d="M5.567 10.434a2.434 2.434 0 1 0 0-4.868 2.434 2.434 0 0 0 0 4.868Z"></path><path fill="#D80027" d="M4.197 6.783v1.518a1.369 1.369 0 1 0 2.737 0V6.78H4.199l-.002.002Z"></path><path fill="#EEE" d="M5.567 8.76a.458.458 0 0 1-.456-.456v-.605h.913v.602a.458.458 0 0 1-.457.457v.002Z"></path></svg>';

export class IconFlagPortugal extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagPortugal');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagPortugal');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-portugal', IconFlagPortugal);
