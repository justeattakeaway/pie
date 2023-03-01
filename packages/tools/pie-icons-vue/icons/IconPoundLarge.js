import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPoundLarge',
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
            class: 'c-pieIcon c-pieIcon--poundLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.29 19.281l1.523.517c-.333 1.338-1.4 1.89-2.827 1.89h-6.545v-1.54h1.138v-3.675H11.44v-1.435h1.138v-1.602c0-2.441 1.365-3.911 3.876-3.911a4.121 4.121 0 013.185 1.286l-1.102 1.12a2.737 2.737 0 00-2.083-.875c-1.339 0-2.144.683-2.144 2.302v1.68h3.763v1.434H14.31v3.675h3.631a1.251 1.251 0 001.348-.866zM28.25 16a12.25 12.25 0 11-24.499 0 12.25 12.25 0 0124.499 0zm-1.75 0a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z',
                fill: '#242E30',
            },
        })]);
    },
};
