import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M24.05 5.491c-2.152-2.17-5.014-3.368-8.05-3.368-3.036 0-5.898 1.198-8.05 3.368-4.427 4.48-4.427 11.769 0 16.249L16 29.878l8.05-8.138c4.427-4.48 4.427-11.769 0-16.249Zm-1.242 15.015-6.8 6.878-6.798-6.878c-3.754-3.797-3.754-9.983 0-13.79 1.82-1.837 4.235-2.852 6.799-2.852a9.498 9.498 0 0 1 6.799 2.852c3.753 3.798 3.753 9.984 0 13.79Z"></path><path d="M14.933 8.624a.318.318 0 0 0-.315.306c-.08 1.339-.088 2.922-.062 4.489a.387.387 0 0 1-.376.385.383.383 0 0 1-.394-.377c-.026-1.548-.017-3.123.062-4.453v-.027a.335.335 0 0 0-.333-.315.318.318 0 0 0-.315.307c-.079 1.338-.087 2.931-.061 4.506 0 .21-.166.394-.376.394a.372.372 0 0 1-.28-.132c-.01-.017-.027-.017-.044-.035a.356.356 0 0 1-.07-.21c-.026-1.557-.018-3.14.061-4.48v-.026c0-.175-.157-.315-.332-.315-.035 0-.07.018-.097.026-.008 0-.026 0-.043.01a.315.315 0 0 0-.175.27c-.123 2.013-.08 4.568 0 6.79.008.228.078.438.166.63.009.027.026.044.044.07a1.7 1.7 0 0 0 .446.552c.017.008.026.017.044.035v3.01h2.082c-.026-.219-.044-.473-.079-.779-.157-1.61-.113-1.942-.113-1.942 0-.105.06-.184.148-.245.455-.316.753-.832.753-1.427v-.079c-.079-2.17-.123-4.637 0-6.588v-.027c0-.175-.158-.315-.333-.315l-.008-.008Z"></path><path d="M20.165 8.125a.354.354 0 0 0-.315-.219.35.35 0 0 0-.201.07s-.044.026-.105.088c0 0-.228.245-.551.787-.15.245-.315.56-.482.936-.367.814-.77 1.952-1.085 3.474a26.489 26.489 0 0 0-.472 3.544s0 .096.017.175c.035.14.14.245.315.28l.14.017.98.14s.08.027.105.062v1.094c-.026.384-.07.875-.13 1.46h1.627c.043-.726.113-1.994.175-3.464.113-2.73.21-6.23.017-8.286 0-.114-.026-.158-.026-.158h-.009Z"></path></svg>';

export class IconLocationPinFoodLarge extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodLarge', '', null, 'IconLocationPinFoodLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPinFoodLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodLarge', '', newVal, 'IconLocationPinFoodLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPinFoodLarge', newVal);
    }
}

customElements.define('icon-location-pin-food-large', IconLocationPinFoodLarge);
