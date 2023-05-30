import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconCutleryFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--cutleryFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
                role: 'presentation',
                focusable: 'false',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                fill: '#242E30',
                'clip-path': 'url(#prefix__clip0_6127_3639)',
            },
        }, [h('path', {
            attrs: {
                d: 'm4.719 7.134 1.312-.018-.07-5.591-1.303.63.06 4.979Z',
            },
        }), h('path', {
            attrs: {
                d: 'm11.133 11.701 2.135.333c-.018 1.216-.123 2.196-.184 2.966h1.321a91.89 91.89 0 0 0 .166-12.031c-.087-.963-.323-1.479-.778-1.672a1.137 1.137 0 0 0-1.357.43 13.869 13.869 0 0 0-2.24 8.75 1.217 1.217 0 0 0 .937 1.224Z',
            },
        }), h('path', {
            attrs: {
                d: 'm3.336 1.525-1.312.63v4.821a3.08 3.08 0 0 0 2.695 2.888V15H6.03V9.82a3.045 3.045 0 0 0 2.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.391 1.636-1.969 1.636-.577 0-1.969-.472-1.969-1.636V1.525Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_6127_3639',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
