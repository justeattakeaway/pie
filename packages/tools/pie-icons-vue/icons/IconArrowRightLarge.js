import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowRightLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.75 16.875h21.875l-7 7 1.234 1.234 7.875-7.875a1.748 1.748 0 000-2.477l-7.875-7.875-1.234 1.243 7 7H3.75v1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
