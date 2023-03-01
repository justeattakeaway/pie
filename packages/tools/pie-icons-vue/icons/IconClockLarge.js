import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--clockLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.795 20.253l-5.67-3.404V9h1.75v6.851l4.83 2.896-.91 1.506z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 28.25a12.25 12.25 0 110-24.5 12.25 12.25 0 010 24.5zM16 5.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z',
                fill: '#242E30',
            },
        })]);
    },
};
