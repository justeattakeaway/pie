import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPieChartLarge',
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
            class: 'c-pieIcon c-pieIcon--pieChartLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 2.875H16A13.125 13.125 0 002.875 16v.875h14v-14zm-1.75 12.25h-10.5a11.375 11.375 0 0110.5-10.5v10.5zm.07 11.375l-.14 1.75a12.294 12.294 0 01-11.016-9.625h1.793a10.552 10.552 0 009.363 7.875zM28.25 16a12.294 12.294 0 01-11.305 12.25l-.14-1.75a10.5 10.5 0 001.82-20.668V4.03A12.25 12.25 0 0128.25 16z',
                fill: '#242E30',
            },
        })]);
    },
};
