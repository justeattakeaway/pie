import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M13.469 5.375 8 1.228 2.531 5.375a1.593 1.593 0 0 0 0 2.52L2.68 8l.822-.621.263-.201-.438-.333a.28.28 0 0 1 0-.437L8 2.873l4.672 3.5a.28.28 0 0 1 0 .437l-.437.333.263.2.822.622.149-.114a1.592 1.592 0 0 0 0-2.52v.044Z"></path><path d="M13.469 8.114 13.319 8l-.822.621-.262.202.438.332a.28.28 0 0 1 0 .438L8 13.127l-4.673-3.5a.254.254 0 0 1-.105-.218l.543-.551-.263-.202L2.68 8l-.149.114a1.593 1.593 0 0 0 0 2.52L8 14.773l5.469-4.148a1.592 1.592 0 0 0 0-2.52v.009Z"></path><path d="m8 12.034 4.235-3.211.262-.202L13.32 8l-.823-.621-.262-.201L11.141 8 8 10.38 3.774 7.178l-.272.2L2.68 8l.822.621.272.202L8 12.033Z"></path></svg>';

export class IconLayers extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--layers', '', null, 'IconLayers');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--layers');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--layers', '', newVal, 'IconLayers');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--layers', newVal);
    }
}

customElements.define('icon-layers', IconLayers);
