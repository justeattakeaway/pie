import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGiftFilled',
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
            class: 'c-pieIcon c-pieIcon--giftFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.333 4.966h1.334V7.63H14V4.966H8.667a1.663 1.663 0 012-1.59v-1.34c-.116-.01-.223-.036-.338-.036C9.378 2 8.542 2.453 8 3.137A2.995 2.995 0 005.671 2c-.115 0-.222.018-.338.036v1.332c.107-.018.223-.036.338-.036.907 0 1.645.728 1.662 1.625H2v2.664h5.333V4.957v.009z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8.667 14.29h2.853c.88 0 1.591-.72 1.591-1.59V8.963H8.667v5.328z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M2.889 8.962v3.739c0 .879.711 1.589 1.591 1.589h2.853V8.962H2.89z',
                fill: '#242E30',
            },
        })]);
    },
};
