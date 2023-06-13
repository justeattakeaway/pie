import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconShekel',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--shekel');
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
                d: 'M8 5.156H3.406v8.094H2.094V3.844H8a2.406 2.406 0 0 1 2.406 2.406v3.5H9.094v-3.5A1.094 1.094 0 0 0 8 5.156Zm4.594-1.531v8.094H8a1.094 1.094 0 0 1-1.094-1.094v-3.5H5.594v3.5A2.406 2.406 0 0 0 8 13.031h5.906V3.625h-1.312Z',
            },
        })]);
    },
};
