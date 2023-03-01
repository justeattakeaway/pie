import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronSplit',
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
            class: 'c-pieIcon c-pieIcon--chevronSplit',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.307 6.25L8 2.864 4.693 6.25l-.902-.936 3.5-3.597a1.068 1.068 0 011.444 0l3.509 3.658-.937.875z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M4.693 9.75L8 13.049l3.307-3.378.893.919-3.5 3.596a1.068 1.068 0 01-1.444 0l-3.5-3.561.937-.875z',
                fill: '#242E30',
            },
        })]);
    },
};
