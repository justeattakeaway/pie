import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleRightLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.979 26.124L24.46 16a.131.131 0 000-.096L13.961 5.84l1.225-1.216 10.5 10.063a1.907 1.907 0 010 2.624L15.178 27.376l-1.2-1.251z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.806 26.124L16.298 16a.131.131 0 000-.096L5.797 5.84l1.224-1.216 10.5 10.063a1.908 1.908 0 010 2.624L7.006 27.376l-1.199-1.251z',
                fill: '#242E30'
            }
        })]);
    }
};
