import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUp',
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
            class: 'c-pieIcon c-pieIcon--arrowUp',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 14.125V3.931l3.29 3.29.928-.927L8.77 2.199a1.085 1.085 0 00-1.54 0L3.126 6.294l.928.927 3.29-3.29v10.194h1.312z',
                fill: '#242E30',
            },
        })]);
    },
};
