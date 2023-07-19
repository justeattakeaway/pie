import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--alertTriangle"><path d="M8.656 5.375H7.344V8h1.312V5.375Z"></path><path d="M8 10.625a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"></path><path d="M13.408 13.031H2.591a1.496 1.496 0 0 1-1.33-.796 1.593 1.593 0 0 1 .044-1.61l5.408-8.662A1.505 1.505 0 0 1 8 1.219a1.505 1.505 0 0 1 1.286.726l5.408 8.68a1.593 1.593 0 0 1 0 1.627 1.496 1.496 0 0 1-1.287.78ZM8 2.531a.192.192 0 0 0-.175.105l-5.408 8.671a.297.297 0 0 0 0 .298.2.2 0 0 0 .184.114h10.806a.2.2 0 0 0 .184-.114.297.297 0 0 0 0-.298l-5.416-8.67A.192.192 0 0 0 8 2.53Z"></path></svg>';

export class IconAlertTriangle extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangle', '', null, 'IconAlertTriangle');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--alertTriangle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--alertTriangle', '', newVal, 'IconAlertTriangle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-alert-triangle', IconAlertTriangle);
