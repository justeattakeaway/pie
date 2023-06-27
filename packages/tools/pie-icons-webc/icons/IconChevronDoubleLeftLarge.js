
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chevronDoubleLeftLarge"><path d="M18.021 5.876 7.54 16a.131.131 0 0 0 0 .096l10.5 10.063-1.225 1.216L6.375 17.33a1.908 1.908 0 0 1 0-2.625l10.448-10.08 1.198 1.251Z"></path><path d="M26.194 5.876 15.703 16a.131.131 0 0 0 0 .096l10.5 10.063-1.226 1.216-10.5-10.063a1.908 1.908 0 0 1 0-2.625L24.995 4.626l1.199 1.251Z"></path></svg>';

export class IconChevronDoubleLeftLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconChevronDoubleLeftLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconChevronDoubleLeftLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-chevron-double-left-large', IconChevronDoubleLeftLarge);
