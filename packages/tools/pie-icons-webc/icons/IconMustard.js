import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--mustard"><path d="M11.576 7.586v-.122c0-.4-.165-.801-.496-1.132l-.915-.758-.035-1.63h-.618l-.933-2.787H7.334l-.872 2.788h-.61l-.017 1.629-.967.793c-.287.287-.453.679-.453 1.088v.122l.044.114a6.731 6.731 0 0 1 .287 4.138l-.322 1.307-.018.157a1.54 1.54 0 0 0 1.542 1.542h4.077a1.54 1.54 0 0 0 1.543-1.543l-.34-1.454a6.796 6.796 0 0 1 .287-4.139l.044-.113h.017Zm-5.828-.244 1.385-1.141v-.932h1.725l.018.932L10.2 7.299s.043.052.052.087c-.052.13-.078.27-.113.4H5.86c-.043-.13-.07-.27-.122-.4 0-.018.009-.035 0-.035l.009-.009Zm4.025 3.546H6.236a7.82 7.82 0 0 0-.07-1.803h3.685a7.802 7.802 0 0 0-.07 1.803h-.008Zm.27 2.648H5.966a.233.233 0 0 1-.227-.183l.288-1.167H9.99l.287 1.167a.233.233 0 0 1-.226.183h-.009Z"></path></svg>';

export class IconMustard extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--mustard', '', null, 'IconMustard');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--mustard');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--mustard', '', newVal, 'IconMustard');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-mustard', IconMustard);
