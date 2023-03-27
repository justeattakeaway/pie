import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--userFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M23.823 22.501a6.011 6.011 0 0 0-5.723-3.876H13.91a6.029 6.029 0 0 0-5.731 3.894l-1.182 3.316h18.017l-1.19-3.334Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M20.314 11.327a4.428 4.428 0 1 0-5.32 5.33 4.437 4.437 0 0 0 5.32-5.33Z',
            },
        })]);
    },
};
