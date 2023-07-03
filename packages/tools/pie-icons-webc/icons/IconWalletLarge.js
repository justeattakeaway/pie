import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--walletLarge"><path d="M17.496 5.299a.871.871 0 0 1 .332-.07.87.87 0 0 1 .333.07.837.837 0 0 1 .473.472l.507 1.234h1.89l-.787-1.899a2.619 2.619 0 0 0-3.43-1.417L8.807 7.005h4.576l4.113-1.706Z"></path><path d="M25.669 23.446h-.875v1.768a.878.878 0 0 1-.875.875H5.498a.878.878 0 0 1-.874-.875V11.223a.872.872 0 0 1 .499-.788c.017 0 .026-.018.035-.026a.88.88 0 0 1 .34-.07h18.42c.48 0 .875.393.875.875v1.785h1.802v-1.671a2.59 2.59 0 0 0-.254-1.112 2.617 2.617 0 0 0-2.423-1.618H5.498a2.61 2.61 0 0 0-1.574.533 2.56 2.56 0 0 0-.411.403c-.053.061-.105.131-.158.201-.017.026-.044.053-.061.079a2.156 2.156 0 0 0-.219.393 2.652 2.652 0 0 0-.254 1.112v13.886A2.677 2.677 0 0 0 5.5 27.883h18.419a2.677 2.677 0 0 0 2.677-2.678v-1.767h-.927v.008Z"></path><path d="M20.104 14.749v6.947h9.03V14.75h-9.03Zm1.75 1.75h5.53v3.447h-5.53V16.5Z"></path></svg>';

export class IconWalletLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--walletLarge', '', null, 'IconWalletLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--walletLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--walletLarge', '', newVal, 'IconWalletLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-wallet-large', IconWalletLarge);
