
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--bulgaria"><path fill="#496E2D" d="M15.002 7.999a6.91 6.91 0 0 0-.437-2.434L8 5.259l-6.563.306a6.987 6.987 0 0 0 0 4.868L8 10.739l6.564-.306a6.91 6.91 0 0 0 .437-2.434Z"></path><path fill="#D80027" d="M8.001 15a7 7 0 0 0 6.564-4.567H1.438A7 7 0 0 0 8 15Z"></path><path fill="#EEE" d="M1.438 5.565h13.127a7.002 7.002 0 0 0-13.127 0Z"></path></svg>;';

export class IconFlagBulgaria extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFlagBulgaria');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFlagBulgaria');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-flag-bulgaria', IconFlagBulgaria);
