import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheck',
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
            class: 'c-pieIcon c-pieIcon--check'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.865 12.489a1.217 1.217 0 01-.875-.385L1.875 8.656l.98-.875 3.028 3.369 7.253-7.822.963.875-7.35 7.875a1.216 1.216 0 01-.875.385l-.009.026z',
                fill: '#242E30'
            }
        })]);
    }
};
