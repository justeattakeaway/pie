import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PrinterIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--printer'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.125 11.375C27.125 10.6788 26.8484 10.0111 26.3562 9.51884C25.8639 9.02656 25.1962 8.75 24.5 8.75H21V1.75H7V8.75H3.5C2.80381 8.75 2.13613 9.02656 1.64384 9.51884C1.15156 10.0111 0.875 10.6788 0.875 11.375V22.75H7V26.25H21V22.75H27.125V11.375ZM8.75 3.5H19.25V8.75H8.75V3.5ZM19.25 24.5H8.75V18.375H19.25V24.5ZM25.375 21H21V18.375H22.75V16.625H5.25V18.375H7V21H2.625V11.375C2.625 11.1429 2.71719 10.9204 2.88128 10.7563C3.04538 10.5922 3.26794 10.5 3.5 10.5H24.5C24.7321 10.5 24.9546 10.5922 25.1187 10.7563C25.2828 10.9204 25.375 11.1429 25.375 11.375V21ZM19.25 13.125H22.75V14.875H19.25V13.125Z'
            }
        })]);
    }
};
