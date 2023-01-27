import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'PauseIcon',
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
                d: 'M6.32632 4H5V12H6.32632V4Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11 4H9.67368V12H11V4Z',
                fill: '#242E30'
            }
        })]);
    }
};
