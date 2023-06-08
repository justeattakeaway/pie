import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCloseCircleFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--closeCircleFilledLarge');
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
                d: 'M16.25 4a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm4.996 16.004-1.242 1.242-3.754-3.762-3.754 3.762-1.242-1.242 3.762-3.754-3.762-3.754 1.242-1.242 3.754 3.762 3.754-3.762 1.242 1.242-3.762 3.754 3.762 3.754Z',
            },
        })]);
    },
};
