import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretUpFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--caretUpFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.269 8.125a1.68 1.68 0 0 0-2.844 0l-8.671 14a1.68 1.68 0 0 0 1.426 2.564h17.64a1.68 1.68 0 0 0 1.409-2.625l-8.96-13.939Z',
            },
        })]);
    },
};
