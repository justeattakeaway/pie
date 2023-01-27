import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronDownIcon',
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
            class: 'c-pieIcon c-pieIcon--chevronDown'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.82 5.04375L8 10.3987L13.1975 5L14.16 5.875L8.79625 11.44C8.5784 11.6553 8.28444 11.7761 7.97813 11.7761C7.67181 11.7761 7.37785 11.6553 7.16 11.44L1.875 5.945L2.82 5.04375Z',
                fill: '#242E30'
            }
        })]);
    }
};
