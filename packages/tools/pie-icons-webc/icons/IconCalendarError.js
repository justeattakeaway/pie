import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--calendarError"><path d="M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 0 0 3.281-3.281V2.969h-2.625Zm1.313 7.656a1.969 1.969 0 0 1-1.969 1.969H3.406V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v6.344Z"></path><path d="m9.391 11.198.928-.928-3.712-3.713-.928.928 3.712 3.713Z"></path><path d="m10.323 7.484-.928-.928-3.713 3.712.928.928 3.713-3.712Z"></path></svg>';

export class IconCalendarError extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarError', '', null, 'IconCalendarError');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--calendarError');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarError', '', newVal, 'IconCalendarError');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-calendar-error', IconCalendarError);
