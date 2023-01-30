import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDrag',
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
            class: 'c-pieIcon c-pieIcon--drag'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 9.53125H1V10.8438H15V9.53125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15 5.15625H1V6.46875H15V5.15625Z',
                fill: '#242E30'
            }
        })]);
    }
};
