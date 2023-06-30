import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--targetLarge"><path d="M22.125 15.125a5.25 5.25 0 0 0-10.412-.875l-1.838.77a7 7 0 1 1 7.114 7.105l.761-1.837a5.25 5.25 0 0 0 4.375-5.163ZM16.875 3.75A11.375 11.375 0 0 0 5.5 15.125c.003.586.05 1.171.14 1.75l1.671-.726c-.037-.34-.058-.682-.06-1.024a9.625 9.625 0 1 1 9.624 9.625c-.324 0-.647 0-.971-.052l-.718 1.67c.559.089 1.124.133 1.69.132a11.375 11.375 0 1 0 0-22.75Zm1.251 11.322L12.5 28.075a.929.929 0 0 1-1.627.123L8.248 24.05a.761.761 0 0 0-.29-.289l-4.155-2.625A.875.875 0 0 1 3.95 19.5l12.924-5.635a.876.876 0 0 1 1.208 1.207h.043Zm-2.432 1.234L6.069 20.49l2.835 1.793c.335.213.619.497.831.832l1.75 2.817 4.209-9.625ZM4.879 23.254l-2.625 2.625 1.242 1.242 2.625-2.625-1.242-1.242Zm.875 4.375 1.242 1.242 1.75-1.75-1.242-1.242-1.75 1.75Z"></path></svg>';

export class IconTargetLarge extends HTMLElement {
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
        const defaultSize = getDefaultIconSize('c-pieIcon c-pieIcon--targetLarge');
        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--targetLarge', '', newVal, 'IconTargetLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.root.append(svg);
    }
}

customElements.define('icon-target-large', IconTargetLarge);
