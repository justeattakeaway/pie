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
                d: 'M0.165515 0H31.8345L32 0.165515V31.8345L31.8345 32H0.165515L0 31.8345V0.165515L0.165515 0ZM31.6676 31.6677V0.331031H0.330971V31.6677H31.6676ZM6.53704 2H25.463C27.9687 2 30 4.0313 30 6.53704V25.463C30 27.9687 27.9687 30 25.463 30H6.53704C4.0313 30 2 27.9687 2 25.463V6.53704C2 4.0313 4.0313 2 6.53704 2Z',
                fill: '#242E30'
            }
        })]);
    }
};
