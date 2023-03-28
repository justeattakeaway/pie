import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGridViewFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--gridViewFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M4.625 14.25h9.625V4.625H4.625v9.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.75 14.25h9.625V4.625H17.75v9.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M4.625 27.375h9.625V17.75H4.625v9.625Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M17.75 27.375h9.625V17.75H17.75v9.625Z',
            },
        })]);
    },
};
