import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationTargetLarge',
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
            class: 'c-pieIcon c-pieIcon--locationTargetLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.125 15.125h-3.5a9.625 9.625 0 00-8.75-8.706V2.875h-1.75v3.544a9.625 9.625 0 00-8.706 8.706H2.875v1.75h3.544a9.625 9.625 0 008.706 8.75v3.5h1.75v-3.5a9.625 9.625 0 008.75-8.75h3.5v-1.75zM16 23.875a7.875 7.875 0 110-15.75 7.875 7.875 0 010 15.75zm0-12.25a4.375 4.375 0 100 8.75 4.375 4.375 0 000-8.75zm0 7a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z',
                fill: '#242E30'
            }
        })]);
    }
};
