import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialYoutubeCircle',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--youtubeCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_889_625)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm0 12.25A5.469 5.469 0 118 2.487a5.469 5.469 0 010 10.938z'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M10.344 6.128a.76.76 0 01.53.543C11 7.15 11 8.148 11 8.148s0 1-.125 1.478a.76.76 0 01-.53.543c-.469.128-2.345.128-2.345.128s-1.876 0-2.344-.128a.76.76 0 01-.53-.543C5 9.147 5 8.148 5 8.148s0-.998.125-1.477a.76.76 0 01.53-.543C6.125 6 8 6 8 6s1.876 0 2.344.128zm-1.39 2.174l-1.568.907V7.395l1.569.907z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_889_625'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
