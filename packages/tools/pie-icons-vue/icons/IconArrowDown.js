import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowDown',
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
            class: 'c-pieIcon c-pieIcon--arrowDown'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.24999 1V12.65L3.48999 8.89L2.42999 10L7.11999 14.68C7.23525 14.7961 7.37235 14.8883 7.52338 14.9511C7.67441 15.014 7.83639 15.0464 7.99999 15.0464C8.16359 15.0464 8.32557 15.014 8.47661 14.9511C8.62764 14.8883 8.76473 14.7961 8.87999 14.68L13.57 10L12.51 8.89L8.74999 12.65V1H7.24999Z',
                fill: '#242E30'
            }
        })]);
    }
};
