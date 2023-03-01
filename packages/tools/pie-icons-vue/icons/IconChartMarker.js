import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChartMarker',
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
            class: 'c-pieIcon c-pieIcon--chartMarker',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.844 11.5h1.312V15H3.844v-3.5zm3.5 3.5h1.312V8.875H7.344V15zm3.5-4.375V15h1.312v-4.375h-1.312zm-.158-4.751L8 8 5.314 5.874a1.531 1.531 0 01-.595-1.208V1.22h6.562v3.447a1.53 1.53 0 01-.595 1.208zM9.97 2.53H6.03v2.135a.245.245 0 00.088.175L8 6.294 9.881 4.84a.245.245 0 00.088-.175V2.531z',
                fill: '#242E30',
            },
        })]);
    },
};
