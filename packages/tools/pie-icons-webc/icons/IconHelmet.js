import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--helmet"><g clip-path="url(#prefix__clip0_18_392)"><path d="M11.649 7.641a4.182 4.182 0 0 1 1.33-.577A12.837 12.837 0 0 1 15 6.906l-.752-1.286-.683.052a6.44 6.44 0 0 0-6.694-3.5 6.685 6.685 0 0 0-5.617 6.003 7 7 0 0 0 1.155 4.602l.21.29h.341a5.101 5.101 0 0 1 3.089.944 3.876 3.876 0 0 0 2.144.77 3.167 3.167 0 0 0 2.625-1.12c.796-1.006.936-2.625.402-4.847a1.102 1.102 0 0 1 .429-1.173Zm-.735-1.094a2.432 2.432 0 0 0-.989 2.573c.429 1.75.376 3.063-.157 3.736a1.899 1.899 0 0 1-1.575.613A2.669 2.669 0 0 1 6.74 12.9a6.273 6.273 0 0 0-3.421-1.138 5.565 5.565 0 0 1-.761-3.5A5.381 5.381 0 0 1 7.01 3.46a5.171 5.171 0 0 1 5.163 2.45 6.054 6.054 0 0 0-1.26.638ZM8.875 11.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></g><defs><clipPath id="prefix__clip0_18_392"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconHelmet extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--helmet', '', null, 'IconHelmet');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--helmet');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--helmet', '', newVal, 'IconHelmet');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-helmet', IconHelmet);
