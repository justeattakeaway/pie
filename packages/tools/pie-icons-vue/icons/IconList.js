import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconList',
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
            class: 'c-pieIcon c-pieIcon--list'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.3125 11.9375C3.03737 11.9375 3.625 11.3499 3.625 10.625C3.625 9.90013 3.03737 9.3125 2.3125 9.3125C1.58763 9.3125 1 9.90013 1 10.625C1 11.3499 1.58763 11.9375 2.3125 11.9375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.125 4.71875H5.375V6.03125H13.7225L14.125 4.71875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M2.3125 6.6875C3.03737 6.6875 3.625 6.09987 3.625 5.375C3.625 4.65013 3.03737 4.0625 2.3125 4.0625C1.58763 4.0625 1 4.65013 1 5.375C1 6.09987 1.58763 6.6875 2.3125 6.6875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5062 9.96875H5.375V11.2812H12.1038L12.5062 9.96875Z',
                fill: '#242E30'
            }
        })]);
    }
};
