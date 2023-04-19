import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOffer',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--offer');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M7.676 14.939 1.087 8.35l6.38-6.388a1.409 1.409 0 0 1 1.12-.402l5.337.534.533 5.346a1.373 1.373 0 0 1-.393 1.111L7.676 14.94ZM2.942 8.35l4.734 4.734 5.46-5.46-.411-4.332-4.27-.42L2.942 8.35Zm7.683-3.85a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z',
            },
        })]);
    },
};
