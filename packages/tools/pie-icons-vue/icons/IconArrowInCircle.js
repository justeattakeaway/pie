import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowInCircle',
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
            class: 'c-pieIcon c-pieIcon--arrowInCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.639 8.595h7.166l-1.899 1.907.928.928 2.712-2.713a1.11 1.11 0 000-1.548L7.834 4.5l-.928.875 1.899 1.907H1.639v1.313z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M7.851 1.157A6.799 6.799 0 001.367 5.97H2.75a5.469 5.469 0 110 3.937H1.376a6.773 6.773 0 106.475-8.75z',
                fill: '#242E30',
            },
        })]);
    },
};
