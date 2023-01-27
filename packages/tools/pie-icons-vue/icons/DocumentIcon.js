import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DocumentIcon',
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
            class: 'c-pieIcon c-pieIcon--document'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.75 2.09375H2.09375V14.7812H13.9062V6.25C13.9062 5.14769 13.4684 4.09054 12.6889 3.31109C11.9095 2.53164 10.8523 2.09375 9.75 2.09375ZM12.5062 5.59375H10.4062V3.49375C10.9167 3.61445 11.3834 3.87481 11.7543 4.24568C12.1252 4.61656 12.3855 5.08333 12.5062 5.59375ZM3.40625 13.4688V3.40625H9.09375V6.90625H12.5938V13.4688H3.40625ZM8 7.78125H5.375V6.46875H8V7.78125ZM5.375 9.09375H10.625V10.4062H5.375V9.09375Z',
                fill: '#242E30'
            }
        })]);
    }
};
