import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--idCard"><path d="M5.813 9.094h-.875a1.54 1.54 0 0 1-1.532-1.531v-.875a1.54 1.54 0 0 1 1.531-1.532h.875a1.54 1.54 0 0 1 1.532 1.532v.875a1.54 1.54 0 0 1-1.532 1.53Zm-.875-2.625a.219.219 0 0 0-.22.218v.875a.219.219 0 0 0 .22.22h.875a.219.219 0 0 0 .218-.22v-.875a.219.219 0 0 0-.218-.218h-.875Z"></path><path d="M13.25 2.969H2.75A1.54 1.54 0 0 0 1.219 4.5v7a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531v-7a1.54 1.54 0 0 0-1.531-1.531Zm.219 8.531a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-7a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v7Z"></path><path d="m11.491 10.406.657-1.312H9.103v1.312"></path></svg>';

export class IconIdCard extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--idCard', '', null, 'IconIdCard');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--idCard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--idCard', '', newVal, 'IconIdCard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-id-card', IconIdCard);
