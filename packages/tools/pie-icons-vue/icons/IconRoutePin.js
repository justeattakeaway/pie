import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRoutePin',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--routePin', 'IconRoutePin');
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
                d: 'M13.031 2.575a4.646 4.646 0 0 0-6.562 0 4.655 4.655 0 0 0 0 6.571l3.281 3.281 3.281-3.28a4.655 4.655 0 0 0 0-6.572Zm-.927 5.644L9.75 10.573 7.396 8.218a3.325 3.325 0 1 1 4.708 0Zm-1.076-2.442a1.277 1.277 0 1 1-2.555 0 1.277 1.277 0 0 1 2.554 0Zm-6.738 7.7 6.344.053v1.313L4.29 14.79a1.523 1.523 0 0 1-1.295-2.319l1.041-1.75a.21.21 0 0 0 0-.219.21.21 0 0 0-.192-.113H1V9.094h2.826a1.522 1.522 0 0 1 1.313 2.319l-1.042 1.75a.219.219 0 0 0 .193.332v-.018Z',
            },
        })]);
    },
};
