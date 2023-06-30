import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userCommunityLarge"><path d="M5.5 12.5H3.645a13.125 13.125 0 0 1 24.71 0H26.5a11.374 11.374 0 0 0-21 0Zm4.813.875a3.937 3.937 0 1 1-3.938 3.938 3.946 3.946 0 0 1 3.938-3.938Zm0 1.75a2.187 2.187 0 1 0 0 4.374 2.187 2.187 0 0 0 0-4.374Zm11.374-1.75a3.937 3.937 0 1 1-3.937 3.938 3.946 3.946 0 0 1 3.938-3.938Zm0 1.75a2.187 2.187 0 1 0 0 4.375 2.187 2.187 0 0 0 0-4.375Zm6.476 10.036a5.407 5.407 0 0 0-5.093-3.036h-3.64a6.029 6.029 0 0 0-3.43 1.05 5.923 5.923 0 0 0-3.43-1.05H8.93a5.399 5.399 0 0 0-5.092 3.045L2.55 28.25H4.46l.989-2.415a3.728 3.728 0 0 1 3.5-1.96h3.64a4.376 4.376 0 0 1 2.16.56 4.185 4.185 0 0 0-.393.726l-1.286 3.089h1.89L16 25.835a3.701 3.701 0 0 1 3.5-1.96h3.64a3.702 3.702 0 0 1 3.5 1.96l.901 2.415h1.873l-1.252-3.089Z"></path></svg>';

export class IconUserCommunityLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--userCommunityLarge', '', null, 'IconUserCommunityLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--userCommunityLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userCommunityLarge', '', newVal, 'IconUserCommunityLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-community-large', IconUserCommunityLarge);
