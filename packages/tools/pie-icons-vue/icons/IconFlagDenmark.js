import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFlagDenmark',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--denmark');
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
                fill: '#EEE',
                d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z',
            },
        }), h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M6.476 7.087h8.463A7 7 0 0 0 8 1a7.027 7.027 0 0 0-1.523.164v5.923Zm-1.823 0V1.85A7.005 7.005 0 0 0 1.06 7.087h3.593Zm0 1.826H1.06a7.005 7.005 0 0 0 3.593 5.236V8.913Zm1.823 0v5.92a7 7 0 0 0 8.463-5.92H6.476Z',
            },
        })]);
    },
};
