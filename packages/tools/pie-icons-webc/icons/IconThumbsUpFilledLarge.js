import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--thumbsUpFilledLarge"><path d="M28.469 18.065 26.5 24.61a4.375 4.375 0 0 1-4.086 2.765h-8.882c-.295-.407-.566-.83-.813-1.269a8.522 8.522 0 0 1-1.094-4.419 12.118 12.118 0 0 1 1.085-5.25c.246-.467.524-.917.831-1.347.779-1.155 5.39-10.404 5.39-10.404a3.43 3.43 0 0 1 3.754 2.135c.241.622.293 1.3.149 1.952l-.971 4.82 4.724 1.165a2.626 2.626 0 0 1 1.882 3.307Zm-17.037 9.31H3.75v-12.25h7.682c-.087.149-.183.306-.27.481a13.841 13.841 0 0 0-1.287 6.082 10.29 10.29 0 0 0 1.304 5.25l.253.437Z"></path></svg>';

export class IconThumbsUpFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpFilledLarge', '', null, 'IconThumbsUpFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--thumbsUpFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--thumbsUpFilledLarge', '', newVal, 'IconThumbsUpFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-thumbs-up-filled-large', IconThumbsUpFilledLarge);
