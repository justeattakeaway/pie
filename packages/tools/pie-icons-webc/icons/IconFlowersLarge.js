import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><path d="M22.554 11.791a3.232 3.232 0 0 0 1.04-.691 2.075 2.075 0 0 0 .517-2.1 2.1 2.1 0 0 0-1.514-1.418A2.072 2.072 0 0 0 21.19 6.07a2.05 2.05 0 0 0-1.427.087c.08-.297.132-.612.132-.936 0-.875-.482-1.671-1.26-2.083a2.347 2.347 0 0 0-2.424.14 2.344 2.344 0 0 0-2.424-.14 2.349 2.349 0 0 0-1.26 2.083c0 .122.026.236.035.35a2.04 2.04 0 0 0-.971.052 2.072 2.072 0 0 0-1.409 1.514c-.717.166-1.295.7-1.514 1.418a2.094 2.094 0 0 0 .517 2.1c.13.131.27.245.42.35L7.722 12.01l5.74 11.751-.7 1.794a2.63 2.63 0 0 0 2.45 3.579H17.2c.883 0 1.697-.438 2.187-1.173.49-.735.578-1.662.228-2.476l-.744-1.767 4.926-11.927h-1.251.009ZM14.52 9.22a.584.584 0 0 1 .228-.237.593.593 0 0 1 .262-.07.54.54 0 0 1 .315.105l.98.674.971-.674a.551.551 0 0 1 .578-.035.546.546 0 0 1 .297.49 1.852 1.852 0 0 1-1.846 1.847 1.852 1.852 0 0 1-1.846-1.847c0-.035.009-.06.017-.087.018-.053.035-.114.053-.166h-.009Zm5.801-1.374a.335.335 0 0 1 .237-.105c.043 0 .078 0 .105.017.07.027.2.088.236.263l.201 1.076 1.076.201a.332.332 0 0 1 .263.237.313.313 0 0 1-.088.341 1.436 1.436 0 0 1-2.03-2.03ZM14.61 4.704a.655.655 0 0 1 .288-.07.59.59 0 0 1 .333.105l.989.682.988-.682a.588.588 0 0 1 .622-.035.588.588 0 0 1 .323.533 1.925 1.925 0 1 1-3.85 0 .6.6 0 0 1 .324-.533h-.017Zm-4.262 4.375a.345.345 0 0 1 .263-.237l1.076-.2.201-1.077a.332.332 0 0 1 .237-.263c.026 0 .06-.017.105-.017.07 0 .157.026.236.105a1.448 1.448 0 0 1 .394 1.295 3.417 3.417 0 0 0-.088.28c-.07.166-.175.324-.306.455-.543.542-1.488.542-2.03 0a.35.35 0 0 1-.088-.341Zm-.297 3.675 1.916-1.024a.877.877 0 0 1 .849-.061.87.87 0 0 1 .499.7l1.4 9.922-4.664-9.537Zm7.892 14.236a.87.87 0 0 1-.726.394H15.23a.847.847 0 0 1-.718-.385.87.87 0 0 1-.096-.814l.621-1.592h2.32l.664 1.575a.862.862 0 0 1-.079.822Zm-.595-4.147h-.796l-1.304-9.25 5.933-.034-3.833 9.284Z"></path></svg>';

export class IconFlowersLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--flowersLarge', '', null, 'IconFlowersLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--flowersLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--flowersLarge', '', newVal, 'IconFlowersLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--flowersLarge', newVal);
    }
}

customElements.define('icon-flowers-large', IconFlowersLarge);
