import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCashCard',
    props: {
        size: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cashCard', 'IconCashCard');
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
                d: 'M9.61 11.894a1.076 1.076 0 1 0 0-2.153 1.076 1.076 0 0 0 0 2.153Z',
            },
        }), h('path', {
            attrs: {
                d: 'M3.257 8.464h-.752a.105.105 0 0 1-.114-.105V5.952h7.875v.657h1.313V3.765a1.426 1.426 0 0 0-1.418-1.426H2.505a1.426 1.426 0 0 0-1.426 1.426v4.594A1.426 1.426 0 0 0 2.505 9.75h.752V8.464Zm-.875-4.699a.114.114 0 0 1 .123-.14h7.656a.104.104 0 0 1 .1.07.106.106 0 0 1 .005.044v.875H2.391l-.009-.849Z',
            },
        }), h('path', {
            attrs: {
                d: 'M15 14.055H4.229V7.589H15v6.466Zm-9.45-1.313h8.137V8.875H5.541l.009 3.867Z',
            },
        })]);
    },
};
