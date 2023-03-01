import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconImageFilled',
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
            class: 'c-pieIcon c-pieIcon--imageFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.219 2.219V14.03H14.78V2.22H1.22zm12.25 1.312V7.82A2.756 2.756 0 0112.2 9.48c-1.75 1.103-2.922.525-4.375-.192-1.453-.718-3.063-1.514-5.25-.525v-5.25l10.894.017zM10.188 9a2.187 2.187 0 100-4.375 2.187 2.187 0 000 4.375z',
                fill: '#242E30'
            }
        })]);
    }
};
