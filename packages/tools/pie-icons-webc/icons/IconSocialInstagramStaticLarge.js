import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" ><g clip-path="url(#prefix__clip0_889_604)"><path fill="url(#prefix__paint0_radial_889_604)" d="M8.505 5.087c-.76.296-1.402.69-2.044 1.332A5.638 5.638 0 0 0 5.13 8.458c-.286.731-.479 1.57-.535 2.798-.056 1.228-.07 1.622-.07 4.753 0 3.132.014 3.525.07 4.753.056 1.229.253 2.068.535 2.799.295.76.689 1.401 1.33 2.044a5.654 5.654 0 0 0 2.045 1.33c.73.287 1.57.479 2.798.535 1.228.056 1.622.07 4.753.07 3.131 0 3.525-.014 4.753-.07 1.228-.056 2.067-.253 2.799-.534a5.654 5.654 0 0 0 2.043-1.331 5.654 5.654 0 0 0 1.332-2.044c.286-.731.478-1.57.534-2.799.056-1.228.07-1.621.07-4.753 0-3.13-.014-3.525-.07-4.753-.056-1.228-.253-2.067-.534-2.798a5.685 5.685 0 0 0-1.327-2.04 5.654 5.654 0 0 0-2.044-1.33c-.73-.286-1.57-.479-2.798-.535-1.228-.056-1.622-.07-4.753-.07-3.131 0-3.525.014-4.753.07-1.233.052-2.072.249-2.803.534Zm12.21 1.538c1.125.052 1.735.239 2.143.398.539.211.923.46 1.326.863.403.403.652.787.863 1.326.16.408.347 1.018.398 2.143.056 1.214.066 1.58.066 4.659 0 3.08-.014 3.445-.066 4.66-.051 1.124-.239 1.734-.398 2.142-.211.539-.46.923-.863 1.326a3.593 3.593 0 0 1-1.326.863c-.408.159-1.018.347-2.143.398-1.213.056-1.58.066-4.659.066-3.08 0-3.445-.014-4.66-.066-1.124-.051-1.734-.239-2.141-.398a3.593 3.593 0 0 1-1.327-.863 3.592 3.592 0 0 1-.862-1.326c-.16-.408-.347-1.018-.399-2.143-.056-1.214-.066-1.58-.066-4.659 0-3.08.015-3.445.066-4.66.052-1.124.24-1.734.399-2.142.21-.539.459-.923.862-1.326a3.592 3.592 0 0 1 1.327-.863c.407-.159 1.017-.346 2.142-.398 1.214-.056 1.58-.066 4.66-.066 3.079 0 3.445.01 4.659.066Z"></path><path fill="url(#prefix__paint1_radial_889_604)" d="M10.136 16.014a5.92 5.92 0 1 0 11.841 0 5.92 5.92 0 0 0-11.841 0Zm9.764 0a3.843 3.843 0 1 1-7.688 0 3.843 3.843 0 1 1 7.688 0Z"></path><path fill="#654C9F" d="M22.215 11.242a1.383 1.383 0 1 0 0-2.765 1.383 1.383 0 0 0 0 2.765Z"></path></g><defs><radialGradient id="prefix__paint0_radial_889_604" cx="0" cy="0" r="1" gradientTransform="rotate(-3 488.016 -81.694) scale(33.3428 28.3411)" gradientUnits="userSpaceOnUse"><stop stop-color="#FED576"></stop><stop offset=".263" stop-color="#F47133"></stop><stop offset=".609" stop-color="#BC3081"></stop><stop offset="1" stop-color="#4C63D2"></stop></radialGradient><radialGradient id="prefix__paint1_radial_889_604" cx="0" cy="0" r="1" gradientTransform="rotate(-2.999 488.051 -81.69) scale(33.3492 28.3408)" gradientUnits="userSpaceOnUse"><stop stop-color="#FED576"></stop><stop offset=".263" stop-color="#F47133"></stop><stop offset=".609" stop-color="#BC3081"></stop><stop offset="1" stop-color="#4C63D2"></stop></radialGradient><clipPath id="prefix__clip0_889_604"><rect width="24" height="24" fill="#fff" transform="translate(4 4)"></rect></clipPath></defs></svg>';

export class IconSocialInstagramStaticLarge extends HTMLElement {
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
        const svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramStaticLarge', '', null, 'IconSocialInstagramStaticLarge');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', 'c-pieIcon c-pieIcon--instagramStaticLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        console.log(attr);
        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--instagramStaticLarge', '', newVal, 'IconSocialInstagramStaticLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--instagramStaticLarge', newVal);
    }
}

customElements.define('icon-social-instagram-static-large', IconSocialInstagramStaticLarge);
