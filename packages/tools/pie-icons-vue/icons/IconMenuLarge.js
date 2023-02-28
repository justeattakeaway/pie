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
                d: 'M28.25 9H3.75V7.25h24.5V9zm0 14H3.75v1.75h24.5V23zm0-7.875H3.75v1.75h24.5v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
