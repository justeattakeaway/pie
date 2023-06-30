import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M10.829 16.201h1.75v1.951h1.951v1.75H12.58v1.952h-1.75v-1.951H8.878v-1.75h1.95V16.2Z"></path><path fill-rule="evenodd" d="M24.103 12.727c.288.184.56.394.77.665l.008-.008 2.564 3.264-.105 7.796c0 .752-.297 1.479-.849 2.03-.56.56-1.312.875-2.117.875h-4.06a2.97 2.97 0 0 1-2.126-.884c-.026-.017-.044-.044-.061-.07-.018.018-.031.037-.044.057-.013.02-.026.04-.044.057a2.571 2.571 0 0 1-1.864.84H7.233a2.52 2.52 0 0 1-1.864-.823 2.883 2.883 0 0 1-.752-2.161l.848-12.232a2.511 2.511 0 0 1-.997-1.995 2.52 2.52 0 0 1 2.52-2.52h9.423a2.52 2.52 0 0 1 2.52 2.52c0 .813-.393 1.53-.997 1.995l.245 3.508 2.109-2.38c.183-.21.411-.385.647-.534H20.2v-1.75h4.69v1.75h-.787ZM16.166 25.6a.788.788 0 0 0 .587-.271h.009c.21-.22.314-.526.288-.85l-.822-11.75H7.18l-.822 11.76c-.018.323.087.63.289.848a.75.75 0 0 0 .586.263h8.933ZM6.988 10.916h9.424a.771.771 0 0 0 0-1.54H6.988a.771.771 0 0 0 0 1.54Zm15.575 3.098a1.252 1.252 0 0 0-.963.411l-2.529 2.861v.866h6.607v-.9l-2.179-2.774a1.25 1.25 0 0 0-.936-.464Zm1.811 11.594c.332 0 .648-.123.875-.36h.009c.21-.218.332-.498.332-.804l.061-4.541h-6.553v4.523c0 .315.114.604.332.823.236.236.552.359.884.359h4.06Z" clip-rule="evenodd"></path></svg>';

export class IconPharmacyLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--pharmacyLarge', '', null, 'IconPharmacyLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--pharmacyLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pharmacyLarge', '', newVal, 'IconPharmacyLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pharmacyLarge', newVal);
    }
}

customElements.define('icon-pharmacy-large', IconPharmacyLarge);
