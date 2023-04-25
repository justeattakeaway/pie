import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCreditCardFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--creditCardFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M1.219 6.906V11.5a1.54 1.54 0 0 0 1.531 1.531h10.5a1.54 1.54 0 0 0 1.531-1.531V6.906H1.22Zm5.031 3.5H3.625V9.094H6.25v1.312Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.781 5.594V4.5a1.54 1.54 0 0 0-1.531-1.531H2.75A1.54 1.54 0 0 0 1.219 4.5v1.094H14.78Z',
            },
        })]);
    },
};
