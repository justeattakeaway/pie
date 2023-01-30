import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKosher',
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
            class: 'c-pieIcon c-pieIcon--kosher'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.9375 8.0525L13.9238 4.66625H9.98625L8 1.21875L6.01375 4.66625H2.07625L4.0625 8.0525L2.1375 11.3862H6.01375L8 14.7725L9.98625 11.3862H13.8625L11.9375 8.0525ZM12.0163 5.76L11.3163 6.95875L10.625 5.76H12.0163ZM10.6775 8.04375L9.35625 10.2925H6.64375L5.3225 8.04375L6.64375 5.76H9.35625L10.6775 8.04375ZM8 3.40625L8.72625 4.66625H7.27375L8 3.40625ZM3.98375 5.76H5.375L4.675 6.95875L3.98375 5.76ZM3.98375 10.2925L4.6925 9.1375L5.375 10.2925H3.98375ZM8 12.6025L7.2825 11.3862H8.7175L8 12.6025ZM11.3075 9.1025L11.9725 10.2575H10.625L11.3075 9.1025Z',
                fill: '#242E30'
            }
        })]);
    }
};
