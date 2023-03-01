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
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--barcode',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.188 12.375H1.875V2.75h1.313v9.625zm10.5-9.625h-1.313v9.625h1.313V2.75zm-2.626 0H9.75v7.875h1.313V2.75zm-2.624 0H7.125v7.875h1.313V2.75zm-2.626 0H4.5v7.875h1.313V2.75z',
                fill: '#242E30',
            },
        })]);
    },
};
