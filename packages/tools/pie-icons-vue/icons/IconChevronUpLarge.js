import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronUpLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronUpLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.124 22.125L16 11.625h-.096l-10.028 10.5-1.251-1.234 10.063-10.5a1.916 1.916 0 012.624 0L27.376 20.91l-1.251 1.216z',
                fill: '#242E30',
            },
        })]);
    },
};
