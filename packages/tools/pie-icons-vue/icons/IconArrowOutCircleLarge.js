import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowOutCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowOutCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.512 15.037a1.696 1.696 0 00-.227-.27l-5.04-5.04-1.234 1.233 4.165 4.165H9.875v1.75h16.301l-4.165 4.165 1.234 1.234 5.005-5.04a1.75 1.75 0 00.262-2.196z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M16 26.5a10.5 10.5 0 116.921-18.375h2.442a12.25 12.25 0 100 15.75H22.92A10.5 10.5 0 0116 26.5z',
                fill: '#242E30',
            },
        })]);
    },
};
