import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGridViewFilled',
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
            class: 'c-pieIcon c-pieIcon--gridViewFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.09375 6.90625H6.90625V2.09375H2.09375V6.90625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.09375 6.90625H13.9062V2.09375H9.09375V6.90625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M2.09375 13.9062H6.90625V9.09375H2.09375V13.9062Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.09375 13.9062H13.9062V9.09375H9.09375V13.9062Z',
                fill: '#242E30'
            }
        })]);
    }
};
