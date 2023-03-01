import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNavigationCollapseLarge',
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
            class: 'c-pieIcon c-pieIcon--navigationCollapseLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 4.625v22.75H23A4.375 4.375 0 0027.375 23V4.625H4.625zm1.75 1.75h1.75v19.25h-1.75V6.375zM25.625 23A2.625 2.625 0 0123 25.625H9.875V6.375h15.75V23z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.614 16.945l-1.243-1.242-2.861 2.87a1.305 1.305 0 000 1.854l2.861 2.87 1.243-1.242-1.68-1.68h5.941v-1.75h-5.941l1.68-1.68z',
                fill: '#242E30'
            }
        })]);
    }
};
