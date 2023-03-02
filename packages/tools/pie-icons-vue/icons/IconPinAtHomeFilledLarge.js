import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPinAtHomeFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--pinAtHomeFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.461 4.109a3.15 3.15 0 00-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V12.797a130.695 130.695 0 012.248 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511zM9.438 20.375a1.312 1.312 0 110-2.624 1.312 1.312 0 010 2.624zm4.375 0a1.312 1.312 0 110-2.624 1.312 1.312 0 010 2.624zm4.375 0a1.312 1.312 0 110-2.624 1.312 1.312 0 010 2.624zm4.375 0a1.312 1.312 0 110-2.624 1.312 1.312 0 010 2.624z',
                fill: '#242E30',
            },
        })]);
    },
};
