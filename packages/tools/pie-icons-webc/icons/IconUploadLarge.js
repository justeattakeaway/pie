import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--uploadLarge"><path d="m11.546 9.796-1.233-1.234 4.453-4.453a1.75 1.75 0 0 1 2.468 0l4.453 4.453-1.233 1.234-3.579-3.57V19.5h-1.75V6.226l-3.579 3.57ZM23 12.5h-3.5v1.75H23a.875.875 0 0 1 .875.875V26.5a.875.875 0 0 1-.875.875H9a.875.875 0 0 1-.875-.875V15.125A.875.875 0 0 1 9 14.25h3.5V12.5H9a2.625 2.625 0 0 0-2.625 2.625V26.5A2.625 2.625 0 0 0 9 29.125h14a2.625 2.625 0 0 0 2.625-2.625V15.125A2.625 2.625 0 0 0 23 12.5Z"></path></svg>';

export class IconUploadLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconUploadLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconUploadLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-upload-large', IconUploadLarge);
