import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" ><path d="m9.732 11.561 2.783-6.737h-2.004c.289-.438.455-.963.455-1.531 0-.683-.376-1.304-.98-1.62a1.835 1.835 0 0 0-1.89.115l-.026.017-.018-.017a1.835 1.835 0 0 0-1.89-.114c-.603.315-.98.936-.98 1.619 0 .218.035.437.08.647-.036.018-.07.026-.097.044L3.179 5.043l3.202 6.545-.359.918a1.62 1.62 0 0 0 .175 1.505c.307.438.805.709 1.34.709H8.63c.542 0 1.05-.271 1.347-.726.298-.455.35-1.024.14-1.523l-.385-.91Zm-1.146-.656H8.42l-.674-4.742h.175c.053 0 .105.017.158.017.061 0 .113-.017.175-.017l2.292-.018-1.96 4.76ZM6.775 2.838a.522.522 0 0 1 .245-.062c.087 0 .184.027.289.097l.77.525.77-.525a.512.512 0 0 1 .533-.035c.08.043.28.175.28.455 0 .805-.612 1.47-1.4 1.557H7.93a1.392 1.392 0 0 1-.429-.096 1.605 1.605 0 0 0-.814-.849c-.017-.009-.043-.009-.06-.017a1.502 1.502 0 0 1-.115-.595c0-.28.193-.412.28-.455h-.017ZM5.83 5.12h.017c.15.175.307.333.49.473l.587 4.121L4.92 5.611l.919-.49H5.83Zm3.045 8.146a.3.3 0 0 1-.254.14H7.527a.318.318 0 0 1-.253-.13.31.31 0 0 1-.035-.28l.297-.77h1.041l.324.76a.334.334 0 0 1-.026.29v-.01Z"></path></svg>';

export class IconFlowers extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--flowers', '', null, 'IconFlowers');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--flowers');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--flowers', '', newVal, 'IconFlowers');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--flowers', newVal);
    }
}

customElements.define('icon-flowers', IconFlowers);
