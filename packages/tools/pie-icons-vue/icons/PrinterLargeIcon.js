import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PrinterLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--printerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.125 13.375C29.125 12.6788 28.8484 12.0111 28.3562 11.5188C27.8639 11.0266 27.1962 10.75 26.5 10.75H23V3.75H9V10.75H5.5C4.80381 10.75 4.13613 11.0266 3.64384 11.5188C3.15156 12.0111 2.875 12.6788 2.875 13.375V24.75H9V28.25H23V24.75H29.125V13.375ZM10.75 5.5H21.25V10.75H10.75V5.5ZM21.25 26.5H10.75V20.375H21.25V26.5ZM27.375 23H23V20.375H24.75V18.625H7.25V20.375H9V23H4.625V13.375C4.625 13.1429 4.71719 12.9204 4.88128 12.7563C5.04538 12.5922 5.26794 12.5 5.5 12.5H26.5C26.7321 12.5 26.9546 12.5922 27.1187 12.7563C27.2828 12.9204 27.375 13.1429 27.375 13.375V23ZM21.25 15.125H24.75V16.875H21.25V15.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
