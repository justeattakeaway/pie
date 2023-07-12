import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--imageAddLarge"><path d="M11.625 16.875a3.937 3.937 0 1 0-3.938-3.938 3.946 3.946 0 0 0 3.938 3.938Zm0-6.125a2.187 2.187 0 1 1 0 4.375 2.187 2.187 0 0 1 0-4.375Z"></path><path d="M27.375 10.313v6.124c-4.629-1.548-7.621.438-10.273 2.188-.63.42-1.233.805-1.846 1.155-2.896-1.155-6.151-2.494-10.631-.543V7.25h12.25V5.5h-14v21h26.25V10.312h-1.75Zm-9.31 9.773c2.564-1.697 4.987-3.307 8.89-1.986a5.662 5.662 0 0 1-2.275 2.047 8.339 8.339 0 0 1-7.394.447l.779-.508Zm9.31 4.664H4.625v-3.579c4.235-2.143 7.079-.971 10.071.28A15.192 15.192 0 0 0 20.62 23a10.316 10.316 0 0 0 4.874-1.313 8.004 8.004 0 0 0 1.881-1.312v4.375Z"></path><path d="M28.25 6.813h-3.938V2.874h-1.75v3.938h-3.937v1.75h3.938V12.5h1.75V8.562h3.937v-1.75Z"></path></svg>';

export class IconImageAddLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--imageAddLarge', '', null, 'IconImageAddLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--imageAddLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--imageAddLarge', '', newVal, 'IconImageAddLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-image-add-large', IconImageAddLarge);
