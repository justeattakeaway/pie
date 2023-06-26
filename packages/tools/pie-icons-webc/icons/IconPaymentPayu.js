
// eslint-disable-next-line import/no-unresolved, import/extensions
import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

const template = document.createElement('template');
template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--payu"><path fill="#9FC603" d="M1.866 6.88s.018-.017.026-.035a.45.45 0 0 1 .447-.359c.428-.017.866-.043 1.295.018.498.079.743.341.813.849.027.2.027.402-.017.603-.096.455-.403.718-.893.762-.358.035-.717.008-1.085.017-.078 0-.105.018-.105.105v.893c0 .096.018.21-.096.253a.362.362 0 0 1-.385-.078V6.88Zm.49.788v.55c0 .053.009.08.07.08.35 0 .691.008 1.041-.018.324-.026.49-.201.508-.525v-.262c-.018-.35-.193-.534-.543-.543-.288-.009-.577 0-.866 0-.149 0-.201.053-.201.21v.516l-.009-.008Z"></path><path fill="#9FC603" d="M13.346 4.946c.079.149.035.307.027.464 0 .044-.053.053-.088.053h-.315c-.044 0-.088 0-.088-.053 0-.157-.043-.315.027-.464h.446-.009Z"></path><path fill="#9EC602" d="M12.856 7.256v1.217c0 .192.009.385-.035.568-.096.447-.376.735-.796.884a2.495 2.495 0 0 1-1.558.018c-.56-.167-.866-.578-.875-1.182-.017-.647 0-1.295 0-1.951 0-.219.08-.297.29-.324.157-.017.323-.017.49.009.14.026.192.079.218.219.009.052.009.105.009.157v1.777c0 .35.131.48.472.525a2 2 0 0 0 .324 0c.298-.035.446-.184.446-.482V6.854c0-.271.079-.35.35-.368h.149v.49c0 .28.009.289.28.289h.21l.026-.009Z"></path><path fill="#9FC603" d="M8.14 10.039h-.079c-.324.052-.542-.07-.656-.376-.096-.245-.149-.508-.219-.762-.122-.437-.236-.866-.359-1.303-.008-.044-.026-.088-.026-.132 0-.052.018-.087.061-.113a.304.304 0 0 1 .43.175c.122.437.244.883.358 1.32.052.202.105.403.166.605.044.14.105.175.236.183.167 0 .237-.052.29-.262l.34-1.418.105-.428c.044-.175.28-.263.438-.167.07.044.061.114.044.184-.07.298-.149.595-.219.893l-.42 1.67a1.585 1.585 0 0 1-.219.517c-.21.324-.525.464-.901.438-.053 0-.079-.027-.105-.062-.018-.035-.026-.07-.035-.105-.044-.175-.018-.21.157-.245.377-.061.543-.219.63-.595l-.017-.017Z"></path><path fill="#9FC603" d="M6.626 8.656c0 .263.026.525-.026.779-.053.245-.193.42-.429.499a1.763 1.763 0 0 1-1.216.026c-.35-.114-.525-.402-.516-.779.017-.385.192-.621.568-.717.158-.044.315-.061.473-.061h.586c.079 0 .105-.027.096-.105V8.06c-.008-.183-.096-.297-.27-.35-.246-.078-.5-.052-.745-.026-.087 0-.175.026-.262.044-.105.017-.158-.026-.175-.131-.018-.22.017-.272.236-.307.368-.061.735-.078 1.094.027.376.105.569.34.586.735v.603Zm-.464.394v-.061c0-.201 0-.201-.2-.201-.246 0-.5-.018-.736.035-.21.052-.306.175-.306.393 0 .21.105.333.306.385.158.044.324.035.481.018.35-.044.455-.166.455-.516V9.05Z"></path><path fill="#9FC603" d="M12.357 6.469v-.096c0-.097.053-.15.15-.15h.717c.105 0 .149.062.157.167v.7c0 .114-.061.166-.175.166h-.35V6.75c0-.158-.079-.236-.236-.263-.087-.017-.175-.008-.262-.017Z"></path><path fill="#9FC603" d="M14.134 5.856v.254c0 .079-.035.123-.114.123h-.516c-.079 0-.123-.044-.123-.132v-.507c0-.088.044-.131.131-.131h.5c.078 0 .122.035.122.122v.271Z"></path></svg>;';

export class IconPaymentPayu extends HTMLElement {
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

        const defaultSize = getDefaultIconSize('IconPaymentPayu');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, 'IconPaymentPayu');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('icon-payment-payu', IconPaymentPayu);
