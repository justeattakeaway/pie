import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'StarFilledIcon',
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
            class: 'c-pieIcon c-pieIcon--starFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.2876 14.4487L8.10507 12.2525C8.07288 12.2349 8.03677 12.2256 8.00007 12.2256C7.96337 12.2256 7.92726 12.2349 7.89507 12.2525L3.71257 14.4487L4.50007 9.79374C4.52535 9.73206 4.52535 9.66292 4.50007 9.60124L1.07007 6.30249L5.74257 5.61999C5.77715 5.61507 5.81014 5.60224 5.83897 5.58252C5.8678 5.56279 5.8917 5.53669 5.90882 5.50624L8.00007 1.27124L10.0913 5.50624C10.1084 5.53669 10.1323 5.56279 10.1612 5.58252C10.19 5.60224 10.223 5.61507 10.2576 5.61999L14.9301 6.30249L11.5438 9.60124C11.521 9.62742 11.5037 9.65802 11.4932 9.69113C11.4827 9.72425 11.4791 9.75917 11.4826 9.79374L12.2876 14.4487Z',
                fill: '#242E30'
            }
        })]);
    }
};
