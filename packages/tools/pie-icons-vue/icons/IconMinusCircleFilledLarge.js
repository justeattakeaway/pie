import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--minusCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.663 7.338A12.25 12.25 0 107.339 24.663 12.25 12.25 0 0024.663 7.338zm-2.477 9.537H9.814v-1.75h12.372v1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
