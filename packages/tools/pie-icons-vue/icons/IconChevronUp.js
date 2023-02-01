import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronUp',
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
            class: 'c-pieIcon c-pieIcon--chevronUp'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.18 10.97L8.00001 5.615L2.82001 11.0138L1.85751 10.1388L7.20376 4.57376C7.31225 4.46183 7.44213 4.37283 7.58567 4.31206C7.72922 4.25129 7.88351 4.21997 8.03939 4.21997C8.19527 4.21997 8.34956 4.25129 8.4931 4.31206C8.63665 4.37283 8.76652 4.46183 8.87501 4.57376L14.125 10.0688L13.18 10.97Z',
                fill: '#242E30'
            }
        })]);
    }
};
