import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckboxUnselectedLarge',
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
            class: 'c-pieIcon c-pieIcon--checkboxUnselectedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.75 27.375H7.25C5.80625 27.375 4.625 26.1938 4.625 24.75V7.25C4.625 5.80625 5.80625 4.625 7.25 4.625H24.75C26.1938 4.625 27.375 5.80625 27.375 7.25V24.75C27.375 26.1938 26.1938 27.375 24.75 27.375ZM7.25 6.375C6.76875 6.375 6.375 6.76875 6.375 7.25V24.75C6.375 25.2313 6.76875 25.625 7.25 25.625H24.75C25.2313 25.625 25.625 25.2313 25.625 24.75V7.25C25.625 6.76875 25.2313 6.375 24.75 6.375H7.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
