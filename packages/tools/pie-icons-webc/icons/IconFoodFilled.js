
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--foodFilled"><g clip-path="url(#prefix__clip0_2_2302)"><path d="M6.521 11.832a1.508 1.508 0 0 0-.183-.113h-.193c-.062.029-.12.064-.175.105a4.078 4.078 0 0 1-2.345.7 3.981 3.981 0 0 1-1.969-.481c.07 2.3 1.601 2.738 4.594 2.738 2.992 0 4.506-.437 4.585-2.712a4.042 4.042 0 0 1-1.96.463 4.138 4.138 0 0 1-2.354-.7Z"></path><path d="M3.529 8.595h.192c.062-.029.12-.064.175-.105a4.13 4.13 0 0 1 2.354-.709 4.139 4.139 0 0 1 2.354.7c.058.043.12.08.184.114h.192a.77.77 0 0 0 .175-.105c.446-.3.945-.515 1.47-.63-.473-1.461-2.249-2.485-4.375-2.485S2.33 6.399 1.805 7.851c.55.106 1.074.32 1.54.63.058.043.12.08.184.114Z"></path><path d="M8.875 9.908a1.549 1.549 0 0 1-.971-.307 2.782 2.782 0 0 0-1.654-.507 2.791 2.791 0 0 0-1.654.507 1.54 1.54 0 0 1-.962.306 1.566 1.566 0 0 1-.971-.306A2.774 2.774 0 0 0 1 9.094v1.312c.346-.01.686.098.962.306a2.8 2.8 0 0 0 1.663.508 2.774 2.774 0 0 0 1.654-.508c.28-.209.622-.317.971-.306.349-.01.691.098.971.306a2.8 2.8 0 0 0 1.663.508 2.774 2.774 0 0 0 1.653-.508c.279-.205.617-.313.963-.306V9.094a2.826 2.826 0 0 0-1.662.507 1.54 1.54 0 0 1-.963.306Z"></path><path d="M12.156 2.969V1h-1.312v1.969h-3.15l.131 1.26a5.197 5.197 0 0 1 4.2 3.552h.787v3.938h-.673v.166a4.664 4.664 0 0 1-.403 2.021h.875a1.514 1.514 0 0 0 1.514-1.391L15 2.969h-2.844Z"></path></g><defs><clipPath id="prefix__clip0_2_2302"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export default class IconFoodFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconFoodFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconFoodFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-food-filled', IconFoodFilled);
