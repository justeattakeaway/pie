
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userLarge"><path d="M23.823 22.501a6.011 6.011 0 0 0-5.723-3.876H13.91a6.029 6.029 0 0 0-5.731 3.894l-1.182 3.316h1.83l.98-2.756a4.296 4.296 0 0 1 4.103-2.704H18.1a4.305 4.305 0 0 1 4.104 2.747l.971 2.757h1.838l-1.19-3.378Z"></path><path d="M14.994 16.656a4.437 4.437 0 0 0 5.32-5.329 4.426 4.426 0 0 0-7.442-2.11 4.428 4.428 0 0 0 2.122 7.44Zm.481-7a2.704 2.704 0 1 1-2.1 2.153 2.704 2.704 0 0 1 2.1-2.118v-.035Z"></path></svg>;';

export class IconUserLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconUserLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconUserLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-user-large', IconUserLarge);
