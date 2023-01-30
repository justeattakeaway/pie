import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronLeft',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--chevronLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.96 2.82L5.60503 8L11.0038 13.1975L10.1288 14.16L4.56378 8.79625C4.45185 8.68776 4.36285 8.55789 4.30208 8.41434C4.24131 8.2708 4.20999 8.1165 4.20999 7.96062C4.20999 7.80474 4.24131 7.65045 4.30208 7.50691C4.36285 7.36336 4.45185 7.23349 4.56378 7.125L10.0588 1.875L10.96 2.82Z',
                fill: '#242E30'
            }
        })]);
    }
};
