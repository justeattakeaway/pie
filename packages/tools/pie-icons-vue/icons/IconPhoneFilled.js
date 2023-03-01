import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPhoneFilled',
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
            class: 'c-pieIcon c-pieIcon--phoneFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.097 14.344h.315a2.624 2.624 0 002.284-1.374l.875-1.645-3.623-2.004a1.522 1.522 0 00-1.994.429l-1.427 1.925a9.625 9.625 0 01-3.255-3.334l1.672-1.286a1.566 1.566 0 00.428-1.969L4.43 1.42l-1.365.735A2.625 2.625 0 001.682 4.85a11.13 11.13 0 001.155 3.614 10.937 10.937 0 004.559 4.672 10.64 10.64 0 003.701 1.208z',
                fill: '#242E30',
            },
        })]);
    },
};
