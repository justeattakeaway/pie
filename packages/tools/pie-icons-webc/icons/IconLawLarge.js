import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path fill-rule="evenodd" d="m19.21 19.255-1.233-1.234v-.009l.849-.848-1.908-1.908L6.103 26.071 4.87 24.837l10.806-10.814-1.881-1.882-.85.849-1.233-1.234 6.921-6.921 1.234 1.234-.849.848 5.032 5.032.848-.849 1.234 1.234-6.921 6.921ZM17.786 8.16l-2.757 2.756 5.032 5.023 2.747-2.748-5.022-5.031Z" clip-rule="evenodd"></path><path d="m26.08 23.14-.472-1.741h-8.506l-.472 1.741h9.45Z"></path><path d="M26.692 25.476H16.01l-.464 1.75h11.62l-.473-1.75Z"></path></svg>';

export class IconLawLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--lawLarge', '', null, 'IconLawLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--lawLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lawLarge', '', newVal, 'IconLawLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--lawLarge', newVal);
    }
}

customElements.define('icon-law-large', IconLawLarge);
