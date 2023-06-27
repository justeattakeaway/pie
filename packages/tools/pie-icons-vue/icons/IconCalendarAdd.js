import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCalendarAdd',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--calendarAdd', 'IconCalendarAdd');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.281 2.969V1.875H9.97v1.094H6.03V1.875H4.72v1.094H2.094v10.937h8.531a3.282 3.282 0 0 0 3.281-3.281V2.969h-2.625Zm1.313 7.656a1.969 1.969 0 0 1-1.969 1.969H3.406V4.28H4.72v1.094H6.03V4.281H9.97v1.094h1.312V4.281h1.313v6.344Z',
            },
        }), h('path', {
            attrs: {
                d: 'm10.625 8.07-1.969.009V6.1H7.344V8.07H5.375v1.313l1.969-.018v1.986h1.312V9.382h1.969V8.07Z',
            },
        })]);
    },
};
