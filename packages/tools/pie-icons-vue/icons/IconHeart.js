import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeart',
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
            class: 'c-pieIcon c-pieIcon--heart',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 14.195L2.234 8.263a3.745 3.745 0 010-5.128 3.413 3.413 0 014.9 0l.875.875.875-.875a3.421 3.421 0 014.909 0 3.754 3.754 0 010 5.128L8 14.195zM4.675 3.406a2.082 2.082 0 00-1.514.648 2.432 2.432 0 000 3.29l4.84 4.961 4.838-4.97a2.432 2.432 0 000-3.281 2.135 2.135 0 00-3.045 0L8.735 5.086a1.103 1.103 0 01-1.531 0L6.189 4.054a2.1 2.1 0 00-1.514-.648z',
                fill: '#242E30',
            },
        })]);
    },
};
