import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEyeOnFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--eyeOnFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.024 10.094a11.375 11.375 0 00-16.048 0L2.08 16l5.897 5.906a11.375 11.375 0 0016.048 0L29.92 16l-5.897-5.906zM16 20.813A4.813 4.813 0 1120.813 16 4.821 4.821 0 0116 20.813z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 19.063a3.062 3.062 0 100-6.125 3.062 3.062 0 000 6.124z',
                fill: '#242E30',
            },
        })]);
    },
};
