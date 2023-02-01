import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOffice',
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
            class: 'c-pieIcon c-pieIcon--office'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.09375H3.625C3.2196 2.09605 2.83145 2.25811 2.54478 2.54478C2.25811 2.83145 2.09605 3.2196 2.09375 3.625V13.9062H13.9062V3.625C13.904 3.2196 13.7419 2.83145 13.4552 2.54478C13.1686 2.25811 12.7804 2.09605 12.375 2.09375ZM12.5938 12.5938H8.65625V10.625H7.34375V12.5938H3.40625V3.625C3.40625 3.56698 3.4293 3.51134 3.47032 3.47032C3.51134 3.4293 3.56698 3.40625 3.625 3.40625H12.375C12.433 3.40625 12.4887 3.4293 12.5297 3.47032C12.5707 3.51134 12.5938 3.56698 12.5938 3.625V12.5938ZM8.875 5.59375H10.625V6.90625H8.875V5.59375ZM5.375 5.59375H7.125V6.90625H5.375V5.59375ZM8.875 8.21875H10.625V9.53125H8.875V8.21875ZM5.375 8.21875H7.125V9.53125H5.375V8.21875Z',
                fill: '#242E30'
            }
        })]);
    }
};
