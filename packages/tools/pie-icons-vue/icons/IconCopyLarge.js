import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCopyLarge',
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
            class: 'c-pieIcon c-pieIcon--copyLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.15 4.345L12.894 2.044a2.45 2.45 0 00-2.81 1.986l-.21 1.33h1.75l.176-1.033a.682.682 0 01.787-.55l13.265 2.292a.673.673 0 01.552.779L24.11 20.095v6.221a2.38 2.38 0 00.963-1.566l3.053-17.605a2.425 2.425 0 00-1.977-2.8z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M17.584 14.031h-8.75v1.75h8.75v-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M17.584 17.811h-8.75v1.75h8.75v-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M17.584 21.591h-8.75v1.75h8.75v-1.75z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M19.929 29.86H6.479a2.432 2.432 0 01-2.423-2.433V9.534A2.424 2.424 0 016.48 7.11h13.449a2.432 2.432 0 012.432 2.424v17.893a2.442 2.442 0 01-2.432 2.433zm-13.45-21a.674.674 0 00-.673.674v17.893a.682.682 0 00.674.683h13.449a.683.683 0 00.682-.683V9.534a.674.674 0 00-.682-.674H6.479z',
                fill: '#242E30',
            },
        })]);
    },
};
