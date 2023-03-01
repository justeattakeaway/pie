import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSyncLarge',
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
            class: 'c-pieIcon c-pieIcon--syncLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.762 4.056L18.1 5.72a10.403 10.403 0 015.32 2.852 10.499 10.499 0 010 14.875l-1.234-1.234A8.751 8.751 0 0018.205 7.54l1.557 1.557-1.242 1.243-3.141-3.142a.875.875 0 010-1.242l3.14-3.141 1.243 1.242zm-9.948 18.13a8.697 8.697 0 003.98 2.275l-1.557-1.557 1.243-1.243 3.141 3.141a.874.874 0 010 1.243l-3.141 3.141-1.243-1.242L13.9 26.28A10.5 10.5 0 018.57 8.571l1.243 1.243a8.75 8.75 0 000 12.372z',
                fill: '#242E30',
            },
        })]);
    },
};
