import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationCollapse',
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
            class: 'c-pieIcon c-pieIcon--navigationCollapse'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.32 2.373V13.45h8.64a3.325 3.325 0 003.331-3.322V2.373H2.321zm1.338 1.33h1.33v8.417h-1.33V3.703zm9.304 6.424a1.994 1.994 0 01-1.994 1.993H6.317V3.703h6.645v6.424z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.793 9.666v-3.5L9.187 7.99l2.606 1.675z',
                fill: '#242E30'
            }
        })]);
    }
};
