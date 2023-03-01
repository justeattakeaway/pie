import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStopwatch',
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
            class: 'c-pieIcon c-pieIcon--stopwatch'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.547 9.234a5.547 5.547 0 01-10.114 3.141h1.75A4.165 4.165 0 008 13.469a4.235 4.235 0 100-8.461A4.191 4.191 0 005.008 6.25H3.336a5.539 5.539 0 0110.212 2.984zM7.344 6.705v2.966L9.67 11.23l.727-1.094-1.75-1.164V6.705H7.344zM5.375 9.969H2.531l.438 1.312h2.406V9.97zm0-2.625H1l.438 1.312h3.937V7.344zm4.804-4.83l-.315-1.295H6.136l-.315 1.295h4.375-.017z',
                fill: '#242E30'
            }
        })]);
    }
};
