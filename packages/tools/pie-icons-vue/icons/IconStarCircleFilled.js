import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconStarCircleFilled',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--starCircleFilled', 'IconStarCircleFilled');
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
                d: 'M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm1.627 9.117L8 9.48l-1.628.875.307-1.829-1.304-1.286 1.82-.263L8 5.322l.814 1.654 1.82.263L9.32 8.525l.306 1.811Z',
            },
        })]);
    },
};
