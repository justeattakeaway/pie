import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'BarcodeSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--barcodeSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.1875 11.375H0.875V1.75H2.1875V11.375ZM12.6875 1.75H11.375V11.375H12.6875V1.75ZM10.0625 1.75H8.75V9.625H10.0625V1.75ZM7.4375 1.75H6.125V9.625H7.4375V1.75ZM4.8125 1.75H3.5V9.625H4.8125V1.75Z'
            }
        })]);
    }
};
