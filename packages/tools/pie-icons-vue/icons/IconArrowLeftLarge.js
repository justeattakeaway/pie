import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 15.125H6.375l7-7-1.207-1.243-7.875 7.875a1.751 1.751 0 000 2.477l7.875 7.875 1.207-1.234-7-7H28.25v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
