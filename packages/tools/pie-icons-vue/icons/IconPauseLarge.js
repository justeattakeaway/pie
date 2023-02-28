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
                d: 'M11 9h1.75v14H11V9zm8.25 0H21v14h-1.75V9z',
                fill: '#242E30'
            }
        })]);
    }
};
