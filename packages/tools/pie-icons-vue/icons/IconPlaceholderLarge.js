import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlaceholderLarge',
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
            class: 'c-pieIcon c-pieIcon--placeholderLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M.166 0h31.668L32 .166v31.668l-.166.166H.166L0 31.834V.166L.166 0zm31.502 31.668V.33H.33v31.337h31.337zM6.537 2h18.926A4.537 4.537 0 0130 6.537v18.926A4.537 4.537 0 0125.463 30H6.537A4.537 4.537 0 012 25.463V6.537A4.537 4.537 0 016.537 2z',
                fill: '#242E30'
            }
        })]);
    }
};
