import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretDownFilled',
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
            class: 'c-pieIcon c-pieIcon--caretDownFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.92 3.713H4.045a1.313 1.313 0 00-1.041 2.056l4.051 5.941a1.321 1.321 0 001.085.577 1.312 1.312 0 001.085-.612l3.763-5.897a1.25 1.25 0 00.16-1.26 1.312 1.312 0 00-1.228-.805z',
                fill: '#242E30',
            },
        })]);
    },
};
