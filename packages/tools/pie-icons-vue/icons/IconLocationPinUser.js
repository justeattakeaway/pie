import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLocationPinUser',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--locationPinUser');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 4.08a1.54 1.54 0 1 0 0 3.08 1.54 1.54 0 0 0 0-3.08Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.658 3.187a5.136 5.136 0 0 0-7.315 0 5.25 5.25 0 0 0 0 7.377L8 14.265l3.658-3.701a5.25 5.25 0 0 0 0-7.377Zm-2.46 8.164L8 12.56 5.375 9.934a2.012 2.012 0 0 1 1.47-.613h2.126a2.004 2.004 0 0 1 1.549.718L9.199 11.35Zm2.118-2.257a3.238 3.238 0 0 0-2.345-.998H6.845a3.246 3.246 0 0 0-2.231.875A4.078 4.078 0 0 1 5.19 4.02a3.946 3.946 0 0 1 5.618 0 4.095 4.095 0 0 1 .507 5.075Z',
            },
        })]);
    },
};
