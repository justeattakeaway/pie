import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--thumbsUpLarge"><path d="M28.302 16a2.625 2.625 0 0 0-1.68-1.26l-4.76-1.146.98-4.891A3.413 3.413 0 0 0 19.5 4.625h-.534l-5.18 10.071a.876.876 0 0 1-.743.429H3.75v1.75h6.886a14.997 14.997 0 0 0-.761 4.813 9.976 9.976 0 0 0 .7 3.937H3.75v1.75h18.664A4.374 4.374 0 0 0 26.5 24.61l2.047-6.554A2.625 2.625 0 0 0 28.302 16Zm-1.443 1.558-2.022 6.474a2.625 2.625 0 0 1-2.423 1.593H12.5a8.207 8.207 0 0 1-.875-3.938c-.03-1.646.267-3.282.875-4.812h.516a2.626 2.626 0 0 0 2.275-1.321l4.681-9.1c.31.09.585.274.788.525a1.678 1.678 0 0 1 .341 1.382l-1.312 6.545 6.405 1.514a.875.875 0 0 1 .56.42.876.876 0 0 1 .105.691v.027Z"></path></svg>';

export class IconThumbsUpLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpLarge', '', null, 'IconThumbsUpLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--thumbsUpLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpLarge', '', newVal, 'IconThumbsUpLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-thumbs-up-large', IconThumbsUpLarge);
