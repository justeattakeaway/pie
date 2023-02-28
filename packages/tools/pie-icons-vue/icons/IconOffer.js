import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOffer',
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
            class: 'c-pieIcon c-pieIcon--offer'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.676 14.939L1.087 8.35l6.38-6.388a1.409 1.409 0 011.12-.402l5.337.534.533 5.346a1.373 1.373 0 01-.393 1.111L7.676 14.94zM2.942 8.35l4.734 4.734 5.46-5.46-.411-4.332-4.27-.42L2.942 8.35zm7.683-3.85a.875.875 0 100 1.75.875.875 0 000-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
