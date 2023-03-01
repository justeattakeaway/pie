import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPrinterLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--printerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.125 13.375A2.625 2.625 0 0026.5 10.75H23v-7H9v7H5.5a2.625 2.625 0 00-2.625 2.625V24.75H9v3.5h14v-3.5h6.125V13.375zM10.75 5.5h10.5v5.25h-10.5V5.5zm10.5 21h-10.5v-6.125h10.5V26.5zm6.125-3.5H23v-2.625h1.75v-1.75H7.25v1.75H9V23H4.625v-9.625A.875.875 0 015.5 12.5h21a.875.875 0 01.875.875V23zm-6.125-7.875h3.5v1.75h-3.5v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
