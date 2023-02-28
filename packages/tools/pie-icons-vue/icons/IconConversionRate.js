import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConversionRate',
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
            class: 'c-pieIcon c-pieIcon--conversionRate'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.249 8.157a2.328 2.328 0 10-2.328 2.328 2.336 2.336 0 002.328-2.328zm-3.343 0a1.015 1.015 0 112.03 0 1.015 1.015 0 01-2.03 0zM15 7.125L13.25 9.75l-2.03-2.625h1.277a4.506 4.506 0 00-1.25-2.371 4.586 4.586 0 00-6.493 0l-.928-.928a5.898 5.898 0 018.348 0 5.819 5.819 0 011.662 3.299H15zm-3.754 4.121l.928.928a5.897 5.897 0 01-8.348 0 5.818 5.818 0 01-1.662-3.299H1L2.75 6.25l2.03 2.625H3.502c.167.9.604 1.726 1.252 2.371a4.586 4.586 0 006.492 0z',
                fill: '#242E30'
            }
        })]);
    }
};
