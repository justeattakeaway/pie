import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--chatFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375A2.625 2.625 0 003.75 7.25v21.875h2.266l4.988-4.996a.92.92 0 01.621-.254h14a2.625 2.625 0 002.625-2.625v-14a2.625 2.625 0 00-2.625-2.625zM9.437 14.25a1.313 1.313 0 112.626 0 1.313 1.313 0 01-2.626 0zm5.25 0a1.313 1.313 0 112.626 0 1.313 1.313 0 01-2.625 0zm6.563 1.313a1.313 1.313 0 110-2.626 1.313 1.313 0 010 2.626z',
                fill: '#242E30'
            }
        })]);
    }
};
