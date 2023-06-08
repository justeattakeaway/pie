import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretRightLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretRightLarge');
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
                d: 'm23.875 14.425-14-8.671A1.654 1.654 0 0 0 9 5.5a1.689 1.689 0 0 0-1.689 1.68v17.64a1.68 1.68 0 0 0 2.625 1.409l13.939-8.96a1.68 1.68 0 0 0 0-2.844ZM9.061 24.689V7.31L22.87 15.86 9.06 24.689Z',
            },
        })]);
    },
};
