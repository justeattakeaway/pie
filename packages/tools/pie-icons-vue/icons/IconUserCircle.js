import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserCircle',
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
            class: 'c-pieIcon c-pieIcon--userCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 5.13a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24zm0-1.313a2.433 2.433 0 102.432 2.433A2.441 2.441 0 008 3.817z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1.438a6.563 6.563 0 00-4.944 10.876c.298.322.626.615.98.875a6.537 6.537 0 007.928 0c.354-.26.682-.553.98-.875A6.562 6.562 0 008 1.437zm3.08 10.806a5.25 5.25 0 01-6.125 0 7.736 7.736 0 01-.516-.42c.153-.172.326-.325.516-.455a2.993 2.993 0 011.662-.49h2.8a2.993 2.993 0 011.663.49c.19.13.363.283.516.455a7.722 7.722 0 01-.516.42zm1.339-1.435a3.495 3.495 0 00-.377-.341 4.235 4.235 0 00-2.625-.876H6.582a4.235 4.235 0 00-2.625.875c-.133.105-.259.219-.376.342a5.25 5.25 0 118.838 0z',
                fill: '#242E30',
            },
        })]);
    },
};
