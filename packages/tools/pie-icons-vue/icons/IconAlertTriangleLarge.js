import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconAlertTriangleLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--alertTriangleLarge');
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
                d: 'M16.875 10.75h-1.75v6.125h1.75V10.75Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16 21.906a1.531 1.531 0 1 0 0-3.062 1.531 1.531 0 0 0 0 3.062Z',
            },
        }), h('path', {
            attrs: {
                d: 'M26.5 25.625h-21a2.415 2.415 0 0 1-2.135-1.277 2.572 2.572 0 0 1 .07-2.625l10.5-16.818A2.433 2.433 0 0 1 16 3.75a2.433 2.433 0 0 1 2.065 1.164l10.5 16.817a2.574 2.574 0 0 1 .07 2.625 2.415 2.415 0 0 1-2.135 1.269ZM15.414 5.841 4.914 22.66a.822.822 0 0 0 0 .875.691.691 0 0 0 .586.341h21a.691.691 0 0 0 .604-.376.822.822 0 0 0 0-.875l-10.5-16.818A.691.691 0 0 0 16 5.5a.691.691 0 0 0-.586.341Z',
            },
        })]);
    },
};
