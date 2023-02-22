import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinFilled',
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
            class: 'c-pieIcon c-pieIcon--locationPinFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.938 3.135a5.574 5.574 0 00-7.875 7.875L8 15l3.938-3.938a5.575 5.575 0 000-7.927zm-2.844 3.99a1.094 1.094 0 11-2.188 0 1.094 1.094 0 012.188 0z',
                fill: '#242E30'
            }
        })]);
    }
};
