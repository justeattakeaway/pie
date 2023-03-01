import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRadioSelectedLarge',
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
            class: 'c-pieIcon c-pieIcon--radioSelectedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C9.245 3.75 3.75 9.245 3.75 16S9.245 28.25 16 28.25 28.25 22.755 28.25 16 22.755 3.75 16 3.75zm0 22.75c-5.793 0-10.5-4.707-10.5-10.5S10.207 5.5 16 5.5 26.5 10.207 26.5 16 21.793 26.5 16 26.5zM21.25 16A5.254 5.254 0 0116 21.25 5.254 5.254 0 0110.75 16 5.254 5.254 0 0116 10.75 5.254 5.254 0 0121.25 16z',
                fill: '#242E30'
            }
        })]);
    }
};
