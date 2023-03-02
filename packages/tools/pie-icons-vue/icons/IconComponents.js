import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconComponents',
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
            class: 'c-pieIcon c-pieIcon--components',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_7066_3730)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M11.903 5.025L8.928 8l2.975 2.975L14.878 8l-2.975-2.975zM10.783 8l1.12-1.12L13.023 8l-1.12 1.12L10.783 8z',
            },
        }), h('path', {
            attrs: {
                d: 'M10.975 4.098L8 1.123 5.025 4.098 8 7.073l2.975-2.975zM8 2.978l1.12 1.12L8 5.218l-1.12-1.12L8 2.978z',
            },
        }), h('path', {
            attrs: {
                d: 'M5.025 11.903L8 14.878l2.975-2.975L8 8.928l-2.975 2.975zM8 13.023l-1.12-1.12L8 10.783l1.12 1.12L8 13.023z',
            },
        }), h('path', {
            attrs: {
                d: 'M4.098 5.025L1.123 8l2.975 2.975L7.073 8 4.098 5.025zM2.978 8l1.12-1.12L5.218 8l-1.12 1.12L2.978 8z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_7066_3730',
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
