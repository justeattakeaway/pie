import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClose',
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
            class: 'c-pieIcon c-pieIcon--close'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.8676 3.20496L8.0001 7.07248L4.13258 3.20496L3.20508 4.13246L7.0726 7.99998L3.20508 11.8675L4.13258 12.795L8.0001 8.92748L11.8676 12.795L12.7951 11.8675L8.92761 7.99998L12.7951 4.13246L11.8676 3.20496Z',
                fill: '#242E30'
            }
        })]);
    }
};
