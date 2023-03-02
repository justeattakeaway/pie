import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagDenmark',
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
            class: 'c-pieIcon c-pieIcon--denmark',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE',
            },
        }), h('path', {
            attrs: {
                d: 'M6.476 7.087h8.463A7 7 0 008 1a7.027 7.027 0 00-1.523.164v5.923zm-1.823 0V1.85A7.005 7.005 0 001.06 7.087h3.593zm0 1.826H1.06a7.005 7.005 0 003.593 5.236V8.913zm1.823 0v5.92a7 7 0 008.463-5.92H6.476z',
                fill: '#D80027',
            },
        })]);
    },
};
