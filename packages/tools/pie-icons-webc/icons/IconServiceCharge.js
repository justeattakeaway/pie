import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--serviceCharge"><path d="M9.899 8.402s.008-.026.008-.035c0-.358-1.04-.656-2.327-.656-1.286 0-2.328.298-2.328.656 0 .01.01.027.01.035v4.857c0 .245 0 1.006 2.327 1.006s2.327-.753 2.327-1.076V8.41H9.89l.009-.009Zm-1.287.552v1.242c-.148.053-.49.123-1.006.123-.542 0-.901-.079-1.024-.132V8.963c.307.044.64.07.998.07.359 0 .717-.026 1.032-.07v-.008Zm-1.015 3.998c-.437 0-.787-.043-1.015-.087v-1.321c.35.07.727.087 1.024.087a5.22 5.22 0 0 0 1.006-.087v1.321a5.58 5.58 0 0 1-1.015.088Z"></path><path d="M13.696 5.751c0-.359-1.041-.656-2.327-.656-1.287 0-2.328.297-2.328.656 0 .009.009.018.009.035v7.306c0 1.12 1.934 1.182 2.327 1.182.394 0 2.328-.053 2.328-1.181V5.75h-.018.01Zm-3.325 3.176c.35.07.726.088 1.024.088.298 0 .656-.018 1.006-.088v1.27c-.149.052-.49.122-1.006.122-.543 0-.901-.079-1.024-.132V8.92v.008Zm2.03-2.59V7.58c-.149.052-.49.122-1.006.122-.543 0-.901-.078-1.024-.13V6.345c.306.044.639.07.998.07a7.66 7.66 0 0 0 1.032-.07v-.009Zm-1.015 6.624c-.446 0-.813-.07-1.015-.14v-1.268c.35.07.726.087 1.024.087.298 0 .656-.018 1.006-.088v1.26c-.201.07-.569.14-1.015.14v.01Z"></path><path d="M5.664 2.024 2.689 6.259h1.627L7.3 2.024H5.664Z"></path><path d="M3.135 3.686a.831.831 0 1 0 0-1.662.831.831 0 0 0 0 1.662Z"></path><path d="M6.775 6.381a.831.831 0 1 0 0-1.662.831.831 0 0 0 0 1.662Z"></path></svg>';

export class IconServiceCharge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--serviceCharge', '', null, 'IconServiceCharge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--serviceCharge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--serviceCharge', '', newVal, 'IconServiceCharge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-service-charge', IconServiceCharge);
