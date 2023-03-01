import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleRight',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleRight',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.754 13.18L13.126 8 7.71 2.82l.875-.963 5.539 5.347a1.164 1.164 0 010 1.636l-5.469 5.285-.901-.945z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M2.784 13.18L8.139 8 2.74 2.82l.875-.963L9.18 7.204a1.164 1.164 0 010 1.671l-5.495 5.25-.901-.945z',
                fill: '#242E30',
            },
        })]);
    },
};
