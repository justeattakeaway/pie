import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopHighlight',
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
            class: 'c-pieIcon c-pieIcon--laptopHighlight',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.031 9.094V4.5A1.54 1.54 0 0011.5 2.969h-7A1.54 1.54 0 002.969 4.5v4.594h-1.75V11.5a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531V9.094h-1.75zM4.281 4.5a.219.219 0 01.219-.219h7a.219.219 0 01.219.219v4.594H4.28V4.5zm9.188 7a.219.219 0 01-.219.219H2.75a.219.219 0 01-.219-.219v-1.094H13.47V11.5z',
                fill: '#242E30',
            },
        })]);
    },
};
