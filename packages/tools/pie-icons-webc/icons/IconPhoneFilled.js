import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--phoneFilled"><path d="M11.097 14.344h.315a2.624 2.624 0 0 0 2.284-1.374l.875-1.645-3.623-2.004a1.522 1.522 0 0 0-1.994.429l-1.427 1.925a9.625 9.625 0 0 1-3.255-3.334l1.672-1.286a1.566 1.566 0 0 0 .428-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 0 0 1.682 4.85a11.13 11.13 0 0 0 1.155 3.614 10.937 10.937 0 0 0 4.559 4.672 10.64 10.64 0 0 0 3.701 1.208Z"></path></svg>';

export class IconPhoneFilled extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneFilled', '', null, 'IconPhoneFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--phoneFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--phoneFilled', '', newVal, 'IconPhoneFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-phone-filled', IconPhoneFilled);
