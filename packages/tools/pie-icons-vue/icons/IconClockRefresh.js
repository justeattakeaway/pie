import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockRefresh',
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
            class: 'c-pieIcon c-pieIcon--clockRefresh'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 14.781V13.47a5.486 5.486 0 10-4.812-2.949l.936-.945.464 3.623-3.404-.683L2.225 11.5A6.711 6.711 0 011.254 8 6.781 6.781 0 118 14.781z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.013 10.905l-2.95-1.768V5.095h1.313v3.299l2.31 1.391-.673 1.12z',
                fill: '#242E30'
            }
        })]);
    }
};
