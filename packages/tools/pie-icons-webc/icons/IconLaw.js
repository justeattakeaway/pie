import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--law"><g clip-path="url(#prefix__clip0_6703_3640)"><path fill-rule="evenodd" d="m9.247 8.634-.45.451.935.936 4-3.999-.937-.936-.455.455L9.899 3.1l.455-.455-.937-.936-3.99 3.99.937.936.455-.455.743.744-5.827 5.836.936.936L8.49 7.877l.757.757Zm-1.5-3.382 2.44 2.442 1.217-1.217-2.442-2.44-1.216 1.215Z" clip-rule="evenodd"></path><path d="M8.035 11.929h5.574l-.35-1.322H8.385l-.35 1.322Z"></path><path d="M13.845 12.813H7.8l-.35 1.32h6.746l-.35-1.32Z"></path></g><defs><clipPath id="prefix__clip0_6703_3640"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconLaw extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--law', '', null, 'IconLaw');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--law');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--law', '', newVal, 'IconLaw');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-law', IconLaw);
