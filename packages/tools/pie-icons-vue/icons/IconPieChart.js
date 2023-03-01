import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPieChart',
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
            class: 'c-pieIcon c-pieIcon--pieChart'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 8.656H1.22V8A6.79 6.79 0 018 1.219h.656v7.437zM2.531 7.344h4.813V2.566a5.495 5.495 0 00-4.778 4.778h-.035zm7.412-5.346V3.38A5.031 5.031 0 018 13.031a5.075 5.075 0 01-4.62-3.054H1.998A6.326 6.326 0 0014.344 8a6.3 6.3 0 00-4.367-6.002h-.034z',
                fill: '#242E30'
            }
        })]);
    }
};
