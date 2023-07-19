import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userRepeat"><path d="m4.386 10.161-.14.525h1.365l.044-.184a1.636 1.636 0 0 1 1.47-1.347h1.75a1.636 1.636 0 0 1 1.453 1.348l.043.183h1.365l-.14-.525a3.062 3.062 0 0 0-2.117-2.24c.052 0 .105-.079.157-.131a2.31 2.31 0 1 0-3.272 0l.157.131a3.063 3.063 0 0 0-2.135 2.24Zm2.905-4.716A1.006 1.006 0 1 1 8.72 6.862a1.006 1.006 0 0 1-1.429-1.417ZM14.781 8A6.781 6.781 0 1 1 1.22 8a6.711 6.711 0 0 1 .971-3.5L1.15 3.485l3.404-.682-.464 3.622-.936-.945A5.469 5.469 0 1 0 8 2.531V1.22A6.79 6.79 0 0 1 14.781 8Z"></path></svg>';

export class IconUserRepeat extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userRepeat', '', null, 'IconUserRepeat');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--userRepeat');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userRepeat', '', newVal, 'IconUserRepeat');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-repeat', IconUserRepeat);
