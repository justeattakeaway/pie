import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestricted',
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
            class: 'c-pieIcon c-pieIcon--restricted',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zM2.531 8A5.469 5.469 0 018 2.531a5.408 5.408 0 013.369 1.173l-7.665 7.665A5.408 5.408 0 012.53 8zM8 13.469a5.408 5.408 0 01-3.369-1.173l7.665-7.665A5.408 5.408 0 0113.47 8 5.47 5.47 0 018 13.469z',
                fill: '#242E30',
            },
        })]);
    },
};
