import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--moonLarge"><path d="M15.125 16a8.794 8.794 0 0 1 6.93-8.558 10.612 10.612 0 0 0-.805-.524 10.213 10.213 0 0 0-1.321-.64A10.317 10.317 0 0 0 16 5.5a10.5 10.5 0 1 0 0 21c1.348 0 2.683-.265 3.929-.779.455-.18.897-.394 1.321-.639.28-.166.551-.34.805-.524A8.793 8.793 0 0 1 15.125 16ZM16 24.75a8.75 8.75 0 1 1 1.811-17.308 10.5 10.5 0 0 0 0 17.116A8.834 8.834 0 0 1 16 24.75Z"></path></svg>';

export class IconMoonLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--moonLarge', '', null, 'IconMoonLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--moonLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--moonLarge', '', newVal, 'IconMoonLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-moon-large', IconMoonLarge);
