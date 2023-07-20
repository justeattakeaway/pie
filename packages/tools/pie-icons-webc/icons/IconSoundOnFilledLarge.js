import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--soundOnFilledLarge"><path d="M21.688 3.75h-2.39l-.253.245a49.875 49.875 0 0 1-4.016 3.439 48.477 48.477 0 0 1-4.961 3.316H6.813a2.625 2.625 0 0 0-2.625 2.625v5.25a2.625 2.625 0 0 0 2.625 2.625h3.255a47.09 47.09 0 0 1 4.96 3.316 48.293 48.293 0 0 1 4.008 3.439l.254.245h2.398V3.75Z"></path><path d="M23.438 10.129v1.864a4.375 4.375 0 0 1 0 8.014v1.864a6.125 6.125 0 0 0 0-11.742Z"></path></svg>';

export class IconSoundOnFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilledLarge', '', null, 'IconSoundOnFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--soundOnFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnFilledLarge', '', newVal, 'IconSoundOnFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sound-on-filled-large', IconSoundOnFilledLarge);
