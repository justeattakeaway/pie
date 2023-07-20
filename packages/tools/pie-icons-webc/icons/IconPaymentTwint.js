import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--twint"><rect width="12" height="12" x="2" y="2" fill="#000"></rect><path fill="#fff" d="M12.75 10.077h-1.713v.412h.615v1.76h.485v-1.76h.613v-.412Zm-7.784 0H3.25v.412h.615v1.76h.485v-1.76h.616v-.412Zm4.96-.068c-.54 0-.84.346-.84.848v1.393h.48v-1.404c0-.218.128-.386.365-.386s.363.2.363.386v1.404h.48v-1.393c.002-.502-.308-.848-.848-.848Zm-1.81.068v2.173h.48v-2.173h-.48Zm-1.627.86.015.098.452 1.215h.195l.613-2.173h-.472L7 11.219l-.018.123-.024-.123-.391-1.142H6.41l-.39 1.142-.024.123-.016-.123-.292-1.142h-.474l.612 2.173h.196l.451-1.215.016-.097Z"></path><path fill="#fff" d="M10.355 7.616a.238.238 0 0 1-.109.186L8.152 9.02a.24.24 0 0 1-.217 0L5.84 7.802a.237.237 0 0 1-.108-.186V5.18c0-.069.048-.152.108-.186l2.095-1.218a.24.24 0 0 1 .217 0l2.095 1.218c.06.034.108.117.108.186v2.436Z"></path><path fill="url(#prefix__paint0_radial_3973_4725)" d="m9.136 6.404-.548.807-.28-.431.323-.485a.638.638 0 0 0 .04-.65.67.67 0 0 0-1.219 0 .627.627 0 0 0 .037.641s.18.264.329.488l.242.354.366.563c.003.002.06.091.162.091.097 0 .157-.089.166-.097L9.61 6.41h-.474v-.006Zm-1.076.02s-.142-.218-.237-.37a.272.272 0 0 1 .237-.409c.226 0 .337.245.237.408-.091.153-.237.37-.237.37Z"></path><path fill="url(#prefix__paint1_radial_3973_4725)" d="m7.535 7.185-.537-.758s-.142-.219-.236-.37a.272.272 0 0 1 .316-.397l.189-.348A.68.68 0 0 0 7 5.255a.674.674 0 0 0-.61.39.627.627 0 0 0 .037.641l.939 1.399c.008.011.068.1.168.1s.157-.086.166-.097l.282-.434-.242-.359-.206.29Z"></path><defs><radialGradient id="prefix__paint0_radial_3973_4725" cx="0" cy="0" r="1" gradientTransform="matrix(10.7623 0 0 9.6294 5.383 4.495)" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0"></stop><stop offset=".092" stop-color="#FFC800"></stop><stop offset=".174" stop-color="#FFBD00"></stop><stop offset=".253" stop-color="#FFAB00"></stop><stop offset=".33" stop-color="#FF9100"></stop><stop offset=".405" stop-color="#FF7000"></stop><stop offset=".479" stop-color="#FF4700"></stop><stop offset=".55" stop-color="#FF1800"></stop><stop offset=".582" stop-color="red"></stop><stop offset="1" stop-color="red"></stop></radialGradient><radialGradient id="prefix__paint1_radial_3973_4725" cx="0" cy="0" r="1" gradientTransform="matrix(2.31436 0 0 3.52162 6.36 5.622)" gradientUnits="userSpaceOnUse"><stop stop-color="#00B4E6"></stop><stop offset=".201" stop-color="#00B0E3"></stop><stop offset=".39" stop-color="#01A5DB"></stop><stop offset=".574" stop-color="#0292CD"></stop><stop offset=".755" stop-color="#0377BA"></stop><stop offset=".932" stop-color="#0455A1"></stop><stop offset="1" stop-color="#054696"></stop></radialGradient></defs></svg>';

export class IconPaymentTwint extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twint', '', null, 'IconPaymentTwint');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--twint');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twint', '', newVal, 'IconPaymentTwint');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-payment-twint', IconPaymentTwint);
