import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertTriangleLarge',
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
            class: 'c-pieIcon c-pieIcon--alertTriangleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 10.75h-1.75v6.125h1.75V10.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 21.906a1.531 1.531 0 100-3.062 1.531 1.531 0 000 3.062z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M26.5 25.625h-21a2.415 2.415 0 01-2.135-1.277 2.572 2.572 0 01.07-2.625l10.5-16.818A2.433 2.433 0 0116 3.75a2.433 2.433 0 012.065 1.164l10.5 16.817a2.574 2.574 0 01.07 2.625 2.415 2.415 0 01-2.135 1.269zM15.414 5.841L4.914 22.66a.822.822 0 000 .875.691.691 0 00.586.341h21a.691.691 0 00.604-.376.822.822 0 000-.875l-10.5-16.818A.691.691 0 0016 5.5a.691.691 0 00-.586.341z',
                fill: '#242E30',
            },
        })]);
    },
};
