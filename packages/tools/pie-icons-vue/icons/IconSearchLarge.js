import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSearchLarge',
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
            class: 'c-pieIcon c-pieIcon--searchLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.996 26.754L23 21.766A10.972 10.972 0 1021.766 23l4.988 4.988 1.242-1.234zm-13.309-2.879a9.187 9.187 0 119.188-9.188 9.196 9.196 0 01-9.188 9.188z',
                fill: '#242E30'
            }
        })]);
    }
};
