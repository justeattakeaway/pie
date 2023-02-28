import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--userCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 16.875a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zm0-7a2.625 2.625 0 110 5.25 2.625 2.625 0 010-5.25zm0-6.125a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 1.75A10.5 10.5 0 0126.5 16a10.404 10.404 0 01-2.004 6.125 6.878 6.878 0 00-6.055-3.5H13.56a6.92 6.92 0 00-6.064 3.5A10.5 10.5 0 0116 5.5zM8.755 23.586a5.128 5.128 0 014.804-3.211h4.882a5.119 5.119 0 014.804 3.211 10.5 10.5 0 01-14.49 0z',
                fill: '#242E30'
            }
        })]);
    }
};
