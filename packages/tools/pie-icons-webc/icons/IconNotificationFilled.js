import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--notificationFilled"><path d="M13.504 9.951a4.577 4.577 0 0 1-1.348-3.255V6.25a4.165 4.165 0 0 0-1.365-3.08 4.208 4.208 0 0 0-2.135-1.006V1H7.344v1.164a4.287 4.287 0 0 0-3.5 4.252v.28a4.576 4.576 0 0 1-1.348 3.255l-.402.403v1.802h11.812v-1.802l-.402-.403Z"></path><path d="M8 14.781a2.817 2.817 0 0 0 2.371-1.312H5.63A2.819 2.819 0 0 0 8 14.78Z"></path></svg>';

export class IconNotificationFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--notificationFilled', '', null, 'IconNotificationFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--notificationFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--notificationFilled', '', newVal, 'IconNotificationFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-notification-filled', IconNotificationFilled);
