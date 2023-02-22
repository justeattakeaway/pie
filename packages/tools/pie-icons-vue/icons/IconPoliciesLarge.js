import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPoliciesLarge',
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
            class: 'c-pieIcon c-pieIcon--policiesLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.625 3.75h-14v25.375h22.75V12.5a8.749 8.749 0 00-8.75-8.75zm6.773 7h-5.023V5.728a7.044 7.044 0 015.023 5.022zm.227 16.625H6.375V5.5h12.25v7h7v14.875zm-10.5-14H10.75v-1.75h4.375v1.75zm-4.375 7h7v1.75h-7v-1.75zm0-4.375h10.5v1.75h-10.5V16z',
                fill: '#242E30'
            }
        })]);
    }
};
