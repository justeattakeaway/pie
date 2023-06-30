import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--editLarge"><path d="M27.559 7.74 24.26 4.441a2.424 2.424 0 0 0-3.343 0L5.072 20.288a2.45 2.45 0 0 0-.7 1.46l-.735 6.616 6.615-.735a2.45 2.45 0 0 0 1.462-.7l15.846-15.846a2.364 2.364 0 0 0 0-3.343Zm-8.47 1.006 4.165 4.165-11.235 11.244a7.927 7.927 0 0 0-4.174-4.165L19.089 8.746Zm-9.03 17.142-4.445.498.498-4.445a.7.7 0 0 1 .202-.42l.166-.166a6.125 6.125 0 0 1 4.165 4.165l-.166.166a.7.7 0 0 1-.42.201ZM26.325 9.875l-1.829 1.82-4.121-4.191 1.75-1.82a.612.612 0 0 1 .67-.137c.075.032.141.078.196.137L26.325 9a.621.621 0 0 1 0 .875Z"></path></svg>';

export class IconEditLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--editLarge', '', null, 'IconEditLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--editLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--editLarge', '', newVal, 'IconEditLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-edit-large', IconEditLarge);
