import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bike"><path d="M12.139 7.405 11 4.159a.218.218 0 0 1 0-.158.246.246 0 0 1 .158-.122l1.216-.447v-1.4l-1.627.613a1.514 1.514 0 0 0-.998 1.934l.359 1.015H9.75a2.433 2.433 0 0 0-1.925.962l-1.207 1.61-1.06-2.135h.692V4.72h-3.5V6.03h1.339l.726 1.461a2.87 2.87 0 0 0-.735-.105 2.826 2.826 0 1 0 2.826 2.818v-.201l1.969-2.66a1.111 1.111 0 0 1 .875-.438h.831l.254.718a2.844 2.844 0 1 0 1.313-.219h-.01ZM4.08 11.719a1.514 1.514 0 1 1 1.514-1.514 1.505 1.505 0 0 1-1.514 1.514Zm7.875 0a1.514 1.514 0 1 1 1.4-.933 1.505 1.505 0 0 1-1.4.933Z"></path></svg>';

export class IconBike extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bike', '', null, 'IconBike');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bike');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bike', '', newVal, 'IconBike');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-bike', IconBike);
