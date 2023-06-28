import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--signClosed"><path d="M13.25 4.719h-2.126L8.507 1.464H7.494L4.867 4.719H2.75A1.54 1.54 0 0 0 1.219 6.25v5.25a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V6.25a1.54 1.54 0 0 0-1.531-1.531ZM8 2.969l1.444 1.75H6.556L8 2.969Zm5.469 8.531a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219V6.25a.219.219 0 0 1 .219-.219h10.5a.219.219 0 0 1 .219.219v5.25Zm-3.5-3.692L8.928 8.874l1.076 1.068-.936.936L8 9.803l-1.067 1.076-.937-.936 1.076-1.068-1.076-1.067.936-.937L8 7.947l1.068-1.076.9.936Z"></path></svg>';

export class IconSignClosed extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSignClosed');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSignClosed');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-sign-closed', IconSignClosed);
