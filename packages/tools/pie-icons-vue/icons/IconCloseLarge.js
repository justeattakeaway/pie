import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloseLarge',
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
            class: 'c-pieIcon c-pieIcon--closeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.4199 24.6625L24.6624 23.42L17.2337 16L24.6624 8.57127L23.4199 7.33752L15.9999 14.7663L8.57115 7.33752L7.3374 8.57127L14.7662 16L7.3374 23.42L8.57115 24.6625L15.9999 17.2338L23.4199 24.6625Z',
                fill: '#242E30'
            }
        })]);
    }
};
