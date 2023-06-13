import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconComponents',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--components');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7066_3730)',
            },
        }, [h('path', {
            attrs: {
                d: 'M11.903 5.025 8.928 8l2.975 2.975L14.878 8l-2.975-2.975ZM10.783 8l1.12-1.12L13.023 8l-1.12 1.12L10.783 8Z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.975 4.098 8 1.123 5.025 4.098 8 7.073l2.975-2.975ZM8 2.978l1.12 1.12L8 5.218l-1.12-1.12L8 2.978Z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.025 11.903 8 14.878l2.975-2.975L8 8.928l-2.975 2.975ZM8 13.023l-1.12-1.12L8 10.783l1.12 1.12L8 13.023Z',
            },
        }), h('path', {
            attrs: {
                d: 'M4.098 5.025 1.123 8l2.975 2.975L7.073 8 4.098 5.025ZM2.978 8l1.12-1.12L5.218 8l-1.12 1.12L2.978 8Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3730',
            },
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                transform: 'translate(1 1)',
            },
        })])])]);
    },
};
