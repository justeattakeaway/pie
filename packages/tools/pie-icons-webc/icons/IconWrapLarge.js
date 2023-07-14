import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--wrapLarge"><path d="M29.615 9.543a3.133 3.133 0 0 0-2.327-2.88 3.132 3.132 0 0 0-1.663-3.42 3.238 3.238 0 0 0-3.5.7 3.177 3.177 0 0 0-2.345-1.208 2.8 2.8 0 0 0-2.853 2.083c-.113.35-.21.682-.297 1.023l-13.641 13.3a.874.874 0 0 0-.245.692c.463 6.22 3.5 9.703 8.522 9.808a.875.875 0 0 0 .586-.236L26.23 16.28a2.739 2.739 0 0 0 1.295-.604 2.485 2.485 0 0 0 .595-3.395 3.036 3.036 0 0 0 1.496-2.738ZM21.6 11.625c.63 0 1.041.123 1.155.306.114.184.061.823-.499 1.75a9.524 9.524 0 0 1-1.496-.875c.327-.385.607-.778.84-1.181Zm-1.286-1.234c-.252.46-.545.896-.875 1.304a6.404 6.404 0 0 1-1.488-2.17c.919-.612 2.24-.752 2.625-.455.193.14.088.656-.262 1.321Zm-4.13-1.671v3.229c.122 2.73.245 5.556-1.75 7.875a5.715 5.715 0 0 1-4.226 2.266h-.088c-2.231 0-4.261-1.47-5.25-2.319L16.184 8.72Zm-5.25 19.154c-3.868-.228-5.504-3.019-6.125-5.959a9.528 9.528 0 0 0 5.328 1.908h.14a7.395 7.395 0 0 0 5.53-2.88c2.188-2.554 2.267-5.52 2.17-8.233.308.309.633.6.972.875a12.491 12.491 0 0 0 3.298 2.012 9.858 9.858 0 0 0 1.532.517l-12.845 11.76Zm15.487-16.87a.874.874 0 0 0-.7 1.184.874.874 0 0 0 .324.408c.365.235.63.596.744 1.015a.997.997 0 0 1-.429.726c-.341.307-1.225.394-2.468 0 .753-1.347.875-2.467.36-3.325a2.54 2.54 0 0 0-1.908-1.12 2.135 2.135 0 0 0-.692-2.248 3.885 3.885 0 0 0-3.578-.158c.052-.341.113-.682.192-1.015.079-.332.193-.743.324-1.128a1.094 1.094 0 0 1 1.102-.875 1.514 1.514 0 0 1 1.357 1.198.875.875 0 0 0 1.601.272s1.041-1.637 2.258-1.112c1.067.473.516 2.24.507 2.258a.876.876 0 0 0 .788 1.146c1.19.061 1.636.77 1.662 1.365.026.595-.341 1.269-1.444 1.409Z"></path></svg>';

export class IconWrapLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--wrapLarge', '', null, 'IconWrapLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--wrapLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--wrapLarge', '', newVal, 'IconWrapLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-wrap-large', IconWrapLarge);
