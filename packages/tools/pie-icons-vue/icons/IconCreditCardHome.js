import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardHome',
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
            class: 'c-pieIcon c-pieIcon--creditCardHome',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.5 11.5h1.75v.875H4.5V11.5zM8.814 1.254a2.082 2.082 0 00-1.637 0 46.042 46.042 0 00-6.125 4.068l.823 1.042A42.989 42.989 0 017.72 2.452c.178-.043.364-.043.542 0a43 43 0 015.863 3.912l.814-1.042a45.719 45.719 0 00-6.125-4.068zM13.906 8v5.25a1.54 1.54 0 01-1.531 1.531h-8.75a1.54 1.54 0 01-1.531-1.531V8a1.54 1.54 0 011.531-1.531h8.75A1.54 1.54 0 0113.906 8zm-10.5 0v1.094h9.188V8a.219.219 0 00-.219-.219h-8.75A.219.219 0 003.406 8zm9.188 5.25v-2.844H3.406v2.844a.219.219 0 00.219.219h8.75a.219.219 0 00.219-.219z',
                fill: '#242E30',
            },
        })]);
    },
};
