import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCaretLeftFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--caretLeftFilled');
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
                d: 'M11.588 2.925a1.269 1.269 0 0 0-.613-.175 1.286 1.286 0 0 0-.744.227L4.29 7.064a1.286 1.286 0 0 0-.578 1.102 1.313 1.313 0 0 0 .613 1.085l5.941 3.771c.212.134.458.204.709.202a1.303 1.303 0 0 0 1.313-1.313V4.09a1.32 1.32 0 0 0-.7-1.164Z',
            },
        })]);
    },
};
