import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOnFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--soundOnFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.5 1.21875L11.3075 1.4025C10.6887 2.00703 10.0342 2.57389 9.3475 3.1C8.57932 3.68835 7.77573 4.22895 6.94125 4.71875H4.5C4.0946 4.72105 3.70645 4.88311 3.41978 5.16978C3.13311 5.45645 2.97105 5.8446 2.96875 6.25V9.75C2.97105 10.1554 3.13311 10.5436 3.41978 10.8302C3.70645 11.1169 4.0946 11.279 4.5 11.2812H6.94125C7.77769 11.7679 8.58148 12.3086 9.3475 12.9C10.0414 13.4275 10.7046 13.9943 11.3338 14.5975L11.5262 14.7812H13.0312V1.21875H11.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
