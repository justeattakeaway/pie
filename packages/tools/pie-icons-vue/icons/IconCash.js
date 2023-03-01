import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCash',
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
            class: 'c-pieIcon c-pieIcon--cash'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.781 2.969H3.844v2.625H1.219v6.562h10.937V9.531h2.625V2.97zm-3.937 7.875H2.53V6.906h1.313v2.625h7v1.313zm2.625-2.625H5.156V4.28h8.313V8.22zM8.219 6.25a1.094 1.094 0 112.187 0 1.094 1.094 0 01-2.187 0z',
                fill: '#242E30'
            }
        })]);
    }
};
