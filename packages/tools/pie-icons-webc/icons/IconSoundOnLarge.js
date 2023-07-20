import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--soundOnLarge"><path d="M18.625 3.995a48.276 48.276 0 0 1-4.008 3.439A49.96 49.96 0 0 1 9.63 10.75H6.375a2.625 2.625 0 0 0-2.625 2.625v5.25a2.625 2.625 0 0 0 2.625 2.625H9.63a48.311 48.311 0 0 1 8.995 6.755l.254.245h2.371V3.75h-2.398l-.227.245ZM5.5 18.625v-5.25a.875.875 0 0 1 .875-.875H9v7H6.375a.875.875 0 0 1-.875-.875Zm14 7.823a48.503 48.503 0 0 0-3.841-3.264 48.638 48.638 0 0 0-4.909-3.308v-7.752c1.703-1 3.343-2.105 4.909-3.308A48.502 48.502 0 0 0 19.5 5.552v20.896ZM27.375 16A6.125 6.125 0 0 1 23 21.871v-1.863a4.375 4.375 0 0 0 0-8.015v-1.864A6.125 6.125 0 0 1 27.375 16Z"></path></svg>';

export class IconSoundOnLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnLarge', '', null, 'IconSoundOnLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--soundOnLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOnLarge', '', newVal, 'IconSoundOnLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-sound-on-large', IconSoundOnLarge);
