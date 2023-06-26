
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--toilet"><g clip-path="url(#prefix__clip0_18_2278)"><path d="M6.425 7.51a1.496 1.496 0 0 0-.954-.875l.14-.114A2.203 2.203 0 1 0 2.514 3.39a2.205 2.205 0 0 0 0 3.097l.14.114a1.496 1.496 0 0 0-.954.875L1 9.601a1.313 1.313 0 0 0 .499 1.47l.35.271v2.783H3.16v-3.439l-.875-.674.691-2.09a.455.455 0 0 1 .377-.14H4.84a.455.455 0 0 1 .376.14l.648 2.1-.875.664v3.439h1.26v-2.783l.35-.27a1.312 1.312 0 0 0 .525-1.47l-.7-2.092ZM3.44 4.316A.875.875 0 1 1 4.684 5.55.875.875 0 0 1 3.44 4.316Zm10.071 3.185a1.566 1.566 0 0 0-1.024-.875l.123-.096a2.188 2.188 0 1 0-3.097 0l.122.096a1.601 1.601 0 0 0-1.041.954l-1.05 4.865h1.242v1.68H10.1v-2.992h-.928l.683-3.203a.569.569 0 0 1 .428-.149h1.558c.245 0 .402.114.402.07l.71 3.282h-.928v2.992h1.312v-1.68h1.243l-1.068-4.944Zm-3.071-3.185a.876.876 0 1 1 1.244 1.235.876.876 0 0 1-1.244-1.235Z"></path></g><defs><clipPath id="prefix__clip0_18_2278"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>;';

export class IconToilet extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconToilet');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconToilet');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-toilet', IconToilet);
