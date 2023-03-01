import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMicrophone',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--microphone',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.656 12.996V15H7.344v-2.004a5.915 5.915 0 01-5.25-5.871h1.312a4.594 4.594 0 009.188 0h1.312a5.915 5.915 0 01-5.25 5.871zM4.72 7.125V4.5a3.281 3.281 0 116.562 0v2.625a3.281 3.281 0 01-6.562 0zm1.312 0a1.969 1.969 0 003.938 0V4.5a1.969 1.969 0 00-3.938 0v2.625z',
                fill: '#242E30',
            },
        })]);
    },
};
