import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconSocialMicrosoftCircleStaticLarge',
    props: {
        iconSize: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--microsoftCircleStaticLarge', 'IconSocialMicrosoftCircleStaticLarge');
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
                fill: '#242E30',
                d: 'M16 28.25a12.25 12.25 0 1 1 0-24.5 12.25 12.25 0 0 1 0 24.5ZM16 5.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M10 10h5.5v5.5H10V10Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M10 16.5h5.5V22H10v-5.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M16.5 10H22v5.5h-5.5V10Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M16.5 16.5H22V22h-5.5v-5.5Z',
            },
        })]);
    },
};
