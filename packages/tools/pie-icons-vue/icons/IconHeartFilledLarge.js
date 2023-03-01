import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHeartFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--heartFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 27.751L26.824 16.63a7.315 7.315 0 000-9.984 6.675 6.675 0 00-9.573 0L16 7.88l-1.277-1.225a6.668 6.668 0 00-9.573 0 7.315 7.315 0 000 9.984L16 27.75z',
                fill: '#242E30'
            }
        })]);
    }
};
