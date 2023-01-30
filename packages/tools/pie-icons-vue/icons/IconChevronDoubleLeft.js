import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleLeft',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.25003 2.82L2.89503 8L8.29378 13.1975L7.41878 14.16L1.85378 8.79625C1.74186 8.68776 1.65286 8.55789 1.59209 8.41434C1.53132 8.2708 1.5 8.1165 1.5 7.96062C1.5 7.80474 1.53132 7.65045 1.59209 7.50691C1.65286 7.36336 1.74186 7.23349 1.85378 7.125L7.34878 1.875L8.25003 2.82Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.22 2.82L7.86503 8L13.2638 13.1975L12.3888 14.16L6.82378 8.79625C6.71185 8.68776 6.62286 8.55789 6.56209 8.41434C6.50132 8.2708 6.47 8.1165 6.47 7.96062C6.47 7.80474 6.50132 7.65045 6.56209 7.50691C6.62286 7.36336 6.71185 7.23349 6.82378 7.125L12.3188 1.875L13.22 2.82Z',
                fill: '#242E30'
            }
        })]);
    }
};
