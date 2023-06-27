
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--heartLarge"><path d="M16 27.751 5.176 16.63a7.315 7.315 0 0 1 0-9.984 6.676 6.676 0 0 1 9.573 0L16 7.88l1.277-1.225a6.668 6.668 0 0 1 9.573 0 7.315 7.315 0 0 1 0 9.984L16 27.75ZM9.963 6.375a4.926 4.926 0 0 0-3.5 1.505 5.504 5.504 0 0 0 0 7.525L16 25.249l9.573-9.844a5.504 5.504 0 0 0 0-7.525 4.927 4.927 0 0 0-3.535-1.505 4.978 4.978 0 0 0-3.562 1.523l-1.601 1.54a1.321 1.321 0 0 1-1.838 0l-1.53-1.558a4.944 4.944 0 0 0-3.544-1.505Z"></path></svg>';

export default class IconHeartLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconHeartLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconHeartLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-heart-large', IconHeartLarge);
