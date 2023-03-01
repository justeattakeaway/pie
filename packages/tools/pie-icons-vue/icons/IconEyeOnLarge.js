import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEyeOnLarge',
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
            class: 'c-pieIcon c-pieIcon--eyeOnLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.024 10.094a11.375 11.375 0 00-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0016.048 0L29.92 16l-5.897-5.906zm-1.243 10.57a9.625 9.625 0 01-13.562 0L4.546 16l4.673-4.664a9.625 9.625 0 0113.562 0L27.454 16l-4.673 4.664zm-6.78-9.477A4.813 4.813 0 1020.812 16 4.821 4.821 0 0016 11.187zm0 7.876A3.062 3.062 0 1116 12.938a3.062 3.062 0 010 6.124z',
                fill: '#242E30',
            },
        })]);
    },
};
