import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretUpLarge',
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
            class: 'c-pieIcon c-pieIcon--caretUpLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.229 22.125l-8.96-14a1.68 1.68 0 00-2.844 0l-8.671 14a1.68 1.68 0 001.426 2.564h17.64a1.68 1.68 0 001.409-2.564zM7.31 23L15.86 9.131l8.829 13.808L7.31 23z',
                fill: '#242E30'
            }
        })]);
    }
};
