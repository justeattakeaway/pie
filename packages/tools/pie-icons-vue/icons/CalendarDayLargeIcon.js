import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CalendarDayLargeIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--calendarDayLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 6.375V4.625H20.375V6.375H11.625V4.625H9.875V6.375H4.625V27.375H23C24.1603 27.375 25.2731 26.9141 26.0936 26.0936C26.9141 25.2731 27.375 24.1603 27.375 23V6.375H22.125ZM25.625 23C25.625 23.6962 25.3484 24.3639 24.8562 24.8562C24.3639 25.3484 23.6962 25.625 23 25.625H6.375V8.125H9.875V9H11.625V8.125H20.375V9H22.125V8.125H25.625V23ZM16 19.5H23V12.5H16V19.5ZM17.75 14.25H21.25V17.75H17.75V14.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
