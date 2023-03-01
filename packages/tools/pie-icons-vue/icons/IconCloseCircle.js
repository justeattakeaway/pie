import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloseCircle',
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
            class: 'c-pieIcon c-pieIcon--closeCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.87 6.058L8.928 8l1.942 1.943-.927.927L8 8.928 6.058 10.87l-.928-.927L7.072 8 5.13 6.058l.928-.928L8 7.072 9.943 5.13l.927.928zM14.781 8A6.782 6.782 0 118 1.219 6.79 6.79 0 0114.781 8zM13.47 8A5.469 5.469 0 102.53 8a5.469 5.469 0 0010.938 0z',
                fill: '#242E30'
            }
        })]);
    }
};
