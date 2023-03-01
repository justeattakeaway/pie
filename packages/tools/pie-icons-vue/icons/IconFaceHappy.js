import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFaceHappy',
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
            class: 'c-pieIcon c-pieIcon--faceHappy',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.219A6.781 6.781 0 1014.781 8 6.79 6.79 0 008 1.219zm0 12.25A5.469 5.469 0 118 2.53a5.469 5.469 0 010 10.938z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M5 6.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M9.5 6.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M11.125 9H9.751a1.846 1.846 0 01-3.377 0H5a3.168 3.168 0 006.125 0z',
                fill: '#242E30',
            },
        })]);
    },
};
