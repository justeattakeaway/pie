
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--planeLarge"><path d="m20.786 28.582-2.905-.97a6.011 6.011 0 0 0-3.762 0l-2.905.97-.062-2.143.456-.263a1.75 1.75 0 0 0 .874-1.531v-3.894l-7.455 1.313V18.45a2.214 2.214 0 0 1 1.13-1.916l6.343-3.868V7.25a3.5 3.5 0 1 1 7 0v5.416l6.352 3.894a2.17 2.17 0 0 1 1.103 1.89v3.614L19.5 20.75v3.894a1.75 1.75 0 0 0 .875 1.531l.455.263-.044 2.143ZM16 25.555a7.75 7.75 0 0 1 1.951.254 3.5 3.5 0 0 1-.201-1.164v-6.02l7.455 1.321V18.45a.446.446 0 0 0-.227-.385L17.75 13.69V7.25a1.75 1.75 0 0 0-3.5 0v6.405L7.057 18.03a.463.463 0 0 0-.262.402v1.532l7.455-1.339v5.985c0 .396-.069.79-.201 1.164A7.748 7.748 0 0 1 16 25.555Z"></path></svg>;';

export class IconPlaneLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPlaneLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPlaneLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-plane-large', IconPlaneLarge);
