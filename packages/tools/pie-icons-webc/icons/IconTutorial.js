import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--tutorial"><path fill-rule="evenodd" d="m2.505 7.566.91.383v3.42l.263.201A7.194 7.194 0 0 0 8 12.996h.009a7.194 7.194 0 0 0 4.322-1.426l.263-.201V7.934l2.213-.931V5.795L8.254 3.04h-.508L1.184 5.804V7.01l.008.004v2.569h1.313V7.566Zm5.749 2.202H8.25L8 9.873l-.25-.105h-.004l-.979-.412L4.72 8.5v2.214l.009-.01a5.932 5.932 0 0 0 6.545 0V8.5l-3.02 1.267v.002Zm4.61-3.36L8 4.36 3.135 6.408l.28.117v-.004l4.594 1.925 4.856-2.038Z" clip-rule="evenodd"></path></svg>';

export class IconTutorial extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorial', '', null, 'IconTutorial');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--tutorial');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--tutorial', '', newVal, 'IconTutorial');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-tutorial', IconTutorial);
