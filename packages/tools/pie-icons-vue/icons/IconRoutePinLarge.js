import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRoutePinLarge',
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
            class: 'c-pieIcon c-pieIcon--routePinLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.631 6.375A8.848 8.848 0 0014.12 18.887l6.256 6.222 6.256-6.257a8.864 8.864 0 000-12.477zm-1.233 11.244l-5.023 5.022-5.023-5.022a7.097 7.097 0 1110.046 0zm-5.023-8.742a3.85 3.85 0 100 7.701 3.85 3.85 0 000-7.7zm0 5.942a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM8.895 26.5l13.23.061v1.75L8.886 28.25a2.73 2.73 0 01-2.38-1.4 2.537 2.537 0 01.079-2.625l2.196-3.5a.796.796 0 000-.831.954.954 0 00-.875-.481H2v-1.75h5.941a2.73 2.73 0 012.398 1.39 2.52 2.52 0 01-.079 2.626l-2.188 3.5a.77.77 0 000 .822.962.962 0 00.823.499z',
                fill: '#242E30',
            },
        })]);
    },
};
