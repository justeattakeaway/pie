import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--locationPinFoodFilled"><path d="M11.999 2.724a5.592 5.592 0 0 0-4-1.672 5.592 5.592 0 0 0-3.998 1.672c-2.196 2.222-2.196 5.836 0 8.059L8 14.825l3.999-4.042c2.196-2.223 2.196-5.837 0-8.06Zm-4.34 1.741c-.053.919-.035 2.082 0 3.106v.026c0 .298-.14.543-.36.692-.043.026-.06.07-.07.113 0 0-.017.158.053.92.018.148.027.262.035.367h-.98V8.27l-.017-.017a.775.775 0 0 1-.21-.263c0-.009-.018-.017-.018-.035a.83.83 0 0 1-.078-.297c-.044-1.05-.062-2.258 0-3.203 0-.052.035-.105.087-.122h.018c.017 0 .026-.009.043-.018.088 0 .158.061.158.149a28.054 28.054 0 0 0-.026 2.126c0 .035.017.07.035.096 0 0 .017.01.017.018a.186.186 0 0 0 .131.061.172.172 0 0 0 .175-.184c-.008-.743 0-1.496.027-2.126 0-.079.07-.14.148-.149.088 0 .158.062.158.15a27.82 27.82 0 0 0-.026 2.117c0 .096.087.175.183.175.097 0 .175-.088.175-.184-.008-.735 0-1.488.027-2.118 0-.078.07-.14.148-.148.088 0 .158.061.158.148l.009.018Zm2.318 3.596c-.026.691-.06 1.286-.078 1.636h-.77c.026-.28.052-.507.06-.69V8.49s-.025-.026-.052-.026l-.463-.062h-.07c-.088-.026-.132-.078-.15-.14-.008-.035 0-.078 0-.078.045-.648.123-1.199.228-1.672.15-.717.333-1.25.508-1.636.079-.184.157-.324.227-.446a1.97 1.97 0 0 1 .263-.368.388.388 0 0 1 .052-.043.183.183 0 0 1 .097-.035c.07 0 .122.043.148.105 0 0 0 .017.01.07.087.971.043 2.625 0 3.911l-.01-.009Z"></path></svg>';

export class IconLocationPinFoodFilled extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodFilled', '', null, 'IconLocationPinFoodFilled');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--locationPinFoodFilled');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--locationPinFoodFilled', '', newVal, 'IconLocationPinFoodFilled');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-location-pin-food-filled', IconLocationPinFoodFilled);
