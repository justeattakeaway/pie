import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconResize',
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
            class: 'c-pieIcon c-pieIcon--resize',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M.928 10.325h.927l8.47-8.47V.928L.928 10.325z',
                fill: '#000',
            },
        }), h('path', {
            attrs: {
                d: 'M10.325.928V0L0 10.325h.928L10.325.928z',
                fill: '#000',
            },
        }), h('path', {
            attrs: {
                d: 'M6.501 10.325l3.824-3.824v-.927l-4.751 4.751H6.5z',
                fill: '#000',
            },
        }), h('path', {
            attrs: {
                d: 'M7.429 10.325h-.928l3.824-3.824v.928L7.43 10.325z',
                fill: '#000',
            },
        })]);
    },
};
