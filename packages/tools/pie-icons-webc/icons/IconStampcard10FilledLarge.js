import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stampcard10FilledLarge"><path d="m24.654 19.929-.271.376-.053.07a1.75 1.75 0 0 1-1.417.718H21.6c-.656 0-1.26-.368-1.557-.954a1.775 1.775 0 0 1-.158-1.076c-.849 1.33-2.275 2.16-3.981 2.16-1.269 0-2.371-.454-3.203-1.224a1.74 1.74 0 0 1-1.627 1.102H9.621c-.962 0-1.75-.787-1.75-1.75v-3.115a1.746 1.746 0 0 1-1.05-.989l-.48-1.163a1.757 1.757 0 0 1 .935-2.284l2.074-.884a1.83 1.83 0 0 1 .683-.14h1.041c.735 0 1.365.455 1.627 1.103.84-.779 1.943-1.225 3.203-1.225 1.26 0 2.389.463 3.229 1.251.63-.744 1.575-1.251 2.826-1.251.656 0 1.269.149 1.82.446a3.6 3.6 0 0 1 1.032.849l.324-.447a1.731 1.731 0 0 1 1.26-.7v-.148c-.017-.105-.043-.21-.061-.315a6.097 6.097 0 0 0-1.418-3.553l-.105-.105a6.027 6.027 0 0 0-3.5-1.417A6.494 6.494 0 0 1 20.157 5a5.295 5.295 0 0 1-.902-.569 6.159 6.159 0 0 0-3.587-1.54h-.14a6.1 6.1 0 0 0-3.553 1.514 5.47 5.47 0 0 1-.936.595 6.2 6.2 0 0 1-1.103.254 6.04 6.04 0 0 0-3.552 1.417l-.105.105a6.027 6.027 0 0 0-1.418 3.5c-.052.394-.14.78-.262 1.155a5.29 5.29 0 0 1-.569.902 6.16 6.16 0 0 0-1.54 3.587v.149a6.1 6.1 0 0 0 1.514 3.552c.227.29.429.604.595.937a6.2 6.2 0 0 1 .254 1.102 6.063 6.063 0 0 0 1.417 3.553l.105.105a6.026 6.026 0 0 0 3.5 1.417c.394.053.779.14 1.155.263.333.166.648.367.902.569a6.159 6.159 0 0 0 3.587 1.54h.149c1.321-.114 2.599-.657 3.552-1.514.289-.228.604-.429.937-.595.376-.123.76-.21 1.102-.254a6.063 6.063 0 0 0 3.552-1.418l.105-.105a6.028 6.028 0 0 0 1.418-3.5c.026-.21.061-.41.114-.62v-.027a3.492 3.492 0 0 1-1.803-1.146h.009Z"></path><path d="m28.802 15.982-.053-.052c-.306-.236-.717-.376-1.234-.376-.218 0-.411.035-.595.087-.945.254-1.391 1.103-1.391 1.882 0 .253.052.516.149.77.21.533.647.997 1.338 1.146.15.035.316.052.49.052.552 0 .972-.175 1.287-.428.472-.386.7-.98.7-1.532 0-.551-.228-1.146-.7-1.531l.009-.018ZM27.76 18.39c-.079.017-.157.044-.236.044-.49 0-.884-.36-.884-.928 0-.569.385-.927.884-.927.455 0 .805.314.857.805 0 .043.018.078.018.122 0 .473-.271.779-.639.875v.009Z"></path><path d="M11.083 19.351v-6.825H10.05l-2.082.884.481 1.164 1.19-.42v5.197h1.444Z"></path><path d="M15.913 12.404c-2.109 0-3.098 1.776-3.098 3.535 0 1.759.989 3.535 3.098 3.535 2.108 0 3.097-1.776 3.097-3.535 0-1.759-.989-3.535-3.097-3.535Zm0 5.775c-.998 0-1.619-.954-1.619-2.231 0-1.278.621-2.232 1.619-2.232.997 0 1.619.954 1.619 2.232 0 1.277-.622 2.23-1.62 2.23Z"></path><path d="M23.954 14.364c0-.657-.315-1.365-.989-1.724a2.025 2.025 0 0 0-.997-.236c-1.365 0-1.986 1.041-1.986 1.96 0 .918.62 1.96 1.986 1.96.393 0 .717-.097.997-.245.674-.359.989-1.068.989-1.724v.009Zm-1.986.927c-.49 0-.884-.359-.884-.927 0-.569.385-.928.884-.928.498 0 .884.359.884.928 0 .568-.386.927-.884.927Z"></path><path d="M22.965 17.479 21.61 19.35h1.313l.043-.07 3.378-4.637 1.085-1.496.455-.622H26.57l-.875 1.208-2.73 3.745Z"></path></svg>';

export class IconStampcard10FilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10FilledLarge', '', null, 'IconStampcard10FilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcard10FilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcard10FilledLarge', '', newVal, 'IconStampcard10FilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard10-filled-large', IconStampcard10FilledLarge);
