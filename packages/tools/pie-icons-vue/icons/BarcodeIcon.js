import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'BarcodeIcon',
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
            class: 'c-pieIcon c-pieIcon--barcode'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.125 6.125V21.875H4.375V6.125H6.125ZM21.875 6.125V21.875H23.625V6.125H21.875ZM17.5 19.25H19.25V6.125H17.5V19.25ZM13.125 19.25H14.875V6.125H13.125V19.25ZM8.75 19.25H10.5V6.125H8.75V19.25ZM26.25 2.625H21V4.375H25.375V8.75H27.125V3.5C27.125 3.26794 27.0328 3.04538 26.8687 2.88128C26.7046 2.71719 26.4821 2.625 26.25 2.625ZM0.875 3.5V8.75H2.625V4.375H7V2.625H1.75C1.51794 2.625 1.29538 2.71719 1.13128 2.88128C0.967187 3.04538 0.875 3.26794 0.875 3.5ZM2.625 19.25H0.875V24.5C0.875 24.7321 0.967187 24.9546 1.13128 25.1187C1.29538 25.2828 1.51794 25.375 1.75 25.375H7V23.625H2.625V19.25ZM25.375 23.625H21V25.375H26.25C26.4821 25.375 26.7046 25.2828 26.8687 25.1187C27.0328 24.9546 27.125 24.7321 27.125 24.5V19.25H25.375V23.625Z'
            }
        })]);
    }
};
