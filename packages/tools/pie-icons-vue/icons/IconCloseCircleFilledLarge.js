import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloseCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--closeCircleFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.25 4a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm4.996 16.004l-1.242 1.242-3.754-3.762-3.754 3.762-1.242-1.242 3.762-3.754-3.762-3.754 1.242-1.242 3.754 3.762 3.754-3.762 1.242 1.242-3.762 3.754 3.762 3.754z',
                fill: '#242E30',
            },
        })]);
    },
};
