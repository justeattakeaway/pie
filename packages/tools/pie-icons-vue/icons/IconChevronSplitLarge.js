import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronSplitLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--chevronSplitLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.052 12.036l-7.008-7.411h-.097l-7 7.402L7.68 10.83l7-7.412a1.916 1.916 0 012.625 0l7 7.412-1.252 1.207z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.947 19.973L16 27.375h.096l7-7.402 1.278 1.198-7 7.403a1.907 1.907 0 01-2.625 0l-7-7.412 1.198-1.19z',
                fill: '#242E30',
            },
        })]);
    },
};
