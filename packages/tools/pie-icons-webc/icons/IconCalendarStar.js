import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarStar"><path d="M11.281 3.083V1.989H9.97v1.094H6.03V1.989H4.72v1.094H2.094V14.02h8.531a3.29 3.29 0 0 0 3.281-3.281V3.083h-2.625Zm1.313 7.656a1.969 1.969 0 0 1-1.969 1.968H3.406V4.396H4.72v1.094H6.03V4.395H9.97v1.094h1.312V4.395h1.313v6.344Z"></path><path d="m9.75 11.561-1.662-.875a.167.167 0 0 0-.158 0l-1.662.875.306-1.811a.184.184 0 0 0-.053-.157L5.183 8.245 7.037 8a.184.184 0 0 0 .132-.096L8 6.189l.875 1.689A.184.184 0 0 0 8.963 8l1.855.271-1.34 1.278a.184.184 0 0 0-.052.157l.324 1.855Z"></path></svg>';

export class IconCalendarStar extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarStar', '', null, 'IconCalendarStar');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--calendarStar');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarStar', '', newVal, 'IconCalendarStar');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-calendar-star', IconCalendarStar);
