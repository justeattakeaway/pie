import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleLeftLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.021 5.876L7.54 16a.131.131 0 000 .096l10.5 10.063-1.225 1.216L6.375 17.33a1.908 1.908 0 010-2.625l10.448-10.08 1.198 1.251z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M26.194 5.876L15.703 16a.131.131 0 000 .096l10.5 10.063-1.226 1.216-10.5-10.063a1.908 1.908 0 010-2.625L24.995 4.626l1.199 1.251z',
                fill: '#242E30',
            },
        })]);
    },
};
