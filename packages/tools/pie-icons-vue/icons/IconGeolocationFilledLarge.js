import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.156 12.973v2.047l3.404.875a9.012 9.012 0 016.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.027 25.844H16.98l-.875-3.404a9.012 9.012 0 00-6.571-6.571l-3.404-.875v-2.021L25.459 6.54l-6.432 19.303z',
                fill: '#242E30'
            }
        })]);
    }
};
