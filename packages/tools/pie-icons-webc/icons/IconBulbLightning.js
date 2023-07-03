import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bulbLightning"><path d="M10.162 13.469H5.838l.35 1.312h3.622l.35-1.312Z"></path><path d="m5.375 10.117.35 2.04h4.611l.29-2.048c.07-.393.267-.752.56-1.024a4.523 4.523 0 0 0 1.408-3.273 4.594 4.594 0 0 0-9.126-.76A4.533 4.533 0 0 0 4.77 9.067c.306.278.517.645.604 1.05Zm-.612-4.856a3.281 3.281 0 0 1 6.518.551 3.239 3.239 0 0 1-.988 2.337c-.49.47-.821 1.082-.945 1.75l-.158.954H6.801l-.148-.945a3.238 3.238 0 0 0-.963-1.75 3.281 3.281 0 0 1-.927-2.897Z"></path></svg>';

export class IconBulbLightning extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightning', '', null, 'IconBulbLightning');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--bulbLightning');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--bulbLightning', '', newVal, 'IconBulbLightning');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-bulb-lightning', IconBulbLightning);
