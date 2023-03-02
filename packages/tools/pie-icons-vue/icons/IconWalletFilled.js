import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWalletFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--walletFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.75 3.065l-.263-.735a1.531 1.531 0 00-1.995-.831L3.73 3.065h6.02z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10.397 11.325a.394.394 0 01-.394-.394v-3.15c.001-.075.025-.149.07-.21a.385.385 0 01.298-.184h3.115V5.91a1.531 1.531 0 00-1.531-1.532h-8.97a1.549 1.549 0 00-.664.123 1.496 1.496 0 00-.761.875c-.071.169-.107.35-.105.534v7a1.54 1.54 0 001.53 1.531h8.97a1.54 1.54 0 001.53-1.531v-1.584h-3.088z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M11.316 8.7v1.304h3.019V8.7h-3.02z',
                fill: '#242E30',
            },
        })]);
    },
};
