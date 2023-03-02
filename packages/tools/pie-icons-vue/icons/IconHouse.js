import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouse',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--house',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_15_1251)',
            },
        }, [h('path', {
            attrs: {
                d: 'M15.044 8.07c-.158-.166-3.815-4.174-6.125-5.722a1.75 1.75 0 00-1.794.008C4.771 3.896 1.114 7.904 1 8.07l.971.875 1.042-1.102v6.055h10.062V7.85c.613.648 1.024 1.094 1.041 1.103l.928-.884zm-6.169 4.524v-1.969a.875.875 0 10-1.75 0v1.969H4.281V6.52a28.148 28.148 0 013.5-3.062.429.429 0 01.385 0 28.33 28.33 0 013.5 3.071v6.073l-2.791-.01z',
                fill: '#242E30',
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
