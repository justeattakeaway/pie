import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoreHorizontal',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--moreHorizontal'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.188 6.688a1.313 1.313 0 110 2.625 1.313 1.313 0 010-2.626zM6.688 8a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.626 0zM11.5 8a1.313 1.313 0 102.625 0A1.313 1.313 0 0011.5 8z',
                fill: '#242E30'
            }
        })]);
    }
};
