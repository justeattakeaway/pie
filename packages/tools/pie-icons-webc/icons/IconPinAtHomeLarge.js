
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pinAtHomeLarge"><path d="M13.375 18.625a1.313 1.313 0 1 1 0 2.626 1.313 1.313 0 0 1 0-2.626Zm3.063 1.313a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.625 0Zm4.375 0a1.313 1.313 0 1 0 2.625 0 1.313 1.313 0 0 0-2.625 0Zm5.687-1.313a1.313 1.313 0 1 0 0 2.626 1.313 1.313 0 0 0 0-2.626ZM17.461 4.109a3.15 3.15 0 0 0-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V23h-1.75v1.75H8.125V11.231a55.837 55.837 0 0 1 7.253-5.582 1.444 1.444 0 0 1 1.216 0 55.79 55.79 0 0 1 7.28 5.582v5.644h1.75v-4.078a130.695 130.695 0 0 1 2.249 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511Z"></path></svg>;';

export class IconPinAtHomeLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPinAtHomeLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPinAtHomeLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pin-at-home-large', IconPinAtHomeLarge);
