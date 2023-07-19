import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--molluscs"><g clip-path="url(#prefix__clip0_8387_3631)"><path d="M13.563 4.72a1.548 1.548 0 0 0-.854-.627 1.586 1.586 0 0 0-.523-.784c-.81-.662-1.9-1.159-2.988-1.35-.427-.08-.863.052-1.202.304a1.528 1.528 0 0 0-1.203-.305c-1.089.2-2.178.689-2.988 1.36-.252.208-.435.479-.522.783a1.548 1.548 0 0 0-.854.628 7.082 7.082 0 0 0-1.08 2.787c0 .053-.018.105-.018.149-.044.296-.07.6-.07.932v.305l2.335 1.995v.392a1.966 1.966 0 0 0 1.96 1.96h.793l.375.313c.366.34.827.514 1.29.514.46 0 .923-.174 1.262-.514l.401-.348h.854a1.978 1.978 0 0 0 1.942-1.969v-.418l2.257-1.925v-.305a7.068 7.068 0 0 0-1.168-3.868V4.72Zm-1.717 4.913-1.55 1.325-1.107.94-.81.689c-.218.218-.566.218-.819-.035l-.74-.636-.776-.662-3.485-2.97a5.55 5.55 0 0 1 .114-.802c.026-.131.06-.262.096-.392.034-.122.07-.244.104-.358.096-.26.288-.723.601-1.193.026-.035.07-.07.105-.105l1.62 3.494h1.438L4.546 4.415c.026-.043.043-.087.07-.104.635-.523 1.524-.924 2.395-1.08.087-.018.2.034.235.095l.053.096.017 5.506h1.307L8.605 3.5l.088-.148c.052-.087.165-.14.252-.122.863.157 1.76.558 2.396 1.08.035.027.07.079.087.14L9.372 8.937h1.438l1.611-3.52s.026.017.035.026c.331.497.871 1.498.941 2.849L11.82 9.633h.026Z"></path></g><defs><clipPath id="prefix__clip0_8387_3631"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconMolluscs extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--molluscs', '', null, 'IconMolluscs');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--molluscs');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--molluscs', '', newVal, 'IconMolluscs');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-molluscs', IconMolluscs);
