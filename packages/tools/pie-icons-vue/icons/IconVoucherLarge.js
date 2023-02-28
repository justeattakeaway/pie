import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconVoucherLarge',
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
            class: 'c-pieIcon c-pieIcon--voucherLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.199 15.186a6.921 6.921 0 01-3.885-3.885.875.875 0 00-1.628 0 6.921 6.921 0 01-3.885 3.885.875.875 0 000 1.628 6.921 6.921 0 013.885 3.885.875.875 0 001.628 0 6.921 6.921 0 013.885-3.885.875.875 0 000-1.628zM12.5 18.485A8.62 8.62 0 0010.015 16a8.62 8.62 0 002.485-2.485A8.62 8.62 0 0014.985 16a8.62 8.62 0 00-2.485 2.485zM25.984 5.5H5.14L2 8.641V23.36L5.141 26.5h20.843l3.141-3.141V8.64L25.984 5.5zm1.391 17.141l-2.109 2.109H23v-2.625h-1.75v2.625H5.859L3.75 22.641V9.36L5.859 7.25H21.25v2.625H23V7.25h2.266l2.109 2.109V22.64zm-6.125-5.766H23v3.5h-1.75v-3.5zm0-5.25H23v3.5h-1.75v-3.5z',
                fill: '#242E30'
            }
        })]);
    }
};
