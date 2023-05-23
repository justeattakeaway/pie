import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheck',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--check');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M5.865 12.489a1.217 1.217 0 0 1-.875-.385L1.875 8.656l.98-.875 3.028 3.369 7.253-7.822.963.875-7.35 7.875a1.216 1.216 0 0 1-.875.385l-.009.026Z',
            },
        })]);
    },
};
