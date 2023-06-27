import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHelpCircle',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--helpCircle', 'IconHelpCircle');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1 0 14.781 8 6.79 6.79 0 0 0 8 1.219Zm0 12.25A5.469 5.469 0 1 1 8 2.53a5.469 5.469 0 0 1 0 10.938Zm2.047-7.219a2.048 2.048 0 0 1-1.6 1.908l-.088.717h-.875l-.096-1.426c.822-.096 1.434-.49 1.434-1.138a.761.761 0 0 0-.874-.744 1.26 1.26 0 0 0-.876.316L6.32 5.12A2.24 2.24 0 0 1 8 4.5a1.811 1.811 0 0 1 2.047 1.75ZM8.77 10.625a.77.77 0 1 1-.77-.77.779.779 0 0 1 .77.77Z',
            },
        })]);
    },
};
