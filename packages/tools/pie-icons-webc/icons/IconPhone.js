import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--phone"><path d="M11.412 14.344h-.315a10.64 10.64 0 0 1-3.7-1.208 10.937 10.937 0 0 1-4.56-4.672A11.13 11.13 0 0 1 1.682 4.85a2.625 2.625 0 0 1 1.383-2.695L4.43 1.42l1.942 3.666a1.566 1.566 0 0 1-.428 1.969L4.272 8.341a9.625 9.625 0 0 0 3.255 3.334L8.954 9.75a1.522 1.522 0 0 1 1.994-.429l3.623 2.004-.875 1.645a2.624 2.624 0 0 1-2.284 1.374ZM8.7 12.296a9.396 9.396 0 0 0 2.572.727 1.278 1.278 0 0 0 1.26-.648l.271-.499-2.502-1.391a.228.228 0 0 0-.289.07L8.7 12.296ZM3.887 3.205l-.201.105a1.356 1.356 0 0 0-.709 1.365c.126.843.358 1.666.692 2.45l1.478-1.111a.245.245 0 0 0 .07-.307l-1.33-2.502Z"></path></svg>';

export class IconPhone extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--phone', '', null, 'IconPhone');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--phone');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--phone', '', newVal, 'IconPhone');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-phone', IconPhone);
