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
                fill: '#242E30',
                d: 'M13.906 8a5.906 5.906 0 1 1-8.531-5.25v1.487a4.594 4.594 0 1 0 5.25 0V2.75A5.915 5.915 0 0 1 13.906 8Zm-5.25-7H7.344v5.25h1.312V1Z',
            },
        })]);
    },
};
