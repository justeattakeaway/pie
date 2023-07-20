import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pointsLarge"><path d="M26.614 12.535a2.627 2.627 0 0 0-2.625-2.625h-.298a3.602 3.602 0 0 0 1.033-1.89c.218-1.155-.35-2.38-1.4-2.975-2.328-1.321-4.428.542-5.154 1.19a45.752 45.752 0 0 0-2.266 2.117 48.599 48.599 0 0 0-2.31-2.152c-.692-.613-2.792-2.476-5.12-1.155-1.05.595-1.627 1.82-1.4 2.975.14.726.508 1.391 1.033 1.89h-.166a2.627 2.627 0 0 0-2.625 2.625v4.646h1.986v7.543a2.63 2.63 0 0 0 2.617 2.625l12.03.043h.01c.7 0 1.356-.27 1.855-.76.498-.5.77-1.156.77-1.856V17.19h2.056v-4.646l-.026-.009ZM19.36 7.504c.919-.814 2.004-1.558 3.089-.945.472.271.612.77.542 1.128-.114.578-.481.98-.787 1.164-1.514.901-3.824.858-5.067.718a49.913 49.913 0 0 1 2.223-2.065ZM9.332 6.559c.28-.158.56-.228.832-.228.805 0 1.583.578 2.3 1.208a51.69 51.69 0 0 1 2.18 2.03c-1.252.14-3.553.183-5.067-.718a1.781 1.781 0 0 1-.787-1.164c-.07-.35.07-.857.542-1.128ZM7.05 12.535c0-.481.393-.875.875-.875h7.087v3.78H7.05v-2.905Zm1.986 12.189V17.18h5.976v8.435L9.91 25.6a.87.87 0 0 1-.866-.875h-.01Zm13.781.043a.866.866 0 0 1-.866.875l-5.18-.017v-8.444h6.055v7.586h-.009Zm2.056-9.336h-8.11v-3.78h7.227c.48 0 .875.394.875.875v2.896l.008.01Z"></path></svg>';

export class IconLogoPointsLarge extends HTMLElement {
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

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pointsLarge', '', null, 'IconLogoPointsLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pointsLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pointsLarge', '', newVal, 'IconLogoPointsLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-logo-points-large', IconLogoPointsLarge);
