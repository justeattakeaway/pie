
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--instagramCircleFilled"><g clip-path="url(#prefix__clip0_1615_871)"><path d="M9.963 6.399a.36.36 0 1 1-.72 0 .36.36 0 0 1 .72 0Z"></path><path fill-rule="evenodd" d="M6.46 8a1.54 1.54 0 1 0 3.08 0 1.54 1.54 0 0 0-3.08 0ZM9 8a1 1 0 1 1-2 .001 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.237 2.315A6.781 6.781 0 0 1 8 1.175 6.79 6.79 0 0 1 14.78 8 6.781 6.781 0 1 1 4.237 2.315Zm1.267 3.189c.167-.167.334-.27.532-.347.19-.074.408-.125.729-.139.32-.014.422-.018 1.237-.018.815 0 .917.004 1.237.018.32.015.538.065.728.14.197.076.365.179.532.346.166.166.268.334.345.53.073.19.124.409.139.729.015.32.018.422.018 1.236 0 .815-.003.918-.018 1.237-.015.32-.065.538-.14.728-.076.198-.178.365-.345.532-.168.167-.335.27-.532.347-.19.073-.409.124-.729.139-.32.014-.422.018-1.236.018-.815 0-.918-.004-1.237-.018a2.193 2.193 0 0 1-.728-.14 1.472 1.472 0 0 1-.532-.346 1.471 1.471 0 0 1-.347-.532 2.225 2.225 0 0 1-.139-.728C5.004 8.916 5 8.814 5 8c0-.814.004-.917.018-1.236.015-.32.065-.538.14-.729.076-.196.179-.364.346-.53Z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0_1615_871"><rect width="14" height="14" transform="translate(1 1)"></rect></clipPath></defs></svg>';

export class IconSocialInstagramCircleFilled extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSocialInstagramCircleFilled');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialInstagramCircleFilled');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-instagram-circle-filled', IconSocialInstagramCircleFilled);
