import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconShare',
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
            class: 'c-pieIcon c-pieIcon--share'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.322 9.076a2.371 2.371 0 00-1.907.963L6.04 8.376a2.625 2.625 0 000-.376 2.625 2.625 0 000-.376l4.375-1.663a2.371 2.371 0 10-.481-1.417 1.68 1.68 0 000 .192L5.462 6.434a2.362 2.362 0 00-1.75-.823 2.389 2.389 0 100 4.778 2.362 2.362 0 001.75-.823l4.498 1.698a1.68 1.68 0 000 .192 2.39 2.39 0 102.389-2.38h-.027zm0-5.608a1.076 1.076 0 110 2.152 1.076 1.076 0 010-2.152zM3.678 9.076a1.076 1.076 0 110-2.152 1.076 1.076 0 010 2.152zm8.646 3.457a1.076 1.076 0 11.002-2.153 1.076 1.076 0 01-.002 2.153z',
                fill: '#242E30'
            }
        })]);
    }
};
