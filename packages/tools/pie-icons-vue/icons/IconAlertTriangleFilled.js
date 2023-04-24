import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconAlertTriangleFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--alertTriangleFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm14.694 10.625-5.408-8.68a1.505 1.505 0 0 0-2.572 0l-5.408 8.68a1.592 1.592 0 0 0 0 1.627 1.497 1.497 0 0 0 1.33.797h10.771a1.497 1.497 0 0 0 1.33-.796 1.592 1.592 0 0 0-.043-1.628Zm-6.694 0a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75ZM7.344 8V5.375h1.312V8H7.344Z',
            },
        })]);
    },
};
