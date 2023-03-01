import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusLarge',
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
            class: 'c-pieIcon c-pieIcon--minusLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 16.875v-1.75H4.625v1.75h22.75z',
                fill: '#242E30',
            },
        })]);
    },
};
