import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockFilled',
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
            class: 'c-pieIcon c-pieIcon--clockFilled',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm2.966 7.971l-.682 1.12-2.94-1.75V4.5h1.312v3.308l2.31 1.382z',
                fill: '#242E30',
            },
        })]);
    },
};
