import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--points"><path d="M14.125 6.066c0-.84-.639-1.522-1.452-1.618.192-.254.332-.552.393-.875a1.743 1.743 0 0 0-.866-1.838c-1.4-.796-2.642.306-3.071.683-.446.393-.831.752-1.155 1.076A27.011 27.011 0 0 0 6.8 2.409c-.41-.368-1.653-1.47-3.053-.665A1.743 1.743 0 0 0 2.88 3.58c.062.324.202.622.403.884a1.637 1.637 0 0 0-1.391 1.61V8.84h1.11v4.043c0 .892.727 1.627 1.628 1.636l6.72.026a1.629 1.629 0 0 0 1.636-1.627V8.84h1.147V6.075l-.009-.009Zm-1.312 0V7.52H8.62V5.743h3.877c.175 0 .323.148.323.323h-.008Zm-2.8-2.686c.49-.437 1.015-.805 1.54-.507a.463.463 0 0 1 .227.455c-.07.35-.315.507-.359.542-.656.394-1.662.446-2.37.411.28-.271.603-.568.97-.892l-.008-.009Zm-5.627-.507a.824.824 0 0 1 .385-.105c.394 0 .78.288 1.164.63.35.315.674.603.954.875-.718.035-1.715-.018-2.371-.412a.777.777 0 0 1-.36-.533.445.445 0 0 1 .228-.455Zm-1.19 3.193c0-.175.15-.323.324-.323H7.3v1.776H3.188V6.066h.008Zm1.112 6.817V8.84h3v4.375H4.624a.343.343 0 0 1-.324-.332h.009Zm7.367.026a.326.326 0 0 1-.096.227.325.325 0 0 1-.228.097h-2.73V8.84h3.045v4.078l.01-.01Z"></path></svg>';

export class IconLogoPoints extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--points', '', null, 'IconLogoPoints');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--points');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--points', '', newVal, 'IconLogoPoints');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-logo-points', IconLogoPoints);
