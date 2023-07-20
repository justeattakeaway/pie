import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bulbLightningLarge"><path d="m10.96 20.891.665 3.859h8.75l.639-3.867a4.489 4.489 0 0 1 1.33-2.407 9.083 9.083 0 0 0-.63-13.562 9.17 9.17 0 0 0-7.692-1.838 9.1 9.1 0 0 0-4.427 15.365 4.655 4.655 0 0 1 1.365 2.45ZM8.746 10.75a7.359 7.359 0 1 1 14.041 4.085 7.271 7.271 0 0 1-1.642 2.399 6.196 6.196 0 0 0-1.829 3.368L18.914 23h-5.828l-.402-2.398A6.247 6.247 0 0 0 10.82 17.2a7.324 7.324 0 0 1-2.074-6.449Z"></path><path d="m16 17.75 3.027-5.758H16V8.125l-3.028 5.801H16v3.824Z"></path><path d="M20.2 26.5h-8.4l.463 1.75h7.473l.464-1.75Z"></path></svg>';

export class IconBulbLightningLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightningLarge', '', null, 'IconBulbLightningLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--bulbLightningLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightningLarge', '', newVal, 'IconBulbLightningLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-bulb-lightning-large', IconBulbLightningLarge);
