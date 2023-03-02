import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUpLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 28.25V6.375l7 7 1.234-1.234-7.875-7.875a1.751 1.751 0 00-2.477 0l-7.874 7.875 1.242 1.234 7-7V28.25h1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
