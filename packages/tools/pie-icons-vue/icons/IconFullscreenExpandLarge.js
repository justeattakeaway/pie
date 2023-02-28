import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFullscreenExpandLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--fullscreenExpandLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.5 5.375h8.583l-.983 1.75H7.25v5.85l-1.75.983V5.375z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.9 7.125h5.85v5.848l1.75.981V5.375h-8.583l.983 1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 26.375h-8.58l.982-1.75h5.848v-5.848l1.75-.982v8.58z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.5 26.375v-8.583l1.75.983v5.85h5.848l.981 1.75H5.5z',
                fill: '#242E30'
            }
        })]);
    }
};
