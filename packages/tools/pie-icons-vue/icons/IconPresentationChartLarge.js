import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPresentationChartLarge',
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
            class: 'c-pieIcon c-pieIcon--presentationChartLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.125 5.5H2.875v1.75h1.75V19.5a2.625 2.625 0 002.625 2.625h7.875V24.4l-3.824 3.85h2.468L16 25.992l2.231 2.258h2.459l-3.815-3.867v-2.258h7.875a2.625 2.625 0 002.625-2.625V7.25h1.75V5.5zm-3.5 14a.875.875 0 01-.875.875H7.25a.875.875 0 01-.875-.875V7.25h19.25V19.5zM12.5 16.875h-1.75v-3.5h1.75v3.5zm4.375 0h-1.75v-7h1.75v7zm4.375 0H19.5v-5.25h1.75v5.25z',
                fill: '#242E30',
            },
        })]);
    },
};
