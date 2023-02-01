import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBarcode',
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
            class: 'c-pieIcon c-pieIcon--barcode'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.1875 12.375H1.875V2.75H3.1875V12.375ZM13.6875 2.75H12.375V12.375H13.6875V2.75ZM11.0625 2.75H9.75V10.625H11.0625V2.75ZM8.4375 2.75H7.125V10.625H8.4375V2.75ZM5.8125 2.75H4.5V10.625H5.8125V2.75Z',
                fill: '#242E30'
            }
        })]);
    }
};
