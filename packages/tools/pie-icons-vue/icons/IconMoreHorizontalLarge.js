import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconMoreHorizontalLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--moreHorizontalLarge', 'IconMoreHorizontalLarge');
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
                d: 'M7.688 14.031a1.969 1.969 0 1 1 0 3.938 1.969 1.969 0 0 1 0-3.938ZM14.03 16a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Zm8.313 0a1.97 1.97 0 1 0 3.938 0 1.97 1.97 0 0 0-3.938 0Z',
            },
        })]);
    },
};
