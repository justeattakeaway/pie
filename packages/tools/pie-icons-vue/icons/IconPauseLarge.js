import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPauseLarge',
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
            class: 'c-pieIcon c-pieIcon--pauseLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11 9H12.75V23H11V9ZM19.25 9H21V23H19.25V9Z',
                fill: '#242E30'
            }
        })]);
    }
};
