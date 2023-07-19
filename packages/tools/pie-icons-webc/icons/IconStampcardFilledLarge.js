import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg, :host-context(pie-button) svg { display:block; width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stampcardFilledLarge"><path d="M20.331 17.4c-1.006 0-1.085.936-1.085 1.225 0 .289.08 1.225 1.085 1.225 1.007 0 1.085-.936 1.085-1.225 0-.289-.078-1.225-1.085-1.225Z"></path><path d="M29.108 15.93a6.168 6.168 0 0 0-1.523-3.57 5.63 5.63 0 0 1-.586-.919 6.201 6.201 0 0 1-.254-1.102 6.062 6.062 0 0 0-1.417-3.553l-.105-.105a6.027 6.027 0 0 0-3.5-1.417A6.498 6.498 0 0 1 20.568 5a5.29 5.29 0 0 1-.902-.569 6.16 6.16 0 0 0-3.587-1.54h-.14a6.1 6.1 0 0 0-3.553 1.514 5.474 5.474 0 0 1-.936.595c-.376.123-.761.21-1.102.254a6.063 6.063 0 0 0-3.553 1.417l-.105.105a6.027 6.027 0 0 0-1.417 3.5c-.053.394-.14.788-.263 1.155a5.661 5.661 0 0 1-.569.902 6.16 6.16 0 0 0-1.54 3.587v.149a6.1 6.1 0 0 0 1.514 3.552c.228.29.429.604.595.937.123.376.219.761.254 1.102a6.097 6.097 0 0 0 1.417 3.553l.105.105a6.026 6.026 0 0 0 3.5 1.417c.394.053.78.14 1.155.263.333.166.648.367.893.569a6.159 6.159 0 0 0 3.587 1.54h.15c1.32-.114 2.598-.657 3.552-1.514.288-.228.603-.429.936-.595.376-.123.761-.21 1.102-.254a6.04 6.04 0 0 0 3.553-1.418l.105-.105a6.028 6.028 0 0 0 1.417-3.5c.053-.393.14-.778.263-1.155.166-.332.367-.647.569-.9a6.158 6.158 0 0 0 1.54-3.588v-.149ZM8.746 13.375c0-1.435.884-2.975 2.835-2.975 1.952 0 2.835 1.54 2.835 2.975s-.883 2.975-2.835 2.975c-1.95 0-2.835-1.54-2.835-2.975Zm4.7 7.875h-2.127l7.262-10.5h2.127l-7.263 10.5Zm6.894.35c-1.951 0-2.835-1.54-2.835-2.975s.884-2.975 2.835-2.975 2.835 1.54 2.835 2.975-.884 2.975-2.835 2.975Z"></path><path d="M12.666 13.375c0-.289-.078-1.225-1.085-1.225-1.006 0-1.085.936-1.085 1.225 0 .289.08 1.225 1.085 1.225 1.007 0 1.085-.936 1.085-1.225Z"></path></svg>';

export class IconStampcardFilledLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcardFilledLarge', '', null, 'IconStampcardFilledLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--stampcardFilledLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--stampcardFilledLarge', '', newVal, 'IconStampcardFilledLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-stampcard-filled-large', IconStampcardFilledLarge);
