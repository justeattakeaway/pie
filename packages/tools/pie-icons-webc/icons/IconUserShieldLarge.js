import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--userShieldLarge"><path d="M22.816 21.25c-.717-2.328-2.738-3.894-5.031-3.894h-.595a3.72 3.72 0 0 0 1.418-.866 3.691 3.691 0 0 0 0-5.224c-1.444-1.435-3.79-1.443-5.224 0-.7.7-1.085 1.628-1.085 2.617 0 .988.385 1.916 1.085 2.616.402.402.892.691 1.417.866h-.595c-2.292 0-4.313 1.566-5.031 3.894L9 21.836h1.829l.017-.061c.49-1.584 1.838-2.651 3.351-2.651h3.57c1.514 0 2.87 1.067 3.352 2.651l.017.061h1.829l-.175-.577.026-.009Zm-8.19-5.994a1.933 1.933 0 0 1-.569-1.373 1.941 1.941 0 0 1 3.316-1.374 1.949 1.949 0 0 1 0 2.756c-.76.761-2.02.735-2.756 0l.01-.009Z"></path><path d="M25.957 7.933 16 2.77 6.043 7.933a2.617 2.617 0 0 0-1.418 2.327v7.114c0 .087.21 8.872 11.156 11.725l.219.061.219-.061c10.946-2.861 11.156-11.638 11.156-11.734V10.26c0-.98-.543-1.881-1.418-2.327Zm-.332 9.423c0 .306-.227 7.429-9.625 9.993-9.398-2.564-9.616-9.686-9.625-9.984V10.26c0-.332.184-.621.473-.779L16 4.74l9.152 4.742a.872.872 0 0 1 .473.779v7.096Z"></path></svg>';

export class IconUserShieldLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--userShieldLarge', '', null, 'IconUserShieldLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--userShieldLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--userShieldLarge', '', newVal, 'IconUserShieldLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-user-shield-large', IconUserShieldLarge);
