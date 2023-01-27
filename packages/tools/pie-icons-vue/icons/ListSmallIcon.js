import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ListSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--listSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.3125 10.9375C2.03737 10.9375 2.625 10.3499 2.625 9.625C2.625 8.90013 2.03737 8.3125 1.3125 8.3125C0.587626 8.3125 0 8.90013 0 9.625C0 10.3499 0.587626 10.9375 1.3125 10.9375Z'
            }
        }), h('path', {
            attrs: {
                d: 'M13.125 3.71875H4.375V5.03125H12.7225L13.125 3.71875Z'
            }
        }), h('path', {
            attrs: {
                d: 'M1.3125 5.6875C2.03737 5.6875 2.625 5.09987 2.625 4.375C2.625 3.65013 2.03737 3.0625 1.3125 3.0625C0.587626 3.0625 0 3.65013 0 4.375C0 5.09987 0.587626 5.6875 1.3125 5.6875Z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.5062 8.96875H4.375V10.2812H11.1038L11.5062 8.96875Z'
            }
        })]);
    }
};
