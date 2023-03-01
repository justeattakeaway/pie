import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowRight',
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
            class: 'c-pieIcon c-pieIcon--arrowRight',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 8.75h11.65l-3.76 3.76L10 13.57l4.68-4.69a1.239 1.239 0 000-1.76L10 2.43 8.89 3.49l3.76 3.76H1v1.5z',
                fill: '#242E30',
            },
        })]);
    },
};
