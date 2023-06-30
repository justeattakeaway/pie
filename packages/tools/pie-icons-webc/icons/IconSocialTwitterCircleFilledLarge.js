import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--twitterCircleFilledLarge"><path d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm6.125 10.01v.377a8.4 8.4 0 0 1-12.889 7.078 5.888 5.888 0 0 0 4.366-1.225 2.95 2.95 0 0 1-2.756-2.047c.182.035.367.053.552.052a2.84 2.84 0 0 0 .778-.105 2.957 2.957 0 0 1-2.362-2.896c.408.226.864.352 1.33.368a2.957 2.957 0 0 1-.875-3.947 8.347 8.347 0 0 0 6.125 3.089 2.841 2.841 0 0 1-.079-.674 2.949 2.949 0 0 1 2.879-3.001 2.984 2.984 0 0 1 2.161.928 5.782 5.782 0 0 0 1.872-.718 2.984 2.984 0 0 1-1.294 1.636 5.88 5.88 0 0 0 1.697-.463 6.3 6.3 0 0 1-1.505 1.548Z"></path></svg>';

export class IconSocialTwitterCircleFilledLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilledLarge', '', null, 'IconSocialTwitterCircleFilledLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--twitterCircleFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--twitterCircleFilledLarge', '', newVal, 'IconSocialTwitterCircleFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-social-twitter-circle-filled-large', IconSocialTwitterCircleFilledLarge);
