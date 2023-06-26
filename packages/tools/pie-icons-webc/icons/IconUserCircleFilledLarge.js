
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userCircleFilledLarge"><path d="M16 3.75a12.25 12.25 0 0 0-9.293 20.212c1.27-4.173 4.63-5.337 6.397-5.337h5.783c1.75 0 5.128 1.164 6.397 5.346A12.25 12.25 0 0 0 16 3.75Zm0 13.125a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75Z"></path><path d="M16 15.125a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"></path><path d="M18.887 20.375h-5.783s-4.025.07-4.98 4.996a12.25 12.25 0 0 0 15.75 0c-.962-4.926-4.952-4.996-4.987-4.996Z"></path></svg>;';

export class IconUserCircleFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconUserCircleFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconUserCircleFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-user-circle-filled-large', IconUserCircleFilledLarge);
