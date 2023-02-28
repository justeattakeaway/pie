import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloudErrorLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--cloudErrorLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.019 14.731A10.045 10.045 0 006.2 13.375a6.309 6.309 0 00-3.938 5.863 6.387 6.387 0 006.388 6.387h15.487a5.609 5.609 0 005.6-5.6 5.68 5.68 0 00-3.718-5.294zm-1.881 9.144H8.65a4.646 4.646 0 01-4.638-4.637 4.585 4.585 0 013.247-4.375A4.137 4.137 0 018.65 14.6c.453 0 .904.065 1.339.193l.525-1.672a6.572 6.572 0 00-2.389-.254 8.304 8.304 0 0116.152 2.538v.691l.674.158a3.894 3.894 0 013.037 3.771 3.85 3.85 0 01-3.85 3.85zm-4.454-9.879l-2.45 2.441 2.45 2.442-1.243 1.242L16 17.671l-2.441 2.45-1.243-1.242 2.45-2.442-2.45-2.44 1.243-1.243L16 15.204l2.441-2.45 1.243 1.242z',
                fill: '#242E30'
            }
        })]);
    }
};
