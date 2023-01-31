import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChartIncreaseLarge',
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
            class: 'c-pieIcon c-pieIcon--chartIncreaseLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.375 23H8.125V27.375H6.375V23ZM18.625 27.375H20.375V18.625H18.625V27.375ZM12.5 27.375H14.25V21.25H12.5V27.375ZM24.75 27.375H26.5V15.125H24.75V27.375ZM25.625 2.875H18.625V4.625H23.77C17.015 12.71 12.2288 14.25 5.5 14.25V16C13.5062 16 18.555 13.4888 24.75 6.2V10.75H26.5V3.75C26.5 3.51794 26.4078 3.29538 26.2437 3.13128C26.0796 2.96719 25.8571 2.875 25.625 2.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
