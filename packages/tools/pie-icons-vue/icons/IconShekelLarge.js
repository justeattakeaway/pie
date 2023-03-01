import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconShekelLarge',
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
            class: 'c-pieIcon c-pieIcon--shekelLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 22.75a10.5 10.5 0 110-21 10.5 10.5 0 010 21zm0-14h-4.375v7.875h-1.75V10.75H16a2.625 2.625 0 012.625 2.625v3.5h-1.75v-3.5A.875.875 0 0016 12.5zm4.375-1.75h1.75v9.625H16a2.625 2.625 0 01-2.625-2.625v-3.5h1.75v3.5a.875.875 0 00.875.875h4.375V10.75z',
                fill: '#242E30'
            }
        })]);
    }
};
