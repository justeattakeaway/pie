import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--listLarge"><path d="M27.856 8.125H10.75v1.75h16.494l.612-1.75Z"></path><path d="M5.5 24.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path><path d="M25.406 15.125H10.75v1.75h14.044l.612-1.75Z"></path><path d="M27.506 22.125H10.75v1.75h16.222l.534-1.75Z"></path><path d="M5.5 17.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path><path d="M5.5 10.575a1.575 1.575 0 1 0 0-3.15 1.575 1.575 0 0 0 0 3.15Z"></path></svg>';

export class IconListLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--listLarge', '', null, 'IconListLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--listLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--listLarge', '', newVal, 'IconListLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-list-large', IconListLarge);
