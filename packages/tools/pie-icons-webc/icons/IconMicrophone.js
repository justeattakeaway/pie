
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--microphone"><path d="M8.656 12.996V15H7.344v-2.004a5.915 5.915 0 0 1-5.25-5.871h1.312a4.594 4.594 0 0 0 9.188 0h1.312a5.915 5.915 0 0 1-5.25 5.871ZM4.72 7.125V4.5a3.281 3.281 0 1 1 6.562 0v2.625a3.281 3.281 0 0 1-6.562 0Zm1.312 0a1.969 1.969 0 0 0 3.938 0V4.5a1.969 1.969 0 0 0-3.938 0v2.625Z"></path></svg>';

export class IconMicrophone extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconMicrophone');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconMicrophone');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-microphone', IconMicrophone);
