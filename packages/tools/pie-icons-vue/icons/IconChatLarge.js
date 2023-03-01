import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatLarge',
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
            class: 'c-pieIcon c-pieIcon--chatLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375A2.625 2.625 0 003.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 01.621-.254h14a2.625 2.625 0 002.625-2.625v-14a2.625 2.625 0 00-2.625-2.625zM26.5 21.25a.875.875 0 01-.875.875h-14c-.696 0-1.363.278-1.855.77l-4.27 4.27V7.25a.875.875 0 01.875-.875h19.25a.875.875 0 01.875.875v14zm-9.188-7a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.626 0zm5.25 0a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.625 0zm-10.5 0a1.313 1.313 0 11-2.625 0 1.313 1.313 0 012.626 0z',
                fill: '#242E30',
            },
        })]);
    },
};
