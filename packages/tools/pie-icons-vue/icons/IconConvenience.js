import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConvenience',
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
            class: 'c-pieIcon c-pieIcon--convenience',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.075 12.655l-.709-6.458h-.831v-1.96H8.62a1.7 1.7 0 00-1.417-1.61v-1.47H5.89v1.47A1.701 1.701 0 004.465 4.3v1.89H3.58l-.709 6.457a1.97 1.97 0 001.96 2.188h6.283a1.97 1.97 0 001.96-2.188v.009zm-2.853-6.458H8.63V5.56h1.592v.638zm-4.436-1.89c0-.218.175-.393.394-.393h.752c.22 0 .394.175.394.393v1.89H5.795v-1.89h-.009zm5.819 9.004a.657.657 0 01-.49.219H4.832a.643.643 0 01-.49-.219.676.676 0 01-.166-.507l.586-5.294h6.432l.586 5.294a.643.643 0 01-.166.507h-.01z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M7.956 9.514a.859.859 0 01-.857-.858H5.786a2.17 2.17 0 104.34 0H8.814a.859.859 0 01-.858.858z',
                fill: '#242E30',
            },
        })]);
    },
};
