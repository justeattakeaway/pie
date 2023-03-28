import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinus',
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
            class: 'c-pieIcon c-pieIcon--minus',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.125 7.344H1.875v1.312h12.25V7.344Z',
            },
        })]);
    },
};
