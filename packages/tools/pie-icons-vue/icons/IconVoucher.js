import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconVoucher',
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
            class: 'c-pieIcon c-pieIcon--voucher',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.214 8A3.938 3.938 0 0 0 8 10.214 3.938 3.938 0 0 0 5.786 8 3.937 3.937 0 0 0 8 5.786 3.937 3.937 0 0 0 10.214 8Zm4.567-3.421v6.842l-1.61 1.61H2.83l-1.61-1.61V4.58l1.61-1.61H13.17l1.61 1.61Zm-1.312.551-.875-.875H3.38l-.875.875v5.74l.875.875h9.24l.875-.875-.026-5.74Z',
            },
        })]);
    },
};
