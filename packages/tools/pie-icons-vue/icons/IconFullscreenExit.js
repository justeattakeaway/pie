import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFullscreenExit',
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
            class: 'c-pieIcon c-pieIcon--fullscreenExit'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.031 1.123L4.72 1.86V4.72H1.766L1.109 6.03h4.922V1.123z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.969 1.11l1.312.656v2.953h2.859l.737 1.312H9.97V1.11z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.89 9.969l-.656 1.312h-2.953v2.859l-1.312.737V9.97h4.922z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.123 9.969l.737 1.312H4.72v2.953l1.312.657V9.969H1.123z',
                fill: '#242E30'
            }
        })]);
    }
};
