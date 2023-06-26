
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--stampcardLarge"><path d="M14.416 13.375c0-1.435-.883-2.975-2.835-2.975-1.95 0-2.835 1.54-2.835 2.975s.884 2.975 2.835 2.975c1.952 0 2.835-1.54 2.835-2.975Zm-3.92 0c0-.289.08-1.225 1.085-1.225 1.007 0 1.085.936 1.085 1.225 0 .289-.078 1.225-1.085 1.225-1.006 0-1.085-.936-1.085-1.225Z"></path><path d="M20.331 15.65c-1.95 0-2.835 1.54-2.835 2.975s.884 2.975 2.835 2.975c1.952 0 2.835-1.54 2.835-2.975s-.883-2.975-2.835-2.975Zm0 4.2c-1.006 0-1.085-.936-1.085-1.225 0-.289.08-1.225 1.085-1.225 1.007 0 1.085.936 1.085 1.225 0 .289-.078 1.225-1.085 1.225Z"></path><path d="m18.573 10.75-7.263 10.5h2.126l7.263-10.5h-2.126Z"></path><path d="M29.108 15.93a6.168 6.168 0 0 0-1.523-3.57 5.63 5.63 0 0 1-.586-.919 6.201 6.201 0 0 1-.254-1.102 6.062 6.062 0 0 0-1.417-3.553l-.105-.105a6.027 6.027 0 0 0-3.5-1.417A6.498 6.498 0 0 1 20.568 5a5.29 5.29 0 0 1-.902-.569 6.16 6.16 0 0 0-3.587-1.54h-.14a6.1 6.1 0 0 0-3.553 1.514 5.474 5.474 0 0 1-.936.595c-.376.123-.761.21-1.102.254a6.063 6.063 0 0 0-3.553 1.417l-.105.105a6.027 6.027 0 0 0-1.417 3.5c-.053.394-.14.788-.263 1.155a5.661 5.661 0 0 1-.569.902 6.16 6.16 0 0 0-1.54 3.587v.149a6.1 6.1 0 0 0 1.514 3.552c.228.29.429.604.595.937.123.376.219.761.254 1.102a6.097 6.097 0 0 0 1.417 3.553l.105.105a6.026 6.026 0 0 0 3.5 1.417c.394.053.78.14 1.155.263.333.166.648.367.893.569a6.159 6.159 0 0 0 3.587 1.54h.15c1.32-.114 2.598-.657 3.552-1.514.288-.228.603-.429.936-.595.376-.123.761-.21 1.102-.254a6.04 6.04 0 0 0 3.553-1.418l.105-.105a6.028 6.028 0 0 0 1.417-3.5c.053-.393.14-.778.263-1.155.166-.332.367-.647.569-.9a6.158 6.158 0 0 0 1.54-3.588v-.149Zm-9.275-9.336.096.043a7.683 7.683 0 0 0 1.619.368c.91.061 1.767.394 2.476.962.577.71.91 1.567.971 2.53.061.533.184 1.058.359 1.566l.044.104c.227.464.507.902.822 1.296l.035.035a4.369 4.369 0 0 1 1.094 2.493 4.553 4.553 0 0 1-1.129 2.538c-.315.402-.595.84-.822 1.303l-.044.105a7.683 7.683 0 0 0-.368 1.62 4.413 4.413 0 0 1-.962 2.476 4.376 4.376 0 0 1-2.529.97 7.416 7.416 0 0 0-1.566.368l-.105.044a7.325 7.325 0 0 0-1.339.858 4.37 4.37 0 0 1-2.494 1.093 4.526 4.526 0 0 1-2.537-1.128 6.96 6.96 0 0 0-1.304-.823l-.096-.044a7.683 7.683 0 0 0-1.619-.367 4.411 4.411 0 0 1-2.476-.963 4.376 4.376 0 0 1-.971-2.529 7.412 7.412 0 0 0-.368-1.566l-.044-.096a7.2 7.2 0 0 0-.857-1.339 4.369 4.369 0 0 1-1.094-2.494 4.526 4.526 0 0 1 1.129-2.537c.324-.402.595-.84.822-1.304l.044-.096a7.683 7.683 0 0 0 .368-1.619c.06-.91.393-1.767.962-2.476a4.376 4.376 0 0 1 2.529-.971 7.412 7.412 0 0 0 1.566-.368l.105-.044a7.328 7.328 0 0 0 1.339-.857 4.369 4.369 0 0 1 2.494-1.094"></path></svg>;';

export class IconStampcardLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconStampcardLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconStampcardLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-stampcard-large', IconStampcardLarge);
