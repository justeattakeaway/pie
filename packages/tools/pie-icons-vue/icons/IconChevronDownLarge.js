import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDownLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronDownLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.876 9.875L16 20.375h.096l10.028-10.5 1.251 1.234-10.063 10.5a1.916 1.916 0 01-2.625 0L4.626 11.09l1.251-1.216z',
                fill: '#242E30'
            }
        })]);
    }
};
