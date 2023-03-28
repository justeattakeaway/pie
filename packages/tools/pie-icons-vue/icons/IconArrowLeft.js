import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowLeft',
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
            class: 'c-pieIcon c-pieIcon--arrowLeft',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M15 7.25H3.35l3.76-3.76-1.06-1.06-4.68 4.69a1.24 1.24 0 0 0 0 1.76l4.68 4.69 1.06-1.06-3.76-3.76H15v-1.5Z',
            },
        })]);
    },
};
