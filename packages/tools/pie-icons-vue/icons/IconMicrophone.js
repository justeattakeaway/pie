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
                fill: '#242E30',
                d: 'M8.656 12.996V15H7.344v-2.004a5.915 5.915 0 0 1-5.25-5.871h1.312a4.594 4.594 0 0 0 9.188 0h1.312a5.915 5.915 0 0 1-5.25 5.871ZM4.72 7.125V4.5a3.281 3.281 0 1 1 6.562 0v2.625a3.281 3.281 0 0 1-6.562 0Zm1.312 0a1.969 1.969 0 0 0 3.938 0V4.5a1.969 1.969 0 0 0-3.938 0v2.625Z',
            },
        })]);
    },
};
