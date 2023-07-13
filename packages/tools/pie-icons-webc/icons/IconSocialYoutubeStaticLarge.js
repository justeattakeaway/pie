import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--youtubeStaticLarge"><path fill="red" d="M27.9 9.97a3.134 3.134 0 0 0-2.186-2.236c-1.928-.529-9.662-.529-9.662-.529s-7.733 0-9.662.529A3.133 3.133 0 0 0 4.204 9.97c-.517 1.973-.517 6.09-.517 6.09s0 4.116.517 6.09a3.134 3.134 0 0 0 2.186 2.236c1.929.529 9.662.529 9.662.529s7.734 0 9.662-.529a3.134 3.134 0 0 0 2.187-2.237c.516-1.973.516-6.09.516-6.09s0-4.116-.516-6.09Z"></path><path fill="#fff" d="m13.523 19.798 6.464-3.738-6.464-3.737v7.475Z"></path></svg>';

export class IconSocialYoutubeStaticLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStaticLarge', '', null, 'IconSocialYoutubeStaticLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--youtubeStaticLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--youtubeStaticLarge', '', newVal, 'IconSocialYoutubeStaticLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-youtube-static-large', IconSocialYoutubeStaticLarge);
