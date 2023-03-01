import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialMicrosoftCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--microsoftCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25a12.25 12.25 0 110-24.5 12.25 12.25 0 010 24.5zM16 5.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M10 10h5.5v5.5H10V10z',
                fill: '#262626',
            },
        }), h('path', {
            attrs: {
                d: 'M10 16.5h5.5V22H10v-5.5z',
                fill: '#262626',
            },
        }), h('path', {
            attrs: {
                d: 'M16.5 10H22v5.5h-5.5V10z',
                fill: '#262626',
            },
        }), h('path', {
            attrs: {
                d: 'M16.5 16.5H22V22h-5.5v-5.5z',
                fill: '#262626',
            },
        })]);
    },
};
