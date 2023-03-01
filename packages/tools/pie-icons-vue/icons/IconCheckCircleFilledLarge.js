import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--checkCircleFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 9.718L16.22 20.664a1.802 1.802 0 01-2.055.435 1.828 1.828 0 01-.605-.427l-3.754-4.217 1.313-1.164 3.727 4.209h.096l10.5-11.226A12.25 12.25 0 1028.252 16a12.092 12.092 0 00-1.75-6.282z',
                fill: '#242E30',
            },
        })]);
    },
};
