import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CheckIcon',
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
            class: 'c-pieIcon c-pieIcon--check'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.865 12.4888C5.70071 12.487 5.53848 12.452 5.38809 12.3858C5.2377 12.3197 5.10228 12.2237 4.99 12.1038L1.875 8.65626L2.855 7.78126L5.8825 11.15L13.1362 3.32751L14.0988 4.20251L6.74875 12.0775C6.63647 12.1975 6.50105 12.2934 6.35066 12.3596C6.20027 12.4258 6.03804 12.4608 5.87375 12.4625L5.865 12.4888Z',
                fill: '#242E30'
            }
        })]);
    }
};
