import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagsBelgium',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--belgium'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.433 1.438a6.986 6.986 0 00-4.867 0L4.956 8l.61 6.562a6.984 6.984 0 004.867 0L11.043 8l-.61-6.562z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M15 8a7 7 0 00-4.567-6.562v13.124A7.001 7.001 0 0015 8z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M1 8a7 7 0 004.566 6.562V1.438A6.999 6.999 0 001 8z',
                fill: '#333'
            }
        })]);
    }
};
