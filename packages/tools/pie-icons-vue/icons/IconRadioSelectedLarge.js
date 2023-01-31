import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRadioSelectedLarge',
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
            class: 'c-pieIcon c-pieIcon--radioSelectedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16C3.75 22.755 9.245 28.25 16 28.25C22.755 28.25 28.25 22.755 28.25 16C28.25 9.245 22.755 3.75 16 3.75ZM16 26.5C10.2075 26.5 5.5 21.7925 5.5 16C5.5 10.2075 10.2075 5.5 16 5.5C21.7925 5.5 26.5 10.2075 26.5 16C26.5 21.7925 21.7925 26.5 16 26.5ZM21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C13.1038 21.25 10.75 18.8962 10.75 16C10.75 13.1038 13.1038 10.75 16 10.75C18.8962 10.75 21.25 13.1038 21.25 16Z',
                fill: '#242E30'
            }
        })]);
    }
};
