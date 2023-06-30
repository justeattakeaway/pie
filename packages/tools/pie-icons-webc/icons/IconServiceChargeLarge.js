import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--serviceChargeLarge"><path d="m7.355 12.727 3.911-5.556h2.135L9.49 12.727H7.355Z"></path><path fill-rule="evenodd" d="M26.622 12.553c0-.604-1.697-1.086-3.788-1.086-2.092 0-3.79.49-3.79 1.085v2.472c-.69-.208-1.666-.336-2.747-.336-2.091 0-3.789.49-3.789 1.085 0 .016.007.029.015.043l.012.026v3.02a10.902 10.902 0 0 0-2.205-.21c-2.091 0-3.789.49-3.789 1.084l.026 6.134c0 1.356 2.372 1.557 3.78 1.557.91 0 2.205-.087 3.028-.498.822.394 2.065.472 2.94.472.982 0 2.422-.1 3.214-.622.952.802 3.002.832 3.296.832.385 0 3.789-.052 3.789-1.82V12.552h.008Zm-5.8 5.94v-1.631c.669.163 1.43.206 2.02.206.595 0 1.365-.044 2.04-.21v1.645h-.01c-.14.087-.848.297-2.012.297-1.164 0-1.873-.21-2.013-.306h-.026Zm-.01 3.5v-1.65c.672.164 1.447.207 2.039.207.595 0 1.356-.044 2.03-.21v1.654c-.14.096-.849.306-2.012.306-1.164 0-1.873-.21-2.013-.306h-.044Zm4.07-6.973v-1.554c-.592.112-1.277.171-2.022.171-.753 0-1.453-.07-2.039-.175v1.55h.018c.14.095.848.306 2.012.306 1.164 0 1.873-.21 2.013-.298h.017Zm-2.04 10.841c-.98 0-1.723-.192-2.03-.341v-1.68c.683.175 1.462.219 2.057.219s1.347-.044 2.012-.201v1.67c-.306.15-1.05.342-2.039.342v-.009ZM12.37 22.046v-1.398c-.585.113-1.282.173-2.03.173-.753 0-1.444-.07-2.03-.175v1.392h.026c.14.096.849.306 2.012.306 1.164 0 1.873-.21 2.013-.298h.008Zm-2.022 3.623c-.936 0-1.662-.123-2.03-.228v-1.549c.665.167 1.435.21 2.021.21.587 0 1.366-.043 2.04-.21v1.558c-.368.105-1.103.236-2.04.236l.01-.017Zm8.015-.28c-.367.114-1.102.245-2.038.245-.937 0-1.672-.131-2.03-.245v-1.776c.682.175 1.46.218 2.056.218.595 0 1.347-.043 2.012-.201v1.759Zm0-3.623c-.14.097-.848.307-2.012.307-1.164 0-1.873-.21-2.013-.307h-.043v-1.653c.673.166 1.452.21 2.047.21.595 0 1.356-.044 2.03-.21v1.653h-.009Zm0-3.491h-.017c-.14.088-.849.298-2.013.298s-1.872-.21-2.012-.307h-.027v-1.592c.587.105 1.27.166 2.013.166.744 0 1.47-.07 2.065-.175v1.601l-.009.009Z" clip-rule="evenodd"></path><path d="M7.941 9.359a1.094 1.094 0 1 0 0-2.188 1.094 1.094 0 0 0 0 2.188Z"></path><path d="M13.803 11.8a1.094 1.094 0 1 1-2.187 0 1.094 1.094 0 0 1 2.188 0Z"></path></svg>';

export class IconServiceChargeLarge extends HTMLElement {
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

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--serviceChargeLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--serviceChargeLarge', '', newVal, 'IconServiceChargeLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-service-charge-large', IconServiceChargeLarge);
