import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--batteryLarge"><path d="M27.375 12.5V9.875A2.625 2.625 0 0 0 24.75 7.25H5.5a2.625 2.625 0 0 0-2.625 2.625v12.25A2.625 2.625 0 0 0 5.5 24.75h19.25a2.625 2.625 0 0 0 2.625-2.625V19.5h1.75v-7h-1.75Zm-1.75 9.625a.875.875 0 0 1-.875.875H5.5a.875.875 0 0 1-.875-.875V9.875A.875.875 0 0 1 5.5 9h19.25a.875.875 0 0 1 .875.875v12.25ZM8.125 12.5h1.75v7h-1.75v-7Zm4.375 0h1.75v7H12.5v-7Zm4.375 0h1.75v7h-1.75v-7Z"></path></svg>';

export class IconBatteryLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--batteryLarge', '', null, 'IconBatteryLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--batteryLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--batteryLarge', '', newVal, 'IconBatteryLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-battery-large', IconBatteryLarge);
