import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendar',
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
            class: 'c-pieIcon c-pieIcon--calendar',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.447 6.469H4.614L5.27 7.78h5.521l.656-1.312z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 003.281-3.281V2.969h-2.625zm1.313 7.656a1.969 1.969 0 01-1.969 1.969H3.406V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v6.344z',
                fill: '#242E30',
            },
        })]);
    },
};
