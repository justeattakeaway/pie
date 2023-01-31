import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusLarge',
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
            class: 'c-pieIcon c-pieIcon--minusLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 16.875V15.125H16.875H15.125H4.625V16.875H15.125H16.875H27.375Z',
                fill: '#242E30'
            }
        })]);
    }
};
