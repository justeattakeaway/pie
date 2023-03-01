import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMopedLarge',
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
            class: 'c-pieIcon c-pieIcon--mopedLarge',
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_4_686)',
                fill: '#242E30',
            },
        }, [h('path', {
            attrs: {
                d: 'M12.5 9.875H2.875v1.75H12.5v-1.75z',
            },
        }), h('path', {
            attrs: {
                d: 'M28.723 20.777a4.375 4.375 0 00-3.5-1.233 4.377 4.377 0 00-.097-2.179l-3.5-11.742a2.625 2.625 0 00-2.555-1.873h-3.946L16 5.5h3.071a.875.875 0 01.875.621l3.5 11.751a2.626 2.626 0 01-.42 2.363 2.425 2.425 0 01-1.96 1.015H16.15l-1.637-5.889a2.625 2.625 0 00-2.537-1.986h-7.35A2.625 2.625 0 002 16v7h2.713a4.288 4.288 0 001.198 3.955 4.331 4.331 0 006.169 0A4.313 4.313 0 0013.287 23h8.06a4.374 4.374 0 107.375-2.205v-.018zm-17.877 4.944a2.625 2.625 0 01-3.701 0 2.555 2.555 0 01-.612-2.712h4.934a2.563 2.563 0 01-.62 2.712zM3.75 21.25V16a.875.875 0 01.875-.875h7.35a.875.875 0 01.875.674l1.479 5.451H3.75zm23.73 4.48a2.625 2.625 0 01-3.71-3.71 2.625 2.625 0 014.478 1.855c0 .696-.276 1.363-.768 1.855z',
            },
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_4_686',
            },
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: '#fff',
                transform: 'translate(2 2)',
            },
        })])])]);
    },
};
