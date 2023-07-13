import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--youtubeCircle"><g clip-path="url(#prefix__clip0_889_625)"><path d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.469 5.469 0 1 1 8 2.487a5.469 5.469 0 0 1 0 10.938Z"></path><path fill-rule="evenodd" d="M10.344 6.128a.76.76 0 0 1 .53.543C11 7.15 11 8.148 11 8.148s0 1-.125 1.478a.76.76 0 0 1-.53.543c-.469.128-2.345.128-2.345.128s-1.876 0-2.344-.128a.76.76 0 0 1-.53-.543C5 9.147 5 8.148 5 8.148s0-.998.125-1.477a.76.76 0 0 1 .53-.543C6.125 6 8 6 8 6s1.876 0 2.344.128Zm-1.39 2.174-1.568.907V7.395l1.569.907Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_889_625"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialYoutubeCircle extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircle', '', null, 'IconSocialYoutubeCircle');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--youtubeCircle');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeCircle', '', newVal, 'IconSocialYoutubeCircle');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-youtube-circle', IconSocialYoutubeCircle);
