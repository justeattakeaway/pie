import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><g clip-path="url(#prefix__clip0_1597_572)"><path d="M8.184 6.501h-3.44v1.356h3.44V6.502Z"></path><path d="M8.184 9.135h-3.44v1.356h3.44V9.135Z"></path><path d="M14.212 1.627a1.356 1.356 0 0 0-.875-.56L7.265 0A1.374 1.374 0 0 0 5.69 1.111l-.166.963h1.32l.123-.726a.061.061 0 0 1 .07-.044l6.073 1.041.044.079-1.085 6.326v3.036a1.356 1.356 0 0 0 .97-1.067l1.4-8.094a1.391 1.391 0 0 0-.227-.998Z"></path><path d="M9.54 14H3.415a1.365 1.365 0 0 1-1.365-1.365V4.428A1.356 1.356 0 0 1 3.389 3.07h6.125a1.357 1.357 0 0 1 1.365 1.357v8.19A1.366 1.366 0 0 1 9.539 14ZM3.415 4.375a.061.061 0 0 0-.061.061v8.19a.061.061 0 0 0 .06.062H9.54a.07.07 0 0 0 .07-.062V4.428a.07.07 0 0 0-.07-.053H3.415Z"></path></g><defs><clipPath id="prefix__clip0_1597_572"><rect width="14" height="14" transform="translate(1)"></rect></clipPath></defs></svg>';

export class IconCopy extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--copy', '', null, 'IconCopy');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--copy');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--copy', '', newVal, 'IconCopy');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--copy', newVal);
    }
}

customElements.define('icon-copy', IconCopy);
