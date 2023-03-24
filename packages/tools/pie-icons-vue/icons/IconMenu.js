import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMenu',
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
            class: 'c-pieIcon c-pieIcon--menu',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 4.281H1V2.97h14V4.28Zm0 7.438H1v1.312h14V11.72Zm0-4.375H1v1.312h14V7.344Z',
            },
        })]);
    },
};
