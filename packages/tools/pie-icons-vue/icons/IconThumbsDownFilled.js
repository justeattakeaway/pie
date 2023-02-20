import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconThumbsDownFilled',
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
            class: 'c-pieIcon c-pieIcon--thumbsDownFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.404 5.016c-.01 1.234.17 2.461.534 3.64H1.874V2.094h2.992a8.085 8.085 0 00-.463 2.922zm9.8 1.89L13.18 3.625a2.406 2.406 0 00-2.24-1.54H6.25a6.685 6.685 0 00-.569 2.922 9.984 9.984 0 00.648 3.737l2.546 5.162h.402a1.75 1.75 0 001.75-2.135l-.402-2.389 2.45-.507a1.531 1.531 0 001.191-1.338 1.558 1.558 0 00-.062-.63z',
                fill: '#242E30'
            }
        })]);
    }
};
