import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGift',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--gift', 'IconGift');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.329 3.333c.112-.013.226-.013.338 0V2.071a2.18 2.18 0 0 0-.338 0A2.969 2.969 0 0 0 8 3.138 2.969 2.969 0 0 0 5.671 2a2.071 2.071 0 0 0-.338.071v1.333c.113-.013.226-.013.338 0A1.68 1.68 0 0 1 7.333 4.96H2v4h.889v3.778a1.6 1.6 0 0 0 1.555 1.555h7.112a1.6 1.6 0 0 0 1.555-1.555V8.96H14v-4H8.667a1.671 1.671 0 0 1 1.662-1.627ZM7.333 12.96H4.444a.258.258 0 0 1-.222-.222V8.96h3.111v4Zm0-5.333h-4V6.293h4v1.334Zm4.445 5.075a.258.258 0 0 1-.258.258H8.667v-4h3.11v3.742Zm.889-6.409v1.334h-4V6.293h4Z',
            },
        })]);
    },
};
