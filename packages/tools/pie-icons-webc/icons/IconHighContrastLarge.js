import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75Zm0 22.759c-5.793 0-10.509-4.716-10.509-10.509S10.207 5.491 16 5.491 26.509 10.207 26.509 16 21.793 26.509 16 26.509Z"></path><path d="M7.241 16c0 4.83 3.929 8.759 8.759 8.759V7.24c-4.83 0-8.759 3.929-8.759 8.759Z"></path></svg>';

export class IconHighContrastLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--highContrastLarge', '', null, 'IconHighContrastLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--highContrastLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--highContrastLarge', '', newVal, 'IconHighContrastLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--highContrastLarge', newVal);
    }
}

customElements.define('icon-high-contrast-large', IconHighContrastLarge);
