import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarErrorLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarErrorLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.327 12.509h11.46l.873-1.746H9.454l.873 1.746z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M22.075 6.364V4.618h-1.746v1.746h-8.728V4.618H9.855v1.746H4.618v20.948h18.33a4.364 4.364 0 004.364-4.364V6.364h-5.237zm3.491 16.584a2.618 2.618 0 01-2.618 2.618H6.364V8.11h3.491v.873h1.746V8.11h8.728v.873h1.746V8.11h3.491v14.838z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M19.77 16.244l-1.23-1.239-2.776 2.775-2.775-2.775-1.24 1.24 2.776 2.775-2.776 2.776 1.24 1.23 2.775-2.775 2.776 2.775 1.23-1.23-2.775-2.776 2.775-2.776z',
                fill: '#242E30',
            },
        })]);
    },
};
