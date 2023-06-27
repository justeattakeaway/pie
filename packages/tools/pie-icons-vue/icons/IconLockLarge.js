import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconLockLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--lockLarge', 'IconLockLarge');
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
                d: 'M23.875 14.25h-1.75v-3.5a6.125 6.125 0 1 0-12.25 0v3.5h-1.75v-3.5a7.875 7.875 0 0 1 15.75 0v3.5Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16 29.125a18.209 18.209 0 0 1-11.043-3.692l-.332-.263V13.375h22.75V25.17l-.332.262A17.92 17.92 0 0 1 16 29.126Zm-9.625-4.804A16.625 16.625 0 0 0 16 27.375a16.267 16.267 0 0 0 9.625-3.054v-9.196H6.375v9.196Z',
            },
        }), h('path', {
            attrs: {
                d: 'M16.875 17.75h-1.75V23h1.75v-5.25Z',
            },
        })]);
    },
};
