import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path fill-rule="evenodd" d="M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM8.729 16.254c.026.028.046.06.06.096.016.115.03.232.045.35.033.275.067.553.122.823.116.573.307 1.13.569 1.653a6.815 6.815 0 0 0 1.557 2.135 7.253 7.253 0 0 0 5.574 1.995A7.228 7.228 0 0 0 19.99 22.3c.342-.209.665-.449.962-.718a6.764 6.764 0 0 0 1.846-2.957c.315-1.07.416-2.19.298-3.299a3.113 3.113 0 0 0-.047-.33c-.024-.14-.05-.28-.05-.422h-6.868v2.87h4.016v.175a3.404 3.404 0 0 1-1.4 2.091 4.13 4.13 0 0 1-1.794.691 4.505 4.505 0 0 1-1.872-.07 4.445 4.445 0 0 1-2.424-1.627 4.668 4.668 0 0 1-.665-1.234 3.972 3.972 0 0 1-.271-1.75 4.548 4.548 0 0 1 1.811-3.413 4.2 4.2 0 0 1 2.354-.875 4.07 4.07 0 0 1 3.071 1.068l2.083-2.021-.438-.359a6.887 6.887 0 0 0-3.5-1.47 7.367 7.367 0 0 0-7.971 4.883 6.624 6.624 0 0 0-.35 1.522l-.052.473v.726Z" clip-rule="evenodd"></path></svg>';

export class IconSocialGoogleCircleFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--googleCircleFilledLarge', '', null, 'IconSocialGoogleCircleFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--googleCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--googleCircleFilledLarge', '', newVal, 'IconSocialGoogleCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--googleCircleFilledLarge', newVal);
    }
}

customElements.define('icon-social-google-circle-filled-large', IconSocialGoogleCircleFilledLarge);
