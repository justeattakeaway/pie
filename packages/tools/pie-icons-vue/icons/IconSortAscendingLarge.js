import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSortAscendingLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--sortAscendingLarge');
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
                d: 'M18.03 10.75H2V9h16.765l-.735 1.75ZM2 23h10.867l.735-1.75H2V23Zm0-6.125h13.449l.735-1.75H2v1.75Zm25.891 3.141-4.016 4.078V12.5h-1.75v11.524l-4.016-4.008-1.234 1.234 4.926 4.935a1.75 1.75 0 0 0 2.398 0l4.926-4.935-1.234-1.234Z',
            },
        })]);
    },
};
