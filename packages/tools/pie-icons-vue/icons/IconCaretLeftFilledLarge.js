import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretLeftFilledLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretLeftFilledLarge');
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
                d: 'M23 5.5a1.689 1.689 0 0 0-.875.271l-14 8.96a1.68 1.68 0 0 0 0 2.844l14 8.671c.262.165.565.253.875.254a1.689 1.689 0 0 0 1.689-1.68V7.18A1.688 1.688 0 0 0 23 5.5Z',
            },
        })]);
    },
};
