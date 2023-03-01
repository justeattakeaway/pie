import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocation',
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
            class: 'c-pieIcon c-pieIcon--geolocation'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.452 14.466H8.044l-.534-2.091A5.25 5.25 0 003.669 8.49L1.534 8V6.547l11.882-3.963-3.964 11.882zM3.81 7.17h.175a6.598 6.598 0 014.803 4.847v.175l2.503-7.525L3.809 7.17z',
                fill: '#242E30'
            }
        })]);
    }
};
