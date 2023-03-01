import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagPoland',
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
            class: 'c-pieIcon c-pieIcon--poland'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE'
            }
        }), h('path', {
            attrs: {
                d: 'M15 8A7 7 0 111 8',
                fill: '#D80027'
            }
        })]);
    }
};
