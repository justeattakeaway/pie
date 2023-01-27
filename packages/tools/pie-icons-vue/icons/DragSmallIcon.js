import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'DragSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--dragSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14 8.53125H0V9.84375H14V8.53125Z'
            }
        }), h('path', {
            attrs: {
                d: 'M14 4.15625H0V5.46875H14V4.15625Z'
            }
        })]);
    }
};
