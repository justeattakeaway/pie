import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatHelpLarge',
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
            class: 'c-pieIcon c-pieIcon--chatHelpLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375A2.625 2.625 0 003.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 01.621-.254h14a2.625 2.625 0 002.625-2.625v-14a2.625 2.625 0 00-2.625-2.625zM26.5 21.25a.875.875 0 01-.875.875h-14c-.696 0-1.363.278-1.855.77l-4.27 4.27V7.25a.875.875 0 01.875-.875h19.25a.875.875 0 01.875.875v14z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16.63 19.115a1.26 1.26 0 11-1.26-1.26 1.25 1.25 0 011.26 1.26zm-1.076-10.99a4.261 4.261 0 00-2.8.963l-.061.052 1.207 1.207h.061a2.625 2.625 0 011.54-.49 1.653 1.653 0 011.82 1.62c0 1.18-1.024 2.064-2.677 2.327h-.07l.166 2.415h1.339l.157-1.348h.123a3.78 3.78 0 002.948-3.5c0-1.662-1.154-3.246-3.753-3.246z',
                fill: '#242E30',
            },
        })]);
    },
};
