import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarDayLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--calendarDayLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 6.375v-1.75h-1.75v1.75h-8.75v-1.75h-1.75v1.75h-5.25v21H23A4.375 4.375 0 0027.375 23V6.375h-5.25zM25.625 23A2.625 2.625 0 0123 25.625H6.375v-17.5h3.5V9h1.75v-.875h8.75V9h1.75v-.875h3.5V23zM16 19.5h7v-7h-7v7zm1.75-5.25h3.5v3.5h-3.5v-3.5z',
                fill: '#242E30',
            },
        })]);
    },
};
