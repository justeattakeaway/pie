import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPlaceholderLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--placeholderLarge');
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
                'fill-rule': 'evenodd',
                d: 'M.166 0h31.668L32 .166v31.668l-.166.166H.166L0 31.834V.166L.166 0Zm31.502 31.668V.33H.33v31.337h31.337ZM6.537 2h18.926A4.537 4.537 0 0 1 30 6.537v18.926A4.537 4.537 0 0 1 25.463 30H6.537A4.537 4.537 0 0 1 2 25.463V6.537A4.537 4.537 0 0 1 6.537 2Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
