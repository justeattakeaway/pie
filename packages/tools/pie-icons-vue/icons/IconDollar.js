import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDollar',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--dollar',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.613 7.309c-1.47-.385-2.625-.735-2.625-1.75 0-1.015 1.05-1.383 2.012-1.383a3.701 3.701 0 012.695 1.138l.998-1.033A4.428 4.428 0 008.77 2.794V1.096H7.388v1.698c-1.75.192-2.975 1.19-2.975 2.87 0 1.837 1.575 2.555 3.15 2.975 1.575.42 2.625.682 2.625 1.697 0 1.015-1.05 1.488-2.24 1.488a3.72 3.72 0 01-2.923-1.2L4.01 11.72a4.568 4.568 0 003.22 1.53v1.698h1.418V13.25c1.802-.21 3.114-1.19 3.114-2.975 0-1.785-1.592-2.564-3.15-2.966z',
                fill: '#242E30',
            },
        })]);
    },
};
