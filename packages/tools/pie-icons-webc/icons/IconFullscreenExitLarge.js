import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fullscreenExitLarge"><path d="m21.25 4.188-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187Z"></path><path d="m4.354 21.25-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354Z"></path><path d="m28.688 19.5-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188Z"></path><path d="m10.75 4.354 1.75-.986V12.5H3.312l.876-1.75h6.562V4.354Z"></path></svg>';

export class IconFullscreenExitLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExitLarge', '', null, 'IconFullscreenExitLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--fullscreenExitLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExitLarge', '', newVal, 'IconFullscreenExitLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-fullscreen-exit-large', IconFullscreenExitLarge);
