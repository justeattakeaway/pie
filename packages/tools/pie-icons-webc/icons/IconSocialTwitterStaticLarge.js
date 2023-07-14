import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--twitterStaticLarge"><path fill="#1D9BF0" d="M26.269 10.614c.015.23.015.461.015.694 0 7.087-5.325 15.26-15.064 15.26v-.003a14.847 14.847 0 0 1-8.116-2.405 10.544 10.544 0 0 0 7.836-2.223c-2.265-.044-4.252-1.54-4.946-3.725a5.21 5.21 0 0 0 2.39-.092c-2.47-.506-4.247-2.704-4.247-5.257v-.068c.736.415 1.56.645 2.403.67-2.326-1.574-3.043-4.71-1.639-7.16a14.963 14.963 0 0 0 10.912 5.603 5.412 5.412 0 0 1 1.532-5.125 5.252 5.252 0 0 1 7.49.233 10.541 10.541 0 0 0 3.363-1.302A5.372 5.372 0 0 1 25.87 8.68c1.05-.125 2.075-.41 3.04-.844a10.835 10.835 0 0 1-2.641 2.778Z"></path></svg>';

export class IconSocialTwitterStaticLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterStaticLarge', '', null, 'IconSocialTwitterStaticLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--twitterStaticLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterStaticLarge', '', newVal, 'IconSocialTwitterStaticLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-twitter-static-large', IconSocialTwitterStaticLarge);
