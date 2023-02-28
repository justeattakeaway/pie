import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClock',
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
            class: 'c-pieIcon c-pieIcon--clock'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 14.781A6.782 6.782 0 1114.781 8 6.79 6.79 0 018 14.781zm0-12.25A5.469 5.469 0 108 13.47 5.469 5.469 0 008 2.53z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.284 10.31l-2.94-1.759V4.5h1.312v3.308l2.31 1.382-.682 1.12z',
                fill: '#242E30'
            }
        })]);
    }
};
