import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--creditCardFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.875 13.813V23A2.625 2.625 0 005.5 25.625h21A2.625 2.625 0 0029.125 23v-9.188H2.875zm9.625 6.562H7.25v-1.75h5.25v1.75zm10.754.621a1.479 1.479 0 01-1.129-.516 1.496 1.496 0 110-1.96 1.497 1.497 0 111.129 2.476zM2.875 11.188V9A2.625 2.625 0 015.5 6.375h21A2.625 2.625 0 0129.125 9v2.188H2.875z',
                fill: '#242E30'
            }
        })]);
    }
};
