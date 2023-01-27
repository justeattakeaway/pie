import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CalendarFilledSmallIcon',
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
            class: 'c-pieIcon c-pieIcon--calendarFilledSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.2812 1.96875V0.875H8.96875V1.96875H5.03125V0.875H3.71875V1.96875H1.09375V12.9062H9.625C10.4952 12.9062 11.3298 12.5605 11.9452 11.9452C12.5605 11.3298 12.9062 10.4952 12.9062 9.625V1.96875H10.2812ZM4.26125 6.78125L3.605 5.46875H10.4475L9.79125 6.78125H4.26125Z'
            }
        })]);
    }
};
