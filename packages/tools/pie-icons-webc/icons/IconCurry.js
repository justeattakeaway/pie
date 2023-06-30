import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--curry"><path d="m14.834 3.52-1.12-.691-2.048 3.325a2.388 2.388 0 0 0-1.916-.972 2.667 2.667 0 0 0-.455 0 2.398 2.398 0 0 0-4.375 0 2.667 2.667 0 0 0-.455 0A2.397 2.397 0 0 0 2.12 7.344h-.875v1.531a4.148 4.148 0 0 0 2.73 3.894l.262 1.137h7.578l.263-1.137a4.147 4.147 0 0 0 2.703-3.894V7.344H12.48l2.354-3.824ZM5.06 6.652a.621.621 0 0 0 .63 0 .683.683 0 0 0 .359-.525 1.076 1.076 0 0 1 2.152 0 .683.683 0 0 0 .359.525.621.621 0 0 0 .63 0 1.111 1.111 0 0 1 1.619.692H3.44a1.111 1.111 0 0 1 1.619-.692Zm8.409 2.223a2.834 2.834 0 0 1-2.135 2.739l-.385.105-.201.875H5.253l-.202-.875-.385-.105a2.835 2.835 0 0 1-2.135-2.739v-.219H13.47v.219Z"></path></svg>';

export class IconCurry extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--curry');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--curry', '', newVal, 'IconCurry');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-curry', IconCurry);
