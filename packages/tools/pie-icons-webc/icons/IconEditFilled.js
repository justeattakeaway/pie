import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--editFilled"><path d="M14.44 3.503 12.498 1.56a1.531 1.531 0 0 0-2.162 0L9.12 2.75l.928.928 2.257 2.248.464.473.464.464 1.207-1.217a1.522 1.522 0 0 0 0-2.143Z"></path><path d="M11.378 6.889 8.193 3.704 2.068 9.829c-.267.259-.437.602-.482.971l-.455 4.077 4.07-.455c.357-.04.69-.2.944-.455l6.125-6.125-.464-.463-.428-.49Z"></path></svg>';

export class IconEditFilled extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--editFilled');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--editFilled', '', newVal, 'IconEditFilled');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-edit-filled', IconEditFilled);
