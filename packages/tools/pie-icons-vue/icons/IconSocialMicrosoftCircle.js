import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialMicrosoftCircle',
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
            class: 'c-pieIcon c-pieIcon--microsoftCircle',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_2820_3490)',
            },
        }, [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Zm0 12.25A5.468 5.468 0 1 1 8 2.488a5.468 5.468 0 0 1 0 10.937Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M7.71 11H5V8.285h2.726L7.71 11Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M11 11H8.274V8.285H11V11Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M7.71 7.715H5V5h2.726L7.71 7.715Z',
            },
        }), h('path', {
            attrs: {
                fill: '#262626',
                d: 'M11 7.715H8.274V5H11v2.715Z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_2820_3490',
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
