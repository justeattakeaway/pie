import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNote',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--note',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15 7.344H1v1.312h14V7.344z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M11.5 11.719H1v1.312h10.5V11.72z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M15 2.969H1V4.28h14V2.97z',
                fill: '#242E30',
            },
        })]);
    },
};
