import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPinAtHome',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--pinAtHome');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm14.694 7.125-.91.875s-.298-.289-.753-.7v1.575H11.72V6.154a27.329 27.329 0 0 0-3.5-2.713.534.534 0 0 0-.403 0 26.933 26.933 0 0 0-3.5 2.704v6.44h8.75v1.313H2.97V7.335c-.455.411-.744.691-.753.7l-.91-.91a42.972 42.972 0 0 1 5.819-4.813 1.75 1.75 0 0 1 1.75-.008 42.882 42.882 0 0 1 5.819 4.821ZM7.124 9.75a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm1.75.875a.875.875 0 1 0 1.751 0 .875.875 0 0 0-1.75 0Zm3.5-.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z',
            },
        })]);
    },
};
