import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFoundationsLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--foundationsLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M4.625 27.375h10.509V16.866H4.625v10.509Zm1.75-8.759h7.009v7.009H6.375v-7.009Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M16.866 16.892v10.51h10.509v-10.51H16.866Zm8.759 8.76h-7.009v-7.01h7.009v7.01Z',
            },
        }), h('path', {
            attrs: {
                fill: '#242E30',
                d: 'M10.75 4.625v10.509h10.509V4.625H10.75Zm1.75 8.759V6.375h7.009v7.009H12.5Z',
            },
        })]);
    },
};
