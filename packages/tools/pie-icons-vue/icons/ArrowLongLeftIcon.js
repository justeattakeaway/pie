import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ArrowLongLeftIcon',
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
            class: 'c-pieIcon c-pieIcon--arrowLongLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.25 13.1249H4.375L11.375 6.12495L10.1675 4.88245L2.2925 12.7574C2.12979 12.92 2.00072 13.113 1.91265 13.3254C1.82458 13.5379 1.77925 13.7656 1.77925 13.9956C1.77925 14.2255 1.82458 14.4533 1.91265 14.6657C2.00072 14.8782 2.12979 15.0712 2.2925 15.2337L10.1675 23.1087L11.375 21.8749L4.375 14.8749H26.25V13.1249Z'
            }
        })]);
    }
};
