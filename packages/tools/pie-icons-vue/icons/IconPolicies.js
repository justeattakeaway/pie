import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPolicies',
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
            class: 'c-pieIcon c-pieIcon--policies'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.75 2.094H2.094V14.78h11.812V6.25A4.156 4.156 0 009.75 2.094zm2.756 3.5h-2.1v-2.1a2.826 2.826 0 012.1 2.1zm-9.1 7.875V3.406h5.688v3.5h3.5v6.563H3.406zM8 7.78H5.375V6.47H8V7.78zM5.375 9.094h5.25v1.312h-5.25V9.094z',
                fill: '#242E30'
            }
        })]);
    }
};
