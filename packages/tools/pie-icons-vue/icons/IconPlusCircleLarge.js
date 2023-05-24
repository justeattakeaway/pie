import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPlusCircleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--plusCircleLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16.875 9.814h-1.75v5.311H9.814v1.75h5.311v5.311h1.75v-5.311h5.311v-1.75h-5.31V9.814Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M24.663 7.338A12.25 12.25 0 1 0 7.339 24.663 12.25 12.25 0 0 0 24.663 7.338Zm-1.234 16.09A10.5 10.5 0 1 1 8.605 8.555 10.5 10.5 0 0 1 23.43 23.43Z',
            },
        })]);
    },
};
