import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockRefreshLarge',
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
            class: 'c-pieIcon c-pieIcon--clockRefreshLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75A12.25 12.25 0 005.579 22.431l-2.625-.376-.245 1.75 4.812.691a.875.875 0 00.989-.743l.682-4.813-1.75-.245-.402 2.852A10.378 10.378 0 015.5 16 10.5 10.5 0 1116 26.5v1.75a12.25 12.25 0 100-24.5z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M20.296 20.253l-5.678-3.404V9h1.75v6.851l4.83 2.896-.902 1.506z',
                fill: '#242E30'
            }
        })]);
    }
};
