import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretRightFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--caretRightFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.875 14.425l-14-8.671A1.654 1.654 0 009 5.5a1.689 1.689 0 00-1.689 1.68v17.64a1.68 1.68 0 002.625 1.409l13.939-8.96a1.68 1.68 0 000-2.844z',
                fill: '#242E30',
            },
        })]);
    },
};
