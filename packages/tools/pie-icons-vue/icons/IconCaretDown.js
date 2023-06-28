import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretDown',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretDown', 'IconCaretDown');
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
                d: 'M11.92 3.713H4.045a1.313 1.313 0 0 0-1.041 2.056l4.051 5.941a1.321 1.321 0 0 0 1.085.577 1.312 1.312 0 0 0 1.085-.612l3.763-5.897a1.25 1.25 0 0 0 .16-1.26 1.312 1.312 0 0 0-1.228-.805Zm-3.78 7.262-4.06-5.95h7.875l-3.815 5.95Z',
            },
        })]);
    },
};
