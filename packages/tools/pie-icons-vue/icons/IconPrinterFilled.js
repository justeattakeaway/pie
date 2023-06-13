import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPrinterFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--printerFilled');
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
                d: 'M11.281 3.844V1.656H4.72v2.188h6.562Z',
            },
        }), h('path', {
            attrs: {
                d: 'M13.25 5.156H2.75a1.54 1.54 0 0 0-1.531 1.532v5.906h3.5V9.969h-.875V8.656h8.312V9.97h-.875v2.625h3.5V6.688a1.54 1.54 0 0 0-1.531-1.532Z',
            },
        }), h('path', {
            attrs: {
                d: 'M6.031 9.969v4.375H9.96v-.656h.009v-3.72H6.03Z',
            },
        })]);
    },
};
