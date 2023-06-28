import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--navigationExpand"><path d="M1.93 2.373V13.45h8.64a3.323 3.323 0 0 0 3.322-3.322V2.373H1.93Zm1.33 1.33h3.1v8.417h-3.1V3.703Zm9.303 6.424a1.994 1.994 0 0 1-1.994 1.993H7.69V3.703h4.874v6.424Z"></path><path d="m8.797 9.666 2.605-1.826-2.605-1.674"></path></svg>';

export class IconNavigationExpand extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconNavigationExpand');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconNavigationExpand');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-navigation-expand', IconNavigationExpand);
