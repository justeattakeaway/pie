import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconThumbsUpLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--thumbsUpLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.302 16a2.625 2.625 0 00-1.68-1.26l-4.76-1.146.98-4.891A3.413 3.413 0 0019.5 4.625h-.534l-5.18 10.071a.876.876 0 01-.743.429H3.75v1.75h6.886a14.997 14.997 0 00-.761 4.813 9.976 9.976 0 00.7 3.937H3.75v1.75h18.664A4.374 4.374 0 0026.5 24.61l2.047-6.554A2.625 2.625 0 0028.302 16zm-1.443 1.558l-2.022 6.474a2.625 2.625 0 01-2.423 1.593H12.5a8.207 8.207 0 01-.875-3.938c-.03-1.646.267-3.282.875-4.812h.516a2.626 2.626 0 002.275-1.321l4.681-9.1c.31.09.585.274.788.525a1.678 1.678 0 01.341 1.382l-1.312 6.545 6.405 1.514a.875.875 0 01.56.42.876.876 0 01.105.691v.027z',
                fill: '#242E30',
            },
        })]);
    },
};
