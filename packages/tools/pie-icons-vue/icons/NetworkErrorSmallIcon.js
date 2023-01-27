import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'NetworkErrorSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--networkErrorSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.1888 2.0125H8.05003V7.4725L3.82378 0.4375H2.30128L5.36378 5.5475H1.81128V11.9875H5.95003V6.5275L8.05003 10.0275V11.9875H9.23128L10.1763 13.5625H11.6988L10.7625 11.9875H12.1888V2.0125ZM4.63753 10.7625H3.12378V6.825H4.63753V10.7625ZM10.8763 10.7625H10.0013L9.36253 9.625V3.29875H10.8763V10.7625Z'
            }
        })]);
    }
};
