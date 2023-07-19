import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--settingsLarge"><path d="M18.529 28.25h-5.057l-.57-2.004a3.43 3.43 0 0 0-1.653-1.986 3.5 3.5 0 0 0-2.581-.455l-2.013.516-2.529-4.375 1.374-1.47a3.412 3.412 0 0 0 .875-2.424v-.104a3.412 3.412 0 0 0-.875-2.424L4.126 12.07l2.53-4.375 2.012.517a3.5 3.5 0 0 0 2.555-.438 3.5 3.5 0 0 0 1.68-2.004l.569-2.021h5.057l.569 2.004a3.43 3.43 0 0 0 1.654 1.986 3.5 3.5 0 0 0 2.58.455l2.013-.516 2.529 4.375-1.374 1.47a3.412 3.412 0 0 0-.875 2.424v.096a3.421 3.421 0 0 0 .875 2.432l1.409 1.453-2.529 4.375-2.012-.516a3.78 3.78 0 0 0-4.235 2.44l-.604 2.022Zm-3.736-1.75h2.415l.21-.726a5.144 5.144 0 0 1 2.459-3.028 5.136 5.136 0 0 1 3.885-.621l.726.184 1.207-2.1-.49-.499a5.171 5.171 0 0 1-1.391-3.658V16a5.171 5.171 0 0 1 1.391-3.658l.49-.498L24.488 9.7l-.726.175a5.128 5.128 0 0 1-3.86-.613 5.18 5.18 0 0 1-2.484-3.045l-.21-.717h-2.415l-.21.726a5.145 5.145 0 0 1-2.459 3.028 5.137 5.137 0 0 1-3.885.621L7.513 9.7l-1.208 2.1.49.499A5.172 5.172 0 0 1 8.186 16a5.25 5.25 0 0 1-1.39 3.745l-.49.499L7.512 22.3l.726-.175a5.127 5.127 0 0 1 3.859.613 5.18 5.18 0 0 1 2.485 3.044l.21.718ZM16 20.812a4.813 4.813 0 1 1 3.404-1.408A4.777 4.777 0 0 1 16 20.813Zm0-7.875a3.062 3.062 0 0 0-2.161 5.25 3.132 3.132 0 0 0 4.322 0 3.063 3.063 0 0 0-2.16-5.25Z"></path></svg>';

export class IconSettingsLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsLarge', '', null, 'IconSettingsLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--settingsLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--settingsLarge', '', newVal, 'IconSettingsLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-settings-large', IconSettingsLarge);
