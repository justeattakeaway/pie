import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagSwitzerland',
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
            class: 'c-pieIcon c-pieIcon--switzerland',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#D80027',
                d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z',
            },
        }), h('path', {
            attrs: {
                fill: '#EEE',
                d: 'M11.653 6.783H9.22V4.35H6.783v2.433H4.35v2.434h2.433v2.433h2.434V9.217h2.433l.003-2.434Z',
            },
        })]);
    },
};
