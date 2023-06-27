
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--mobilePay"><path fill="#5A78FF" d="m1.753 12.207.458-1.456a.048.048 0 0 1 .043-.037h.23c.02.003.038.017.045.037l.356.919c.007.018.025.02.032 0l.354-.92a.057.057 0 0 1 .045-.036h.23c.02.002.038.017.043.037l.448 1.457c.01.029-.006.05-.033.05H3.73a.04.04 0 0 1-.04-.032l-.292-.947c-.004-.018-.024-.018-.031 0l-.343.94c-.011.027-.027.039-.05.039h-.16c-.025 0-.038-.014-.047-.04l-.354-.938c-.007-.019-.025-.019-.03 0l-.297.946a.04.04 0 0 1-.043.031h-.257c-.027 0-.045-.018-.034-.05Zm2.372-.52c0-.337.257-.598.604-.598.35 0 .605.26.605.599 0 .336-.255.599-.605.599a.59.59 0 0 1-.604-.6Zm.902 0c0-.176-.133-.317-.298-.317-.162 0-.297.14-.297.318 0 .175.135.318.297.318.165 0 .298-.143.298-.318Zm.848.477c-.023-.018-.043-.01-.043.02v.03a.043.043 0 0 1-.04.043h-.213a.044.044 0 0 1-.042-.043v-1.456c0-.024.02-.043.042-.044h.224c.023.001.04.02.04.044v.415c0 .03.02.038.052.016a.493.493 0 0 1 .295-.1c.31 0 .546.263.546.599 0 .336-.241.599-.555.599a.46.46 0 0 1-.306-.123Zm.554-.476c0-.177-.133-.318-.3-.318-.162 0-.295.139-.295.318 0 .177.131.315.296.315.166 0 .3-.14.3-.315Zm.494-.867c0-.095.077-.172.171-.172a.172.172 0 0 1 0 .345.175.175 0 0 1-.17-.173Zm.016 1.393v-1.053c0-.023.018-.042.04-.043h.224c.023.001.042.02.043.043v1.053c-.001.024-.02.043-.043.043h-.224a.043.043 0 0 1-.04-.043Zm.558-.342v-1.114c0-.023.017-.043.04-.044h.223c.024.001.043.02.043.044v1.12c0 .073.032.12.11.12a.043.043 0 0 1 .044.044v.186a.042.042 0 0 1-.043.04c-.298 0-.417-.097-.417-.396Zm.541-.18c0-.345.253-.603.59-.603.337 0 .583.263.583.608 0 .04-.012.075-.052.075h-.776c-.02 0-.027.011-.025.03.016.129.129.224.275.224a.275.275 0 0 0 .215-.098.09.09 0 0 1 .072-.036h.207c.036 0 .052.025.039.061-.075.193-.287.334-.542.334a.57.57 0 0 1-.586-.595Zm.823-.104c.016 0 .023-.007.02-.025a.262.262 0 0 0-.514-.007c-.004.016-.002.032.018.032h.476Zm.537.626v-1.456c0-.023.017-.043.04-.044h.71c.325 0 .546.191.546.511 0 .313-.25.517-.561.517h-.377a.037.037 0 0 0-.03.012.038.038 0 0 0-.01.032v.428c-.001.024-.02.043-.043.044h-.235a.043.043 0 0 1-.04-.044Zm.735-.735c.155 0 .241-.134.241-.252 0-.125-.084-.242-.241-.242h-.38c-.026 0-.037.013-.037.04v.413c0 .028.01.041.038.041h.379Zm.667.209c0-.345.257-.6.559-.6.128 0 .219.05.3.117.02.018.043.015.043-.012v-.034a.04.04 0 0 1 .04-.04h.212c.023 0 .042.019.043.043v.75c0 .057.02.082.059.084a.04.04 0 0 1 .038.037v.197a.038.038 0 0 1-.038.039c-.15 0-.237-.043-.287-.13-.013-.022-.03-.027-.052-.004a.496.496 0 0 1-.363.152c-.302 0-.554-.256-.554-.6Zm.902 0c0-.18-.131-.318-.296-.318-.167 0-.297.14-.297.318 0 .175.13.318.297.318.165 0 .296-.141.296-.318Zm.5.969v-.184a.042.042 0 0 1 .043-.04c.149 0 .293-.08.325-.219a.127.127 0 0 0-.01-.09l-.414-.944c-.014-.037.009-.062.036-.062h.223c.023 0 .036.018.045.041l.26.604c.017.047.047.045.067-.002l.248-.606c.01-.023.02-.037.043-.037h.214a.04.04 0 0 1 .034.017.04.04 0 0 1 .004.038l-.426 1.019c-.155.37-.32.508-.649.508a.045.045 0 0 1-.043-.043Zm1.382-1.226v-.235c0-.003 0-.005-.002-.007a.009.009 0 0 0-.007-.003h-.081c-.007 0-.011-.002-.011-.01v-.046c0-.003 0-.006.003-.009a.011.011 0 0 1 .008-.003h.261a.01.01 0 0 1 .009.003.01.01 0 0 1 .003.009v.045c0 .01-.005.011-.012.011h-.083c-.005 0-.007.005-.007.01v.236a.014.014 0 0 1-.003.01.013.013 0 0 1-.01.003h-.057a.013.013 0 0 1-.01-.014Zm.18-.004.095-.3a.012.012 0 0 1 .014-.009h.05c.005 0 .01.004.013.01l.065.174c.005.007.007.007.011 0l.068-.175a.013.013 0 0 1 .014-.009h.05c.005 0 .011.003.013.01l.092.299c.002.011 0 .018-.011.018h-.063c-.007 0-.01-.004-.011-.009l-.055-.175a.005.005 0 0 0-.004-.003.005.005 0 0 0-.005.003l-.06.173c-.005.007-.01.011-.016.011h-.036a.015.015 0 0 1-.016-.011l-.063-.17a.005.005 0 0 0-.005-.004.005.005 0 0 0-.004.004l-.052.172c-.005.007-.007.01-.014.01h-.058c-.011 0-.016-.008-.011-.02ZM7.163 9.203a.505.505 0 0 1-.467-.313L4.956 4.66a.508.508 0 0 1 .272-.663l1.824-.76a.501.501 0 0 1 .658.275l1.74 4.229a.508.508 0 0 1-.272.662l-1.823.76a.5.5 0 0 1-.192.039Zm.082-5.73a.23.23 0 0 0-.09.018l-1.823.76a.233.233 0 0 0-.126.305l1.741 4.23c.05.119.185.175.304.126l1.823-.76a.233.233 0 0 0 .126-.306L7.46 3.617a.233.233 0 0 0-.215-.144Z"></path><path fill="url(#prefix__paint0_linear_3973_4581)" d="m7.826 3.792-.251.104.688 1.675.25-.105-.687-1.674Z" style="mix-blend-mode:multiply"></path><path fill="url(#prefix__paint1_linear_3973_4581)" d="m9.084 7.565.25-.105-.778-1.895-.251.105.779 1.895Z" style="mix-blend-mode:multiply"></path><path fill="#5A78FF" d="M8.768 6.309c-.522.217-.957.517-1.242.879L6.79 5.402a3.104 3.104 0 0 1 1.242-.88c.521-.217 1.048-.322 1.496-.261l.735 1.786a3.085 3.085 0 0 0-1.496.262Z"></path><path fill="url(#prefix__paint2_linear_3973_4581)" d="M8.768 6.309c-.522.217-.957.517-1.242.879L6.79 5.402a3.104 3.104 0 0 1 1.242-.88c.521-.217 1.048-.322 1.496-.261l.735 1.786a3.085 3.085 0 0 0-1.496.262Z" style="mix-blend-mode:multiply"></path><path fill="url(#prefix__paint3_linear_3973_4581)" d="M8.768 6.309c-.522.217-.957.517-1.242.879L6.79 5.402a3.104 3.104 0 0 1 1.242-.88c.521-.217 1.048-.322 1.496-.261l.735 1.786a3.085 3.085 0 0 0-1.496.262Z" style="mix-blend-mode:multiply"></path><path fill="#5A78FF" d="M9.007 6.853c-.564 0-1.08.11-1.481.334V5.381a3.088 3.088 0 0 1 1.481-.334c.565 0 1.092.106 1.482.334v1.806a3.086 3.086 0 0 0-1.482-.334Z"></path><defs><linearGradient id="prefix__paint0_linear_3973_4581" x1="7.843" x2="8.107" y1="10.42" y2="3.138" gradientUnits="userSpaceOnUse"><stop stop-color="#504678"></stop><stop offset=".302" stop-color="#504678" stop-opacity=".616"></stop><stop offset=".608" stop-color="#504678" stop-opacity=".283"></stop><stop offset=".852" stop-color="#504678" stop-opacity=".076"></stop><stop offset="1" stop-color="#504678" stop-opacity="0"></stop></linearGradient><linearGradient id="prefix__paint1_linear_3973_4581" x1="7.843" x2="8.107" y1="10.42" y2="3.138" gradientUnits="userSpaceOnUse"><stop stop-color="#504678"></stop><stop offset=".302" stop-color="#504678" stop-opacity=".616"></stop><stop offset=".608" stop-color="#504678" stop-opacity=".283"></stop><stop offset=".852" stop-color="#504678" stop-opacity=".076"></stop><stop offset="1" stop-color="#504678" stop-opacity="0"></stop></linearGradient><linearGradient id="prefix__paint2_linear_3973_4581" x1="3.463" x2="8.084" y1="9.502" y2="6.01" gradientUnits="userSpaceOnUse"><stop stop-color="#504678"></stop><stop offset=".179" stop-color="#504678" stop-opacity=".872"></stop><stop offset=".526" stop-color="#504678" stop-opacity=".536"></stop><stop offset="1" stop-color="#504678" stop-opacity="0"></stop></linearGradient><linearGradient id="prefix__paint3_linear_3973_4581" x1="7.715" x2="7.536" y1="6.522" y2="4.931" gradientUnits="userSpaceOnUse"><stop stop-color="#504678"></stop><stop offset=".643" stop-color="#504678" stop-opacity=".332"></stop><stop offset="1" stop-color="#504678" stop-opacity="0"></stop></linearGradient></defs></svg>';

export class IconPaymentMobilePay extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPaymentMobilePay');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPaymentMobilePay');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-payment-mobile-pay', IconPaymentMobilePay);
