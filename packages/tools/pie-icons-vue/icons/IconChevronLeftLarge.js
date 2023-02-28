import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.804 5.876L11.304 16a.43.43 0 000 .096l10.5 10.063-1.234 1.216-10.5-10.063a1.917 1.917 0 010-2.625L20.587 4.626l1.217 1.251z',
                fill: '#242E30'
            }
        })]);
    }
};
