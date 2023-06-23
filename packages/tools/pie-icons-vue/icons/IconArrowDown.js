import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconArrowDown',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--arrowDown', 'IconArrowDown');
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
                d: 'M7.25 1v11.65L3.49 8.89 2.43 10l4.69 4.68a1.239 1.239 0 0 0 1.76 0L13.57 10l-1.06-1.11-3.76 3.76V1h-1.5Z',
            },
        })]);
    },
};
