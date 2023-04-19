import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconHouse',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--house');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_1251)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15.044 8.07c-.158-.166-3.815-4.174-6.125-5.722a1.75 1.75 0 0 0-1.794.008C4.771 3.896 1.114 7.904 1 8.07l.971.875 1.042-1.102v6.055h10.062V7.85c.613.648 1.024 1.094 1.041 1.103l.928-.884Zm-6.169 4.524v-1.969a.875.875 0 1 0-1.75 0v1.969H4.281V6.52a28.148 28.148 0 0 1 3.5-3.062.429.429 0 0 1 .385 0 28.33 28.33 0 0 1 3.5 3.071v6.073l-2.791-.01Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_15_1251',
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
