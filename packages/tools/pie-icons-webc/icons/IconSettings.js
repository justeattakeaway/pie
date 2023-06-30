import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="M9.505 14.781h-3.01l-.341-1.207a1.645 1.645 0 0 0-.779-.963 1.697 1.697 0 0 0-1.277-.236l-1.217.306-1.505-2.625.875-.875c.288-.323.436-.748.412-1.181a1.68 1.68 0 0 0-.43-1.234l-.874-.875 1.505-2.625 1.234.359a1.68 1.68 0 0 0 1.277-.228c.39-.2.685-.546.823-.962l.297-1.216h3.01l.341 1.207c.125.41.404.756.78.963a1.689 1.689 0 0 0 1.277.236l1.216-.306 1.505 2.625-.875.875A1.637 1.637 0 0 0 13.338 8a1.636 1.636 0 0 0 .428 1.181l.875.875-1.505 2.625-1.233-.306a1.636 1.636 0 0 0-1.234.219c-.39.2-.685.546-.823.962l-.34 1.225ZM7.493 13.47h1.015l.078-.219a2.931 2.931 0 0 1 1.41-1.75c.666-.41 1.468-.54 2.23-.359l.254.062.508-.875-.167-.175A2.94 2.94 0 0 1 12.025 8a2.94 2.94 0 0 1 .796-2.091l.167-.175-.508-.875-.254.061a2.94 2.94 0 0 1-2.213-.42 2.94 2.94 0 0 1-1.427-1.75l-.078-.254H7.493l-.08.254A2.931 2.931 0 0 1 6.006 4.5c-.667.41-1.47.54-2.231.359l-.254-.061-.507.875.166.175A2.94 2.94 0 0 1 3.975 8a2.966 2.966 0 0 1-.796 2.135l-.166.175.507.875.254-.061a2.94 2.94 0 0 1 2.214.376 2.94 2.94 0 0 1 1.426 1.75l.079.219ZM8 10.625a2.626 2.626 0 0 1-1.855-4.48 2.625 2.625 0 1 1 3.71 3.71 2.625 2.625 0 0 1-1.855.77Zm0-3.938a1.313 1.313 0 1 0 .002 2.626A1.313 1.313 0 0 0 8 6.687Z"></path></svg>';

export class IconSettings extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--settings', '', null, 'IconSettings');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--settings');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--settings', '', newVal, 'IconSettings');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--settings', newVal);
    }
}

customElements.define('icon-settings', IconSettings);
