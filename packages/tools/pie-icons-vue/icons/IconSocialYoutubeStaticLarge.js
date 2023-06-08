import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialYoutubeStaticLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--youtubeStaticLarge');
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
                fill: 'red',
                d: 'M27.9 9.97a3.134 3.134 0 0 0-2.186-2.236c-1.928-.529-9.662-.529-9.662-.529s-7.733 0-9.662.529A3.133 3.133 0 0 0 4.204 9.97c-.517 1.973-.517 6.09-.517 6.09s0 4.116.517 6.09a3.134 3.134 0 0 0 2.186 2.236c1.929.529 9.662.529 9.662.529s7.734 0 9.662-.529a3.134 3.134 0 0 0 2.187-2.237c.516-1.973.516-6.09.516-6.09s0-4.116-.516-6.09Z',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                d: 'm13.523 19.798 6.464-3.738-6.464-3.737v7.475Z',
            },
        })]);
    },
};
