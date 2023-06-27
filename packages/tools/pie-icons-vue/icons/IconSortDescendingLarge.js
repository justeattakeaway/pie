import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSortDescendingLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sortDescendingLarge', 'IconSortDescendingLarge');
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
                d: 'M18.033 22.91H2v1.75h16.768l-.735-1.75ZM2 10.66h10.87l.735 1.75H2v-1.75Zm0 6.125h13.451l.735 1.75H2v-1.75Zm25.896-3.141-4.017-4.078V21.16h-1.75V9.636l-4.017 4.008-1.234-1.234 4.927-4.935a1.75 1.75 0 0 1 2.398 0l4.927 4.935-1.234 1.234Z',
            },
        })]);
    },
};
