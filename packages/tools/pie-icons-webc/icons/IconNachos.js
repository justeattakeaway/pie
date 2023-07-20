import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--nachos"><path d="M7.256 7.265a.875.875 0 0 0 .805.612.875.875 0 0 0 .49-.14 31.253 31.253 0 0 0 2.38-1.653 30.579 30.579 0 0 0 2.424-2.074.875.875 0 0 0 .271-.718.823.823 0 0 0-.411-.612c-.847-.469-1.75-.83-2.686-1.076a12.855 12.855 0 0 0-2.984-.429.875.875 0 0 0-.656.262.875.875 0 0 0-.263.604c-.01.93.045 1.86.167 2.783.1.823.256 1.638.463 2.441Zm2.931-4.375c.602.165 1.187.381 1.75.647A28.356 28.356 0 0 1 10.1 5.07c-.639.49-1.155.875-1.75 1.251a17.3 17.3 0 0 1-.289-1.636c-.09-.714-.14-1.433-.148-2.153.766.04 1.528.152 2.274.333v.026Z"></path><path d="M14.659 11.115a.675.675 0 0 0-.534-.271h-.245a14.953 14.953 0 0 0-1.575-3.063.927.927 0 0 0-1.277-.271 24.573 24.573 0 0 0-2.512 1.977c-.253.237-.481.455-.7.683l-.402-.298a25 25 0 0 0-2.485-1.54.875.875 0 0 0-.735-.06.928.928 0 0 0-.569.49c-.305.679-.573 1.374-.805 2.082h-.945a.674.674 0 0 0-.534.271.656.656 0 0 0-.087.595l.542 1.627a2.108 2.108 0 0 0 1.995 1.444h8.418a2.109 2.109 0 0 0 1.995-1.444l.542-1.627a.656.656 0 0 0-.087-.595ZM11.43 8.814c.4.647.745 1.326 1.033 2.03h-3.5l.402-.385a22.903 22.903 0 0 1 2.065-1.645Zm-6.764.875c.639.358 1.243.743 1.838 1.155H4.22c.14-.385.28-.77.446-1.155Zm8.295 3.237a.797.797 0 0 1-.752.543H3.79a.796.796 0 0 1-.752-.543l-.289-.77h10.5l-.289.77Z"></path></svg>';

export class IconNachos extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--nachos', '', null, 'IconNachos');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--nachos');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--nachos', '', newVal, 'IconNachos');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-nachos', IconNachos);
