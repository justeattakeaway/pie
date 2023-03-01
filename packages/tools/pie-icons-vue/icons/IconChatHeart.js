import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatHeart',
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
            class: 'c-pieIcon c-pieIcon--chatHeart',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 9.75L5.926 7.589a1.347 1.347 0 010-1.838 1.199 1.199 0 01.875-.376c.329.002.644.134.875.367L8 6.058l.324-.307a1.225 1.225 0 011.75 0 1.365 1.365 0 010 1.846L8 9.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M3.538 14.781H2.094V4.5a1.54 1.54 0 011.531-1.531h8.75A1.54 1.54 0 0113.906 4.5v6.125a1.54 1.54 0 01-1.531 1.531H6.25a.254.254 0 00-.157.061l-2.555 2.564zm.087-10.5a.219.219 0 00-.219.219v8.557l1.75-1.75a1.522 1.522 0 011.094-.463h6.125a.219.219 0 00.219-.219V4.5a.219.219 0 00-.219-.219h-8.75z',
                fill: '#242E30',
            },
        })]);
    },
};
