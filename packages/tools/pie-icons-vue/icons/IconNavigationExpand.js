import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationExpand',
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
            class: 'c-pieIcon c-pieIcon--navigationExpand'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.93 2.373V13.45h8.64a3.323 3.323 0 003.322-3.322V2.373H1.93zm1.33 1.33h3.1v8.417h-3.1V3.703zm9.303 6.424a1.994 1.994 0 01-1.994 1.993H7.69V3.703h4.874v6.424z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.797 9.666l2.605-1.826-2.605-1.674',
                fill: '#242E30'
            }
        })]);
    }
};
