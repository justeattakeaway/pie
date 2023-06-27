
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--twitterStatic"><path fill="#1D9BF0" d="M13.53 5.1c.008.124.008.248.008.373 0 3.817-2.868 8.218-8.111 8.218v-.002a7.995 7.995 0 0 1-4.37-1.295 5.677 5.677 0 0 0 4.22-1.197A2.86 2.86 0 0 1 2.61 9.19c.428.084.868.067 1.288-.05a2.88 2.88 0 0 1-2.287-2.83v-.037c.396.224.84.348 1.294.361a2.915 2.915 0 0 1-.883-3.856A8.057 8.057 0 0 0 7.9 5.797a2.914 2.914 0 0 1 .824-2.76 2.828 2.828 0 0 1 4.034.125 5.676 5.676 0 0 0 1.81-.7 2.892 2.892 0 0 1-1.253 1.597 5.613 5.613 0 0 0 1.637-.455A5.833 5.833 0 0 1 13.53 5.1Z"></path></svg>';

export class IconSocialTwitterStatic extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSocialTwitterStatic');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialTwitterStatic');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-twitter-static', IconSocialTwitterStatic);
