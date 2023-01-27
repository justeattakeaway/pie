import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NetworkErrorIcon',
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
            class: 'c-pieIcon c-pieIcon--networkError'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.1888 3.0125H9.05003V8.4725L4.82378 1.4375H3.30128L6.36378 6.5475H2.81128V12.9875H6.95003V7.5275L9.05003 11.0275V12.9875H10.2313L11.1763 14.5625H12.6988L11.7625 12.9875H13.1888V3.0125ZM5.63753 11.7625H4.12378V7.825H5.63753V11.7625ZM11.8763 11.7625H11.0013L10.3625 10.625V4.29875H11.8763V11.7625Z',
                fill: '#242E30'
            }
        })]);
    }
};
