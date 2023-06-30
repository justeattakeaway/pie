import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--offerStar"><path d="M13.871 6.355a2.456 2.456 0 0 1-.472-.586c-.07-.26-.1-.528-.088-.796a2.467 2.467 0 0 0-.516-1.75 2.467 2.467 0 0 0-1.75-.517 2.626 2.626 0 0 1-.796-.087 2.283 2.283 0 0 1-.578-.473A2.45 2.45 0 0 0 8 1.22a2.45 2.45 0 0 0-1.654.875c-.165.188-.36.347-.577.472-.26.07-.528.1-.796.088a2.415 2.415 0 0 0-1.75.516 2.467 2.467 0 0 0-.517 1.75c.012.268-.018.537-.087.796a2.459 2.459 0 0 1-.473.587A2.415 2.415 0 0 0 1.22 8a2.415 2.415 0 0 0 .875 1.645c.186.17.346.368.472.586.07.26.1.528.088.796a2.467 2.467 0 0 0 .516 1.75c.496.39 1.122.575 1.75.517.268-.012.537.018.796.087.217.125.412.285.578.473a2.45 2.45 0 0 0 1.654.875 2.45 2.45 0 0 0 1.653-.875c.166-.188.36-.348.578-.473.26-.07.528-.099.796-.087a2.415 2.415 0 0 0 1.75-.517c.39-.495.574-1.122.516-1.75a2.621 2.621 0 0 1 .088-.796c.126-.218.286-.416.472-.586A2.415 2.415 0 0 0 14.676 8a2.415 2.415 0 0 0-.805-1.645Zm-.936 2.38a3.37 3.37 0 0 0-.753 1.015A3.503 3.503 0 0 0 12 11.019a1.89 1.89 0 0 1-.132.875 1.89 1.89 0 0 1-.875.131c-.43-.017-.86.045-1.268.184a3.367 3.367 0 0 0-.998.752c-.245.236-.551.534-.735.534-.183 0-.49-.297-.735-.534a3.368 3.368 0 0 0-1.006-.779A3.503 3.503 0 0 0 4.981 12a1.89 1.89 0 0 1-.875-.132 1.89 1.89 0 0 1-.131-.875 3.5 3.5 0 0 0-.158-1.242 3.369 3.369 0 0 0-.752-.998c-.236-.245-.534-.55-.534-.735 0-.183.298-.49.534-.734.314-.294.57-.644.752-1.033a3.5 3.5 0 0 0 .184-1.269 1.89 1.89 0 0 1 .131-.875 1.89 1.89 0 0 1 .876-.131 3.5 3.5 0 0 0 1.242-.158c.377-.186.715-.441.997-.752.245-.236.552-.534.736-.534.183 0 .49.298.734.534.294.314.644.57 1.033.752a3.5 3.5 0 0 0 1.269.184 1.89 1.89 0 0 1 .875.131c.112.278.157.578.131.876a3.5 3.5 0 0 0 .157 1.242c.187.377.442.715.753.997.236.245.534.552.534.736 0 .183-.298.507-.534.752ZM10.73 8A4.821 4.821 0 0 0 8 10.73 4.821 4.821 0 0 0 5.27 8 4.821 4.821 0 0 0 8 5.27 4.821 4.821 0 0 0 10.73 8Z"></path></svg>';

export class IconOfferStar extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--offerStar');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--offerStar', '', newVal, 'IconOfferStar');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-offer-star', IconOfferStar);
