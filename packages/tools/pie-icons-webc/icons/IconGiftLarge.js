import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--giftLarge"><path d="M16.875 8.125a3.045 3.045 0 0 1 2.975-2.546c.176 0 .352.017.525.052v-1.75a3.439 3.439 0 0 0-.525-.052A4.804 4.804 0 0 0 16 5.824a4.803 4.803 0 0 0-3.938-1.995 3.7 3.7 0 0 0-.437.044v1.75c.146-.013.292-.013.438 0a3.062 3.062 0 0 1 3.01 2.502H3.75v6.125H5.5v11.375a2.625 2.625 0 0 0 2.625 2.625h15.75a2.625 2.625 0 0 0 2.625-2.625V14.25h1.75V8.125H16.875ZM15.125 26.5h-7a.875.875 0 0 1-.875-.875V14.25h7.875V26.5Zm0-14H5.5V9.875h9.625V12.5Zm9.625 13.125a.875.875 0 0 1-.875.875h-7V14.25h7.875v11.375ZM26.5 12.5h-9.625V9.875H26.5V12.5Z"></path></svg>';

export class IconGiftLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconGiftLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconGiftLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-gift-large', IconGiftLarge);
