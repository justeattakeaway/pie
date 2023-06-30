import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fullscreenExit"><path d="M6.031 1.123 4.72 1.86V4.72H1.766L1.109 6.03h4.922V1.123Z"></path><path d="m9.969 1.11 1.312.656v2.953h2.859l.737 1.312H9.97V1.11Z"></path><path d="m14.89 9.969-.656 1.312h-2.953v2.859l-1.312.737V9.97h4.922Z"></path><path d="m1.123 9.969.737 1.312H4.72v2.953l1.312.657V9.969H1.123Z"></path></svg>';

export class IconFullscreenExit extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExit', '', null, 'IconFullscreenExit');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--fullscreenExit');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fullscreenExit', '', newVal, 'IconFullscreenExit');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-fullscreen-exit', IconFullscreenExit);
