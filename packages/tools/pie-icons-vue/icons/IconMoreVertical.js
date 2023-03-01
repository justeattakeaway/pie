import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoreVertical',
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
            class: 'c-pieIcon c-pieIcon--moreVertical',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.313 3.188a1.313 1.313 0 11-2.626 0 1.313 1.313 0 012.625 0zM8 6.688a1.313 1.313 0 100 2.625 1.313 1.313 0 000-2.626zM8 11.5a1.313 1.313 0 100 2.625A1.313 1.313 0 008 11.5z',
                fill: '#242E30',
            },
        })]);
    },
};
