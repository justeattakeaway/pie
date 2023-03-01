import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.156 12.973v2.047l3.404.875a9.012 9.012 0 016.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431zm12.023 9.773l-.639-1.75a10.763 10.763 0 00-6.51-6.501l-1.75-.639L22.65 9.35l-4.471 13.396z',
                fill: '#242E30'
            }
        })]);
    }
};
