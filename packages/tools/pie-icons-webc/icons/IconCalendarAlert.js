import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarAlert"><path d="M11.273 2.842V1.75h-1.31v1.09H6.037v-1.09H4.727v1.09H2.109v10.91H10.6a3.273 3.273 0 0 0 3.273-3.272V2.842h-2.6Zm1.31 7.637a1.964 1.964 0 0 1-1.982 1.964H3.418V4.15h1.309v1.09h1.31v-1.09h3.927v1.09h1.31v-1.09h1.308v6.328Z"></path><path d="M8.655 6.263h-1.31v2.619h1.31V6.263Z"></path><path d="M8 11.5a.873.873 0 1 0 0-1.746.873.873 0 0 0 0 1.746Z"></path></svg>';

export class IconCalendarAlert extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAlert', '', null, 'IconCalendarAlert');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--calendarAlert');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarAlert', '', newVal, 'IconCalendarAlert');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-calendar-alert', IconCalendarAlert);
