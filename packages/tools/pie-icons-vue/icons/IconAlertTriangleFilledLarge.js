import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertTriangleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--alertTriangleFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.582 21.731l-10.5-16.817a2.432 2.432 0 00-4.147 0L3.435 21.73a2.573 2.573 0 00-.07 2.625A2.415 2.415 0 005.5 25.625h21a2.415 2.415 0 002.135-1.277 2.573 2.573 0 00-.053-2.617zM16 21.906a1.53 1.53 0 110-3.061 1.53 1.53 0 010 3.061zm.875-11.156v6.125h-1.75V10.75h1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
