import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronUp',
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
            class: 'c-pieIcon c-pieIcon--chevronUp'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.18 10.97L8 5.615l-5.18 5.399-.962-.875 5.346-5.565a1.164 1.164 0 011.671 0l5.25 5.495-.945.901z',
                fill: '#242E30'
            }
        })]);
    }
};
