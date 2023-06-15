import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconUserHighlightLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--userHighlightLarge', 'IconUserHighlightLarge');
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
                d: 'M16.875 9h-1.75V3.75h1.75V9ZM23.7 7.775l-1.4-1.05-2.625 3.5 1.4 1.05 2.625-3.5Zm-11.375 2.45L9.7 6.725l-1.4 1.05 2.625 3.5 1.4-1.05ZM11.188 16A4.813 4.813 0 1 1 16 20.813 4.821 4.821 0 0 1 11.187 16Zm1.75 0a3.063 3.063 0 1 0 6.125 0 3.063 3.063 0 0 0-6.125 0Zm11.165 9.879a6.249 6.249 0 0 0-5.924-3.754h-4.375a6.248 6.248 0 0 0-5.924 3.754l-.892 2.371H8.86l.674-1.75a4.498 4.498 0 0 1 4.287-2.625h4.375a4.498 4.498 0 0 1 4.288 2.625l.673 1.75h1.882l-.936-2.371Z',
            },
        })]);
    },
};
