import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconOrderLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--orderLarge', 'IconOrderLarge');
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
                d: 'M23.875 3.75H8.125A2.625 2.625 0 0 0 5.5 6.375v21.927l3.561-1.898L12.5 28.38l3.5-1.968 3.5 1.968 3.43-1.977 3.57 1.898V6.375a2.625 2.625 0 0 0-2.625-2.625Zm.875 21.639-.989-.525a1.751 1.751 0 0 0-1.688 0l-2.625 1.479-2.625-1.488a1.75 1.75 0 0 0-1.75 0l-2.626 1.488-2.52-1.453a1.75 1.75 0 0 0-1.688 0l-.989.499V6.375a.875.875 0 0 1 .875-.875h15.75a.875.875 0 0 1 .875.875v19.014ZM10.75 16h10.5v1.75h-10.5V16Zm1.75 3.5h7v1.75h-7V19.5Zm2.844-5.766-2.844-2.8 1.242-1.243 1.567 1.575 3.754-3.762 1.312 1.242-5.031 4.988Z',
            },
        })]);
    },
};
