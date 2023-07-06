import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--keyLarge"><path d="M10.75 8.125a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm0 3.5a.874.874 0 1 1 0-1.748.874.874 0 0 1 0 1.748Zm9.082 1.496a.989.989 0 0 1-.166-1.137c.079-.158.149-.315.219-.464a2.704 2.704 0 0 0-.551-3.036L14.582 3.67a2.721 2.721 0 0 0-3.07-.542 17.229 17.229 0 0 0-8.4 8.496 2.713 2.713 0 0 0 .55 3.036L8.414 19.5a2.686 2.686 0 0 0 3.062.543c.219-.105.429-.21.63-.324a.955.955 0 0 1 1.111.157l2.18 2.249 1.863-.297.359.358-.368 2.328.875.919 2.249-.604.551.56-.455 1.837 1.864 1.899h6.79v-6.554l-9.293-9.45Zm7.543 14.254h-4.288l-.665-.683.456-1.837-1.978-1.969-1.697.438.28-1.75-1.61-1.628-1.873.28-1.54-1.601a2.625 2.625 0 0 0-3.168-.473l-.568.28a.918.918 0 0 1-1.068-.192l-4.751-4.769a.988.988 0 0 1-.193-1.094 15.426 15.426 0 0 1 7.534-7.656.963.963 0 0 1 1.094.175l4.751 4.821a.962.962 0 0 1 .201 1.085l-.2.412a2.747 2.747 0 0 0 .533 3.141l8.75 8.899v4.121Z"></path></svg>';

export class IconKeyLarge extends HTMLElement {
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

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--keyLarge', '', null, 'IconKeyLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--keyLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--keyLarge', '', newVal, 'IconKeyLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-key-large', IconKeyLarge);
