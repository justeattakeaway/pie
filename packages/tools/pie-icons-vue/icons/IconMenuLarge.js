import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMenuLarge',
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
            class: 'c-pieIcon c-pieIcon--menuLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 9H3.75V7.25H28.25V9ZM28.25 23H3.75V24.75H28.25V23ZM28.25 15.125H3.75V16.875H28.25V15.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
