import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pinAtHomeFilled"><path d="M8.875 2.304a1.75 1.75 0 0 0-1.75.008 42.972 42.972 0 0 0-5.819 4.813l.91.875s.298-.289.753-.7v6.571H13.03V7.335c.455.411.744.691.753.7l.875-.945a42.875 42.875 0 0 0-5.784-4.786Zm-3.5 8.321a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Zm2.625 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75Z"></path></svg>';

export class IconPinAtHomeFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilled', '', null, 'IconPinAtHomeFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--pinAtHomeFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pinAtHomeFilled', '', newVal, 'IconPinAtHomeFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-pin-at-home-filled', IconPinAtHomeFilled);
