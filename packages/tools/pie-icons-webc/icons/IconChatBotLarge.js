import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatBotLarge"><g clip-path="url(#prefix__clip0_18_548)"><path d="M26.36 9.131a11.769 11.769 0 1 0-14.446 16.573l.105 4.453.997-.157c7-1.172 12.25-5.617 14.202-11.891a11.647 11.647 0 0 0-.858-8.978Zm-.814 8.453c-1.627 5.329-6.01 9.187-11.82 10.5l-.097-3.649-.604-.184a10.033 10.033 0 0 1 5.871-19.188 10.027 10.027 0 0 1 6.65 12.52Zm-7.35-1.532 1.698.43a4.016 4.016 0 0 1-7.788 0l1.698-.43a2.266 2.266 0 0 0 4.375 0h.017Zm5.68-2.86-1.698.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.107 3.107 0 0 1 6.072 0Zm-11.323.41a1.365 1.365 0 0 0-2.678 0l-1.697-.41a3.106 3.106 0 0 1 6.072 0l-1.697.41Z"></path></g><defs><clipPath id="prefix__clip0_18_548"><rect width="28" height="28" transform="translate(2 2)"></rect></clipPath></defs></svg>';

export class IconChatBotLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBotLarge', '', null, 'IconChatBotLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chatBotLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatBotLarge', '', newVal, 'IconChatBotLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-chat-bot-large', IconChatBotLarge);
