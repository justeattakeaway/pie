import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFiltersLarge',
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
            class: 'c-pieIcon c-pieIcon--filtersLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M14.25 9v-.875A2.625 2.625 0 0 0 11.625 5.5h-.875a2.625 2.625 0 0 0-2.625 2.625V9h-5.25v1.75h5.25v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625v-.875h14.875V9H14.25Zm-1.75 2.625a.875.875 0 0 1-.875.875h-.875a.875.875 0 0 1-.875-.875v-3.5a.875.875 0 0 1 .875-.875h.875a.875.875 0 0 1 .875.875v3.5Zm11.375 8.75a2.625 2.625 0 0 0-2.625-2.625h-.875a2.625 2.625 0 0 0-2.625 2.625v.875H2.875V23H17.75v.875a2.625 2.625 0 0 0 2.625 2.625h.875a2.625 2.625 0 0 0 2.625-2.625V23h5.25v-1.75h-5.25v-.875Zm-1.75 3.5a.875.875 0 0 1-.875.875h-.875a.875.875 0 0 1-.875-.875v-3.5a.875.875 0 0 1 .875-.875h.875a.875.875 0 0 1 .875.875v3.5Z',
            },
        })]);
    },
};
