import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCreditCard',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--creditCard');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M3.625 9.094H6.25v1.312H3.625V9.094ZM14.781 4.5v7a1.54 1.54 0 0 1-1.531 1.531H2.75A1.54 1.54 0 0 1 1.219 11.5v-7A1.54 1.54 0 0 1 2.75 2.969h10.5A1.54 1.54 0 0 1 14.781 4.5Zm-12.25 0v1.094H13.47V4.5a.219.219 0 0 0-.219-.219H2.75a.219.219 0 0 0-.219.219Zm10.938 7V6.906H2.53V11.5a.219.219 0 0 0 .219.219h10.5a.219.219 0 0 0 .219-.219Z',
            },
        })]);
    },
};
