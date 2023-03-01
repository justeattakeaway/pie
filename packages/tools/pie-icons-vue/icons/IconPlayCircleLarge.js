import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--playCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 100 24.5 12.25 12.25 0 000-24.5zm0 22.75a10.5 10.5 0 110-21 10.5 10.5 0 010 21z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M21.425 14.766l-7.516-3.928a1.417 1.417 0 00-1.462-.088 1.46 1.46 0 00-.778 1.304v7.875a1.46 1.46 0 001.444 1.487c.274 0 .542-.083.77-.236l7.56-3.964A1.462 1.462 0 0022.124 16a1.479 1.479 0 00-.7-1.234zm-8.05 4.734v-7l6.659 3.5-6.659 3.5z',
                fill: '#242E30',
            },
        })]);
    },
};
