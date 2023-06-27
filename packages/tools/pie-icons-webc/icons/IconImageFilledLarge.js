
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--imageFilledLarge"><path d="M19.211 19.334a6.326 6.326 0 0 0 4.664-.709c.463-.234.88-.548 1.234-.927l.14-.167a2.53 2.53 0 0 0 .428-.735l.132-.315s.043-.114.14-.429c-3.824-.734-6.449.998-8.847 2.573.526.21 1.015.394 1.497.534.2.07.405.128.612.175Z"></path><path d="M2.875 5.5v21h26.25v-21H2.875Zm24.5 1.75v10.036a4.092 4.092 0 0 1-.297.674l-.08.14c-.043.07-.104.149-.157.236-.052.088-.096.123-.14.193l-.201.236-.219.236-.245.228c-.13.1-.268.19-.411.271-.079.061-.157.131-.254.192-.096.062-.402.263-.638.394l-.088.053c-.341.175-.674.323-.997.463l-.184.07a9.118 9.118 0 0 1-.875.298h-.149a6.719 6.719 0 0 1-.796.158h-.131a6.594 6.594 0 0 1-.823.052 1.813 1.813 0 0 1-.219 0h-.63l-.428-.052h-.193c-.201 0-.402-.07-.604-.123l-.586-.157-.604-.202-.122-.044h-.088l-.437-.227h-.184l-.516-.21h-.07l-.63-.262-.123-.053a33.094 33.094 0 0 0-1.75-.691 15.26 15.26 0 0 0-1.977-.586h-.21a10.376 10.376 0 0 0-5.434.297c-.411.131-.875.289-1.269.473V7.25h22.759Z"></path><path d="M10.024 16.525a3.93 3.93 0 0 0 1.601.35c.149 0 .28 0 .42-.044a3.912 3.912 0 1 0-2.021-.306Z"></path></svg>';

export class IconImageFilledLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconImageFilledLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconImageFilledLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-image-filled-large', IconImageFilledLarge);
