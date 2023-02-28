import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestrictedLarge',
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
            class: 'c-pieIcon c-pieIcon--restrictedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zM5.5 16A10.5 10.5 0 0123 8.195L8.195 23A10.421 10.421 0 015.5 16zM16 26.5a10.5 10.5 0 01-6.527-2.293L24.207 9.473A10.5 10.5 0 0116 26.5z',
                fill: '#242E30'
            }
        })]);
    }
};
