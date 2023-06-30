import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M12.016 4.789a5.338 5.338 0 0 0-8.032 0L1.06 8l2.923 3.211a5.337 5.337 0 0 0 8.032 0l2.923-3.21-2.923-3.212Zm-.971 5.539a4.025 4.025 0 0 1-6.125 0L2.838 8l2.117-2.327a4.025 4.025 0 0 1 6.125 0L13.162 8l-2.117 2.328ZM6.303 6.303a2.406 2.406 0 1 0 3.395 0 2.38 2.38 0 0 0-3.395 0ZM8.77 8.77a1.085 1.085 0 0 1-1.54 0 1.094 1.094 0 1 1 1.54 0Z"></path></svg>';

export class IconEyeOn extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOn', '', null, 'IconEyeOn');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOn');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--eyeOn', '', newVal, 'IconEyeOn');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--eyeOn', newVal);
    }
}

customElements.define('icon-eye-on', IconEyeOn);
