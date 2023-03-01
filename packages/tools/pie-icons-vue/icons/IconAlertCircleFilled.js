import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--alertCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zM8 11.5a.875.875 0 110-1.75.875.875 0 010 1.75zm.464-2.625h-.928l-.481-4.244a3.5 3.5 0 011.89 0l-.481 4.244z',
                fill: '#242E30'
            }
        })]);
    }
};
