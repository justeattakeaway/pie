import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialYoutubeCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--youtubeCircleFilled',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1611_662)',
            },
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M4.237 2.315A6.781 6.781 0 018 1.175 6.79 6.79 0 0114.78 8 6.781 6.781 0 114.237 2.315zm6.638 4.356a.76.76 0 00-.53-.543C9.875 6 8 6 8 6s-1.876 0-2.344.128a.76.76 0 00-.53.543C5 7.15 5 8.148 5 8.148s0 1 .125 1.478a.76.76 0 00.53.543c.469.128 2.345.128 2.345.128s1.876 0 2.344-.128a.76.76 0 00.53-.543C11 9.147 11 8.148 11 8.148s0-.998-.125-1.477zM7.386 9.209l1.569-.907-1.569-.907V9.21z',
                fill: '#242E30',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1611_662',
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
