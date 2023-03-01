import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCard',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--creditCard',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.625 9.094H6.25v1.312H3.625V9.094zM14.781 4.5v7a1.54 1.54 0 01-1.531 1.531H2.75A1.54 1.54 0 011.219 11.5v-7A1.54 1.54 0 012.75 2.969h10.5A1.54 1.54 0 0114.781 4.5zm-12.25 0v1.094H13.47V4.5a.219.219 0 00-.219-.219H2.75a.219.219 0 00-.219.219zm10.938 7V6.906H2.53V11.5a.219.219 0 00.219.219h10.5a.219.219 0 00.219-.219z',
                fill: '#242E30',
            },
        })]);
    },
};
