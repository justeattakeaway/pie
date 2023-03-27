import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretLeft',
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
            class: 'c-pieIcon c-pieIcon--caretLeft',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.588 2.925a1.269 1.269 0 0 0-.613-.175 1.286 1.286 0 0 0-.744.227L4.29 7.064a1.286 1.286 0 0 0-.578 1.102 1.313 1.313 0 0 0 .613 1.085l5.941 3.771c.212.134.458.204.709.202a1.303 1.303 0 0 0 1.313-1.313V4.09a1.32 1.32 0 0 0-.7-1.164Zm-.613 8.986L5.025 8.14l5.95-4.051v7.822Z',
            },
        })]);
    },
};
