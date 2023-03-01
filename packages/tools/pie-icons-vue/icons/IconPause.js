import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPause',
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
            class: 'c-pieIcon c-pieIcon--pause'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.326 4H5v8h1.326V4z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11 4H9.674v8H11V4z',
                fill: '#242E30'
            }
        })]);
    }
};
