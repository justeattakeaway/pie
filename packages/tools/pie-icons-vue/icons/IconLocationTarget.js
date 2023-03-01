import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationTarget',
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
            class: 'c-pieIcon c-pieIcon--locationTarget'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.624 7.344h-1.636a5.05 5.05 0 00-4.332-4.332V1.376H7.344v1.636a5.049 5.049 0 00-4.332 4.375H1.376V8.7h1.636a5.049 5.049 0 004.375 4.331v1.636H8.7v-1.68a5.049 5.049 0 004.288-4.33h1.636V7.343zM8 11.719A3.719 3.719 0 1111.719 8 3.728 3.728 0 018 11.719zM9.417 8A1.417 1.417 0 118 6.582 1.409 1.409 0 019.417 8z',
                fill: '#242E30'
            }
        })]);
    }
};
