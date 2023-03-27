import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--caretLeftLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M23 5.5a1.689 1.689 0 0 0-.875.271l-14 8.96a1.68 1.68 0 0 0 0 2.844l14 8.671c.262.165.565.253.875.254a1.689 1.689 0 0 0 1.689-1.68V7.18A1.688 1.688 0 0 0 23 5.5Zm-.061 19.189L9.13 16.14 22.94 7.311V24.69Z',
            },
        })]);
    },
};
