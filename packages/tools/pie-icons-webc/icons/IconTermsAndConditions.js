import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--termsAndConditions"><g clip-path="url(#prefix__clip0_18_941)"><path d="M8.744 4.482H4.491v1.313h4.253V4.482Z"></path><path d="M6.329 7.519H4.491V8.83H6.33V7.52Z"></path><path d="M14.947 9.085c0-.831-.463-1.584-1.198-1.96l-.919-.473V1.22H1.219v12.6h5.897c.56 0 1.05 0 1.505-.018.201.158.412.315.656.447l1.68.708 1.707-.691a4.292 4.292 0 0 0 1.758-1.663c.298-.498.473-1.102.534-1.872V9.085h-.008ZM6.96 9.059v1.601l.052.411a4.39 4.39 0 0 0 .464 1.435H2.531V2.531h8.986V5.98l-.49-.254-2.8 1.339a2.214 2.214 0 0 0-1.26 1.995H6.96Zm6.326 2.879a2.955 2.955 0 0 1-1.172 1.128l-1.155.464-.053-.026-1.067-.447a2.857 2.857 0 0 1-.744-.595c-.088-.096-.184-.183-.263-.288-.262-.359-.437-.796-.516-1.313L8.28 10.6V9.05c0-.341.201-.665.516-.814l2.214-1.059.516.263 1.313.674.315.166c.297.158.49.464.49.796v1.61c-.035.49-.149.91-.35 1.234l-.009.018Z"></path><path d="m10.599 10.424-.604-.665-.971.883.857.937a.95.95 0 0 0 .7.315h.009a.966.966 0 0 0 .7-.298l1.592-1.68-.953-.901-1.34 1.409h.01Z"></path></g><defs><clipPath id="prefix__clip0_18_941"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconTermsAndConditions extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--termsAndConditions', '', null, 'IconTermsAndConditions');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--termsAndConditions');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--termsAndConditions', '', newVal, 'IconTermsAndConditions');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-terms-and-conditions', IconTermsAndConditions);
