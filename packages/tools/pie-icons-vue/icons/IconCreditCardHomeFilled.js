import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardHomeFilled',
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
            class: 'c-pieIcon c-pieIcon--creditCardHomeFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.939 5.322l-.814 1.042a42.997 42.997 0 00-5.862-3.92 1.146 1.146 0 00-.543 0 42.989 42.989 0 00-5.845 3.92l-.814-1.042a46.042 46.042 0 016.125-4.068 2.082 2.082 0 011.637 0 45.72 45.72 0 016.116 4.068zM2.75 10.406h10.5v2.844a.875.875 0 01-.875.875h-8.75a.875.875 0 01-.875-.875v-2.844zm1.75 1.969h1.75V11.5H4.5v.875zm7.875-5.25h-8.75A.875.875 0 002.75 8v1.094h10.5V8a.875.875 0 00-.875-.875z',
                fill: '#242E30'
            }
        })]);
    }
};
