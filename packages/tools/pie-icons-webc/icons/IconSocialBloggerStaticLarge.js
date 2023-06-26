
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--bloggerStaticLarge"><path fill="#F06A35" d="M6.742 27.905a3.78 3.78 0 0 1-1.194-.536c-.302-.206-.743-.632-.91-.879a4.579 4.579 0 0 1-.536-1.178c-.098-.366-.1-.511-.102-9.294-.001-8.737 0-8.93.096-9.305a3.618 3.618 0 0 1 2.745-2.64c.39-.086 17.791-.102 18.212-.016a3.58 3.58 0 0 1 2.549 1.95c.411.822.375-.082.393 9.674.012 6.208.001 8.814-.038 9.138-.186 1.52-1.232 2.698-2.737 3.083-.385.099-.519.1-9.261.097-8.453-.002-8.887-.007-9.217-.093Z"></path><path fill="#fff" d="M19.396 23.397c1.078-.147 1.923-.58 2.715-1.391.574-.587.933-1.222 1.167-2.065.098-.35.106-.521.124-2.577.013-1.552.002-2.28-.038-2.463-.059-.266-.224-.513-.414-.615-.058-.032-.43-.073-.828-.09-.666-.03-.74-.043-.951-.166-.334-.196-.425-.408-.426-.982-.002-1.096-.458-2.115-1.358-3.034-.641-.654-1.357-1.097-2.173-1.346-.196-.06-.633-.08-2.1-.097-2.3-.027-2.81.02-3.594.333-1.444.576-2.481 1.79-2.86 3.347-.07.292-.084.76-.101 3.452-.021 3.372.002 3.867.212 4.535.174.552.35.89.71 1.37.689.915 1.72 1.576 2.751 1.763.49.088 6.544.11 7.164.026Z"></path><path fill="#F06A35" d="M13.034 14.14c-.55-.152-.757-.944-.352-1.354.26-.261.33-.271 1.951-.271 1.456 0 1.504.003 1.718.11.309.157.443.377.443.728 0 .317-.126.54-.407.718-.15.096-.241.102-1.667.11-.88.005-1.581-.012-1.686-.04Zm-.069 5.332a.93.93 0 0 1-.495-.645.937.937 0 0 1 .272-.744c.235-.213.338-.22 3.226-.222 2.972-.003 2.956-.004 3.238.26a.82.82 0 0 1-.165 1.307l-.493.08-2.569.03c-2.257.026-2.896-.015-3.014-.066Z"></path></svg>;';

export class IconSocialBloggerStaticLarge extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconSocialBloggerStaticLarge');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconSocialBloggerStaticLarge');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-social-blogger-static-large', IconSocialBloggerStaticLarge);
