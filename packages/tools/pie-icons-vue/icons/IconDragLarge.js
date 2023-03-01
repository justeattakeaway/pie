import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDragLarge',
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
            class: 'c-pieIcon c-pieIcon--dragLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.25 11.188H3.75v1.75h24.5v-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.25 19.063H3.75v1.75h24.5v-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
