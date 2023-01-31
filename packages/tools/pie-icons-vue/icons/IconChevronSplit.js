import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronSplit',
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
            class: 'c-pieIcon c-pieIcon--chevronSplit'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.3075 6.24998L8.00001 2.86373L4.69251 6.24998L3.79126 5.31373L7.29126 1.71748C7.4882 1.53671 7.7458 1.4364 8.01313 1.4364C8.28047 1.4364 8.53807 1.53671 8.73501 1.71748L12.2438 5.37498L11.3075 6.24998Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.69251 9.75002L8.00001 13.0488L11.3075 9.67126L12.2 10.59L8.70001 14.1863C8.50306 14.367 8.24546 14.4673 7.97813 14.4673C7.7108 14.4673 7.4532 14.367 7.25626 14.1863L3.75626 10.625L4.69251 9.75002Z',
                fill: '#242E30'
            }
        })]);
    }
};
