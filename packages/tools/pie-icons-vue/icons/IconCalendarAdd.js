import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarAdd',
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
            class: 'c-pieIcon c-pieIcon--calendarAdd'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.2812 2.96875V1.875H9.96875V2.96875H6.03125V1.875H4.71875V2.96875H2.09375V13.9062H10.625C11.4952 13.9062 12.3298 13.5605 12.9452 12.9452C13.5605 12.3298 13.9062 11.4952 13.9062 10.625V2.96875H11.2812ZM12.5938 10.625C12.5938 11.1471 12.3863 11.6479 12.0171 12.0171C11.6479 12.3863 11.1471 12.5938 10.625 12.5938H3.40625V4.28125H4.71875V5.375H6.03125V4.28125H9.96875V5.375H11.2812V4.28125H12.5938V10.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.625 8.07L8.65625 8.07875V6.10125H7.34375V8.07H5.375V9.3825L7.34375 9.365V11.3512H8.65625V9.3825H10.625V8.07Z',
                fill: '#242E30'
            }
        })]);
    }
};
