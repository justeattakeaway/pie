import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--calendarFilledLarge"><path d="M22.125 6.375V9h-1.75V6.375h-8.75V9h-1.75V6.375h-5.25v21H23A4.375 4.375 0 0 0 27.375 23V6.375h-5.25ZM15.799 19.5h-.875v-1.488h.831c.787 0 1.225-.393 1.225-.962s-.63-.963-1.286-.963a2.343 2.343 0 0 0-1.689.736l-1.024-1.164a3.71 3.71 0 0 1 2.853-1.112c1.75 0 2.931 1.024 2.931 2.31a2.012 2.012 0 0 1-1.199 1.82 2.048 2.048 0 0 1 1.514 1.952c0 1.365-1.172 2.423-3.281 2.423a3.85 3.85 0 0 1-2.966-1.084l1.023-1.182a2.562 2.562 0 0 0 1.829.726c.98 0 1.601-.376 1.601-1.058 0-.683-.604-.954-1.487-.954Zm6.877-8.75-.875 1.75H10.313l-.876-1.75h13.24Z"></path><path d="M11.625 4.625h-1.75v1.75h1.75v-1.75Z"></path><path d="M22.125 4.625h-1.75v1.75h1.75v-1.75Z"></path></svg>';

export class IconCalendarFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarFilledLarge', '', null, 'IconCalendarFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--calendarFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--calendarFilledLarge', '', newVal, 'IconCalendarFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-calendar-filled-large', IconCalendarFilledLarge);
