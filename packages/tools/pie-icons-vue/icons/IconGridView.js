import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconGridView',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--gridView');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M6.906 6.906H2.094V2.094h4.812v4.812Zm-3.5-1.312h2.188V3.406H3.406v2.188Zm10.5 1.312H9.094V2.094h4.812v4.812Zm-3.5-1.312h2.188V3.406h-2.188v2.188Zm-3.5 8.312H2.094V9.094h4.812v4.812Zm-3.5-1.312h2.188v-2.188H3.406v2.188Zm10.5 1.312H9.094V9.094h4.812v4.812Zm-3.5-1.312h2.188v-2.188h-2.188v2.188Z',
            },
        })]);
    },
};
