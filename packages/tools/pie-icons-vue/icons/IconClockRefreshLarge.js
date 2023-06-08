import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconClockRefreshLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--clockRefreshLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75A12.25 12.25 0 0 0 5.579 22.431l-2.625-.376-.245 1.75 4.812.691a.875.875 0 0 0 .989-.743l.682-4.813-1.75-.245-.402 2.852A10.378 10.378 0 0 1 5.5 16 10.5 10.5 0 1 1 16 26.5v1.75a12.25 12.25 0 1 0 0-24.5Z',
            },
        }), h('path', {
            attrs: {
                d: 'm20.296 20.253-5.678-3.404V9h1.75v6.851l4.83 2.896-.902 1.506Z',
            },
        })]);
    },
};
