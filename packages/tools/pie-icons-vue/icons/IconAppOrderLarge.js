import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppOrderLarge',
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
            class: 'c-pieIcon c-pieIcon--appOrderLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9 4.625h3.22l.56 1.418h4.69l.56-1.418h3.22a.875.875 0 01.875.875v1.75h1.75V5.5a2.625 2.625 0 00-2.625-2.625H9A2.625 2.625 0 006.375 5.5v21A2.625 2.625 0 009 29.125h1.75v-1.75H9a.875.875 0 01-.875-.875v-21A.875.875 0 019 4.625z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M18.205 21.25h4.34l1.33-1.251v-3.124h-1.75V19.5h-3.5v-2.625h-1.75v3.124l1.33 1.251z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M27.576 13.375h-3.701V10.75L22.204 9h-3.658l-1.671 1.75v2.625h-3.701L12.56 26.85a2.179 2.179 0 002.17 2.275H26.02a2.178 2.178 0 002.17-2.275l-.613-13.475zm-8.951-2.625h3.5v2.625h-3.5V10.75zm7.7 16.494a.418.418 0 01-.306.131H14.73a.42.42 0 01-.42-.446l.534-11.804h11.06l.534 11.804a.446.446 0 01-.114.315z',
                fill: '#242E30',
            },
        })]);
    },
};
