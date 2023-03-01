import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLoadingLarge',
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
            class: 'c-pieIcon c-pieIcon--loadingLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 16A12.25 12.25 0 1116 3.75V5.5A10.5 10.5 0 1026.5 16h1.75zM9 16h1.75A5.25 5.25 0 1116 21.25V23a7 7 0 10-7-7z',
                fill: '#242E30',
            },
        })]);
    },
};
