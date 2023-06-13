import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconVoucherFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--voucherFilled');
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
                'fill-rule': 'evenodd',
                d: 'M14.781 4.579v6.842l-1.61 1.61H2.83l-1.61-1.61V4.58l1.61-1.61H13.17l1.61 1.61ZM10.214 8A3.938 3.938 0 0 0 8 10.214 3.937 3.937 0 0 0 5.786 8 3.938 3.938 0 0 0 8 5.786 3.938 3.938 0 0 0 10.214 8Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
