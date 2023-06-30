import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M11.841 4.036A6.02 6.02 0 0 0 7.66 2.348a5.801 5.801 0 0 0-2.013.35L5.21 1.454a7.359 7.359 0 0 1 7.542 1.627l-.91.954Zm1.75 2.949a7.201 7.201 0 0 0-6.545-3.736A7.875 7.875 0 0 0 3.118 4.28l.656 1.138a6.519 6.519 0 0 1 3.272-.875 5.88 5.88 0 0 1 5.329 3.027l1.216-.586ZM6.828 5.471a6.274 6.274 0 0 0-3.85 1.287L3.79 7.79a4.891 4.891 0 0 1 3.037-1.006c2.485 0 4.506 1.75 4.506 3.85h1.312c0-2.853-2.616-5.163-5.818-5.163Zm3.797 6.239A3.824 3.824 0 0 0 6.714 8a3.964 3.964 0 0 0-3.439 1.934l1.138.691a2.625 2.625 0 0 1 2.3-1.313A2.503 2.503 0 0 1 9.34 11.71c0 1.129-.105 2.222-.105 2.231l1.303.131c-.017-.052.088-1.163.088-2.362Zm-2.266 1.225a2.117 2.117 0 0 0-.254-1.514 1.889 1.889 0 0 0-1.251-.875A2.02 2.02 0 0 0 4.5 12.165l1.295.263a.7.7 0 0 1 .77-.613.579.579 0 0 1 .376.28.796.796 0 0 1 .097.586c-.122.432-.34.83-.64 1.164l.99.875c.459-.51.792-1.122.97-1.785Z"></path></svg>';

export class IconFingerprint extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--fingerprint', '', null, 'IconFingerprint');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--fingerprint');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fingerprint', '', newVal, 'IconFingerprint');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--fingerprint', newVal);
    }
}

customElements.define('icon-fingerprint', IconFingerprint);
