import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortAscending',
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
            class: 'c-pieIcon c-pieIcon--sortAscending',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 7.344h6.816l-.551 1.312H1V7.344zm8.286-3.5H1v1.312h7.735l.551-1.312zM1 12.156h4.786l.56-1.312H1v1.312zm12.994-2.502L12.156 11.5V6.25h-1.312v5.25L9.006 9.654l-.927.971 2.625 2.625a1.075 1.075 0 001.54 0l2.625-2.625-.875-.971z',
                fill: '#242E30',
            },
        })]);
    },
};
