import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloseLarge',
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
            class: 'c-pieIcon c-pieIcon--closeLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.42 24.663l1.242-1.243L17.234 16l7.428-7.429-1.242-1.233L16 14.766 8.57 7.338 7.337 8.57 14.767 16l-7.43 7.42 1.234 1.242L16 17.235l7.42 7.428z',
                fill: '#242E30',
            },
        })]);
    },
};
