// declarative shadow dom  polyfill
import { hydrateShadowRoots } from '@webcomponents/template-shadowroot/template-shadowroot.js';

if (!Object.prototype.hasOwnProperty.call(HTMLTemplateElement.prototype, 'shadowRoot')) {
    hydrateShadowRoots(document.body);
}
