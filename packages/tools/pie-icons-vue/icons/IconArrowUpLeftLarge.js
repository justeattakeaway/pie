import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUpLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowUpLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.284 24.041L9.814 8.571h9.922v-1.75H8.58a1.75 1.75 0 00-1.75 1.75v11.165h1.75V9.805l15.47 15.47 1.234-1.234z',
                fill: '#242E30'
            }
        })]);
    }
};
