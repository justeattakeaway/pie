import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLogOut',
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
            class: 'c-pieIcon c-pieIcon--logOut',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.906 8a5.906 5.906 0 11-8.531-5.25v1.487a4.594 4.594 0 105.25 0V2.75A5.915 5.915 0 0113.906 8zm-5.25-7H7.344v5.25h1.312V1z',
                fill: '#242E30',
            },
        })]);
    },
};
