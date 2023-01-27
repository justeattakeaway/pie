import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CaretLeftFilledIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 28 28'
            },
            class: 'c-pieIcon c-pieIcon--caretLeftFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21 3.5C20.6889 3.50807 20.3861 3.60194 20.125 3.77125L6.12498 12.7312C5.88457 12.8825 5.68644 13.0923 5.54912 13.341C5.41181 13.5897 5.33978 13.8691 5.33978 14.1531C5.33978 14.4372 5.41181 14.7166 5.54912 14.9653C5.68644 15.2139 5.88457 15.4237 6.12498 15.575L20.125 24.2463C20.3871 24.4111 20.6903 24.499 21 24.5C21.4464 24.5 21.8746 24.3233 22.191 24.0085C22.5075 23.6937 22.6864 23.2664 22.6887 22.82V5.18C22.6864 4.73363 22.5075 4.30634 22.191 3.99153C21.8746 3.67671 21.4464 3.49999 21 3.5Z'
            }
        })]);
    }
};
