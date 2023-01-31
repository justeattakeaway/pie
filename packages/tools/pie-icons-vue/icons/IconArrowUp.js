import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowUp',
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
            class: 'c-pieIcon c-pieIcon--arrowUp'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.65625 14.125V3.93126L11.9463 7.22126L12.8738 6.29376L8.77 2.19876C8.66915 2.09717 8.54919 2.01654 8.41704 1.96152C8.28488 1.9065 8.14315 1.87817 8 1.87817C7.85685 1.87817 7.71512 1.9065 7.58296 1.96152C7.45081 2.01654 7.33085 2.09717 7.23 2.19876L3.12625 6.29376L4.05375 7.22126L7.34375 3.93126V14.125H8.65625Z',
                fill: '#242E30'
            }
        })]);
    }
};
