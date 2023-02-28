import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronLeft',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--chevronLeft'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.96 2.82L5.605 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 010-1.671l5.495-5.25.901.945z',
                fill: '#242E30'
            }
        })]);
    }
};
