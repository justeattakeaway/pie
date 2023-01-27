import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'ChevronUpSmallIcon',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 14 14'
            },
            class: 'c-pieIcon c-pieIcon--chevronUpSmall'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.18 9.97L7.00001 4.615L1.82001 10.0138L0.857513 9.13875L6.20376 3.57376C6.31225 3.46183 6.44213 3.37283 6.58567 3.31206C6.72922 3.25129 6.88351 3.21997 7.03939 3.21997C7.19527 3.21997 7.34956 3.25129 7.4931 3.31206C7.63665 3.37283 7.76652 3.46183 7.87501 3.57376L13.125 9.06875L12.18 9.97Z'
            }
        })]);
    }
};
