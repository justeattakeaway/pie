import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'CaretLeftFilledLargeIcon',
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
            class: 'c-pieIcon c-pieIcon--caretLeftFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23 5.5C22.6889 5.50807 22.3861 5.60194 22.125 5.77125L8.12498 14.7312C7.88457 14.8825 7.68644 15.0923 7.54912 15.341C7.41181 15.5897 7.33978 15.8691 7.33978 16.1531C7.33978 16.4372 7.41181 16.7166 7.54912 16.9653C7.68644 17.2139 7.88457 17.4237 8.12498 17.575L22.125 26.2463C22.3871 26.4111 22.6903 26.499 23 26.5C23.4464 26.5 23.8746 26.3233 24.191 26.0085C24.5075 25.6937 24.6864 25.2664 24.6887 24.82V7.18C24.6864 6.73363 24.5075 6.30634 24.191 5.99153C23.8746 5.67671 23.4464 5.49999 23 5.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
