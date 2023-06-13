import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconBarcode',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--barcode');
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
                d: 'M3.188 12.375H1.875V2.75h1.313v9.625Zm10.5-9.625h-1.313v9.625h1.313V2.75Zm-2.626 0H9.75v7.875h1.313V2.75Zm-2.624 0H7.125v7.875h1.313V2.75Zm-2.626 0H4.5v7.875h1.313V2.75Z',
            },
        })]);
    },
};
