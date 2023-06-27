
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--appSuccessLarge"><path d="M22.125 2.875H9.875A2.625 2.625 0 0 0 7.25 5.5v21a2.625 2.625 0 0 0 2.625 2.625h12.25A2.625 2.625 0 0 0 24.75 26.5v-21a2.625 2.625 0 0 0-2.625-2.625ZM23 26.5a.875.875 0 0 1-.875.875H9.875A.875.875 0 0 1 9 26.5v-21a.875.875 0 0 1 .875-.875h2.739l.691 1.75h5.39l.691-1.75h2.739A.875.875 0 0 1 23 5.5v21Zm-3.684-14.621 1.243 1.242-5.25 5.25a.875.875 0 0 1-1.243 0l-2.625-2.625 1.243-1.242 2.004 2.012 4.628-4.637Z"></path></svg>';

export class IconAppSuccessLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconAppSuccessLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconAppSuccessLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-app-success-large', IconAppSuccessLarge);
