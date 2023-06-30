import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><g clip-path="url(#prefix__clip0_7724_3883)"><path fill-rule="evenodd" d="M3.835 1.84h8.321c1.085 0 1.969.884 1.969 1.969v10.57L8 11.465l-6.134 2.914V3.809c0-1.085.884-1.969 1.969-1.969Zm4.174 8.172 4.812 2.293V3.809a.661.661 0 0 0-.656-.657H3.844a.661.661 0 0 0-.657.657v8.496l4.822-2.293ZM8 4.492l.709 1.452 1.592.227L9.155 7.3l.271 1.584L8 8.13l-1.426.753.28-1.584-1.155-1.129 1.592-.227L8 4.49Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_7724_3883"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconBookmark extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--bookmark', '', null, 'IconBookmark');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--bookmark');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bookmark', '', newVal, 'IconBookmark');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bookmark', newVal);
    }
}

customElements.define('icon-bookmark', IconBookmark);
