import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChequeFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--chequeFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.832 14.539l-3.788.586.542-3.789 6.23-6.274a2.31 2.31 0 012.503-.498l1.435-1.435 1.242 1.242-1.435 1.435a2.31 2.31 0 01-.498 2.503l-6.23 6.23zm9.293-2.914v14H2.875v-14h11.891l-.787 5.521 6.676-.954 4.559-4.567h3.911zM17.75 19.5H7.25v1.75h10.5V19.5zm7 0h-3.5v1.75h3.5V19.5z',
                fill: '#242E30',
            },
        })]);
    },
};
