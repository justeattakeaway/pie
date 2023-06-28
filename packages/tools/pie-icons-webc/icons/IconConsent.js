import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--consent"><path d="M13.924 11.57v-7c0-.84-.691-1.531-1.531-1.531h-8.75c-.84 0-1.532.691-1.532 1.531v7h-.849v1.313h13.502V11.57h-.84Zm-10.5 0v-7c0-.122.096-.219.218-.219h8.75c.123 0 .22.097.22.22v7H3.423Z"></path><path d="m10.126 5.541-3.123 3.37-1.085-1.226-.98.875L5.97 9.724l.306.341a.993.993 0 0 0 1.453 0l.315-.341 3.045-3.281-.963-.893v-.009Z"></path></svg>';

export class IconConsent extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconConsent');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconConsent');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-consent', IconConsent);
