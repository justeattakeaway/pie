import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinus',
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
            class: 'c-pieIcon c-pieIcon--minus'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.125 7.34375H8.65625H7.34375H1.875V8.65625H7.34375H8.65625H14.125V7.34375Z',
                fill: '#242E30'
            }
        })]);
    }
};
