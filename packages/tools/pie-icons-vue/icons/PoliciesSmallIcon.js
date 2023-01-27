import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PoliciesSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--policiesSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.75 1.09375H1.09375V13.7812H12.9062V5.25C12.9062 4.14769 12.4684 3.09054 11.6889 2.31109C10.9095 1.53164 9.85231 1.09375 8.75 1.09375ZM11.5062 4.59375H9.40625V2.49375C9.91667 2.61445 10.3834 2.87481 10.7543 3.24568C11.1252 3.61656 11.3855 4.08333 11.5062 4.59375ZM2.40625 12.4688V2.40625H8.09375V5.90625H11.5938V12.4688H2.40625ZM7 6.78125H4.375V5.46875H7V6.78125ZM4.375 8.09375H9.625V9.40625H4.375V8.09375Z'
            }
        })]);
    }
};
