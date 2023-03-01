import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNetworkErrorLarge',
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
            class: 'c-pieIcon c-pieIcon--networkErrorLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7 25h4.8V14.5H7V25zm1.5-9h1.8v7.5H8.5V16z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M25 7h-4.8v14.543l-1.8-3V10.75h-4.65l-3.623-6H8.372l5.25 8.707V25h4.8v-3.54l1.8 3V25h.278l1.35 2.25h1.755L22.255 25H25V7zm-9.9 5.25h1.8v3.795l-1.8-3v-.795zm1.8 11.25h-1.8v-7.545l1.8 3V23.5zm6.6 0h-1.8v-15h1.8v15z',
                fill: '#242E30',
            },
        })]);
    },
};
