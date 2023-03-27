import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconReceipt',
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
            class: 'c-pieIcon c-pieIcon--receipt',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11.1 2.57a.23.23 0 0 1-.2 0L8 1.26 5.1 2.57a.23.23 0 0 1-.2 0L1.25.92v14.16l3.65-1.65a.23.23 0 0 1 .2 0L8 14.74l2.9-1.31a.23.23 0 0 1 .2 0l3.65 1.65V.92L11.1 2.57Zm2.15 10.19-1.53-.69a1.721 1.721 0 0 0-1.44 0L8 13.1l-2.28-1a1.701 1.701 0 0 0-1.44 0l-1.53.69V3.24l1.53.69a1.72 1.72 0 0 0 1.44 0L8 2.9l2.28 1a1.7 1.7 0 0 0 1.44 0l1.53-.69v9.55Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M11 5.75H5v1.5h6v-1.5Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10 8.75H6v1.5h4v-1.5Z',
            },
        })]);
    },
};
