import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--atom"><path d="M12.375 8c.499-.64.94-1.322 1.321-2.039 1.041-2.047.586-3.141 0-3.701C12.62 1.131 10.625 1.621 8 3.625c-.637-.51-1.32-.961-2.039-1.347C3.914 1.236 2.82 1.69 2.26 2.26s-1.024 1.654 0 3.701A14 14 0 0 0 3.625 8a14 14 0 0 0-1.321 2.039c-1.042 2.047-.587 3.141 0 3.701a2.047 2.047 0 0 0 1.513.604c1.12 0 2.555-.665 4.227-1.951.637.504 1.32.95 2.038 1.33a4.839 4.839 0 0 0 2.17.62 2.038 2.038 0 0 0 1.532-.603c.568-.56 1.023-1.654 0-3.701-.409-.72-.88-1.402-1.41-2.039Zm.411-4.812c.49.48.044 1.575-.262 2.178-.298.555-.64 1.085-1.024 1.584-.376-.42-.77-.875-1.208-1.277-.437-.403-.875-.875-1.286-1.208 1.811-1.312 3.264-1.82 3.806-1.277h-.026Zm-9.625 9.624c-.49-.48 0-1.574.263-2.178.314-.557.674-1.087 1.076-1.584.376.42.77.875 1.207 1.277.438.403.875.832 1.287 1.208-1.812 1.313-3.264 1.82-3.807 1.277h-.026Zm9.625 0c-.481.49-1.575.044-2.179-.262A17.34 17.34 0 0 1 6.6 9.4c-.473-.472-.875-.936-1.295-1.4A23.37 23.37 0 0 1 6.6 6.6c.233-.24.47-.467.709-.682l-.875-.963c-.254.228-.5.464-.744.718A17.66 17.66 0 0 0 4.482 6.95 11.524 11.524 0 0 1 3.45 5.375c-.306-.604-.753-1.697-.263-2.179.49-.481 1.575 0 2.18.263C6.858 4.3 8.216 5.359 9.4 6.6c.472.473.875.936 1.295 1.4-.394.464-.823.928-1.295 1.4-.245.254-.499.49-.744.726l.875.963c.263-.245.525-.499.779-.761.437-.43.831-.875 1.207-1.278.387.496.732 1.023 1.033 1.575.306.613.752 1.75.262 2.188h-.026Z"></path></svg>';

export class IconAtom extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--atom', '', null, 'IconAtom');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--atom');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--atom', '', newVal, 'IconAtom');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-atom', IconAtom);
