import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--fullscreenExitLarge"><path d="m21.25 4.188-1.75-.875V12.5h9.132l-.986-1.75H21.25V4.187Z"></path><path d="m4.354 21.25-.986-1.75H12.5v9.188l-1.75-.875V21.25H4.354Z"></path><path d="m28.688 19.5-.875 1.75H21.25v6.396l-1.75.986V19.5h9.188Z"></path><path d="m10.75 4.354 1.75-.986V12.5H3.312l.876-1.75h6.562V4.354Z"></path></svg>';

export class IconFullscreenExitLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFullscreenExitLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFullscreenExitLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-fullscreen-exit-large', IconFullscreenExitLarge);
