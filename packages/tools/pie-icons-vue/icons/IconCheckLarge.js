import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckLarge',
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
            class: 'c-pieIcon c-pieIcon--checkLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.2575 24.2425C11.008 24.243 10.7611 24.192 10.5322 24.0927C10.3033 23.9933 10.0975 23.8477 9.9275 23.665L4.625 17.75L5.9375 16.5863L11.1875 22.51H11.275L26.0888 6.76001L27.375 7.95001L12.5962 23.7C12.4251 23.8841 12.2179 24.0311 11.9877 24.132C11.7574 24.2328 11.5089 24.2853 11.2575 24.2863V24.2425Z',
                fill: '#242E30'
            }
        })]);
    }
};
