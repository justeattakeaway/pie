import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertCircle',
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
            class: 'c-pieIcon c-pieIcon--alertCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 14.781A6.782 6.782 0 1114.781 8 6.79 6.79 0 018 14.781zm0-12.25A5.469 5.469 0 108 13.47 5.469 5.469 0 008 2.53z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.055 4.631a3.5 3.5 0 011.89 0l-.481 4.244h-.928l-.481-4.244zm1.82 5.994a.875.875 0 11-1.75 0 .875.875 0 011.75 0z',
                fill: '#242E30'
            }
        })]);
    }
};
