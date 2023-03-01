import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoreHorizontalLarge',
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
            class: 'c-pieIcon c-pieIcon--moreHorizontalLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.688 14.031a1.969 1.969 0 110 3.938 1.969 1.969 0 010-3.938zM14.03 16a1.97 1.97 0 103.938 0 1.97 1.97 0 00-3.938 0zm8.313 0a1.97 1.97 0 103.938 0 1.97 1.97 0 00-3.938 0z',
                fill: '#242E30',
            },
        })]);
    },
};
