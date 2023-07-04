import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--over21Filled"><path d="M12.375 2.313h-8.75a1.313 1.313 0 0 0-1.313 1.312v8.75a1.313 1.313 0 0 0 1.313 1.313h8.75a1.313 1.313 0 0 0 1.313-1.313v-8.75a1.313 1.313 0 0 0-1.313-1.313ZM6.617 9.947H3.625v-.573c0-.8.464-1.138 1.129-1.492.665-.354.875-.508.875-.875 0-.368-.254-.477-.617-.477a1.129 1.129 0 0 0-.875.394l-.481-.59a1.842 1.842 0 0 1 1.421-.596c.875 0 1.427.473 1.427 1.243 0 .687-.438 1.107-1.15 1.452-.644.324-.876.503-.876.722v.044H6.6l.018.748Zm2.354 0H8.14V6.8l-.683.254-.28-.704 1.195-.538h.6v4.134Zm3.404-1.51H11.5v.876h-.875v-.876H9.75v-.874h.875v-.875h.875v.875h.875v.875Z"></path></svg>';

export class IconOver21Filled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--over21Filled', '', null, 'IconOver21Filled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--over21Filled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--over21Filled', '', newVal, 'IconOver21Filled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-over21-filled', IconOver21Filled);
