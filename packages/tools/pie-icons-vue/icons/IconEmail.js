import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEmail',
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
            class: 'c-pieIcon c-pieIcon--email',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.451 2.802H2.55A1.566 1.566 0 001 4.36v7.28a1.566 1.566 0 001.566 1.557h10.885A1.566 1.566 0 0015 11.64V4.36a1.566 1.566 0 00-1.549-1.558zm.254 2.17v6.204L10.354 8.08l3.351-3.107zM7.58 9.846a.647.647 0 00.884 0l.945-.875 3.15 2.914H3.362l3.22-2.923.998.884zm5.145-5.731L8 8.472 3.196 4.097l9.529.018zM5.603 8.079L2.295 11.08V5.069l3.308 3.01z',
                fill: '#242E30',
            },
        })]);
    },
};
