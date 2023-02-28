import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSortDescending',
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
            class: 'c-pieIcon c-pieIcon--sortDescending'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1 9.23h6.817l-.551-1.312H1V9.23zm8.287 3.5H1v-1.312h7.736l.551 1.312zM1 4.418h4.787l.56 1.312H1V4.418zM13.995 6.92l-1.838-1.846v5.25h-1.312v-5.25L9.007 6.92l-.928-.97 2.626-2.626a1.077 1.077 0 011.54 0L14.87 5.95l-.875.971z',
                fill: '#242E30'
            }
        })]);
    }
};
