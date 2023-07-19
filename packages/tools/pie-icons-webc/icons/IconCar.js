import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--car"><path d="M6 9H4.5v1H6V9Z"></path><path d="M11.5 9H10v1h1.5V9Z"></path><path fill-rule="evenodd" d="M14.895 6.906h-1.4l.28.648c.088.207.132.43.131.656v5.04h-1.312v-1.479a27.513 27.513 0 0 1-9.188 0v1.479H2.094V8.21a1.662 1.662 0 0 1 .131-.656l.28-.648h-1.4l.665-1.312h1.225l.499-1.969A1.435 1.435 0 0 1 4.5 2.575c2.29-.634 4.71-.634 7 0a1.435 1.435 0 0 1 1.006 1.05l.499 1.969h1.225l.665 1.312ZM4.85 3.835a.21.21 0 0 0-.088.131l-.56 2.162c2.51.446 5.078.446 7.587 0l-.551-2.162a.21.21 0 0 0-.088-.131 11.848 11.848 0 0 0-6.3 0Zm7.787 6.597v-.595l-.07-1.627a.359.359 0 0 0 0-.14l-.297-.7A22.084 22.084 0 0 1 8 7.781c-1.427 0-2.852-.137-4.253-.411l-.297.7a.359.359 0 0 0 0 .14v2.222h.079c2.99.525 6.048.525 9.039 0h.07Z" clip-rule="evenodd"></path></svg>';

export class IconCar extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--car', '', null, 'IconCar');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--car');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--car', '', newVal, 'IconCar');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-car', IconCar);
