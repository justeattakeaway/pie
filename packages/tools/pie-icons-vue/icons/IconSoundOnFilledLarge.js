import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOnFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--soundOnFilledLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.688 3.75h-2.39l-.253.245a49.875 49.875 0 01-4.016 3.439 48.477 48.477 0 01-4.961 3.316H6.813a2.625 2.625 0 00-2.625 2.625v5.25a2.625 2.625 0 002.625 2.625h3.255a47.09 47.09 0 014.96 3.316 48.293 48.293 0 014.008 3.439l.254.245h2.398V3.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M23.438 10.129v1.864a4.375 4.375 0 010 8.014v1.864a6.125 6.125 0 000-11.742z',
                fill: '#242E30',
            },
        })]);
    },
};
