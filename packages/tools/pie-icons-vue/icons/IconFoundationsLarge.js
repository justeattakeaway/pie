import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFoundationsLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--foundationsLarge');
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
                d: 'M4.625 27.375h10.509V16.866H4.625v10.509Zm1.75-8.759h7.009v7.009H6.375v-7.009Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16.866 16.892v10.51h10.509v-10.51H16.866Zm8.759 8.76h-7.009v-7.01h7.009v7.01Z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.75 4.625v10.509h10.509V4.625H10.75Zm1.75 8.759V6.375h7.009v7.009H12.5Z',
            },
        })]);
    },
};
