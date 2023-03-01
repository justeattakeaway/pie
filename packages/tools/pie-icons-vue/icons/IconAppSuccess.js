import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppSuccess',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--appSuccess',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.5 1.219h-7A1.54 1.54 0 002.969 2.75v10.5A1.54 1.54 0 004.5 14.781h7a1.54 1.54 0 001.531-1.531V2.75A1.54 1.54 0 0011.5 1.219zm.219 12.031a.219.219 0 01-.219.219h-7a.219.219 0 01-.219-.219V2.75a.219.219 0 01.219-.219h1.75l.429.954h2.668l.403-.954h1.75a.219.219 0 01.219.219v10.5zM9.75 5.786l.875.928L8 9.339a.656.656 0 01-.875 0L5.603 7.842l.927-.927 1.032 1.032 2.188-2.16z',
                fill: '#242E30',
            },
        })]);
    },
};
