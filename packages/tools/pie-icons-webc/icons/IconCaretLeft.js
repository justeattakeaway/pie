
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--caretLeft"><path d="M11.588 2.925a1.269 1.269 0 0 0-.613-.175 1.286 1.286 0 0 0-.744.227L4.29 7.064a1.286 1.286 0 0 0-.578 1.102 1.313 1.313 0 0 0 .613 1.085l5.941 3.771c.212.134.458.204.709.202a1.303 1.303 0 0 0 1.313-1.313V4.09a1.32 1.32 0 0 0-.7-1.164Zm-.613 8.986L5.025 8.14l5.95-4.051v7.822Z"></path></svg>';

export default class IconCaretLeft extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCaretLeft');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCaretLeft');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-caret-left', IconCaretLeft);
