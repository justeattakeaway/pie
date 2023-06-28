import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--cloudUpload"><g clip-path="url(#prefix__clip0_15_723)"><path d="M15 10.205a2.983 2.983 0 0 1-2.984 2.984h-1.942v-1.313h1.942a1.679 1.679 0 0 0 .359-3.316l-.499-.114V7.93a3.868 3.868 0 0 0-7.682-.586l-.07.393-.385.123a2.021 2.021 0 0 0-1.426 1.951 2.065 2.065 0 0 0 2.065 2.065h1.548v1.313H4.378a3.377 3.377 0 0 1-1.41-6.449 5.189 5.189 0 0 1 10.186.691A2.983 2.983 0 0 1 15 10.205Zm-4.786.332.927-.927-2.406-2.398a1.033 1.033 0 0 0-1.47 0L4.859 9.61l.927.928L7.344 8.98v4.27h1.312V8.98l1.558 1.557Z"></path></g><defs><clipPath id="prefix__clip0_15_723"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconCloudUpload extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconCloudUpload');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconCloudUpload');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-cloud-upload', IconCloudUpload);
