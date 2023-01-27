import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PoundSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--poundSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.585 10.885C11.27 12.1625 10.255 12.6875 8.89 12.6875H2.625V11.2175H3.745V7.71754H2.625V6.35254H3.745V4.83004C3.745 2.50254 5.04 1.10254 7.4375 1.10254C8.00638 1.07136 8.57521 1.16483 9.1042 1.37643C9.63318 1.58802 10.1096 1.91263 10.5 2.32754L9.45 3.39504C9.19277 3.12214 8.88005 2.90753 8.5329 2.76565C8.18576 2.62377 7.81224 2.55793 7.4375 2.57254C6.16 2.57254 5.39 3.22004 5.39 4.76004V6.35254H8.9775V7.71754H5.39V11.2175H8.89C9.16567 11.2526 9.44488 11.1894 9.67853 11.0389C9.91219 10.8885 10.0853 10.6605 10.1675 10.395L11.585 10.885Z'
            }
        })]);
    }
};
