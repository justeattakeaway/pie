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
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--voucher'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.2137 8C9.71299 8.19801 9.25817 8.49663 8.8774 8.8774C8.49663 9.25817 8.19801 9.71299 8 10.2137C7.80199 9.71299 7.50337 9.25817 7.1226 8.8774C6.74183 8.49663 6.28701 8.19801 5.78625 8C6.28701 7.80199 6.74183 7.50337 7.1226 7.1226C7.50337 6.74183 7.80199 6.28701 8 5.78625C8.19801 6.28701 8.49663 6.74183 8.8774 7.1226C9.25817 7.50337 9.71299 7.80199 10.2137 8ZM14.7812 4.57875V11.4212L13.1712 13.0312H2.82875L1.21875 11.4212V4.57875L2.82875 2.96875H13.1712L14.7812 4.57875ZM13.4688 5.13L12.5938 4.255H3.38L2.505 5.13V10.87L3.38 11.745H12.62L13.495 10.87L13.4688 5.13Z',
                fill: '#242E30'
            }
        })]);
    }
};
