import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLogOutLarge',
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
            class: 'c-pieIcon c-pieIcon--logOutLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 16.875a11.375 11.375 0 11-15.75-10.5v1.934a9.625 9.625 0 108.75 0V6.375a11.375 11.375 0 017 10.5zm-10.5-14h-1.75v10.5h1.75v-10.5z',
                fill: '#242E30',
            },
        })]);
    },
};
