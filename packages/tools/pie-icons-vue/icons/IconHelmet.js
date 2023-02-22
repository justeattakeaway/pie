import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHelmet',
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
            class: 'c-pieIcon c-pieIcon--helmet'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_18_392)'
            }
        }, [h('path', {
            attrs: {
                d: 'M11.649 7.641a4.182 4.182 0 011.33-.577A12.837 12.837 0 0115 6.906l-.752-1.286-.683.052a6.44 6.44 0 00-6.694-3.5 6.685 6.685 0 00-5.617 6.003 7 7 0 001.155 4.602l.21.29h.341a5.101 5.101 0 013.089.944 3.876 3.876 0 002.144.77 3.167 3.167 0 002.625-1.12c.796-1.006.936-2.625.402-4.847a1.102 1.102 0 01.429-1.173zm-.735-1.094a2.432 2.432 0 00-.989 2.573c.429 1.75.376 3.063-.157 3.736a1.899 1.899 0 01-1.575.613A2.669 2.669 0 016.74 12.9a6.273 6.273 0 00-3.421-1.138 5.565 5.565 0 01-.761-3.5A5.381 5.381 0 017.01 3.46a5.171 5.171 0 015.163 2.45 6.054 6.054 0 00-1.26.638zM8.875 11.5a.875.875 0 11-1.75 0 .875.875 0 011.75 0z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_18_392'
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
