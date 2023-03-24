import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronRightLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronRightLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.2 26.124 20.7 16a.43.43 0 0 0 0-.096L10.2 5.876l1.234-1.251 10.5 10.063a1.917 1.917 0 0 1 0 2.624L11.416 27.376 10.2 26.124Z',
            },
        })]);
    },
};
