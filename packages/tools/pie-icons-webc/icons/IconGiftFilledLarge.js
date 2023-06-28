import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--giftFilledLarge"><path d="M16.831 28.215h7.044A2.633 2.633 0 0 0 26.5 25.59V14.215h-9.669v14Z"></path><path d="M5.5 25.59a2.633 2.633 0 0 0 2.625 2.625h6.956v-14H5.5V25.59Z"></path><path d="M16.849 8.09v-.017a3.064 3.064 0 0 1 3.01-2.538c.175 0 .35.026.525.053v-1.75c-.175-.018-.341-.053-.525-.053a4.801 4.801 0 0 0-3.894 1.995 4.801 4.801 0 0 0-3.894-1.995c-.149 0-.288.026-.437.044v1.75c.149-.018.288-.044.437-.044a3.063 3.063 0 0 1 3.01 2.538v.017H3.75v4.375h11.331V8.081h1.75v4.375H28.25V8.09H16.849Z"></path></svg>';

export class IconGiftFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconGiftFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconGiftFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-gift-filled-large', IconGiftFilledLarge);
