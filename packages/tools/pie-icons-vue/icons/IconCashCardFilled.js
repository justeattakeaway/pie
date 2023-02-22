import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashCardFilled',
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
            class: 'c-pieIcon c-pieIcon--cashCardFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.605 4.771v-.875a1.426 1.426 0 00-1.418-1.417H2.532a1.426 1.426 0 00-1.426 1.417v.875h10.5z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.284 6.749h8.321v-.665h-10.5V8.49a1.426 1.426 0 001.426 1.426h.753V6.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.596 8.061v5.793h10.08V8.06H4.596zm5.04 3.973a1.077 1.077 0 110-2.154 1.077 1.077 0 010 2.154z',
                fill: '#242E30'
            }
        })]);
    }
};
