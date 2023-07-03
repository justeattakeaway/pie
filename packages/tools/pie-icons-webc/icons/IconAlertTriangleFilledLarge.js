import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--alertTriangleFilledLarge"><path d="m28.582 21.731-10.5-16.817a2.432 2.432 0 0 0-4.147 0L3.435 21.73a2.573 2.573 0 0 0-.07 2.625A2.415 2.415 0 0 0 5.5 25.625h21a2.415 2.415 0 0 0 2.135-1.277 2.573 2.573 0 0 0-.053-2.617ZM16 21.906a1.53 1.53 0 1 1 0-3.061 1.53 1.53 0 0 1 0 3.061Zm.875-11.156v6.125h-1.75V10.75h1.75Z"></path></svg>';

export class IconAlertTriangleFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilledLarge', '', null, 'IconAlertTriangleFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--alertTriangleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangleFilledLarge', '', newVal, 'IconAlertTriangleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-alert-triangle-filled-large', IconAlertTriangleFilledLarge);
