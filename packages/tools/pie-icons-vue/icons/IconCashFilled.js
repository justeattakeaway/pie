import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashFilled',
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
            class: 'c-pieIcon c-pieIcon--cashFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.75 9.75h9.625v1.75H1V5.375h1.75V9.75zm12.031-6.729v5.583H3.844V3.02H14.78zM10.53 5.812a1.217 1.217 0 10-2.433 0 1.217 1.217 0 002.433 0z',
                fill: '#242E30',
            },
        })]);
    },
};
