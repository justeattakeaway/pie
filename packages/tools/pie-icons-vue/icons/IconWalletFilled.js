import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconWalletFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--walletFilled');
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
                d: 'm9.75 3.065-.263-.735a1.531 1.531 0 0 0-1.995-.831L3.73 3.065h6.02Z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.397 11.325a.394.394 0 0 1-.394-.394v-3.15c.001-.075.025-.149.07-.21a.385.385 0 0 1 .298-.184h3.115V5.91a1.531 1.531 0 0 0-1.531-1.532h-8.97a1.549 1.549 0 0 0-.664.123 1.496 1.496 0 0 0-.761.875c-.071.169-.107.35-.105.534v7a1.54 1.54 0 0 0 1.53 1.531h8.97a1.54 1.54 0 0 0 1.53-1.531v-1.584h-3.088Z',
            },
        }), h('path', {
            attrs: {
                d: 'M11.316 8.7v1.304h3.019V8.7h-3.02Z',
            },
        })]);
    },
};
