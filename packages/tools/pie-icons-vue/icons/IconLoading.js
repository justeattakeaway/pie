import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLoading',
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
            class: 'c-pieIcon c-pieIcon--loading'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.781 8A6.782 6.782 0 118 1.219V2.53A5.469 5.469 0 1013.469 8h1.312zM4.72 8H6.03A1.969 1.969 0 118 9.969v1.312A3.282 3.282 0 104.719 8z',
                fill: '#242E30'
            }
        })]);
    }
};
