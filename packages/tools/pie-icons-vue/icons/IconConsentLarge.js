import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConsentLarge',
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
            class: 'c-pieIcon c-pieIcon--consentLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'm14.04 18.616-2.494-2.809-1.312 1.164 2.66 3.002a1.537 1.537 0 0 0 2.257-.009l6.72-7.245-1.286-1.19-6.571 7.079.026.008Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M27.375 23.543V9.332a2.633 2.633 0 0 0-2.625-2.625H7.25a2.633 2.633 0 0 0-2.625 2.625v14.21h-1.75v1.75h26.25v-1.75h-1.75Zm-1.75 0H6.375V9.332c0-.482.394-.875.875-.875h17.5c.481 0 .875.393.875.875v14.21Z',
            },
        })]);
    },
};
