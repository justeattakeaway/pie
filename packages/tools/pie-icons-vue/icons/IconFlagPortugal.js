import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagPortugal',
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
            class: 'c-pieIcon c-pieIcon--portugal'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 8a7 7 0 004.567 6.563L6.174 8l-.607-6.563A7 7 0 001 8z',
                fill: '#6DA544'
            }
        }), h('path', {
            attrs: {
                d: 'M15.002 8a7 7 0 00-9.435-6.563v13.126A7.002 7.002 0 0015.002 8z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M5.567 10.434a2.434 2.434 0 100-4.868 2.434 2.434 0 000 4.868z',
                fill: '#FFDA44'
            }
        }), h('path', {
            attrs: {
                d: 'M4.197 6.783v1.518a1.369 1.369 0 102.737 0V6.78H4.199l-.002.002z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M5.567 8.76a.458.458 0 01-.456-.456v-.605h.913v.602a.458.458 0 01-.457.457v.002z',
                fill: '#EEE'
            }
        })]);
    }
};
