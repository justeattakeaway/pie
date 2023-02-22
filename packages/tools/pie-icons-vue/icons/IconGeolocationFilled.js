import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationFilled',
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
            class: 'c-pieIcon c-pieIcon--geolocationFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.535 6.548V8l2.135.534a5.25 5.25 0 013.84 3.841l.535 2.135h1.408l3.964-11.926L1.535 6.548z',
                fill: '#242E30'
            }
        })]);
    }
};
