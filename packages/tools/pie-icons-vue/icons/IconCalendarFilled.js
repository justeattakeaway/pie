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
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--calendarFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.2812 2.96875V1.875H9.96875V2.96875H6.03125V1.875H4.71875V2.96875H2.09375V13.9062H10.625C11.4952 13.9062 12.3298 13.5605 12.9452 12.9452C13.5605 12.3298 13.9062 11.4952 13.9062 10.625V2.96875H11.2812ZM5.26125 7.78125L4.605 6.46875H11.4475L10.7912 7.78125H5.26125Z',
                fill: '#242E30'
            }
        })]);
    }
};
