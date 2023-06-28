import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--pickUp"><g clip-path="url(#prefix__clip0_4_159)"><path d="M8.875 2.531H15V1.22H8.875a4.375 4.375 0 0 0-3.929 2.625H3.257l-.122.052A2.047 2.047 0 0 0 1.962 5.2a2.205 2.205 0 0 0 .788 2.275l-.796 5.95c-.012.365.12.72.367.989a1.163 1.163 0 0 0 .875.367h8.671a1.162 1.162 0 0 0 .875-.367 1.364 1.364 0 0 0 .36-1.05l-.77-5.793a2.695 2.695 0 0 0 1.478-1.54H15V4.72h-2.266l-.123.507a1.558 1.558 0 0 1-1.864 1.252l-.34-.062-1.13 1.129a.578.578 0 0 1-.805 0 .586.586 0 0 1-.12-.64.551.551 0 0 1 .13-.183l1.618-1.54a.752.752 0 0 0 .184-.875.77.77 0 0 0-.718-.49H6.46a2.888 2.888 0 0 1 2.415-1.286Zm0 6.493a1.873 1.873 0 0 0 1.33-.551l.665-.666h.087l.753 5.662H3.266l.761-5.688h3.098a1.873 1.873 0 0 0 1.75 1.242Zm-.639-3.868-.665.63c-.198.192-.35.425-.446.683h-3.5a.936.936 0 0 1-.359-.875.717.717 0 0 1 .324-.394h4.646v-.044Z"></path></g><defs><clipPath id="prefix__clip0_4_159"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconPickUp extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPickUp');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPickUp');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-pick-up', IconPickUp);
