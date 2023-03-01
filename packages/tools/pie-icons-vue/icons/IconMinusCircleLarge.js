import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--minusCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.814 15.125v1.75h12.372v-1.75H9.814z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M24.663 7.338A12.25 12.25 0 107.339 24.663 12.25 12.25 0 0024.663 7.338zm-1.234 16.09A10.5 10.5 0 118.605 8.555 10.5 10.5 0 0123.43 23.43z',
                fill: '#242E30'
            }
        })]);
    }
};
