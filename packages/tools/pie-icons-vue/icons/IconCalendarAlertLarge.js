import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCalendarAlertLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--calendarAlertLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.327 12.474h11.46l.873-1.746H9.454l.873 1.746Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M22.075 6.364V4.618h-1.746v1.746h-8.728V4.618H9.855v1.746H4.618v20.948h18.33a4.364 4.364 0 0 0 4.364-4.364V6.364h-5.237Zm3.491 16.584a2.618 2.618 0 0 1-2.618 2.618H6.364V8.11h3.491v.873h1.746V8.11h8.728v.873h1.746V8.11h3.491v14.838Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16.873 14.22h-1.746v5.236h1.746V14.22Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16 23.82a1.31 1.31 0 1 0 0-2.618 1.31 1.31 0 0 0 0 2.618Z',
            },
        })]);
    },
};
