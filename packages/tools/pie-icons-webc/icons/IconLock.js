import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M7.344 11.5V8.875h1.312V11.5H7.344Z"></path><path fill-rule="evenodd" d="M3.844 5.375v1.094h-1.75v6.221l.245.201A9.362 9.362 0 0 0 8 14.781a9.205 9.205 0 0 0 5.661-1.89l.245-.201V6.469h-1.75V5.375a4.156 4.156 0 1 0-8.312 0Zm7 0v1.094H5.156V5.375a2.844 2.844 0 1 1 5.688 0Zm-7.438 6.676A8.094 8.094 0 0 0 8 13.47a7.945 7.945 0 0 0 4.594-1.418v-4.27H3.406v4.27Z" clip-rule="evenodd"></path></svg>';

export class IconLock extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--lock', '', null, 'IconLock');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--lock');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--lock', '', newVal, 'IconLock');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--lock', newVal);
    }
}

customElements.define('icon-lock', IconLock);
