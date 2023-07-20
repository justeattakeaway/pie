import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--curryLarge"><path d="m30 5.903-1.523-.875-4.305 7.603a4.446 4.446 0 0 0-.577-.709 4.577 4.577 0 0 0-4.55-1.172 4.576 4.576 0 0 0-8.628 0 4.464 4.464 0 0 0-1.268-.193 4.594 4.594 0 0 0-4.524 3.693h-1.75v2.625a7.875 7.875 0 0 0 5.39 7.446l.508 2.179h14.454l.508-2.179a7.876 7.876 0 0 0 5.39-7.446V14.25H25.24L30 5.903Zm-20.851 6.43a2.8 2.8 0 0 1 1.444.412.875.875 0 0 0 .874 0 .875.875 0 0 0 .473-.7 2.826 2.826 0 0 1 5.635 0 .875.875 0 0 0 .473.7.875.875 0 0 0 .875 0A2.817 2.817 0 0 1 23 14.25H6.471a2.835 2.835 0 0 1 2.678-1.916Zm18.226 4.542a6.125 6.125 0 0 1-4.594 5.906l-.516.132-.429 1.837H10.164l-.429-1.837-.516-.132a6.125 6.125 0 0 1-4.594-5.906V16h22.75v.875Z"></path></svg>';

export class IconCurryLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--curryLarge', '', null, 'IconCurryLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--curryLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--curryLarge', '', newVal, 'IconCurryLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-curry-large', IconCurryLarge);
