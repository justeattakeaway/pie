import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--alertCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm-1.313 17.063a1.313 1.313 0 112.626 0 1.313 1.313 0 01-2.625 0zm2.022-3.063H15.29l-.744-7.639a4.586 4.586 0 012.905 0l-.743 7.639z',
                fill: '#242E30'
            }
        })]);
    }
};
