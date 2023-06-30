import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="m11.5 1.219-.193.183A21.624 21.624 0 0 1 9.348 3.1a23.625 23.625 0 0 1-2.406 1.619H4.5A1.54 1.54 0 0 0 2.969 6.25v3.5A1.54 1.54 0 0 0 4.5 11.281h2.441c.837.487 1.64 1.028 2.407 1.619a22.87 22.87 0 0 1 1.986 1.697l.192.184h1.505V1.22H11.5ZM4.281 9.75v-3.5a.219.219 0 0 1 .219-.219h1.969V9.97H4.5a.219.219 0 0 1-.219-.219Zm7.438 3.412c-.508-.463-1.033-.875-1.566-1.312a26.812 26.812 0 0 0-2.372-1.601V5.75c.82-.49 1.61-1.024 2.372-1.601.533-.411 1.058-.875 1.566-1.313v10.325Z"></path></svg>';

export class IconSoundOn extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOn', '', null, 'IconSoundOn');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--soundOn');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--soundOn', '', newVal, 'IconSoundOn');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--soundOn', newVal);
    }
}

customElements.define('icon-sound-on', IconSoundOn);
