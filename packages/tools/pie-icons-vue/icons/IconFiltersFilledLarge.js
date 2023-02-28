import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFiltersFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--filtersFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.25 9v-.875A2.625 2.625 0 0011.625 5.5h-.875a2.625 2.625 0 00-2.625 2.625V9h-5.25v1.75h5.25v.875a2.625 2.625 0 002.625 2.625h.875a2.625 2.625 0 002.625-2.625v-.875h14.875V9H14.25z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23.875 20.375a2.625 2.625 0 00-2.625-2.625h-.875a2.625 2.625 0 00-2.625 2.625v.875H2.875V23H17.75v.875a2.625 2.625 0 002.625 2.625h.875a2.625 2.625 0 002.625-2.625V23h5.25v-1.75h-5.25v-.875z',
                fill: '#242E30'
            }
        })]);
    }
};
