import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKosher',
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
            class: 'c-pieIcon c-pieIcon--kosher'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.938 8.053l1.986-3.387H9.986L8 1.22 6.014 4.666H2.076l1.986 3.386-1.925 3.334h3.877L8 14.773l1.986-3.387h3.877l-1.925-3.333zm.078-2.293l-.7 1.199-.691-1.199h1.391zm-1.338 2.284l-1.322 2.248H6.644L5.322 8.044 6.644 5.76h2.712l1.322 2.284zM8 3.406l.726 1.26H7.274L8 3.406zM3.984 5.76h1.391l-.7 1.199-.691-1.199zm0 4.533l.708-1.155.683 1.155H3.984zM8 12.603l-.718-1.217h1.435L8 12.602zm3.307-3.5l.665 1.155h-1.347l.682-1.155z',
                fill: '#242E30'
            }
        })]);
    }
};
