import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEmailLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--emailLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 6.375h-21A2.625 2.625 0 002.875 9v14A2.625 2.625 0 005.5 25.625h21A2.625 2.625 0 0029.125 23V9A2.625 2.625 0 0026.5 6.375zm.875 3.01v13.519l-7.297-6.755 7.297-6.764zm-11.856 9.888c.16.145.37.226.586.227a.875.875 0 00.595-.236l2.091-1.925 7.061 6.536H6.165l7.21-6.545 2.144 1.943zM26.168 8.125l-10.063 9.31L5.85 8.125h20.318zM12.08 16.149l-7.455 6.764V9.376l7.455 6.773z',
                fill: '#242E30'
            }
        })]);
    }
};
