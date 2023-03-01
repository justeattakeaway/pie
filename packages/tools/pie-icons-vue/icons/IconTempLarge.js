import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTempLarge',
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
            class: 'c-pieIcon c-pieIcon--tempLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.75 9H6.375V7.25h4.375V9zm-3.5 3.5h3.5v-1.75h-3.5v1.75zM6.375 16h4.375v-1.75H6.375V16zm17.938 5.688a6.563 6.563 0 11-12.545-2.702 6.501 6.501 0 011.65-2.216V8.808a4.375 4.375 0 018.663 0v7.962a6.502 6.502 0 012.232 4.918zm-1.75 0a4.803 4.803 0 00-1.89-3.816l-.342-.262V8.808a2.626 2.626 0 00-5.162 0v8.802l-.341.262a4.813 4.813 0 107.735 3.816zm-1.75 0a3.063 3.063 0 11-3.938-2.923V12.5h1.75v6.265a3.063 3.063 0 012.188 2.922zm-1.75 0a1.313 1.313 0 10-2.626 0 1.313 1.313 0 002.625 0z',
                fill: '#242E30'
            }
        })]);
    }
};
