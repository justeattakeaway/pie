import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouseFilled',
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
            class: 'c-pieIcon c-pieIcon--houseFilled',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_2290_4013)',
            },
        }, [h('path', {
            attrs: {
                d: 'M8.875 2.348a1.75 1.75 0 00-1.75.008C4.771 3.905 1.114 7.904 1 8.08l.971.875s.42-.464 1.042-1.111v6.055h10.062V7.86a38.793 38.793 0 011.033 1.103l.97-.875a47.034 47.034 0 00-6.203-5.74zm-1.75 8.277a.875.875 0 011.75 0v1.969h-1.75v-1.969z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_2290_4013',
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
