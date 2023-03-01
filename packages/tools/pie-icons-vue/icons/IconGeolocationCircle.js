import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationCircle',
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
            class: 'c-pieIcon c-pieIcon--geolocationCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.42a6.58 6.58 0 100 13.16A6.58 6.58 0 008 1.42zm0 11.83a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M4.351 8.28l1.33.332a2.345 2.345 0 011.75 1.75l.333 1.33h1.172l2.293-6.877L4.35 7.064V8.28zm4.769-1.4l-.761 2.284A3.649 3.649 0 006.836 7.64L9.12 6.88z',
                fill: '#242E30',
            },
        })]);
    },
};
