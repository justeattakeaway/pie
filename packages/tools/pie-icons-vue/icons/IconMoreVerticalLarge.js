import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoreVerticalLarge',
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
            class: 'c-pieIcon c-pieIcon--moreVerticalLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.969 7.688a1.969 1.969 0 11-3.938 0 1.969 1.969 0 013.938 0zM16 14.03a1.97 1.97 0 100 3.938 1.97 1.97 0 000-3.938zm0 8.313a1.969 1.969 0 100 3.938 1.969 1.969 0 000-3.938z',
                fill: '#242E30',
            },
        })]);
    },
};
