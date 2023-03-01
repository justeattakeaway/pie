import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowDownLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowDownLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.125 3.75v21.875l-7-7-1.242 1.207 7.875 7.875a1.75 1.75 0 002.476 0l7.875-7.875-1.234-1.207-7 7V3.75h-1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
