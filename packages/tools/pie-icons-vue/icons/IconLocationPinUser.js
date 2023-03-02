import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinUser',
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
            class: 'c-pieIcon c-pieIcon--locationPinUser',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 4.08a1.54 1.54 0 100 3.08 1.54 1.54 0 000-3.08z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                d: 'M11.658 3.187a5.136 5.136 0 00-7.315 0 5.25 5.25 0 000 7.377L8 14.265l3.658-3.701a5.25 5.25 0 000-7.377zm-2.46 8.164L8 12.56 5.375 9.934a2.012 2.012 0 011.47-.613h2.126a2.004 2.004 0 011.549.718L9.199 11.35zm2.118-2.257a3.238 3.238 0 00-2.345-.998H6.845a3.246 3.246 0 00-2.231.875A4.078 4.078 0 015.19 4.02a3.946 3.946 0 015.618 0 4.095 4.095 0 01.507 5.075z',
                fill: '#242E30',
            },
        })]);
    },
};
