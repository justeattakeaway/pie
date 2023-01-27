import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CalendarErrorIcon',
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
            class: 'c-pieIcon c-pieIcon--calendarError'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.2812 2.96875V1.875H9.96875V2.96875H6.03125V1.875H4.71875V2.96875H2.09375V13.9062H10.625C11.4952 13.9062 12.3298 13.5605 12.9452 12.9452C13.5605 12.3298 13.9062 11.4952 13.9062 10.625V2.96875H11.2812ZM12.5938 10.625C12.5938 11.1471 12.3863 11.6479 12.0171 12.0171C11.6479 12.3863 11.1471 12.5938 10.625 12.5938H3.40625V4.28125H4.71875V5.375H6.03125V4.28125H9.96875V5.375H11.2812V4.28125H12.5938V10.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.39141 11.1977L10.3195 10.2696L6.60717 6.55734L5.67909 7.48542L9.39141 11.1977Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.3227 7.4836L9.39465 6.55552L5.68234 10.2678L6.61042 11.1959L10.3227 7.4836Z',
                fill: '#242E30'
            }
        })]);
    }
};
