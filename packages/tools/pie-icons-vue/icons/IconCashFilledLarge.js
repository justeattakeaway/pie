import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--cashFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 11.625h-1.75v12.25h22.75v-1.75h-21v-10.5z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.375 8.125v12.25h22.75V8.125H6.375zm6.125 7H9v-1.75h3.5v1.75zm5.25 1.75a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25zm8.75-1.75H23v-1.75h3.5v1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
