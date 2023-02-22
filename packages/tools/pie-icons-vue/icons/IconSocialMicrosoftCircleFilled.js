import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialMicrosoftCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--microsoftCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_2820_3487)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.71 11H5V8.285h2.726L7.71 11z',
                fill: '#fff'
            }
        }), h('path', {
            attrs: {
                d: 'M11 11H8.274V8.285H11V11z',
                fill: '#fff'
            }
        }), h('path', {
            attrs: {
                d: 'M7.71 7.715H5V5h2.726L7.71 7.715z',
                fill: '#fff'
            }
        }), h('path', {
            attrs: {
                d: 'M11 7.715H8.274V5H11v2.715z',
                fill: '#fff'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_2820_3487'
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
