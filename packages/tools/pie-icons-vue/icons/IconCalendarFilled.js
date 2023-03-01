import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarFilled',
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
            class: 'c-pieIcon c-pieIcon--calendarFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 003.281-3.281V2.969h-2.625zM5.261 7.78L4.605 6.47h6.842l-.656 1.312h-5.53z',
                fill: '#242E30',
            },
        })]);
    },
};
