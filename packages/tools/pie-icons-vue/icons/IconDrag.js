import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDrag',
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
            class: 'c-pieIcon c-pieIcon--drag',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 9.531H1v1.313h14V9.53Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 5.156H1V6.47h14V5.156Z',
            },
        })]);
    },
};
