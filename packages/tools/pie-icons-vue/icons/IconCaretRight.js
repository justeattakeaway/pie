import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretRight',
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
            class: 'c-pieIcon c-pieIcon--caretRight',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.675 6.749L5.734 2.978a1.304 1.304 0 00-.709-.228 1.304 1.304 0 00-1.313 1.313v7.822a1.321 1.321 0 00.7 1.164c.189.1.4.151.613.149.265.002.525-.077.744-.228l5.941-4.06a1.286 1.286 0 00.577-1.102 1.313 1.313 0 00-.612-1.06zm-6.65 5.162V4.09l5.95 3.771-5.95 4.051z',
                fill: '#242E30',
            },
        })]);
    },
};
