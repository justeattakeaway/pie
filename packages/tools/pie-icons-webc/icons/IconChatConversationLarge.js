import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--chatConversationLarge"><path d="M22.125 17.75V7.25A2.625 2.625 0 0 0 19.5 4.625h-14A2.625 2.625 0 0 0 2.875 7.25v16.625h2.266l3.238-3.246c.167-.16.39-.25.621-.254h10.5a2.625 2.625 0 0 0 2.625-2.625Zm-14.98 1.645-2.52 2.52V7.25a.875.875 0 0 1 .875-.875h14a.875.875 0 0 1 .875.875v10.5a.875.875 0 0 1-.875.875H9c-.696 0-1.363.278-1.855.77Zm21.98-6.895v16.625H26.85l-3.229-3.246a.92.92 0 0 0-.621-.254H12.5A2.625 2.625 0 0 1 9.875 23v-.875h1.75V23a.875.875 0 0 0 .875.875H23c.688.002 1.35.268 1.846.744l2.529 2.546V12.5a.875.875 0 0 0-.875-.875h-2.625v-1.75H26.5a2.625 2.625 0 0 1 2.625 2.625Zm-15.313 0a1.313 1.313 0 1 1-2.625 0 1.313 1.313 0 0 1 2.626 0Zm4.376 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.626 0Zm-8.75 0a1.313 1.313 0 1 1-2.626 0 1.313 1.313 0 0 1 2.625 0Z"></path></svg>';

export class IconChatConversationLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--chatConversationLarge', '', null, 'IconChatConversationLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--chatConversationLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--chatConversationLarge', '', newVal, 'IconChatConversationLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-chat-conversation-large', IconChatConversationLarge);
