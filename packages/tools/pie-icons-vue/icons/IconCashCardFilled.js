import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCashCardFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cashCardFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.605 4.771v-.875a1.426 1.426 0 0 0-1.418-1.417H2.532a1.426 1.426 0 0 0-1.426 1.417v.875h10.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 0 0 1.426 1.426h.753V6.75Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M4.596 8.061v5.793h10.08V8.06H4.596Zm5.04 3.973a1.077 1.077 0 1 1 0-2.154 1.077 1.077 0 0 1 0 2.154Z',
            },
        })]);
    },
};
