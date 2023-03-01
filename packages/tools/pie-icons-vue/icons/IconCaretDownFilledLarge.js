import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretDownFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--caretDownFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.82 8.169H7.18a1.671 1.671 0 00-1.409 2.625l8.96 13.956a1.679 1.679 0 002.844 0l8.671-14a1.672 1.672 0 00-1.426-2.581z',
                fill: '#242E30',
            },
        })]);
    },
};
