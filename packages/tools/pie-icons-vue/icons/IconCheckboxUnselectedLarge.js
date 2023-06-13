import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCheckboxUnselectedLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--checkboxUnselectedLarge');
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
                d: 'M24.75 27.375H7.25a2.633 2.633 0 0 1-2.625-2.625V7.25A2.633 2.633 0 0 1 7.25 4.625h17.5a2.633 2.633 0 0 1 2.625 2.625v17.5a2.633 2.633 0 0 1-2.625 2.625Zm-17.5-21a.878.878 0 0 0-.875.875v17.5c0 .481.394.875.875.875h17.5a.878.878 0 0 0 .875-.875V7.25a.878.878 0 0 0-.875-.875H7.25Z',
            },
        })]);
    },
};
