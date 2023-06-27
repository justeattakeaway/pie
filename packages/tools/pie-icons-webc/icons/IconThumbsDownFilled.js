
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--thumbsDownFilled"><path d="M4.404 5.016c-.01 1.234.17 2.461.534 3.64H1.874V2.094h2.992a8.085 8.085 0 0 0-.463 2.922Zm9.8 1.89L13.18 3.625a2.406 2.406 0 0 0-2.24-1.54H6.25a6.685 6.685 0 0 0-.569 2.922 9.984 9.984 0 0 0 .648 3.737l2.546 5.162h.402a1.75 1.75 0 0 0 1.75-2.135l-.402-2.389 2.45-.507a1.531 1.531 0 0 0 1.191-1.338 1.558 1.558 0 0 0-.062-.63Z"></path></svg>';

export class IconThumbsDownFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconThumbsDownFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconThumbsDownFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-thumbs-down-filled', IconThumbsDownFilled);
