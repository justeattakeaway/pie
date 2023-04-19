import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconChevronSplitLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--chevronSplitLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm23.052 12.036-7.008-7.411h-.097l-7 7.402L7.68 10.83l7-7.412a1.916 1.916 0 0 1 2.625 0l7 7.412-1.252 1.207Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8.947 19.973 16 27.375h.096l7-7.402 1.278 1.198-7 7.403a1.907 1.907 0 0 1-2.625 0l-7-7.412 1.198-1.19Z',
            },
        })]);
    },
};
