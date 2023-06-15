import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconDollarLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--dollarLarge', 'IconDollarLarge');
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
                d: 'M16 3.75a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm0 22.75a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Zm4.148-8.085c0 1.96-1.444 3.045-3.43 3.273v1.863h-1.593v-1.863a5.05 5.05 0 0 1-3.5-1.654l1.12-1.173a4.086 4.086 0 0 0 3.176 1.287c1.313 0 2.468-.482 2.468-1.637s-1.252-1.444-2.853-1.872c-1.75-.455-3.5-1.252-3.5-3.273 0-1.846 1.33-2.94 3.273-3.15V8.344h1.566v1.872a4.83 4.83 0 0 1 3.22 1.636l-1.102 1.13a4.087 4.087 0 0 0-2.967-1.252c-1.094 0-2.213.446-2.213 1.54s1.233 1.488 2.852 1.908c1.619.42 3.483 1.198 3.483 3.237Z',
            },
        })]);
    },
};
