import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--norway"><path fill="#EEE" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"></path><path fill="#D80027" d="M1.241 9.827a7.006 7.006 0 0 0 2.5 3.724V9.827h-2.5Zm6.152 5.146a7 7 0 0 0 7.366-5.146H7.392v5.146h.002Zm7.367-8.8a7 7 0 0 0-7.37-5.146v5.146h7.37ZM3.74 2.45a7.005 7.005 0 0 0-2.499 3.724h2.5V2.45Z"></path><path fill="#0052B4" d="M14.94 7.087H6.477v-5.92a6.954 6.954 0 0 0-1.823.683v5.237H1.06a7.06 7.06 0 0 0 0 1.826h3.593v5.237a6.951 6.951 0 0 0 1.823.683v-5.92h8.463a7.077 7.077 0 0 0 0-1.826Z"></path></svg>';

export class IconFlagNorway extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--norway', '', null, 'IconFlagNorway');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--norway');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--norway', '', newVal, 'IconFlagNorway');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-flag-norway', IconFlagNorway);
