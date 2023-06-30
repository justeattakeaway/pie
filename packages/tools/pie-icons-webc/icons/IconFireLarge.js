import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M22.125 11.625 16 5.5l-6.125 6.125a8.75 8.75 0 0 0 0 12.32 8.574 8.574 0 0 0 12.198 0 8.75 8.75 0 0 0 .052-12.32ZM11.18 12.85 16 7.968l4.848 4.9a7 7 0 0 1 1.128 8.33c-1.75-1.75-3.5-3.544-5.31-5.25l-.622-.604-.613.612-5.355 5.338a7 7 0 0 1 1.077-8.427l.026-.017ZM16 24.75a6.764 6.764 0 0 1-4.847-2.03l4.908-4.97a506.56 506.56 0 0 1 4.874 4.839l-.087.087A6.763 6.763 0 0 1 16 24.75Z"></path></svg>';

export class IconFireLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--fireLarge', '', null, 'IconFireLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--fireLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fireLarge', '', newVal, 'IconFireLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--fireLarge', newVal);
    }
}

customElements.define('icon-fire-large', IconFireLarge);
