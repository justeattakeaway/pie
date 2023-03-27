import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardLarge',
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
            class: 'c-pieIcon c-pieIcon--creditCardLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.25 18.625h5.25v1.75H7.25v-1.75ZM29.125 9v14a2.625 2.625 0 0 1-2.625 2.625h-21A2.625 2.625 0 0 1 2.875 23V9A2.625 2.625 0 0 1 5.5 6.375h21A2.625 2.625 0 0 1 29.125 9Zm-24.5 0v2.188h22.75V9a.875.875 0 0 0-.875-.875h-21A.875.875 0 0 0 4.625 9Zm22.75 14v-9.188H4.625V23a.875.875 0 0 0 .875.875h21a.875.875 0 0 0 .875-.875Zm-4.121-4.996a1.479 1.479 0 0 0-1.129.516 1.496 1.496 0 1 0 0 1.96 1.497 1.497 0 1 0 1.129-2.476Z',
            },
        })]);
    },
};
