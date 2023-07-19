import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--phoneOff"><path d="m8.954 9.75-1.427 1.925a8.694 8.694 0 0 1-1.277-.971L15 1.875h-1.846L5.279 9.75a9.38 9.38 0 0 1-1.006-1.409l1.67-1.286a1.566 1.566 0 0 0 .43-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.683 4.85a11.216 11.216 0 0 0 2.704 5.871L1 14.125h1.846l2.459-2.476a10.702 10.702 0 0 0 2.091 1.47 10.64 10.64 0 0 0 3.702 1.207h.314a2.624 2.624 0 0 0 2.275-1.391l.876-1.645-3.614-1.986a1.522 1.522 0 0 0-1.995.446ZM2.977 4.675a1.356 1.356 0 0 1 .71-1.365l.2-.105 1.33 2.502a.245.245 0 0 1-.07.307L3.67 7.125a10.045 10.045 0 0 1-.692-2.45Zm9.556 7.7a1.278 1.278 0 0 1-1.26.691A9.396 9.396 0 0 1 8.7 12.34l1.313-1.75a.227.227 0 0 1 .288-.07l2.503 1.391-.271.464Z"></path></svg>';

export class IconPhoneOff extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneOff', '', null, 'IconPhoneOff');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--phoneOff');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneOff', '', newVal, 'IconPhoneOff');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-phone-off', IconPhoneOff);
