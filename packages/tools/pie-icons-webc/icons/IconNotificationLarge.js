import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--notificationLarge"><path d="m27.375 21.766-.683-.682a9.554 9.554 0 0 1-2.817-6.834v-.875a7.875 7.875 0 0 0-7-7.822V2.875h-1.75v2.678a8.137 8.137 0 0 0-7 8.146v.551a9.555 9.555 0 0 1-2.817 6.808l-.683.708v2.984h6.869a4.506 4.506 0 1 0 9.012 0h6.869v-2.984ZM16 27.375a2.765 2.765 0 0 1-2.765-2.625h5.53A2.765 2.765 0 0 1 16 27.375ZM25.625 23H6.375v-.516l.166-.167a11.28 11.28 0 0 0 3.334-8.067v-.578a6.361 6.361 0 0 1 5.512-6.422 6.072 6.072 0 0 1 4.726 1.549 6.126 6.126 0 0 1 2.012 4.576v.875a11.28 11.28 0 0 0 3.334 8.041l.166.166V23Z"></path></svg>';

export class IconNotificationLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconNotificationLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconNotificationLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-notification-large', IconNotificationLarge);
