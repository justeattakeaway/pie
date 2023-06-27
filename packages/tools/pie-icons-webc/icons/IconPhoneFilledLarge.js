
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--phoneFilledLarge"><path d="M18.623 19.302a2.485 2.485 0 0 1 1.752.268l6.431 3.544-1.47 2.738a4.498 4.498 0 0 1-3.902 2.398c-.18.013-.362.013-.543 0a19.34 19.34 0 0 1-6.71-2.223 19.81 19.81 0 0 1-8.287-8.452 20.239 20.239 0 0 1-2.1-6.554 4.568 4.568 0 0 1 2.38-4.646l2.222-1.181 3.43 6.431a2.555 2.555 0 0 1-.717 3.238l-3.334 2.546a17.955 17.955 0 0 0 6.545 6.702l2.818-3.841c.359-.494.888-.839 1.485-.968Z"></path><path d="M16.875 5.5v1.75a7.875 7.875 0 0 1 7.875 7.875h1.75A9.625 9.625 0 0 0 16.875 5.5Z"></path><path d="M16.875 9.875v1.75a3.5 3.5 0 0 1 3.5 3.5h1.75a5.25 5.25 0 0 0-5.25-5.25Z"></path></svg>';

export class IconPhoneFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPhoneFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPhoneFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-phone-filled-large', IconPhoneFilledLarge);
