import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRefreshLarge',
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
            class: 'c-pieIcon c-pieIcon--refreshLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.406 12.797h6.414a1.68 1.68 0 001.68-1.68V4.774h-1.75v5.433l-.333-.55-.052-.07a10.5 10.5 0 102.047 7.717l-1.75-.228a8.75 8.75 0 11-1.75-6.466l.263.438h-4.769v1.75z',
                fill: '#242E30',
            },
        })]);
    },
};
