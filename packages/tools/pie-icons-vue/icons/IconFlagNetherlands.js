import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagNetherlands',
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
            class: 'c-pieIcon c-pieIcon--netherlands',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1a7 7 0 00-6.563 4.566h13.126A7 7 0 008 1z',
                fill: '#A2001D',
            },
        }), h('path', {
            attrs: {
                d: 'M8 15a7 7 0 006.563-4.566H1.437A7 7 0 008 15z',
                fill: '#0052B4',
            },
        })]);
    },
};
