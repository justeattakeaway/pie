import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOrderFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--orderFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.875 3.75H8.125A2.625 2.625 0 005.5 6.375v21.927l3.561-1.898L12.5 28.38l3.5-1.968 3.5 1.968 3.43-1.977 3.57 1.898V6.375a2.625 2.625 0 00-2.625-2.625zM19.5 21.25h-7V19.5h7v1.75zm1.75-3.5h-10.5V16h10.5v1.75zm-8.75-6.816l1.242-1.243 1.567 1.575 3.754-3.762 1.312 1.242-4.996 4.988-2.879-2.8z',
                fill: '#242E30'
            }
        })]);
    }
};
