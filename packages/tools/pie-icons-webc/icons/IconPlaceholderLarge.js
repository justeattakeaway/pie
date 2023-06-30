import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path fill-rule="evenodd" d="M.166 0h31.668L32 .166v31.668l-.166.166H.166L0 31.834V.166L.166 0Zm31.502 31.668V.33H.33v31.337h31.337ZM6.537 2h18.926A4.537 4.537 0 0 1 30 6.537v18.926A4.537 4.537 0 0 1 25.463 30H6.537A4.537 4.537 0 0 1 2 25.463V6.537A4.537 4.537 0 0 1 6.537 2Z" clip-rule="evenodd"></path></svg>';

export class IconPlaceholderLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholderLarge', '', null, 'IconPlaceholderLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--placeholderLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--placeholderLarge', '', newVal, 'IconPlaceholderLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--placeholderLarge', newVal);
    }
}

customElements.define('icon-placeholder-large', IconPlaceholderLarge);
