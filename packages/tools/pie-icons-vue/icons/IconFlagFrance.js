import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagFrance',
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
            class: 'c-pieIcon c-pieIcon--france',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE',
            },
        }), h('path', {
            attrs: {
                d: 'M15 8a7 7 0 00-4.566-6.563v13.126A7 7 0 0015 8z',
                fill: '#D80027',
            },
        }), h('path', {
            attrs: {
                d: 'M1 8a7 7 0 004.566 6.563V1.437A7 7 0 001 8z',
                fill: '#0052B4',
            },
        })]);
    },
};
