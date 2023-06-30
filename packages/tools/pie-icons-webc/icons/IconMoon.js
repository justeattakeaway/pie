import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--moon"><path d="M8.219 8a4.174 4.174 0 0 1 3.412-4.078 5.249 5.249 0 0 0-1.444-.927A5.39 5.39 0 0 0 8 2.531 5.469 5.469 0 0 0 8 13.47a5.39 5.39 0 0 0 2.188-.464 5.248 5.248 0 0 0 1.443-.928A4.174 4.174 0 0 1 8.22 8ZM8 12.156a4.155 4.155 0 0 1-3.689-6.18 4.156 4.156 0 0 1 4.433-2.054 5.443 5.443 0 0 0 0 8.155 4.12 4.12 0 0 1-.744.08Z"></path></svg>';

export class IconMoon extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--moon');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--moon', '', newVal, 'IconMoon');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-moon', IconMoon);
