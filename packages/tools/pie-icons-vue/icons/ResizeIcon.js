import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ResizeIcon',
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
            class: 'c-pieIcon c-pieIcon--resize'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M0.927598 10.325H1.8551L10.3251 1.85501V0.927506L0.927598 10.325Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M10.3251 0.927506L10.325 0L0 10.325L0.927598 10.325L10.3251 0.927506Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M6.50123 10.325L10.325 6.50126V5.57376L5.57373 10.325H6.50123Z',
                fill: 'black'
            }
        }), h('path', {
            attrs: {
                d: 'M7.42897 10.325L6.50123 10.325L10.325 6.50126L10.3252 7.42875L7.42897 10.325Z',
                fill: 'black'
            }
        })]);
    }
};
