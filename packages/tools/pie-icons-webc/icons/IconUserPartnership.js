import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--userPartnership"><path d="M12.865 7.598a2.424 2.424 0 1 0-2.091-.132 3.106 3.106 0 0 0-1.829 1.409L8 10.293l-.936-1.418a3.133 3.133 0 0 0-1.838-1.374 2.389 2.389 0 1 0-2.091.132 3.089 3.089 0 0 0-1.916 2.808v3.684H2.53v-3.684a1.811 1.811 0 0 1 1.838-1.75 1.846 1.846 0 0 1 1.583.875L8 12.707l2.047-3.176a1.854 1.854 0 0 1 1.584-.875 1.812 1.812 0 0 1 1.838 1.75v3.719h1.312v-3.684a3.088 3.088 0 0 0-1.916-2.843ZM4.062 4.28a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188Zm7.875 0a1.094 1.094 0 1 1 0 2.188 1.094 1.094 0 0 1 0-2.188ZM4.72 11.5H6.03v2.625H4.72V11.5Zm5.25 0h1.312v2.625H9.97V11.5Z"></path></svg>';

export class IconUserPartnership extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnership', '', null, 'IconUserPartnership');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--userPartnership');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userPartnership', '', newVal, 'IconUserPartnership');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-partnership', IconUserPartnership);
