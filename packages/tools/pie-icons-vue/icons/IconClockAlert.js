import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockAlert',
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
            class: 'c-pieIcon c-pieIcon--clockAlert',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.012 10.905L7.064 9.137V5.095h1.312v3.299l2.31 1.391-.674 1.12z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M8 1.219a6.772 6.772 0 00-6.344 4.418l.438-.166a3.553 3.553 0 011.181-.21 5.469 5.469 0 112.17 7.569c0 .452-.155.89-.438 1.242A6.772 6.772 0 108 1.22z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M3.791 11.063l.429-4.376a2.669 2.669 0 00-.875-.13 2.625 2.625 0 00-.831.13l.42 4.375h.857z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M2.636 12.813a.753.753 0 10.753-.753.761.761 0 00-.753.752z',
                fill: '#242E30',
            },
        })]);
    },
};
