import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPauseCircle',
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
            class: 'c-pieIcon c-pieIcon--pauseCircle',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm0 12.25A5.469 5.469 0 118 2.53a5.469 5.469 0 010 10.938z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M7.344 5.813H6.03v4.375h1.313V5.811z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M9.969 5.813H8.656v4.375H9.97V5.811z',
                fill: '#242E30',
            },
        })]);
    },
};
